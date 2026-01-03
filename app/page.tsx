import Link from 'next/link'

export default function Home() {
  const resources = [
    {
      href: '/cv',
      title: 'Your CV',
      description: 'Ready to drop into applications',
      icon: '📄'
    },
    {
      href: '/progress',
      title: 'Learning Progress',
      description: 'Track your 297 videos across 5 courses',
      icon: '✅'
    },
    {
      href: '/companies',
      title: 'Record Labels & Publishers',
      description: '150+ companies with career page links',
      icon: '🏢'
    },
    {
      href: '/job-titles',
      title: 'Industry Roles',
      description: '9 role categories explained',
      icon: '💼'
    },
    {
      href: '/course-foundation',
      title: 'Industry Foundations',
      description: '12-week fundamentals course',
      icon: '🎓'
    },
    {
      href: '/course-sync',
      title: 'Sync Licensing',
      description: '12-week sync specialist programme',
      icon: '🎬'
    },
    {
      href: '/course-marketing',
      title: 'Music Marketing',
      description: '12-week digital marketing deep dive',
      icon: '📱'
    },
    {
      href: '/course-ar',
      title: 'A&R Foundations',
      description: '12-week artist development course',
      icon: '🎤'
    },
    {
      href: '/course-publishing',
      title: 'Publishing & Royalties',
      description: '12-week publishing masterclass',
      icon: '💰'
    },
    {
      href: '/interview-questions',
      title: 'Interview Prep',
      description: '90 questions with winning answers',
      icon: '🎯'
    },
    {
      href: '/artist-rosters',
      title: 'Label Rosters',
      description: 'Who\'s signed where + Spotify links',
      icon: '🎵'
    }
  ]

  return (
    <main>
      <header className="header">
        <div className="container">
          <h1>What's good, Ethan</h1>
          <p>Your music industry toolkit. Everything you need to break in.</p>
        </div>
      </header>

      <div className="container">
        <section className="section">
          <div className="resource-grid">
            {resources.map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="resource-card"
              >
                <span className="card-icon">{resource.icon}</span>
                <h2>{resource.title}</h2>
                <p>{resource.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="section card tip-card">
          <h2>Quick Start</h2>
          <p>Not sure where to begin? Hit up the <strong>Industry Roles</strong> guide first to figure out what roles match your vibe. Then check which courses fit.</p>
        </section>
      </div>
    </main>
  )
}
