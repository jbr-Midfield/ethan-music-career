import Link from 'next/link'

export default function SyncCoursePage() {
  const trustedChannels = [
    { name: 'Ari\'s Take (Ari Herstand)', url: 'https://www.youtube.com/@aristake', desc: 'Industry veteran, covers sync licensing in depth' },
    { name: 'Music Gateway', url: 'https://www.youtube.com/@MusicGateway', desc: 'Sync-focused content and tutorials' },
    { name: 'Symphonic Distribution', url: 'https://www.youtube.com/@SymphonicDistribution', desc: 'Distribution and sync basics' },
    { name: 'Burstimo', url: 'https://www.youtube.com/@Burstimo', desc: 'Music business including sync' },
    { name: 'DIY Musician (CD Baby)', url: 'https://www.youtube.com/@diymusiciancdba', desc: 'Artist-focused sync guidance' }
  ]

  const weeks = [
    {
      week: 1,
      title: 'Sync Industry Overview',
      topics: ['What sync licensing is', 'TV, film, ads, games', 'The sync ecosystem'],
      videos: [
        { title: 'Sync Licensing 101 - Ari\'s Take', url: 'https://www.youtube.com/@aristake/search?query=sync+licensing' },
        { title: 'How Music Gets in TV Shows', url: 'https://www.youtube.com/@MusicGateway/search?query=sync' },
        { title: 'Music Licensing for Beginners', url: 'https://www.youtube.com/@Burstimo/search?query=sync+licensing' }
      ]
    },
    {
      week: 2,
      title: 'Music Rights for Sync',
      topics: ['Master rights', 'Publishing rights', 'One-stop vs two-stop'],
      videos: [
        { title: 'Master vs Publishing Rights', url: 'https://www.youtube.com/@aristake/search?query=master+publishing' },
        { title: 'Clearing Music for Sync', url: 'https://www.youtube.com/@MusicGateway/search?query=rights+clearance' },
        { title: 'One-Stop Licensing Explained', url: 'https://www.youtube.com/@SymphonicDistribution/search?query=licensing' }
      ]
    },
    {
      week: 3,
      title: 'Music Supervisors',
      topics: ['What supervisors do', 'Key supervisors to know', 'Working with supervisors'],
      videos: [
        { title: 'Music Supervisor Interviews', url: 'https://www.youtube.com/results?search_query=music+supervisor+interview+how+they+pick+songs' },
        { title: 'Alexandra Patsavas (Grey\'s Anatomy)', url: 'https://www.youtube.com/results?search_query=alexandra+patsavas+interview+music+supervisor' },
        { title: 'What Music Supervisors Want', url: 'https://www.youtube.com/@MusicGateway/search?query=music+supervisor' }
      ]
    },
    {
      week: 4,
      title: 'Sync Briefs',
      topics: ['Reading briefs', 'Creative language', 'Pitch strategies'],
      videos: [
        { title: 'How to Read Music Briefs', url: 'https://www.youtube.com/@MusicGateway/search?query=brief+pitch' },
        { title: 'Pitching Music for Sync', url: 'https://www.youtube.com/@aristake/search?query=pitch' },
        { title: 'Brief Terminology Explained', url: 'https://www.youtube.com/@Burstimo/search?query=sync+pitch' }
      ]
    },
    {
      week: 5,
      title: 'What Makes Music Syncable',
      topics: ['Clearable rights', 'Emotional qualities', 'Technical requirements'],
      videos: [
        { title: 'What Makes a Song Syncable', url: 'https://www.youtube.com/@aristake/search?query=syncable' },
        { title: 'Creating Sync-Friendly Music', url: 'https://www.youtube.com/@MusicGateway/search?query=syncable' },
        { title: 'Instrumentals for Sync', url: 'https://www.youtube.com/@SymphonicDistribution/search?query=instrumental+sync' }
      ]
    },
    {
      week: 6,
      title: 'TV Sync Deep Dive',
      topics: ['TV series placements', 'Episode licensing', 'Network vs streaming'],
      videos: [
        { title: 'Music in TV Shows', url: 'https://www.youtube.com/results?search_query=music+licensing+TV+shows+netflix+how+it+works' },
        { title: 'Streaming vs Network Licensing', url: 'https://www.youtube.com/@aristake/search?query=TV+streaming' },
        { title: 'Famous TV Placements Analysis', url: 'https://www.youtube.com/results?search_query=best+music+moments+TV+shows+explained' }
      ]
    },
    {
      week: 7,
      title: 'Advertising Sync',
      topics: ['Ad agency process', 'Brands and music', 'Trailer music'],
      videos: [
        { title: 'Music in Advertising', url: 'https://www.youtube.com/@aristake/search?query=advertising+commercial' },
        { title: 'Trailer Music Licensing', url: 'https://www.youtube.com/results?search_query=trailer+music+licensing+explained' },
        { title: 'Famous Commercial Music', url: 'https://www.youtube.com/results?search_query=iconic+songs+commercials+ads+how+chosen' }
      ]
    },
    {
      week: 8,
      title: 'Film Sync',
      topics: ['Film licensing process', 'Score vs source', 'Budget considerations'],
      videos: [
        { title: 'Music Licensing in Films', url: 'https://www.youtube.com/@MusicGateway/search?query=film' },
        { title: 'Score vs Source Music', url: 'https://www.youtube.com/results?search_query=score+vs+source+music+film+difference' },
        { title: 'Famous Film Music Moments', url: 'https://www.youtube.com/results?search_query=iconic+movie+music+moments+how+chosen' }
      ]
    },
    {
      week: 9,
      title: 'Sync Fees and Deals',
      topics: ['How fees are determined', 'Negotiation basics', 'Types of licenses'],
      videos: [
        { title: 'Sync Fees Explained', url: 'https://www.youtube.com/@aristake/search?query=sync+fees+money' },
        { title: 'Negotiating Sync Deals', url: 'https://www.youtube.com/@MusicGateway/search?query=negotiate' },
        { title: 'MFN (Most Favoured Nation)', url: 'https://www.youtube.com/results?search_query=most+favoured+nation+MFN+sync+music+explained' }
      ]
    },
    {
      week: 10,
      title: 'Building a Sync Career',
      topics: ['Jobs in sync', 'Sync companies', 'Career paths'],
      videos: [
        { title: 'Jobs in Sync Licensing', url: 'https://www.youtube.com/@aristake/search?query=sync+career+job' },
        { title: 'Sync Agency Careers', url: 'https://www.youtube.com/@MusicGateway/search?query=career' },
        { title: 'How to Get Into Sync', url: 'https://www.youtube.com/@Burstimo/search?query=sync+career' }
      ]
    },
    {
      week: 11,
      title: 'Case Studies',
      topics: ['Famous placements', 'How songs were picked', 'Impact on artists'],
      videos: [
        { title: 'Kate Bush - Stranger Things', url: 'https://www.youtube.com/results?search_query=kate+bush+stranger+things+running+up+that+hill+story+documentary' },
        { title: 'Grey\'s Anatomy Music Legacy', url: 'https://www.youtube.com/results?search_query=greys+anatomy+music+how+they+choose+songs' },
        { title: 'Songs That Broke Through Sync', url: 'https://www.youtube.com/results?search_query=songs+career+changed+sync+placement+TV+film' }
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
        <p>12 weeks building on your UMG Sync experience.</p>

        <div className="card">
          <h2>Why This Course?</h2>
          <p>You worked in Sync at UMG - this course turns that into deep expertise. Sync combines your love of music with business and creative decision-making.</p>
        </div>

        <div className="card">
          <h2>Trusted YouTube Channels</h2>
          <p>These are the experts. Subscribe and watch their sync content:</p>
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
          <h2>Famous Sync Placements to Study</h2>
          <ul>
            <li><a href="https://www.youtube.com/results?search_query=kate+bush+stranger+things+running+up+that+hill+scene" target="_blank" rel="noopener">Kate Bush - Running Up That Hill (Stranger Things)</a></li>
            <li><a href="https://www.youtube.com/results?search_query=imogen+heap+hide+and+seek+the+oc+scene" target="_blank" rel="noopener">Imogen Heap - Hide and Seek (The O.C.)</a></li>
            <li><a href="https://www.youtube.com/results?search_query=lcd+soundsystem+all+my+friends+finale" target="_blank" rel="noopener">LCD Soundsystem - All My Friends (How I Met Your Mother)</a></li>
            <li><a href="https://www.youtube.com/results?search_query=journey+dont+stop+believing+sopranos+finale" target="_blank" rel="noopener">Journey - Don't Stop Believin' (Sopranos)</a></li>
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
