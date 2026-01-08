import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Card } from './components/Card'
import { Container } from './components/Container'
import { ScrollToTopButton } from './components/ScrollToTopButton'
import { Section } from './components/Section'
import { Tag } from './components/Tag'
import { Badge } from './components/Badge'
import { buttonStyles } from './components/ButtonStyles'
import { Timeline, TimelineItem } from './components/Timeline'
import { ProjectGalleryModal } from './components/ProjectGalleryModal'
import { closingLine, experiences, profile, projects, skillGroups } from './data/resume'

function App() {
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [galleryTitle, setGalleryTitle] = useState('')
  const [gallerySlides, setGallerySlides] = useState<Array<{ src: string; alt: string }>>([])

  const openGallery = (title: string, slides?: Array<{ src: string; alt: string }>) => {
    setGalleryTitle(title)
    setGallerySlides(slides ?? [])
    setGalleryOpen(true)
  }

  return (
    <div className="min-h-dvh">
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 10%, rgba(37, 99, 235, 0.14), transparent 46%), radial-gradient(circle at 85% 0%, rgba(59, 130, 246, 0.12), transparent 38%), radial-gradient(circle at 50% 95%, rgba(2, 132, 199, 0.10), transparent 50%)',
        }}
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-70"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(24,24,27,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(24,24,27,0.06) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          maskImage:
            'radial-gradient(circle at 50% 0%, black 25%, transparent 70%)',
          WebkitMaskImage:
            'radial-gradient(circle at 50% 0%, black 25%, transparent 70%)',
        }}
      />

      <div id="top" />
      <Navbar />

      <main>
        <section className="py-14 sm:py-16">
          <Container>
            <div className="grid gap-8 md:items-start">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="default">FullStack</Badge>
                  <Badge>운영/장애 대응</Badge>
                  <Badge>성능 개선</Badge>
                  <Badge>배치 시스템</Badge>
                </div>

                <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[hsl(var(--foreground))] sm:text-5xl">
                  {profile.name}
                </h1>
                <p className="mt-4 text-base leading-relaxed text-[hsl(var(--muted-foreground))]">
                  {profile.headline}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <Card>
                    <p className="text-xs font-medium text-[hsl(var(--muted-foreground))]">경력</p>
                    <p className="mt-1 text-lg font-semibold text-[hsl(var(--foreground))]">
                      3년차 / 실서비스 운영 경험
                    </p>
                  </Card>
                  <Card>
                    <p className="text-xs font-medium text-[hsl(var(--muted-foreground))]">주력</p>
                    <p className="mt-1 text-lg font-semibold text-[hsl(var(--foreground))]">
                    백엔드 · 시스템 설계 · 운영 <br></br>
