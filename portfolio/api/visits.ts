import { createHash } from 'crypto'

import { Redis } from '@upstash/redis'

type Json = Record<string, unknown>

function json(res: any, status: number, body: Json) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Cache-Control', 'no-store')
  res.end(JSON.stringify(body))
}

function getClientIp(req: any): string | null {
  const xff = req?.headers?.['x-forwarded-for']
  if (typeof xff === 'string' && xff.trim().length > 0) {
    // "client, proxy1, proxy2"
    return xff.split(',')[0]!.trim()
  }
  const xri = req?.headers?.['x-real-ip']
  if (typeof xri === 'string' && xri.trim().length > 0) return xri.trim()
  const ip = req?.socket?.remoteAddress
  if (typeof ip === 'string' && ip.trim().length > 0) return ip.trim()
  return null
}

function sha256(text: string) {
  return createHash('sha256').update(text).digest('hex')
}

function ymdUTC(d = new Date()) {
  const y = d.getUTCFullYear()
  const m = String(d.getUTCMonth() + 1).padStart(2, '0')
  const day = String(d.getUTCDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

const EXCLUDE_IPS = new Set(['111.118.24.97'])

export default async function handler(req: any, res: any) {
  if (req?.method !== 'GET' && req?.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST')
    return json(res, 405, { error: 'Method Not Allowed' })
  }

  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return json(res, 500, { error: 'Missing Upstash env vars' })

  const redis = new Redis({ url, token })

  const ip = getClientIp(req)
  const today = ymdUTC()
  const key = `visits:${today}`

  // Keep only a short window; we only care about "today"
  // 2 days to avoid edge cases around timezone / cache / late writes.
  const ttlSeconds = 60 * 60 * 24 * 2

  if (ip && !EXCLUDE_IPS.has(ip)) {
    const hashed = sha256(ip)
    // SADD is idempotent per day
    await redis.sadd(key, hashed)
    // Ensure expiry is set; calling repeatedly is fine
    await redis.expire(key, ttlSeconds)
  }

  const visits = await redis.scard<number>(key)
  return json(res, 200, { visits })
}

