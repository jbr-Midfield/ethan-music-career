import Link from 'next/link'

export default function FoundationCoursePage() {
  const trustedChannels = [
    { name: 'Ari\'s Take (Ari Herstand)', url: 'https://www.youtube.com/@aristake', desc: 'Industry veteran - royalties, deals, labels, everything' },
    { name: 'Burstimo', url: 'https://www.youtube.com/@Burstimo', desc: 'Music business fundamentals, marketing, streaming' },
    { name: 'Damian Keyes', url: 'https://www.youtube.com/@DamianKeyes', desc: 'Music marketing, social media, artist advice' },
    { name: 'DIY Musician (CD Baby)', url: 'https://www.youtube.com/@diymusiciancdba', desc: 'Distribution, royalties, getting started' },
    { name: 'Andrew Southworth', url: 'https://www.youtube.com/@AndrewSouthworth', desc: 'Spotify, streaming analytics, music marketing' },
    { name: 'Symphonic Distribution', url: 'https://www.youtube.com/@SymphonicDistribution', desc: 'Distribution, sync, music business basics' }
  ]

  const weeks = [
    {
      week: 1,
      title: 'How the Industry Works',
      topics: ['Major vs indie labels', 'Label departments', 'How money flows'],
      videos: [
        { title: 'How Major Labels Work - Ari\'s Take', url: 'https://www.youtube.com/@aristake/search?query=major+label' },
        { title: 'Major vs Indie Labels - Burstimo', url: 'https://www.youtube.com/@Burstimo/search?query=major+indie+label' },
        { title: 'How Artists Get Paid - DIY Musician', url: 'https://www.youtube.com/@diymusiciancdba/search?query=get+paid+money' }
      ]
    },
    {
      week: 2,
      title: 'Music Rights & Royalties',
      topics: ['Two copyrights', 'Master vs publishing', 'PRS, PPL, MCPS'],
      videos: [
        { title: 'Music Royalties Explained - Ari\'s Take', url: 'https://www.youtube.com/@aristake/search?query=royalties' },
        { title: 'Master vs Publishing - Burstimo', url: 'https://www.youtube.com/@Burstimo/search?query=master+publishing' },
        { title: 'PRS Explained - DIY Musician', url: 'https://www.youtube.com/@diymusiciancdba/search?query=PRS+royalties' }
      ]
    },
    {
      week: 3,
      title: 'Streaming & Distribution',
      topics: ['How Spotify works', 'Distribution companies', 'Streaming payments'],
      videos: [
        { title: 'Spotify Algorithm - Andrew Southworth', url: 'https://www.youtube.com/@AndrewSouthworth/search?query=spotify+algorithm' },
        { title: 'Music Distribution - Symphonic', url: 'https://www.youtube.com/@SymphonicDistribution/search?query=distribution' },
        { title: 'Spotify for Artists - Burstimo', url: 'https://www.youtube.com/@Burstimo/search?query=spotify+artists' }
      ]
    },
    {
      week: 4,
      title: 'A&R Fundamentals',
      topics: ['What A&R does', 'Finding artists', 'Signing decisions'],
      videos: [
        { title: 'What Does A&R Do - Ari\'s Take', url: 'https://www.youtube.com/@aristake/search?query=A%26R' },
        { title: 'How Labels Find Artists', url: 'https://www.youtube.com/results?search_query=how+record+labels+find+artists+A%26R' },
        { title: 'A&R Explained - Burstimo', url: 'https://www.youtube.com/@Burstimo/search?query=A%26R' }
      ]
    },
    {
      week: 5,
      title: 'Music Marketing Basics',
      topics: ['Release campaigns', 'Social media strategy', 'Content creation'],
      videos: [
        { title: 'Music Marketing - Damian Keyes', url: 'https://www.youtube.com/@DamianKeyes/search?query=music+marketing' },
        { title: 'Release Campaign - Burstimo', url: 'https://www.youtube.com/@Burstimo/search?query=release+campaign' },
        { title: 'TikTok Music Marketing - Damian Keyes', url: 'https://www.youtube.com/@DamianKeyes/search?query=tiktok' }
      ]
    },
    {
      week: 6,
      title: 'Sync Licensing Intro',
      topics: ['What is sync', 'TV, film, ads', 'How sync deals work'],
      videos: [
        { title: 'Sync Licensing Explained - Ari\'s Take', url: 'https://www.youtube.com/@aristake/search?query=sync' },
        { title: 'Music Supervisor Interview', url: 'https://www.youtube.com/results?search_query=music+supervisor+interview+how+they+pick+songs' },
        { title: 'Sync Basics - Symphonic', url: 'https://www.youtube.com/@SymphonicDistribution/search?query=sync' }
      ]
    },
    {
      week: 7,
      title: 'Music Publishing',
      topics: ['Publisher role', 'Publishing deals', 'Songwriter royalties'],
      videos: [
        { title: 'Music Publishing Explained - Ari\'s Take', url: 'https://www.youtube.com/@aristake/search?query=publishing' },
        { title: 'Publishing Deals - Burstimo', url: 'https://www.youtube.com/@Burstimo/search?query=publishing+deal' },
        { title: 'How Songwriters Get Paid - DIY Musician', url: 'https://www.youtube.com/@diymusiciancdba/search?query=songwriter+paid' }
      ]
    },
    {
      week: 8,
      title: 'Artist Management',
      topics: ['Manager role', 'Manager vs label', 'Building a team'],
      videos: [
        { title: 'What Music Managers Do - Ari\'s Take', url: 'https://www.youtube.com/@aristake/search?query=manager' },
        { title: 'Manager vs Label - Burstimo', url: 'https://www.youtube.com/@Burstimo/search?query=manager+label' },
        { title: 'Artist Management Explained', url: 'https://www.youtube.com/results?search_query=artist+manager+interview+how+they+work' }
      ]
    },
    {
      week: 9,
      title: 'Live Music Business',
      topics: ['Touring economics', 'Booking agents', 'Festival industry'],
      videos: [
        { title: 'How Touring Works - Ari\'s Take', url: 'https://www.youtube.com/@aristake/search?query=touring+live' },
        { title: 'Booking Agent Role - Burstimo', url: 'https://www.youtube.com/@Burstimo/search?query=booking+agent' },
        { title: 'Festival Business Explained', url: 'https://www.youtube.com/results?search_query=music+festival+business+how+it+works' }
      ]
    },
    {
      week: 10,
      title: 'UK Music Industry',
      topics: ['UK scene history', 'Key UK labels', 'British music culture'],
      videos: [
        { title: 'UK Music Industry Overview', url: 'https://www.youtube.com/results?search_query=UK+music+industry+explained' },
        { title: 'UK Grime History', url: 'https://www.youtube.com/results?search_query=grime+history+documentary+UK' },
        { title: 'British Music Evolution', url: 'https://www.youtube.com/results?search_query=british+music+history+evolution+documentary' }
      ]
    },
    {
      week: 11,
      title: 'Getting Into the Industry',
      topics: ['Entry-level jobs', 'Networking', 'Building experience'],
      videos: [
        { title: 'Music Industry Jobs - Ari\'s Take', url: 'https://www.youtube.com/@aristake/search?query=job+career' },
        { title: 'Getting Into Music Industry - Burstimo', url: 'https://www.youtube.com/@Burstimo/search?query=job+career' },
        { title: 'Networking Tips', url: 'https://www.youtube.com/results?search_query=networking+music+industry+tips+how+to' }
      ]
    },
    {
      week: 12,
      title: 'Your Career Pitch',
      topics: ['CV and cover letters', 'Interview prep', 'Your personal brand'],
      videos: [
        { title: 'Music Industry Interview Tips - Ari\'s Take', url: 'https://www.youtube.com/@aristake/search?query=interview' },
        { title: 'Why Music Industry Answer', url: 'https://www.youtube.com/results?search_query=why+do+you+want+work+music+industry+interview' }
      ]
    }
  ]

  return (
    <main>
      <div className="container">
        <Link href="/" className="back-link">Home</Link>

        <h1>Music Industry Foundation Course</h1>
        <p>12 weeks covering everything you need to know. All video links are clickable - no reading required.</p>

        <div className="card">
          <h2>Trusted YouTube Channels</h2>
          <p>These are the experts. Subscribe to all of them:</p>
          <div className="company-list">
            {trustedChannels.map((channel, i) => (
              <div key={i} className="company-item">
                <a href={channel.url} target="_blank" rel="noopener">{channel.name}</a>
                <span style={{ color: 'var(--text-secondary)', marginLeft: '0.5rem' }}>- {channel.desc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2>Core Audiobooks</h2>
          <p>Listen during commutes:</p>
          <ul>
            <li><a href="https://www.audible.com/pd/All-You-Need-to-Know-About-the-Music-Business-11th-Edition-Audiobook/B0BZG33413" target="_blank" rel="noopener">All You Need to Know About the Music Business</a> (22.5 hrs)</li>
            <li><a href="https://www.audible.com/pd/How-Music-Got-Free-Audiobook/B00UJXKPDU" target="_blank" rel="noopener">How Music Got Free</a> (9.25 hrs)</li>
          </ul>
        </div>

        <div className="card">
          <h2>Key Podcasts</h2>
          <ul>
            <li><a href="https://open.spotify.com/show/5y9jhXp42uqtgTq0FG2OFd" target="_blank" rel="noopener">The New Music Business</a></li>
            <li><a href="https://open.spotify.com/show/26gzyiPD2ix1VaO1fHDKCk" target="_blank" rel="noopener">And The Writer Is</a></li>
          </ul>
        </div>

        {weeks.map((w) => (
          <div key={w.week} className="week-card">
            <h3>Week {w.week}: {w.title}</h3>
            <p><strong>Topics:</strong> {w.topics.join(', ')}</p>

            <h4>Videos to Watch</h4>
            <ul>
              {w.videos.map((v, i) => (
                <li key={i}><a href={v.url} target="_blank" rel="noopener">{v.title}</a></li>
              ))}
            </ul>

            <p><strong>Voice Memo:</strong> After watching, record yourself explaining the key concepts in your own words.</p>
          </div>
        ))}

        <Link href="/" className="back-link">Back to Home</Link>
      </div>
    </main>
  )
}
