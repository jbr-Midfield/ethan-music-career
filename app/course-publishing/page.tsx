import Link from 'next/link'

export default function PublishingCoursePage() {
  const trustedChannels = [
    { name: 'Ari\'s Take (Ari Herstand)', url: 'https://www.youtube.com/@aristake', desc: 'Publishing, royalties, deals - the definitive source' },
    { name: 'Burstimo', url: 'https://www.youtube.com/@Burstimo', desc: 'Music business including publishing basics' },
    { name: 'DIY Musician (CD Baby)', url: 'https://www.youtube.com/@diymusiciancdba', desc: 'Publishing from the songwriter perspective' },
    { name: 'Symphonic Distribution', url: 'https://www.youtube.com/@SymphonicDistribution', desc: 'Distribution and publishing fundamentals' },
    { name: 'Songtrust', url: 'https://www.youtube.com/@Songtrust', desc: 'Publishing administration explained' }
  ]

  const weeks = [
    {
      week: 1,
      title: 'What Is Music Publishing?',
      topics: ['The basics', 'Two copyrights', 'Publisher role'],
      videos: [
        { title: 'Music Publishing Explained - Ari\'s Take', url: 'https://www.youtube.com/@aristake/search?query=publishing+explained' },
        { title: 'Two Copyrights in Music - Burstimo', url: 'https://www.youtube.com/@Burstimo/search?query=copyright+master+publishing' },
        { title: 'What Does a Publisher Do - Songtrust', url: 'https://www.youtube.com/@Songtrust/search?query=publisher+what+does' }
      ]
    },
    {
      week: 2,
      title: 'Royalty Types',
      topics: ['Performance royalties', 'Mechanical royalties', 'Sync royalties'],
      videos: [
        { title: 'Performance Royalties - Ari\'s Take', url: 'https://www.youtube.com/@aristake/search?query=performance+royalties' },
        { title: 'Mechanical Royalties - Songtrust', url: 'https://www.youtube.com/@Songtrust/search?query=mechanical+royalties' },
        { title: 'All Royalty Types Explained - Burstimo', url: 'https://www.youtube.com/@Burstimo/search?query=royalty+types' }
      ]
    },
    {
      week: 3,
      title: 'UK Collection Societies',
      topics: ['PRS', 'PPL', 'MCPS'],
      videos: [
        { title: 'PRS Explained - DIY Musician', url: 'https://www.youtube.com/@diymusiciancdba/search?query=PRS' },
        { title: 'PPL Explained', url: 'https://www.youtube.com/results?search_query=PPL+UK+explained+music+royalties' },
        { title: 'PRS vs PPL Difference - Ari\'s Take', url: 'https://www.youtube.com/@aristake/search?query=PRS+PPL' }
      ]
    },
    {
      week: 4,
      title: 'The Publisher\'s Role',
      topics: ['What publishers do', 'Sub-publishing', 'Sync teams'],
      videos: [
        { title: 'What Publishers Actually Do - Ari\'s Take', url: 'https://www.youtube.com/@aristake/search?query=publisher+role+what+do' },
        { title: 'Sub-Publishing Explained - Songtrust', url: 'https://www.youtube.com/@Songtrust/search?query=sub+publishing' },
        { title: 'Publisher Sync Teams - Burstimo', url: 'https://www.youtube.com/@Burstimo/search?query=publisher+sync' }
      ]
    },
    {
      week: 5,
      title: 'Streaming Royalties Deep Dive',
      topics: ['How Spotify pays', 'The streaming pie', 'Pro-rata payments'],
      videos: [
        { title: 'How Spotify Pays Artists - Ari\'s Take', url: 'https://www.youtube.com/@aristake/search?query=spotify+pay+royalties' },
        { title: 'Streaming Royalties Flow - Songtrust', url: 'https://www.youtube.com/@Songtrust/search?query=streaming+royalties' },
        { title: 'The Streaming Pie Explained - Burstimo', url: 'https://www.youtube.com/@Burstimo/search?query=streaming+money+split' }
      ]
    },
    {
      week: 6,
      title: 'Publishing Deals',
      topics: ['Deal types', 'Advances', 'Retention periods'],
      videos: [
        { title: 'Publishing Deal Types - Ari\'s Take', url: 'https://www.youtube.com/@aristake/search?query=publishing+deal+types' },
        { title: 'Co-Publishing Deal Explained - Songtrust', url: 'https://www.youtube.com/@Songtrust/search?query=co+publishing' },
        { title: 'Admin Deal Explained - Burstimo', url: 'https://www.youtube.com/@Burstimo/search?query=admin+deal+publishing' }
      ]
    },
    {
      week: 7,
      title: 'Writer Splits and Credits',
      topics: ['Songwriting splits', 'Split sheets', 'Sampling'],
      videos: [
        { title: 'Songwriting Splits - Ari\'s Take', url: 'https://www.youtube.com/@aristake/search?query=splits+songwriting' },
        { title: 'Split Sheets Explained - Songtrust', url: 'https://www.youtube.com/@Songtrust/search?query=split+sheet' },
        { title: 'Sampling and Publishing - Burstimo', url: 'https://www.youtube.com/@Burstimo/search?query=sampling+publishing' }
      ]
    },
    {
      week: 8,
      title: 'Metadata and Registration',
      topics: ['ISRC and ISWC codes', 'Why songs don\'t get paid', 'The black box'],
      videos: [
        { title: 'Music Metadata Explained - Songtrust', url: 'https://www.youtube.com/@Songtrust/search?query=metadata' },
        { title: 'ISRC vs ISWC Codes - Ari\'s Take', url: 'https://www.youtube.com/@aristake/search?query=ISRC+ISWC' },
        { title: 'The Black Box Explained', url: 'https://www.youtube.com/results?search_query=black+box+royalties+unmatched+music+publishing' }
      ]
    },
    {
      week: 9,
      title: 'Publishing and Sync Connection',
      topics: ['Sync from publishing side', 'Clearing rights', 'Covers and re-records'],
      videos: [
        { title: 'Sync from Publishing Side - Ari\'s Take', url: 'https://www.youtube.com/@aristake/search?query=sync+publishing' },
        { title: 'Clearing Sync Rights - Songtrust', url: 'https://www.youtube.com/@Songtrust/search?query=sync+clear' },
        { title: 'Re-Records and Covers - Burstimo', url: 'https://www.youtube.com/@Burstimo/search?query=cover+re+record' }
      ]
    },
    {
      week: 10,
      title: 'Catalogue Acquisitions',
      topics: ['Why catalogues sell', 'Hipgnosis', 'Valuation'],
      videos: [
        { title: 'Catalogue Acquisitions Explained', url: 'https://www.youtube.com/results?search_query=music+catalogue+acquisition+why+sell+hipgnosis' },
        { title: 'Hipgnosis Songs Fund', url: 'https://www.youtube.com/results?search_query=hipgnosis+songs+fund+explained+how+works' },
        { title: 'Bob Dylan Catalogue Sale', url: 'https://www.youtube.com/results?search_query=bob+dylan+catalogue+sale+why+universal' }
      ]
    },
    {
      week: 11,
      title: 'The Publishing Industry',
      topics: ['Major publishers', 'Career paths', 'Publishing A&R'],
      videos: [
        { title: 'Major Publishers Explained - Ari\'s Take', url: 'https://www.youtube.com/@aristake/search?query=publisher+major' },
        { title: 'Careers in Publishing - Songtrust', url: 'https://www.youtube.com/@Songtrust/search?query=career' },
        { title: 'Kobalt Explained', url: 'https://www.youtube.com/results?search_query=kobalt+music+publishing+how+it+works+explained' }
      ]
    },
    {
      week: 12,
      title: 'Your Publishing Knowledge',
      topics: ['Interview prep', 'Your publishing pitch'],
      assignment: 'Record your Publishing Demo (5 min): Explain publishing like I\'m a new artist, walk through streaming royalties flow, PRS/PPL/MCPS differences, how publishing connects to sync, deal recommendation for new songwriter.'
    }
  ]

  return (
    <main>
      <div className="container">
        <Link href="/" className="back-link">Home</Link>

        <h1>Publishing & Royalties Course</h1>
        <p>12 weeks of technical knowledge that impresses in interviews.</p>

        <div className="card">
          <h2>Why This Course?</h2>
          <p>Publishing is complicated - most people don't understand it. If you do, you immediately stand out. This connects directly to your sync expertise (sync involves publishing rights).</p>
        </div>

        <div className="card">
          <h2>Trusted YouTube Channels</h2>
          <p>These are the experts. Subscribe and watch their publishing content:</p>
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
          <h2>Core Audiobook</h2>
          <p><a href="https://www.audible.com/pd/All-You-Need-to-Know-About-the-Music-Business-11th-Edition-Audiobook/B0BZG33413" target="_blank" rel="noopener">All You Need to Know About the Music Business</a> - Publishing chapters (16-23). Listen multiple times.</p>
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
            <li>"Explain the two copyrights in a song"</li>
            <li>"What's the difference between performance and mechanical royalties?"</li>
            <li>"How do PRS and PPL differ?"</li>
            <li>"Walk me through how a Spotify stream generates royalties"</li>
            <li>"What does a music publisher actually do?"</li>
            <li>"What's a co-publishing deal?"</li>
            <li>"Why do royalties end up in the black box?"</li>
            <li>"How does sync work from the publishing side?"</li>
          </ol>
        </div>

        <div className="card">
          <h2>Publishing Companies to Target</h2>
          <h3>Major Publishers</h3>
          <ul>
            <li><a href="https://www.linkedin.com/company/universal-music-publishing-group/" target="_blank" rel="noopener">Universal Music Publishing Group</a></li>
            <li><a href="https://www.linkedin.com/company/sony-music-publishing/" target="_blank" rel="noopener">Sony Music Publishing</a></li>
            <li><a href="https://www.linkedin.com/company/warner-chappell-music/" target="_blank" rel="noopener">Warner Chappell Music</a></li>
          </ul>
          <h3>Major Indies</h3>
          <ul>
            <li><a href="https://www.linkedin.com/company/bmg/" target="_blank" rel="noopener">BMG</a></li>
            <li><a href="https://www.linkedin.com/company/kobalt-music/" target="_blank" rel="noopener">Kobalt</a></li>
            <li><a href="https://www.linkedin.com/company/sentric-music/" target="_blank" rel="noopener">Sentric Music</a></li>
          </ul>
        </div>

        <Link href="/" className="back-link">Back to Home</Link>
      </div>
    </main>
  )
}
