import Link from 'next/link'

export default function PublishingCoursePage() {
  const weeks = [
    {
      week: 1,
      title: 'What Is Music Publishing?',
      topics: ['The basics', 'Two copyrights', 'Publisher role'],
      videos: [
        { title: 'Music publishing explained', url: 'https://www.youtube.com/results?search_query=music+publishing+explained+simply+beginners' },
        { title: 'Two copyrights in music', url: 'https://www.youtube.com/results?search_query=copyright+in+music+explained+two+copyrights' },
        { title: 'What does a publisher do', url: 'https://www.youtube.com/results?search_query=what+does+music+publisher+do+explained' }
      ]
    },
    {
      week: 2,
      title: 'Royalty Types',
      topics: ['Performance royalties', 'Mechanical royalties', 'Sync royalties'],
      videos: [
        { title: 'Performance royalties', url: 'https://www.youtube.com/results?search_query=performance+royalties+explained+music' },
        { title: 'Mechanical royalties', url: 'https://www.youtube.com/results?search_query=mechanical+royalties+explained+music' },
        { title: 'All royalty types', url: 'https://www.youtube.com/results?search_query=all+music+royalty+types+explained+comparison' }
      ]
    },
    {
      week: 3,
      title: 'UK Collection Societies',
      topics: ['PRS', 'PPL', 'MCPS'],
      videos: [
        { title: 'PRS explained', url: 'https://www.youtube.com/results?search_query=PRS+for+music+explained+how+it+works' },
        { title: 'PPL explained', url: 'https://www.youtube.com/results?search_query=PPL+UK+explained+how+it+works' },
        { title: 'PRS vs PPL difference', url: 'https://www.youtube.com/results?search_query=PRS+vs+PPL+difference+explained+UK' }
      ]
    },
    {
      week: 4,
      title: 'The Publisher\'s Role',
      topics: ['What publishers do', 'Sub-publishing', 'Sync teams'],
      videos: [
        { title: 'What music publishers do', url: 'https://www.youtube.com/results?search_query=what+music+publishers+do+detailed' },
        { title: 'Sub-publishing', url: 'https://www.youtube.com/results?search_query=sub+publishing+explained+international' },
        { title: 'Publisher sync teams', url: 'https://www.youtube.com/results?search_query=publisher+sync+team+what+they+do' }
      ]
    },
    {
      week: 5,
      title: 'Streaming Royalties Deep Dive',
      topics: ['How Spotify pays', 'The streaming pie', 'Pro-rata payments'],
      videos: [
        { title: 'How Spotify pays artists', url: 'https://www.youtube.com/results?search_query=how+spotify+pays+artists+detailed+breakdown' },
        { title: 'Streaming royalties flow', url: 'https://www.youtube.com/results?search_query=streaming+royalties+flow+explained+diagram' },
        { title: 'The streaming pie', url: 'https://www.youtube.com/results?search_query=streaming+revenue+split+who+gets+what' }
      ]
    },
    {
      week: 6,
      title: 'Publishing Deals',
      topics: ['Deal types', 'Advances', 'Retention periods'],
      videos: [
        { title: 'Publishing deal types', url: 'https://www.youtube.com/results?search_query=publishing+deal+types+music+explained' },
        { title: 'Co-publishing deal', url: 'https://www.youtube.com/results?search_query=co+publishing+deal+explained+music' },
        { title: 'Admin deal explained', url: 'https://www.youtube.com/results?search_query=admin+deal+publishing+explained' }
      ]
    },
    {
      week: 7,
      title: 'Writer Splits and Credits',
      topics: ['Songwriting splits', 'Split sheets', 'Sampling'],
      videos: [
        { title: 'Songwriting splits', url: 'https://www.youtube.com/results?search_query=songwriting+splits+explained+collaboration' },
        { title: 'Split sheets', url: 'https://www.youtube.com/results?search_query=split+sheet+explained+music' },
        { title: 'Sampling and publishing', url: 'https://www.youtube.com/results?search_query=sampling+publishing+splits+explained' }
      ]
    },
    {
      week: 8,
      title: 'Metadata and Registration',
      topics: ['ISRC and ISWC codes', 'Why songs don\'t get paid', 'The black box'],
      videos: [
        { title: 'Music metadata', url: 'https://www.youtube.com/results?search_query=music+metadata+explained+publishing' },
        { title: 'ISRC and ISWC', url: 'https://www.youtube.com/results?search_query=ISRC+vs+ISWC+codes+explained+music' },
        { title: 'The black box', url: 'https://www.youtube.com/results?search_query=black+box+royalties+unmatched+music' }
      ]
    },
    {
      week: 9,
      title: 'Publishing and Sync Connection',
      topics: ['Sync from publishing side', 'Clearing rights', 'Covers and re-records'],
      videos: [
        { title: 'Sync licensing publishing side', url: 'https://www.youtube.com/results?search_query=sync+licensing+publishing+side+explained' },
        { title: 'Clearing sync rights', url: 'https://www.youtube.com/results?search_query=clearing+sync+rights+publishing+master' },
        { title: 'Re-records and covers', url: 'https://www.youtube.com/results?search_query=re+record+cover+sync+licensing+publishing' }
      ]
    },
    {
      week: 10,
      title: 'Catalogue Acquisitions',
      topics: ['Why catalogues sell', 'Hipgnosis', 'Valuation'],
      videos: [
        { title: 'Catalogue acquisitions', url: 'https://www.youtube.com/results?search_query=music+catalogue+acquisition+explained' },
        { title: 'Hipgnosis Songs Fund', url: 'https://www.youtube.com/results?search_query=hipgnosis+songs+fund+explained' },
        { title: 'Bob Dylan sale', url: 'https://www.youtube.com/results?search_query=bob+dylan+catalogue+sale+universal' }
      ]
    },
    {
      week: 11,
      title: 'The Publishing Industry',
      topics: ['Major publishers', 'Career paths', 'Publishing A&R'],
      videos: [
        { title: 'Major publishers', url: 'https://www.youtube.com/results?search_query=major+music+publishers+sony+universal+warner' },
        { title: 'Careers in publishing', url: 'https://www.youtube.com/results?search_query=careers+in+music+publishing' },
        { title: 'Kobalt explained', url: 'https://www.youtube.com/results?search_query=kobalt+music+publishing+how+it+works' }
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
        <p>12 weeks of technical knowledge that impresses in interviews. All video links are clickable.</p>

        <div className="card">
          <h2>Why This Course?</h2>
          <p>Publishing is complicated - most people don't understand it. If you do, you immediately stand out. This connects directly to your sync expertise (sync involves publishing rights).</p>
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
