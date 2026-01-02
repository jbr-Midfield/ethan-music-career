import Link from 'next/link'

export default function SyncCoursePage() {
  const weeks = [
    {
      week: 1,
      title: 'Sync Industry Overview',
      topics: ['What sync licensing is', 'TV, film, ads, games', 'The sync ecosystem'],
      videos: [
        { title: 'Sync licensing explained', url: 'https://www.youtube.com/results?search_query=sync+licensing+explained+music' },
        { title: 'How music gets in TV shows', url: 'https://www.youtube.com/results?search_query=how+music+gets+in+TV+shows' },
        { title: 'Music in advertising', url: 'https://www.youtube.com/results?search_query=music+in+advertising+how+it+works' }
      ]
    },
    {
      week: 2,
      title: 'Music Rights for Sync',
      topics: ['Master rights', 'Publishing rights', 'One-stop vs two-stop'],
      videos: [
        { title: 'Master vs sync license', url: 'https://www.youtube.com/results?search_query=master+license+vs+sync+license+difference' },
        { title: 'Clearing music for sync', url: 'https://www.youtube.com/results?search_query=clearing+music+sync+rights' },
        { title: 'One-stop explained', url: 'https://www.youtube.com/results?search_query=one+stop+music+licensing+sync' }
      ]
    },
    {
      week: 3,
      title: 'Music Supervisors',
      topics: ['What supervisors do', 'Key supervisors to know', 'Working with supervisors'],
      videos: [
        { title: 'Music supervisor role', url: 'https://www.youtube.com/results?search_query=music+supervisor+role+explained' },
        { title: 'Music supervisor interview', url: 'https://www.youtube.com/results?search_query=music+supervisor+interview+how+they+pick+songs' },
        { title: 'Alexandra Patsavas', url: 'https://www.youtube.com/results?search_query=alexandra+patsavas+interview' }
      ]
    },
    {
      week: 4,
      title: 'Sync Briefs',
      topics: ['Reading briefs', 'Creative language', 'Pitch strategies'],
      videos: [
        { title: 'How to read sync briefs', url: 'https://www.youtube.com/results?search_query=how+to+read+music+brief+sync' },
        { title: 'Pitching for sync', url: 'https://www.youtube.com/results?search_query=pitching+music+for+sync' },
        { title: 'Music brief terminology', url: 'https://www.youtube.com/results?search_query=music+brief+terminology+sync' }
      ]
    },
    {
      week: 5,
      title: 'What Makes Music Syncable',
      topics: ['Clearable rights', 'Emotional qualities', 'Technical requirements'],
      videos: [
        { title: 'What makes a song syncable', url: 'https://www.youtube.com/results?search_query=what+makes+a+song+syncable' },
        { title: 'Sync-friendly music', url: 'https://www.youtube.com/results?search_query=sync+friendly+music+characteristics' },
        { title: 'Instrumentals for sync', url: 'https://www.youtube.com/results?search_query=instrumental+music+sync+licensing' }
      ]
    },
    {
      week: 6,
      title: 'TV Sync Deep Dive',
      topics: ['TV series placements', 'Episode licensing', 'Network vs streaming'],
      videos: [
        { title: 'Music in TV shows', url: 'https://www.youtube.com/results?search_query=music+licensing+TV+shows+how+it+works' },
        { title: 'Streaming vs network', url: 'https://www.youtube.com/results?search_query=Netflix+music+licensing+vs+TV+network' },
        { title: 'Famous TV placements', url: 'https://www.youtube.com/results?search_query=famous+music+placements+TV+shows' }
      ]
    },
    {
      week: 7,
      title: 'Advertising Sync',
      topics: ['Ad agency process', 'Brands and music', 'Trailer music'],
      videos: [
        { title: 'Music in advertising', url: 'https://www.youtube.com/results?search_query=music+advertising+sync+licensing' },
        { title: 'Trailer music licensing', url: 'https://www.youtube.com/results?search_query=trailer+music+licensing+how+it+works' },
        { title: 'Famous ad music', url: 'https://www.youtube.com/results?search_query=famous+songs+in+adverts+commercials' }
      ]
    },
    {
      week: 8,
      title: 'Film Sync',
      topics: ['Film licensing process', 'Score vs source', 'Budget considerations'],
      videos: [
        { title: 'Music in films', url: 'https://www.youtube.com/results?search_query=music+licensing+films+how+it+works' },
        { title: 'Score vs source music', url: 'https://www.youtube.com/results?search_query=score+vs+source+music+film' },
        { title: 'Famous film placements', url: 'https://www.youtube.com/results?search_query=famous+music+moments+films' }
      ]
    },
    {
      week: 9,
      title: 'Sync Fees and Deals',
      topics: ['How fees are determined', 'Negotiation basics', 'Types of licenses'],
      videos: [
        { title: 'Sync fees explained', url: 'https://www.youtube.com/results?search_query=sync+licensing+fees+how+much' },
        { title: 'Negotiating sync deals', url: 'https://www.youtube.com/results?search_query=negotiating+sync+deals+music' },
        { title: 'MFN explained', url: 'https://www.youtube.com/results?search_query=most+favoured+nation+sync+music' }
      ]
    },
    {
      week: 10,
      title: 'Building a Sync Career',
      topics: ['Jobs in sync', 'Sync companies', 'Career paths'],
      videos: [
        { title: 'Jobs in sync licensing', url: 'https://www.youtube.com/results?search_query=jobs+in+sync+licensing+music' },
        { title: 'Sync career path', url: 'https://www.youtube.com/results?search_query=sync+licensing+career+path' },
        { title: 'Sync agencies', url: 'https://www.youtube.com/results?search_query=sync+agency+how+they+work' }
      ]
    },
    {
      week: 11,
      title: 'Case Studies',
      topics: ['Famous placements', 'How songs were picked', 'Impact on artists'],
      videos: [
        { title: 'Kate Bush Stranger Things', url: 'https://www.youtube.com/results?search_query=kate+bush+running+up+that+hill+stranger+things+story' },
        { title: 'Greys Anatomy music', url: 'https://www.youtube.com/results?search_query=greys+anatomy+music+how+they+choose' },
        { title: 'Songs that broke through sync', url: 'https://www.youtube.com/results?search_query=songs+that+broke+through+sync+placements' }
      ]
    },
    {
      week: 12,
      title: 'Your Sync Pitch',
      topics: ['Connecting your UMG experience', 'Your sync knowledge', 'Interview prep'],
      assignment: 'Record a 5-minute pitch: Why sync, what you learned at UMG, and analyse a placement you admire'
    }
  ]

  return (
    <main>
      <div className="container">
        <Link href="/" className="back-link">Home</Link>

        <h1>Sync Specialist Course</h1>
        <p>12 weeks building on your UMG Sync experience. All video links are clickable.</p>

        <div className="card">
          <h2>Why This Course?</h2>
          <p>You worked in Sync at UMG - this course turns that into deep expertise. Sync combines your love of music with business and creative decision-making.</p>
        </div>

        <div className="card">
          <h2>Famous Sync Placements to Study</h2>
          <ul>
            <li><a href="https://www.youtube.com/results?search_query=kate+bush+stranger+things+sync" target="_blank" rel="noopener">Kate Bush - Running Up That Hill (Stranger Things)</a></li>
            <li><a href="https://www.youtube.com/results?search_query=imogen+heap+hide+and+seek+the+oc" target="_blank" rel="noopener">Imogen Heap - Hide and Seek (The O.C.)</a></li>
            <li><a href="https://www.youtube.com/results?search_query=lcd+soundsystem+all+my+friends+how+i+met+your+mother" target="_blank" rel="noopener">LCD Soundsystem - All My Friends (How I Met Your Mother)</a></li>
          </ul>
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
            <li>"Walk me through the sync process from brief to placement"</li>
            <li>"What's the difference between a master license and sync license?"</li>
            <li>"Pitch me a song for [scenario]"</li>
            <li>"Tell me about your favourite sync placement"</li>
            <li>"What makes a song syncable?"</li>
            <li>"Name some music supervisors"</li>
            <li>"Tell me about your UMG Sync experience"</li>
            <li>"Why sync specifically?"</li>
          </ol>
        </div>

        <Link href="/" className="back-link">Back to Home</Link>
      </div>
    </main>
  )
}
