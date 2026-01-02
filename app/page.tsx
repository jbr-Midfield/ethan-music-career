import Link from 'next/link'

export default function Home() {
  const resources = [
    {
      href: '/cv',
      title: 'Your CV',
      description: 'Your personalised CV ready for applications'
    },
    {
      href: '/companies',
      title: 'Record Companies',
      description: '150+ music companies with direct career page links'
    },
    {
      href: '/job-titles',
      title: 'Job Titles Guide',
      description: '9 role categories with what you need to know for each'
    },
    {
      href: '/course-foundation',
      title: 'Music Industry Foundation',
      description: '12-week course covering the fundamentals'
    },
    {
      href: '/course-sync',
      title: 'Sync Specialist Course',
      description: '12-week advanced sync licensing programme'
    },
    {
      href: '/course-marketing',
      title: 'Marketing Specialist Course',
      description: '12-week digital marketing deep dive'
    },
    {
      href: '/course-ar',
      title: 'A&R Foundations Course',
      description: '12-week artist discovery and development programme'
    },
    {
      href: '/course-publishing',
      title: 'Publishing & Royalties Course',
      description: '12-week music publishing masterclass'
    },
    {
      href: '/interview-questions',
      title: 'Interview Questions',
      description: '90 questions with what they really want to hear'
    },
    {
      href: '/artist-rosters',
      title: 'Label Artist Rosters',
      description: 'Top artists at each label with Spotify links'
    }
  ]

  return (
    <main>
      <header className="header">
        <div className="container">
          <h1>Hey Ethan</h1>
          <p>Your personalised music industry career toolkit. Everything here is designed to be easy to use on your phone.</p>
        </div>
      </header>

      <div className="container">
        <section className="section">
          <h2>Your Resources</h2>
          <p>Tap any card to explore. All courses include audio and video - no reading walls of text.</p>

          <div className="resource-grid">
            {resources.map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="resource-card"
              >
                <h2>{resource.title}</h2>
                <p>{resource.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="section card">
          <h2>Quick Tip</h2>
          <p>Start with the <strong>Job Titles Guide</strong> to figure out which roles interest you most. Then check which courses match those roles.</p>
        </section>
      </div>
    </main>
  )
}
