import Link from 'next/link'

export default function FoundationCoursePage() {
  const weeks = [
    {
      week: 1,
      title: 'How the Industry Works',
      topics: ['Major vs indie labels', 'Label departments', 'How money flows'],
      videos: [
        { title: 'How major record labels work', url: 'https://www.youtube.com/results?search_query=how+major+record+labels+work+explained' },
        { title: 'Major vs indie labels', url: 'https://www.youtube.com/results?search_query=major+vs+indie+record+labels+differences' },
        { title: 'How artists get paid', url: 'https://www.youtube.com/results?search_query=how+do+artists+get+paid+streaming' }
      ]
    },
    {
      week: 2,
      title: 'Music Rights & Royalties',
      topics: ['Two copyrights', 'Master vs publishing', 'PRS, PPL, MCPS'],
      videos: [
        { title: 'Music royalties explained', url: 'https://www.youtube.com/results?search_query=music+royalties+explained+simply' },
        { title: 'Master vs publishing', url: 'https://www.youtube.com/results?search_query=master+vs+publishing+rights+explained' },
        { title: 'PRS explained', url: 'https://www.youtube.com/results?search_query=PRS+for+music+explained' }
      ]
    },
    {
      week: 3,
      title: 'Streaming & Distribution',
      topics: ['How Spotify works', 'Distribution companies', 'Streaming payments'],
      videos: [
        { title: 'How Spotify algorithm works', url: 'https://www.youtube.com/results?search_query=how+spotify+algorithm+works' },
        { title: 'Music distribution explained', url: 'https://www.youtube.com/results?search_query=music+distribution+explained+2024' },
        { title: 'Spotify for Artists', url: 'https://www.youtube.com/results?search_query=spotify+for+artists+tutorial' }
      ]
    },
    {
      week: 4,
      title: 'A&R Fundamentals',
      topics: ['What A&R does', 'Finding artists', 'Signing decisions'],
      videos: [
        { title: 'What does A&R do', url: 'https://www.youtube.com/results?search_query=what+does+A%26R+actually+do' },
        { title: 'How labels find artists', url: 'https://www.youtube.com/results?search_query=how+record+labels+find+artists' },
        { title: 'A&R interview', url: 'https://www.youtube.com/results?search_query=A%26R+interview+record+label' }
      ]
    },
    {
      week: 5,
      title: 'Music Marketing Basics',
      topics: ['Release campaigns', 'Social media strategy', 'Content creation'],
      videos: [
        { title: 'Music marketing explained', url: 'https://www.youtube.com/results?search_query=music+marketing+explained+2024' },
        { title: 'Release campaign timeline', url: 'https://www.youtube.com/results?search_query=music+release+campaign+timeline' },
        { title: 'TikTok music marketing', url: 'https://www.youtube.com/results?search_query=TikTok+music+marketing+strategy' }
      ]
    },
    {
      week: 6,
      title: 'Sync Licensing Intro',
      topics: ['What is sync', 'TV, film, ads', 'How sync deals work'],
      videos: [
        { title: 'Sync licensing explained', url: 'https://www.youtube.com/results?search_query=sync+licensing+explained+music' },
        { title: 'Music supervisor', url: 'https://www.youtube.com/results?search_query=music+supervisor+interview+how+they+pick+songs' },
        { title: 'Famous sync placements', url: 'https://www.youtube.com/results?search_query=famous+sync+placements+music+TV+film' }
      ]
    },
    {
      week: 7,
      title: 'Music Publishing',
      topics: ['Publisher role', 'Publishing deals', 'Songwriter royalties'],
      videos: [
        { title: 'Music publishing explained', url: 'https://www.youtube.com/results?search_query=music+publishing+explained+simply' },
        { title: 'Publishing deals', url: 'https://www.youtube.com/results?search_query=music+publishing+deal+types+explained' },
        { title: 'Songwriter royalties', url: 'https://www.youtube.com/results?search_query=how+songwriters+get+paid' }
      ]
    },
    {
      week: 8,
      title: 'Artist Management',
      topics: ['Manager role', 'Manager vs label', 'Building a team'],
      videos: [
        { title: 'What does a music manager do', url: 'https://www.youtube.com/results?search_query=what+does+music+manager+do' },
        { title: 'Manager vs label', url: 'https://www.youtube.com/results?search_query=music+manager+vs+record+label+difference' },
        { title: 'Artist management interview', url: 'https://www.youtube.com/results?search_query=artist+manager+interview+how+they+work' }
      ]
    },
    {
      week: 9,
      title: 'Live Music Business',
      topics: ['Touring economics', 'Booking agents', 'Festival industry'],
      videos: [
        { title: 'How touring works', url: 'https://www.youtube.com/results?search_query=how+music+touring+works+economics' },
        { title: 'Booking agent role', url: 'https://www.youtube.com/results?search_query=what+does+booking+agent+do+music' },
        { title: 'Festival business', url: 'https://www.youtube.com/results?search_query=music+festival+business+how+it+works' }
      ]
    },
    {
      week: 10,
      title: 'UK Music Industry',
      topics: ['UK scene history', 'Key UK labels', 'British music culture'],
      videos: [
        { title: 'UK music industry', url: 'https://www.youtube.com/results?search_query=UK+music+industry+explained' },
        { title: 'UK grime history', url: 'https://www.youtube.com/results?search_query=UK+grime+history+documentary' },
        { title: 'British music evolution', url: 'https://www.youtube.com/results?search_query=british+music+history+evolution' }
      ]
    },
    {
      week: 11,
      title: 'Getting Into the Industry',
      topics: ['Entry-level jobs', 'Networking', 'Building experience'],
      videos: [
        { title: 'Music industry jobs', url: 'https://www.youtube.com/results?search_query=music+industry+jobs+entry+level' },
        { title: 'How to get into music industry', url: 'https://www.youtube.com/results?search_query=how+to+get+job+music+industry+2024' },
        { title: 'Networking in music', url: 'https://www.youtube.com/results?search_query=networking+music+industry+tips' }
      ]
    },
    {
      week: 12,
      title: 'Your Career Pitch',
      topics: ['CV and cover letters', 'Interview prep', 'Your personal brand'],
      videos: [
        { title: 'Music industry interview', url: 'https://www.youtube.com/results?search_query=music+industry+interview+tips' },
        { title: 'Why music industry', url: 'https://www.youtube.com/results?search_query=why+do+you+want+work+music+industry' }
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
