## Upstash + Vercel 환경변수 설정

Vercel 배포에서 `/api/visits`가 `Missing Upstash env vars`로 500이 뜨면,
Vercel 프로젝트에 Upstash Redis REST 환경변수가 설정되지 않은 상태입니다.

### 1) Upstash에서 Redis 생성
- Upstash 콘솔에서 Redis DB 생성
- REST API가 활성화된 상태에서 아래 값을 확인
  - `UPSTASH_REDIS_REST_URL`
  - `UPSTASH_REDIS_REST_TOKEN`

### 2) Vercel에 환경변수 추가
Vercel Dashboard → 해당 프로젝트 → **Settings** → **Environment Variables**

- Key: `UPSTASH_REDIS_REST_URL`
- Value: (Upstash에서 복사한 REST URL)
- Environment: **Production / Preview / Development** (가능하면 모두 체크)

- Key: `UPSTASH_REDIS_REST_TOKEN`
- Value: (Upstash에서 복사한 REST TOKEN)
- Environment: **Production / Preview / Development**

저장 후, Deployments에서 **Redeploy**(또는 새 커밋 푸시)하면 반영됩니다.

### 3) 동작 확인
- 브라우저에서 `https://<your-domain>/api/visits` 호출 시
  - `{ "visits": <number> }` 형태로 200이 떨어지면 정상입니다.

