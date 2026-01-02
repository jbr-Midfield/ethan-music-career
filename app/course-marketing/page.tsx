import Link from 'next/link'

export default function MarketingCoursePage() {
  const weeks = [
    {
      week: 1,
      title: 'Music Marketing Overview',
      topics: ['What label marketing does', 'Release campaigns', 'Marketing calendar'],
      videos: [
        { title: 'Music marketing explained', url: 'https://www.youtube.com/results?search_query=music+marketing+explained+record+label' },
        { title: 'Release campaign timeline', url: 'https://www.youtube.com/results?search_query=music+release+campaign+timeline+strategy' },
        { title: 'Label marketing team', url: 'https://www.youtube.com/results?search_query=record+label+marketing+team+what+they+do' }
      ]
    },
    {
      week: 2,
      title: 'Spotify Deep Dive',
      topics: ['Spotify algorithm', 'Playlist ecosystem', 'Spotify for Artists'],
      videos: [
        { title: 'Spotify algorithm 2024', url: 'https://www.youtube.com/results?search_query=spotify+algorithm+how+it+works+2024' },
        { title: 'Editorial vs algorithmic playlists', url: 'https://www.youtube.com/results?search_query=editorial+vs+algorithmic+playlists+spotify' },
        { title: 'Spotify pitching', url: 'https://www.youtube.com/results?search_query=how+to+pitch+spotify+playlist+editors' }
      ]
    },
    {
      week: 3,
      title: 'TikTok Marketing',
      topics: ['TikTok music strategy', 'Content that works', 'Going viral'],
      videos: [
        { title: 'TikTok music marketing', url: 'https://www.youtube.com/results?search_query=TikTok+music+marketing+strategy+2024' },
        { title: 'Songs that blew up on TikTok', url: 'https://www.youtube.com/results?search_query=songs+that+blew+up+on+TikTok+how' },
        { title: 'TikTok influencer campaigns', url: 'https://www.youtube.com/results?search_query=TikTok+influencer+music+campaign' }
      ]
    },
    {
      week: 4,
      title: 'Instagram & YouTube',
      topics: ['Instagram Reels', 'YouTube Shorts', 'Long-form vs short-form'],
      videos: [
        { title: 'Instagram music marketing', url: 'https://www.youtube.com/results?search_query=instagram+music+marketing+2024' },
        { title: 'YouTube Shorts strategy', url: 'https://www.youtube.com/results?search_query=youtube+shorts+music+promotion' },
        { title: 'Cross-platform strategy', url: 'https://www.youtube.com/results?search_query=cross+platform+social+media+music+marketing' }
      ]
    },
    {
      week: 5,
      title: 'Paid Advertising',
      topics: ['Meta ads', 'TikTok ads', 'Budget allocation'],
      videos: [
        { title: 'Music Facebook ads', url: 'https://www.youtube.com/results?search_query=facebook+ads+music+promotion+2024' },
        { title: 'TikTok spark ads', url: 'https://www.youtube.com/results?search_query=TikTok+spark+ads+music+promotion' },
        { title: 'Ad budget for musicians', url: 'https://www.youtube.com/results?search_query=advertising+budget+musicians+how+much' }
      ]
    },
    {
      week: 6,
      title: 'Data & Analytics',
      topics: ['Key metrics', 'Chartmetric basics', 'Reading data'],
      videos: [
        { title: 'Music analytics explained', url: 'https://www.youtube.com/results?search_query=music+analytics+explained+metrics' },
        { title: 'Chartmetric tutorial', url: 'https://www.youtube.com/results?search_query=chartmetric+tutorial+how+to+use' },
        { title: 'Spotify analytics', url: 'https://www.youtube.com/results?search_query=spotify+for+artists+analytics+explained' }
      ]
    },
    {
      week: 7,
      title: 'Press & PR',
      topics: ['Press campaigns', 'Music blogs', 'Press releases'],
      videos: [
        { title: 'Music PR explained', url: 'https://www.youtube.com/results?search_query=music+PR+how+it+works+press+campaign' },
        { title: 'Music blogs 2024', url: 'https://www.youtube.com/results?search_query=music+blogs+still+relevant+2024' },
        { title: 'Press release tips', url: 'https://www.youtube.com/results?search_query=music+press+release+how+to+write' }
      ]
    },
    {
      week: 8,
      title: 'Campaign Case Studies',
      topics: ['Successful campaigns', 'What worked', 'Lessons learned'],
      videos: [
        { title: 'Olivia Rodrigo campaign', url: 'https://www.youtube.com/results?search_query=olivia+rodrigo+drivers+license+marketing+campaign' },
        { title: 'Central Cee rise', url: 'https://www.youtube.com/results?search_query=central+cee+marketing+rise+to+fame' },
        { title: 'Raye campaign', url: 'https://www.youtube.com/results?search_query=raye+escape+from+bmlg+campaign' }
      ]
    },
    {
      week: 9,
      title: 'International Marketing',
      topics: ['Global campaigns', 'Territory strategy', 'Local vs global'],
      videos: [
        { title: 'International music marketing', url: 'https://www.youtube.com/results?search_query=international+music+marketing+strategy' },
        { title: 'Breaking artists globally', url: 'https://www.youtube.com/results?search_query=breaking+artists+globally+strategy' },
        { title: 'Local market strategy', url: 'https://www.youtube.com/results?search_query=local+market+music+marketing+territory' }
      ]
    },
    {
      week: 10,
      title: 'Content Strategy',
      topics: ['Content pillars', 'Content calendars', 'Working with artists'],
      videos: [
        { title: 'Music content strategy', url: 'https://www.youtube.com/results?search_query=music+content+strategy+social+media' },
        { title: 'Content calendar', url: 'https://www.youtube.com/results?search_query=social+media+content+calendar+music' },
        { title: 'Working with artists on content', url: 'https://www.youtube.com/results?search_query=helping+artists+create+content' }
      ]
    },
    {
      week: 11,
      title: 'Marketing Career Path',
      topics: ['Jobs in music marketing', 'Skills needed', 'Building portfolio'],
      videos: [
        { title: 'Music marketing jobs', url: 'https://www.youtube.com/results?search_query=music+marketing+jobs+entry+level' },
        { title: 'Music marketing career', url: 'https://www.youtube.com/results?search_query=music+marketing+career+path' },
        { title: 'Marketing portfolio', url: 'https://www.youtube.com/results?search_query=marketing+portfolio+music+industry' }
      ]
    },
    {
      week: 12,
      title: 'Your Marketing Pitch',
      topics: ['Connecting your UMG experience', 'Marketing knowledge', 'Interview prep'],
      assignment: 'Record a 5-minute pitch: Your marketing philosophy, what you learned at UMG, and analyse a campaign you admire'
    }
  ]

  return (
    <main>
      <div className="container">
        <Link href="/" className="back-link">Home</Link>

        <h1>Marketing Specialist Course</h1>
        <p>12 weeks building on your UMG Marketing experience. All video links are clickable.</p>

        <div className="card">
          <h2>Why This Course?</h2>
          <p>You worked in Marketing AND International Marketing at UMG. This course goes deeper on the platforms and strategies modern labels use.</p>
        </div>

        {weeks.map((w) => (
          <div key={w.week} className="week-card">
            <h3>Week {w.week}: {w.title}</h3>
            <p><strong>Topics:</strong> {w.topics.join(', ')}</p>

            {w.videos && (
              <>
                <h4>Videos to Watch</h4>
                <ul>
                  {w.videos.map((v, i) => (
                    <li key={i}><a href={v.url} target="_blank" rel="noopener">{v.title}</a></li>
                  ))}
                </ul>
              </>
            )}

            {w.assignment && (
              <p style={{ marginTop: '1rem', background: '#f8f9fa', padding: '1rem', borderRadius: '8px' }}>
                <strong>Final Assignment:</strong> {w.assignment}
              </p>
            )}

            {!w.assignment && (
              <p><strong>Voice Memo:</strong> After watching, explain the key concepts in your own words.</p>
            )}
          </div>
        ))}

        <div className="card">
          <h2>Interview Questions You Can Now Answer</h2>
          <ol>
            <li>"Walk me through a release campaign timeline"</li>
            <li>"How does the Spotify algorithm work?"</li>
            <li>"How would you market an artist on TikTok?"</li>
            <li>"Tell me about a marketing campaign you admire"</li>
            <li>"How would you allocate a £10k budget?"</li>
            <li>"What metrics do you track?"</li>
            <li>"Tell me about your UMG Marketing experience"</li>
            <li>"An artist doesn't want to do TikTok - how do you handle that?"</li>
          </ol>
        </div>

        <Link href="/" className="back-link">Back to Home</Link>
      </div>
    </main>
  )
}
