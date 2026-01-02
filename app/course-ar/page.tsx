import Link from 'next/link'

export default function ARCoursePage() {
  const trustedChannels = [
    { name: 'Ari\'s Take (Ari Herstand)', url: 'https://www.youtube.com/@aristake', desc: 'Industry veteran, A&R fundamentals and deal structures' },
    { name: 'Burstimo', url: 'https://www.youtube.com/@Burstimo', desc: 'Music business including artist development' },
    { name: 'COLORS Studios', url: 'https://www.youtube.com/@COLORSxSTUDIOS', desc: 'Where A&Rs spot emerging talent - watch who they feature' },
    { name: 'GRM Daily', url: 'https://www.youtube.com/@GRMdaily', desc: 'UK rap/grime - essential for understanding UK scene' },
    { name: 'SBTV', url: 'https://www.youtube.com/@SBTVonline', desc: 'UK urban music - another key scouting source' },
    { name: 'DIY Musician (CD Baby)', url: 'https://www.youtube.com/@diymusiciancdba', desc: 'Artist development from the artist perspective' }
  ]

  const weeks = [
    {
      week: 1,
      title: 'What A&R Actually Is',
      topics: ['The role beyond the myth', 'Day-to-day reality', 'How A&R has changed'],
      videos: [
        { title: 'What Does A&R Do - Ari\'s Take', url: 'https://www.youtube.com/@aristake/search?query=A%26R+what+does' },
        { title: 'A&R Day in the Life', url: 'https://www.youtube.com/results?search_query=A%26R+day+in+the+life+record+label' },
        { title: 'Modern A&R Explained - Burstimo', url: 'https://www.youtube.com/@Burstimo/search?query=A%26R' }
      ]
    },
    {
      week: 2,
      title: 'Finding Artists',
      topics: ['Where A&Rs discover talent', 'Data tools', 'Scouting strategies'],
      videos: [
        { title: 'How A&Rs Find Artists - Ari\'s Take', url: 'https://www.youtube.com/@aristake/search?query=find+artists+discover' },
        { title: 'Scouting on TikTok/Social Media', url: 'https://www.youtube.com/results?search_query=A%26R+scouting+tiktok+social+media+find+artists' },
        { title: 'Chartmetric for A&R', url: 'https://www.youtube.com/results?search_query=chartmetric+A%26R+scouting+tutorial' }
      ]
    },
    {
      week: 3,
      title: 'Evaluating Artists',
      topics: ['What makes someone signable', 'The A&R checklist', 'Red flags'],
      videos: [
        { title: 'What Makes an Artist Signable - Ari\'s Take', url: 'https://www.youtube.com/@aristake/search?query=signable+sign+artist' },
        { title: 'Artist Evaluation Criteria', url: 'https://www.youtube.com/results?search_query=A%26R+artist+evaluation+what+labels+look+for' },
        { title: 'Red Flags When Signing Artists', url: 'https://www.youtube.com/results?search_query=red+flags+signing+artist+A%26R+label' }
      ]
    },
    {
      week: 4,
      title: 'Understanding Deals',
      topics: ['Record deal types', '360 deals', 'Advances and recoupment'],
      videos: [
        { title: 'Record Deal Types - Ari\'s Take', url: 'https://www.youtube.com/@aristake/search?query=record+deal' },
        { title: '360 Deal Breakdown', url: 'https://www.youtube.com/results?search_query=360+deal+explained+music+industry+good+bad' },
        { title: 'Advances and Recoupment - Burstimo', url: 'https://www.youtube.com/@Burstimo/search?query=advance+recoupment+deal' }
      ]
    },
    {
      week: 5,
      title: 'Demo Listening',
      topics: ['Processing submissions', 'What to listen for', 'Giving feedback'],
      videos: [
        { title: 'How A&Rs Listen to Demos', url: 'https://www.youtube.com/results?search_query=how+A%26R+listen+demos+process+what+they+hear' },
        { title: 'What A&Rs Hear in 10 Seconds', url: 'https://www.youtube.com/results?search_query=A%26R+first+10+seconds+demo+what+they+hear' },
        { title: 'Why Demos Get Rejected - Ari\'s Take', url: 'https://www.youtube.com/@aristake/search?query=demo+reject' }
      ],
      assignment: 'Listen to 5 demos on SoundCloud. For each, record your gut reaction, what works, what doesn\'t, and pass or pursue.'
    },
    {
      week: 6,
      title: 'Artist Development',
      topics: ['The creative partnership', 'Working with producers', 'Songwriting camps'],
      videos: [
        { title: 'Artist Development Explained - Ari\'s Take', url: 'https://www.youtube.com/@aristake/search?query=artist+development' },
        { title: 'Working with Producers', url: 'https://www.youtube.com/results?search_query=A%26R+matching+artists+producers+how+it+works' },
        { title: 'Songwriting Camps Explained', url: 'https://www.youtube.com/results?search_query=songwriting+camps+how+they+work+music+industry' }
      ]
    },
    {
      week: 7,
      title: 'The A&R Meeting',
      topics: ['Pitching artists internally', 'Building internal support', 'Competition'],
      videos: [
        { title: 'A&R Meeting Process', url: 'https://www.youtube.com/results?search_query=A%26R+meeting+process+how+artists+get+signed' },
        { title: 'Pitching an Artist Internally', url: 'https://www.youtube.com/results?search_query=pitching+artist+internally+label+meeting' },
        { title: 'A&R Competition for Artists', url: 'https://www.youtube.com/results?search_query=labels+competing+sign+artist+A%26R+bidding' }
      ],
      assignment: 'Pick an unsigned artist. Record a 3-minute pitch as if presenting to your label.'
    },
    {
      week: 8,
      title: 'Trends and Genre Knowledge',
      topics: ['Spotting trends', 'Genre evolution', 'UK music scene'],
      videos: [
        { title: 'Music Trends 2024 - Burstimo', url: 'https://www.youtube.com/@Burstimo/search?query=trends' },
        { title: 'UK Music Scene Deep Dive', url: 'https://www.youtube.com/results?search_query=UK+music+scene+trends+grime+drill+rap' },
        { title: 'Underground to Mainstream', url: 'https://www.youtube.com/results?search_query=underground+to+mainstream+how+genres+break' }
      ]
    },
    {
      week: 9,
      title: 'A&R and Other Departments',
      topics: ['Working with marketing', 'Label coordination', 'Manager relationships'],
      videos: [
        { title: 'A&R and Marketing - Ari\'s Take', url: 'https://www.youtube.com/@aristake/search?query=A%26R+marketing' },
        { title: 'How Label Departments Work Together', url: 'https://www.youtube.com/results?search_query=record+label+departments+work+together+explained' },
        { title: 'A&R and Manager Relationship', url: 'https://www.youtube.com/results?search_query=A%26R+manager+relationship+how+they+work' }
      ]
    },
    {
      week: 10,
      title: 'A&R Stories and Case Studies',
      topics: ['Famous signings', 'What worked', 'Lessons learned'],
      videos: [
        { title: 'How Artists Got Signed - Stories', url: 'https://www.youtube.com/results?search_query=how+famous+artists+got+signed+story+A%26R' },
        { title: 'Billie Eilish Signing Story', url: 'https://www.youtube.com/results?search_query=billie+eilish+signing+story+interscope+how+discovered' },
        { title: 'Central Cee Rise to Fame', url: 'https://www.youtube.com/results?search_query=central+cee+rise+story+how+he+blew+up' }
      ]
    },
    {
      week: 11,
      title: 'The A&R Career Path',
      topics: ['Getting into A&R', 'Building reputation', 'Networking'],
      videos: [
        { title: 'How to Get Into A&R - Ari\'s Take', url: 'https://www.youtube.com/@aristake/search?query=A%26R+career+job' },
        { title: 'A&R Career Path', url: 'https://www.youtube.com/results?search_query=A%26R+career+path+how+to+become+entry+level' },
        { title: 'Music Industry Networking - Burstimo', url: 'https://www.youtube.com/@Burstimo/search?query=networking' }
      ]
    },
    {
      week: 12,
      title: 'Your A&R Identity',
      topics: ['Your taste and niche', 'Your UMG story', 'Interview prep'],
      assignment: 'Record your A&R Story (5 min): Why A&R, what you learned at UMG, an unsigned artist you\'ve discovered, a signing you admire, how you stay current, what kind of A&R you want to be.'
    }
  ]

  return (
    <main>
      <div className="container">
        <Link href="/" className="back-link">Home</Link>

        <h1>A&R Foundations Course</h1>
        <p>12 weeks building on your UMG A&R experience.</p>

        <div className="card">
          <h2>Why This Course?</h2>
          <p>A&R is the most competitive but most prestigious path. Your UMG A&R experience gives you real credibility - this course turns that into expertise.</p>
        </div>

        <div className="card">
          <h2>Trusted YouTube Channels</h2>
          <p>These are the experts. Subscribe and watch their A&R content:</p>
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
          <ul>
            <li><a href="https://www.audible.com/pd/Song-Machine-Audiobook/B015RQOPXO" target="_blank" rel="noopener">The Song Machine</a> (9.5 hrs)</li>
            <li><a href="https://www.audible.com/pd/Hit-Makers-Audiobook/B01MT23ESD" target="_blank" rel="noopener">Hit Makers</a> (11.5 hrs)</li>
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
                <strong>Assignment:</strong> {w.assignment}
              </p>
            )}

            {!w.assignment && (
              <p><strong>Voice Memo:</strong> After watching, explain the key concepts in your own words.</p>
            )}
          </div>
        ))}

        <div className="card">
          <h2>Weekly Practice</h2>
          <p>Every week:</p>
          <ol>
            <li>Listen to 10 new unsigned artists</li>
            <li>Record a voice memo evaluating your top pick</li>
            <li>Track who you picked - check back in 6 months</li>
          </ol>
          <h3>Where to Find New Music</h3>
          <ul>
            <li><a href="https://open.spotify.com/playlist/37i9dQZF1DWWjGdmeTyeJ6" target="_blank" rel="noopener">Spotify Fresh Finds</a></li>
            <li><a href="https://www.youtube.com/@COLORSxSTUDIOS" target="_blank" rel="noopener">Colors Studios</a></li>
            <li><a href="https://www.youtube.com/@GRMdaily" target="_blank" rel="noopener">GRM Daily</a></li>
            <li><a href="https://www.youtube.com/@SBTVonline" target="_blank" rel="noopener">SBTV</a></li>
          </ul>
        </div>

        <div className="card">
          <h2>Interview Questions You Can Now Answer</h2>
          <ol>
            <li>"What does A&R mean to you?"</li>
            <li>"How do you find new artists?"</li>
            <li>"What makes an artist signable?"</li>
            <li>"Walk me through how you evaluate a demo"</li>
            <li>"Tell me about an unsigned artist you're excited about"</li>
            <li>"How do you stay current with music?"</li>
            <li>"Tell me about your UMG A&R experience"</li>
            <li>"What would you develop about [artist] if you signed them?"</li>
          </ol>
        </div>

        <Link href="/" className="back-link">Back to Home</Link>
      </div>
    </main>
  )
}
