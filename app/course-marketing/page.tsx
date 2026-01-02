import Link from 'next/link'

export default function MarketingCoursePage() {
  const trustedChannels = [
    { name: 'Damian Keyes', url: 'https://www.youtube.com/@DamianKeyes', desc: 'Music marketing strategies, TikTok, social media' },
    { name: 'Burstimo', url: 'https://www.youtube.com/@Burstimo', desc: 'Music marketing, Spotify strategies, release campaigns' },
    { name: 'Andrew Southworth', url: 'https://www.youtube.com/@AndrewSouthworth', desc: 'Spotify algorithm, playlist strategies' },
    { name: 'Ari\'s Take (Ari Herstand)', url: 'https://www.youtube.com/@aristake', desc: 'Industry veteran, marketing fundamentals' },
    { name: 'Two Story Melody', url: 'https://www.youtube.com/@TwoStoryMelody', desc: 'Playlisting, Spotify marketing' },
    { name: 'DIY Musician (CD Baby)', url: 'https://www.youtube.com/@diymusiciancdba', desc: 'Release strategies, marketing basics' }
  ]

  const weeks = [
    {
      week: 1,
      title: 'Music Marketing Overview',
      topics: ['What label marketing does', 'Release campaigns', 'Marketing calendar'],
      videos: [
        { title: 'Music Marketing Explained - Burstimo', url: 'https://www.youtube.com/@Burstimo/search?query=music+marketing+explained' },
        { title: 'Release Campaign Strategy - Damian Keyes', url: 'https://www.youtube.com/@DamianKeyes/search?query=release+campaign' },
        { title: 'Label Marketing Team - Ari\'s Take', url: 'https://www.youtube.com/@aristake/search?query=record+label+marketing' }
      ]
    },
    {
      week: 2,
      title: 'Spotify Deep Dive',
      topics: ['Spotify algorithm', 'Playlist ecosystem', 'Spotify for Artists'],
      videos: [
        { title: 'Spotify Algorithm 2024 - Andrew Southworth', url: 'https://www.youtube.com/@AndrewSouthworth/search?query=spotify+algorithm' },
        { title: 'Editorial vs Algorithmic Playlists - Two Story Melody', url: 'https://www.youtube.com/@TwoStoryMelody/search?query=playlist' },
        { title: 'Spotify Pitching - Burstimo', url: 'https://www.youtube.com/@Burstimo/search?query=spotify+pitch' }
      ]
    },
    {
      week: 3,
      title: 'TikTok Marketing',
      topics: ['TikTok music strategy', 'Content that works', 'Going viral'],
      videos: [
        { title: 'TikTok Music Marketing - Damian Keyes', url: 'https://www.youtube.com/@DamianKeyes/search?query=tiktok+music' },
        { title: 'Songs That Blew Up on TikTok - Burstimo', url: 'https://www.youtube.com/@Burstimo/search?query=tiktok+viral' },
        { title: 'TikTok Strategy 2024 - Ari\'s Take', url: 'https://www.youtube.com/@aristake/search?query=tiktok' }
      ]
    },
    {
      week: 4,
      title: 'Instagram & YouTube',
      topics: ['Instagram Reels', 'YouTube Shorts', 'Long-form vs short-form'],
      videos: [
        { title: 'Instagram for Musicians - Damian Keyes', url: 'https://www.youtube.com/@DamianKeyes/search?query=instagram' },
        { title: 'YouTube Shorts Strategy - Andrew Southworth', url: 'https://www.youtube.com/@AndrewSouthworth/search?query=youtube+shorts' },
        { title: 'Cross-Platform Strategy - Burstimo', url: 'https://www.youtube.com/@Burstimo/search?query=social+media+strategy' }
      ]
    },
    {
      week: 5,
      title: 'Paid Advertising',
      topics: ['Meta ads', 'TikTok ads', 'Budget allocation'],
      videos: [
        { title: 'Facebook/Instagram Ads for Music - Andrew Southworth', url: 'https://www.youtube.com/@AndrewSouthworth/search?query=facebook+ads' },
        { title: 'TikTok Spark Ads - Damian Keyes', url: 'https://www.youtube.com/@DamianKeyes/search?query=tiktok+ads' },
        { title: 'Ad Budget Strategy - Burstimo', url: 'https://www.youtube.com/@Burstimo/search?query=advertising+budget' }
      ]
    },
    {
      week: 6,
      title: 'Data & Analytics',
      topics: ['Key metrics', 'Chartmetric basics', 'Reading data'],
      videos: [
        { title: 'Music Analytics Explained - Andrew Southworth', url: 'https://www.youtube.com/@AndrewSouthworth/search?query=analytics' },
        { title: 'Chartmetric Tutorial', url: 'https://www.youtube.com/results?search_query=chartmetric+tutorial+how+to+use+music' },
        { title: 'Spotify for Artists Analytics - Burstimo', url: 'https://www.youtube.com/@Burstimo/search?query=spotify+analytics' }
      ]
    },
    {
      week: 7,
      title: 'Press & PR',
      topics: ['Press campaigns', 'Music blogs', 'Press releases'],
      videos: [
        { title: 'Music PR Explained - Ari\'s Take', url: 'https://www.youtube.com/@aristake/search?query=PR+press' },
        { title: 'Getting Press Coverage - DIY Musician', url: 'https://www.youtube.com/@diymusiciancdba/search?query=press+PR' },
        { title: 'Music Blogs 2024 - Burstimo', url: 'https://www.youtube.com/@Burstimo/search?query=blog+press' }
      ]
    },
    {
      week: 8,
      title: 'Campaign Case Studies',
      topics: ['Successful campaigns', 'What worked', 'Lessons learned'],
      videos: [
        { title: 'Olivia Rodrigo Marketing Analysis', url: 'https://www.youtube.com/results?search_query=olivia+rodrigo+drivers+license+marketing+campaign+strategy' },
        { title: 'How Central Cee Blew Up', url: 'https://www.youtube.com/results?search_query=central+cee+marketing+strategy+how+he+blew+up' },
        { title: 'Raye\'s Independent Success', url: 'https://www.youtube.com/results?search_query=raye+bmlg+independent+success+marketing' }
      ]
    },
    {
      week: 9,
      title: 'International Marketing',
      topics: ['Global campaigns', 'Territory strategy', 'Local vs global'],
      videos: [
        { title: 'International Music Marketing - Ari\'s Take', url: 'https://www.youtube.com/@aristake/search?query=international+global' },
        { title: 'Breaking Artists Globally', url: 'https://www.youtube.com/results?search_query=breaking+artists+globally+strategy+international' },
        { title: 'Territory Marketing Strategy', url: 'https://www.youtube.com/results?search_query=music+marketing+territory+strategy+international' }
      ]
    },
    {
      week: 10,
      title: 'Content Strategy',
      topics: ['Content pillars', 'Content calendars', 'Working with artists'],
      videos: [
        { title: 'Content Strategy for Music - Damian Keyes', url: 'https://www.youtube.com/@DamianKeyes/search?query=content+strategy' },
        { title: 'Content Calendar Tips - Burstimo', url: 'https://www.youtube.com/@Burstimo/search?query=content+calendar' },
        { title: 'Working with Artists on Content - Ari\'s Take', url: 'https://www.youtube.com/@aristake/search?query=content+artist' }
      ]
    },
    {
      week: 11,
      title: 'Marketing Career Path',
      topics: ['Jobs in music marketing', 'Skills needed', 'Building portfolio'],
      videos: [
        { title: 'Music Marketing Jobs - Ari\'s Take', url: 'https://www.youtube.com/@aristake/search?query=marketing+job+career' },
        { title: 'Music Industry Careers - Burstimo', url: 'https://www.youtube.com/@Burstimo/search?query=career+job' },
        { title: 'Building a Marketing Portfolio', url: 'https://www.youtube.com/results?search_query=music+marketing+portfolio+entry+level' }
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
        <p>12 weeks building on your UMG Marketing experience.</p>

        <div className="card">
          <h2>Why This Course?</h2>
          <p>You worked in Marketing AND International Marketing at UMG. This course goes deeper on the platforms and strategies modern labels use.</p>
        </div>

        <div className="card">
          <h2>Trusted YouTube Channels</h2>
          <p>These are the experts. Subscribe and watch their marketing content:</p>
          <div className="company-list">
            {trustedChannels.map((channel, i) => (
              <div key={i} className="company-item">
                <a href={channel.url} target="_blank" rel="noopener">{channel.name}</a>
                <span style={{ color: 'var(--text-secondary)', marginLeft: '0.5rem' }}>- {channel.desc}</span>
              </div>
            ))}
          </div>
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
