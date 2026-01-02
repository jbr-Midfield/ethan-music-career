import Link from 'next/link'

export default function ARCoursePage() {
  const weeks = [
    {
      week: 1,
      title: 'What A&R Actually Is',
      topics: ['The role beyond the myth', 'Day-to-day reality', 'How A&R has changed'],
      videos: [
        { title: 'What does A&R do', url: 'https://www.youtube.com/results?search_query=what+does+A%26R+actually+do+record+label' },
        { title: 'A&R day in the life', url: 'https://www.youtube.com/results?search_query=A%26R+day+in+the+life+record+label' },
        { title: 'Modern A&R explained', url: 'https://www.youtube.com/results?search_query=modern+A%26R+explained+2024' }
      ]
    },
    {
      week: 2,
      title: 'Finding Artists',
      topics: ['Where A&Rs discover talent', 'Data tools', 'Scouting strategies'],
      videos: [
        { title: 'How A&Rs find artists', url: 'https://www.youtube.com/results?search_query=how+A%26R+find+artists+2024' },
        { title: 'Scouting on TikTok', url: 'https://www.youtube.com/results?search_query=scouting+artists+tiktok+A%26R' },
        { title: 'Chartmetric for A&R', url: 'https://www.youtube.com/results?search_query=chartmetric+A%26R+scouting+tutorial' }
      ]
    },
    {
      week: 3,
      title: 'Evaluating Artists',
      topics: ['What makes someone signable', 'The A&R checklist', 'Red flags'],
      videos: [
        { title: 'What makes an artist signable', url: 'https://www.youtube.com/results?search_query=what+makes+artist+signable+A%26R' },
        { title: 'Artist evaluation criteria', url: 'https://www.youtube.com/results?search_query=A%26R+artist+evaluation+criteria' },
        { title: 'Red flags when signing', url: 'https://www.youtube.com/results?search_query=red+flags+signing+artist+A%26R' }
      ]
    },
    {
      week: 4,
      title: 'Understanding Deals',
      topics: ['Record deal types', '360 deals', 'Advances and recoupment'],
      videos: [
        { title: 'Record deals explained', url: 'https://www.youtube.com/results?search_query=record+deal+explained+types+music' },
        { title: '360 deal breakdown', url: 'https://www.youtube.com/results?search_query=360+deal+breakdown+music+industry' },
        { title: 'Advance and recoupment', url: 'https://www.youtube.com/results?search_query=advance+recoupment+record+deal+explained' }
      ]
    },
    {
      week: 5,
      title: 'Demo Listening',
      topics: ['Processing submissions', 'What to listen for', 'Giving feedback'],
      videos: [
        { title: 'How A&Rs listen to demos', url: 'https://www.youtube.com/results?search_query=how+A%26R+listen+demos+process' },
        { title: 'What A&Rs hear in 10 seconds', url: 'https://www.youtube.com/results?search_query=what+A%26R+hear+first+10+seconds' },
        { title: 'Why demos get rejected', url: 'https://www.youtube.com/results?search_query=why+demos+get+rejected+A%26R' }
      ],
      assignment: 'Listen to 5 demos on SoundCloud. For each, record your gut reaction, what works, what doesn\'t, and pass or pursue.'
    },
    {
      week: 6,
      title: 'Artist Development',
      topics: ['The creative partnership', 'Working with producers', 'Songwriting camps'],
      videos: [
        { title: 'Artist development explained', url: 'https://www.youtube.com/results?search_query=artist+development+record+label+explained' },
        { title: 'Working with producers', url: 'https://www.youtube.com/results?search_query=A%26R+working+with+producers+matching+artists' },
        { title: 'Songwriting camps', url: 'https://www.youtube.com/results?search_query=songwriting+camps+explained+music+industry' }
      ]
    },
    {
      week: 7,
      title: 'The A&R Meeting',
      topics: ['Pitching artists internally', 'Building internal support', 'Competition'],
      videos: [
        { title: 'A&R meeting process', url: 'https://www.youtube.com/results?search_query=A%26R+meeting+process+record+label' },
        { title: 'Pitching an artist', url: 'https://www.youtube.com/results?search_query=pitching+artist+internally+A%26R+meeting' },
        { title: 'A&R competition', url: 'https://www.youtube.com/results?search_query=A%26R+competition+signing+artists+labels' }
      ],
      assignment: 'Pick an unsigned artist. Record a 3-minute pitch as if presenting to your label.'
    },
    {
      week: 8,
      title: 'Trends and Genre Knowledge',
      topics: ['Spotting trends', 'Genre evolution', 'UK music scene'],
      videos: [
        { title: 'Music trends 2024', url: 'https://www.youtube.com/results?search_query=music+trends+2024+industry' },
        { title: 'UK music scene trends', url: 'https://www.youtube.com/results?search_query=UK+music+scene+trends+2024' },
        { title: 'Underground to mainstream', url: 'https://www.youtube.com/results?search_query=underground+to+mainstream+music+journey' }
      ]
    },
    {
      week: 9,
      title: 'A&R and Other Departments',
      topics: ['Working with marketing', 'Label coordination', 'Manager relationships'],
      videos: [
        { title: 'A&R and marketing', url: 'https://www.youtube.com/results?search_query=A%26R+marketing+working+together+label' },
        { title: 'Label departments', url: 'https://www.youtube.com/results?search_query=record+label+departments+how+they+work+together' },
        { title: 'A&R and managers', url: 'https://www.youtube.com/results?search_query=A%26R+artist+manager+relationship' }
      ]
    },
    {
      week: 10,
      title: 'A&R Stories and Case Studies',
      topics: ['Famous signings', 'What worked', 'Lessons learned'],
      videos: [
        { title: 'How artists got signed', url: 'https://www.youtube.com/results?search_query=how+artists+got+signed+story+A%26R' },
        { title: 'Billie Eilish signing', url: 'https://www.youtube.com/results?search_query=billie+eilish+signing+story+interscope' },
        { title: 'Central Cee rise', url: 'https://www.youtube.com/results?search_query=central+cee+rise+story+signing' }
      ]
    },
    {
      week: 11,
      title: 'The A&R Career Path',
      topics: ['Getting into A&R', 'Building reputation', 'Networking'],
      videos: [
        { title: 'How to get into A&R', url: 'https://www.youtube.com/results?search_query=how+to+get+into+A%26R+music+industry' },
        { title: 'A&R career path', url: 'https://www.youtube.com/results?search_query=A%26R+career+path+progression' },
        { title: 'A&R networking', url: 'https://www.youtube.com/results?search_query=A%26R+networking+music+industry' }
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
        <p>12 weeks building on your UMG A&R experience. All video links are clickable.</p>

        <div className="card">
          <h2>Why This Course?</h2>
          <p>A&R is the most competitive but most prestigious path. Your UMG A&R experience gives you real credibility - this course turns that into expertise.</p>
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
