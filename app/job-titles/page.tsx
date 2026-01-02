import Link from 'next/link'

export default function JobTitlesPage() {
  const roles = [
    {
      category: 'A&R (Artists & Repertoire)',
      titles: ['A&R Scout', 'A&R Assistant', 'A&R Coordinator', 'A&R Manager'],
      know: ['How labels find and sign artists', 'What makes an artist "signable"', 'Demo evaluation', 'Artist development process'],
      interview: ['Tell me about an unsigned artist you\'ve discovered', 'What makes an artist ready to sign?', 'How do you stay current with new music?'],
      course: 'A&R Foundations Course'
    },
    {
      category: 'Marketing',
      titles: ['Marketing Assistant', 'Marketing Coordinator', 'Digital Marketing Assistant', 'Campaign Manager'],
      know: ['Release campaign timelines', 'Spotify algorithm basics', 'TikTok strategy', 'Paid vs organic marketing'],
      interview: ['Walk me through a release campaign', 'How does the Spotify algorithm work?', 'How would you market an artist on TikTok?'],
      course: 'Marketing Specialist Course'
    },
    {
      category: 'Sync & Licensing',
      titles: ['Sync Assistant', 'Sync Coordinator', 'Licensing Assistant', 'Creative Sync'],
      know: ['Master vs publishing rights', 'How sync deals work', 'Music supervisor relationships', 'What makes songs "syncable"'],
      interview: ['Walk me through the sync process', 'What\'s the difference between master and sync licenses?', 'Pitch me a song for this scenario'],
      course: 'Sync Specialist Course'
    },
    {
      category: 'Publishing',
      titles: ['Publishing Assistant', 'Copyright Administrator', 'Royalties Assistant', 'Publishing A&R Assistant'],
      know: ['Two copyrights in a song', 'PRS, PPL, MCPS differences', 'How streaming royalties flow', 'Publishing deal types'],
      interview: ['Explain the two copyrights in a song', 'What\'s the difference between PRS and PPL?', 'Walk me through streaming royalties'],
      course: 'Publishing & Royalties Course'
    },
    {
      category: 'Label Operations / Product',
      titles: ['Product Manager Assistant', 'Label Operations Assistant', 'Release Coordinator', 'Project Coordinator'],
      know: ['Release timelines', 'How distribution works', 'Metadata importance', 'Cross-department coordination'],
      interview: ['Walk me through a release timeline', 'How does distribution work?', 'What happens if metadata is wrong?'],
      course: 'Music Industry Foundation Course'
    },
    {
      category: 'Promotions',
      titles: ['Radio Plugger Assistant', 'Promotions Assistant', 'Playlist Manager', 'DSP Relations'],
      know: ['UK radio playlisting', 'Editorial vs algorithmic playlists', 'Spotify pitching process', 'Building relationships with stations'],
      interview: ['How does UK radio playlisting work?', 'When should you pitch to Spotify?', 'How do you measure if promotion is working?'],
      course: 'Music Industry Foundation Course'
    },
    {
      category: 'Artist Relations / Management',
      titles: ['Artist Liaison', 'Management Assistant', 'Tour Coordinator', 'Day-to-Day Manager'],
      know: ['Manager vs label roles', 'How management and labels work together', 'Touring logistics', 'Artist wellbeing'],
      interview: ['What does a manager do that the label doesn\'t?', 'How would you handle a stressed artist?', 'What touring logistics would you coordinate?'],
      course: 'Music Industry Foundation Course'
    },
    {
      category: 'Digital / Streaming / Tech',
      titles: ['Digital Marketing Assistant', 'Streaming Manager', 'Data Analyst', 'Platform Specialist'],
      know: ['Spotify algorithm', 'What makes a good playlist', 'How streaming royalties work', 'DSP relationships'],
      interview: ['How does the Spotify algorithm decide what to recommend?', 'What trends are you watching in music streaming?', 'How do labels work with DSPs?'],
      course: 'Marketing Specialist Course'
    },
    {
      category: 'Creative Services',
      titles: ['Creative Assistant', 'Artwork Coordinator', 'Content Producer', 'Video Producer'],
      know: ['Assets needed for releases', 'Platform specifications', 'Visual consistency across campaigns', 'Brief writing'],
      interview: ['What assets are needed for a single release?', 'How do platform specs affect creative work?', 'Show us some work you\'ve created'],
      course: 'Music Industry Foundation Course'
    }
  ]

  return (
    <main>
      <div className="container">
        <Link href="/" className="back-link">Home</Link>

        <h1>Job Titles Guide</h1>
        <p>9 role categories in the music industry. Tap each to see what you need to know.</p>

        {roles.map((role, index) => (
          <div key={index} className="card" style={{ marginBottom: '1.5rem' }}>
            <h2>{index + 1}. {role.category}</h2>

            <h3>Job Titles</h3>
            <ul>
              {role.titles.map((title, i) => (
                <li key={i}>{title}</li>
              ))}
            </ul>

            <h3>What You Need to Know</h3>
            <ul>
              {role.know.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h3>Sample Interview Questions</h3>
            <ul>
              {role.interview.map((q, i) => (
                <li key={i}>"{q}"</li>
              ))}
            </ul>

            <p style={{ marginTop: '1rem', color: 'var(--accent)' }}>
              <strong>Recommended Course:</strong> {role.course}
            </p>
          </div>
        ))}

        <div className="card">
          <h2>Where Ethan Fits Best</h2>
          <p>Based on your UMG experience across A&R, Marketing, Sync, and International Marketing, you could target any of these areas. Your production background gives you an edge for A&R roles.</p>
          <p><strong>Strongest matches:</strong></p>
          <ul>
            <li>A&R Assistant - Production background + UMG A&R experience</li>
            <li>Sync Assistant - Direct UMG Sync experience</li>
            <li>Marketing Assistant - UMG Marketing + International experience</li>
          </ul>
        </div>

        <Link href="/" className="back-link">Back to Home</Link>
      </div>
    </main>
  )
}