(Laravel / Spring / Node.js)<br></br>
Vue.js – 관리도구 및 연동 경험
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <Section id="about" title="소개" subtitle="운영 안정성과 성능을 중심으로 문제를 해결해왔습니다.">
          <div className="grid gap-4">
            <Card>
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-[hsl(var(--foreground))]">연락처</p>
                <Badge variant="outline">Open to contact</Badge>
              </div>
              <div className="mt-4 grid gap-3 text-sm">
                <div className="flex flex-wrap gap-2">
                  <span className="text-[hsl(var(--muted-foreground))]">휴대폰</span>
                  <span className="font-medium text-[hsl(var(--foreground))]">{profile.phone}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[hsl(var(--muted-foreground))]">생년월일</span>
                  <span className="font-medium text-[hsl(var(--foreground))]">{profile.birth}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[hsl(var(--muted-foreground))]">거주지</span>
                  <span className="font-medium text-[hsl(var(--foreground))]">{profile.location}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[hsl(var(--muted-foreground))]">Email</span>
                  <span className="font-medium text-[hsl(var(--foreground))]">
                    {profile.emails.join(' / ')}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[hsl(var(--muted-foreground))]">GitHub</span>
                  <a
                    className="break-all font-medium text-[hsl(var(--foreground))] underline decoration-zinc-300 underline-offset-4 hover:decoration-[hsl(var(--primary))]"
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {profile.github}
                  </a>
                </div>

                <div className="mt-2 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--muted))] p-4">
                  <p className="text-xs font-semibold text-[hsl(var(--foreground))]">요약</p>
                  <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                    운영 환경에서의 장애 대응과 성능 개선을 반복적으로 수행하며, 원인 분석과 재발 방지 구조 개선에
                    집중해왔습니다.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Section>

        <Section id="skills" title="핵심 기술" subtitle="실무 경험 기반의 스택과 관심 기술입니다.">
          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <Card key={group.label}>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-[hsl(var(--foreground))]">{group.label}</p>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="projects" title="프로젝트" subtitle="문제 분석 → 개선 → 효과 검증 중심으로 정리했습니다.">
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.name}>
                <div className="mb-3 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <Badge variant="default" className="px-4 py-2 text-sm font-semibold sm:text-base">
                      {project.name}
                    </Badge>
                    <p className="mt-2 text-xs text-[hsl(var(--muted-foreground))]">{project.period}</p>
                  </div>
                </div>

                <div className="h-px w-full bg-[hsl(var(--border))]" />

                <p className="mt-4 text-base font-medium leading-relaxed text-[hsl(var(--foreground))]">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                  {project.summary.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-[hsl(var(--primary))]/80" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                {project.myRole && project.myRole.length > 0 ? (
                  <div className="mt-4">
                    <p className="text-xs font-semibold text-[hsl(var(--foreground))]">내가 맡은 부분</p>
                    <ul className="mt-2 space-y-2 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                      {project.myRole.map((line) => (
                        <li key={line} className="flex gap-2">
                          <span className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-[hsl(var(--primary))]/80" />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {project.links && project.links.length > 0 ? (
                  <div className="mt-4 grid gap-3">
                    <div className="grid gap-1 text-sm">
                      {project.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="break-all font-medium text-[hsl(var(--foreground))] underline decoration-zinc-300 underline-offset-4 hover:decoration-[hsl(var(--primary))]"
                        >
                          {link.url}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : null}

                {/* 액션 버튼: GitHub/이미지를 같은 줄에 배치 */}
                {((project.links && project.links.length > 0) ||
                  (project.name !== 'Cocos' && project.gallery && project.gallery.length > 0)) ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.links?.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className={buttonStyles('outline')}
                      >
                        {link.label}
                      </a>
                    ))}
                    {project.name !== 'Cocos' && project.gallery && project.gallery.length > 0 ? (
                      <button
                        type="button"
                        onClick={() => openGallery(project.name, project.gallery)}
                        className={buttonStyles('outline')}
                      >
                        이미지
                      </button>
                    ) : null}
                  </div>
                ) : null}

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <ProjectGalleryModal
          open={galleryOpen}
          title={galleryTitle}
          slides={gallerySlides}
          onClose={() => setGalleryOpen(false)}
        />

        <Section id="career" title="경력" subtitle="업무 범위와 성과를 요약했습니다.">
          <div className="grid gap-4">
            <Timeline>
            {experiences.map((exp) => (
              <TimelineItem
                key={`${exp.company}-${exp.role}`}
                title={`${exp.company} — ${exp.role}`}
                subtitle={exp.duration}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="default">Experience</Badge>
                  {exp.techStack.slice(0, 2).map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>

                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                  {exp.summary.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-[hsl(var(--primary))]/80" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.techStack.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </TimelineItem>
            ))}
            </Timeline>
          </div>
        </Section>
{/* 
        <Section id="contact" title="연락처" subtitle="편하게 연락 주세요.">
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-[hsl(var(--foreground))]">기본 정보</p>
                <Badge variant="outline">info</Badge>
              </div>
              <div className="mt-3 grid gap-2 text-sm">
                <div className="flex flex-wrap gap-2">
                  <span className="text-[hsl(var(--muted-foreground))]">휴대폰</span>
                  <span className="font-medium text-[hsl(var(--foreground))]">{profile.phone}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[hsl(var(--muted-foreground))]">생년월일</span>
                  <span className="font-medium text-[hsl(var(--foreground))]">{profile.birth}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[hsl(var(--muted-foreground))]">거주지</span>
                  <span className="font-medium text-[hsl(var(--foreground))]">{profile.location}</span>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-[hsl(var(--foreground))]">Email</p>
                <Badge variant="outline">mailto</Badge>
              </div>
              <div className="mt-3 grid gap-2 text-sm">
                {profile.emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="font-medium text-[hsl(var(--foreground))] underline decoration-zinc-300 underline-offset-4 hover:decoration-[hsl(var(--primary))]"
                  >
                    {email}
                  </a>
                ))}
              </div>
            </Card>

            <Card>
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-[hsl(var(--foreground))]">GitHub</p>
                <Badge variant="outline">profile</Badge>
              </div>
              <p className="mt-3 text-sm text-[hsl(var(--muted-foreground))]">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="break-all font-medium text-[hsl(var(--foreground))] underline decoration-zinc-300 underline-offset-4 hover:decoration-[hsl(var(--primary))]"
                >
                  {profile.github}
                </a>
              </p>

              <div className="mt-4">
                <a href={profile.github} target="_blank" rel="noreferrer" className={buttonStyles('secondary')}>
                  레포지토리 보러가기
                </a>
              </div>
            </Card>
          </div>
        </Section> */}

        <footer className="border-t border-[hsl(var(--border))] py-10">
          <Container>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">{closingLine}</p>
                <p className="mt-3 text-xs text-[hsl(var(--muted-foreground))]">
                  © {new Date().getFullYear()} {profile.name}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <a href={`mailto:${profile.emails[0]}`} className={buttonStyles('outline')}>
                  Contact
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" className={buttonStyles('default')}>
                  GitHub
                </a>
              </div>
            </div>
          </Container>
        </footer>
      </main>

      <ScrollToTopButton />
    </div>
  )
}

export default App
