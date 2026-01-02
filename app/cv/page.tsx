import Link from 'next/link'

export default function CVPage() {
  return (
    <main>
      <div className="container">
        <Link href="/" className="back-link">Home</Link>

        <h1>Your CV</h1>
        <p>Ready for applications. Copy and adapt for each job.</p>

        <div className="card">
          <h2>Ethan Roberts</h2>
          <p><strong>Location:</strong> North London</p>
          <p><strong>Email:</strong> eroberts@brit.croydon.sch.uk</p>
          <p><strong>Available:</strong> From May 2025</p>
          <p><strong>Seeking:</strong> Entry-level / Graduate / Apprenticeships</p>
        </div>

        <div className="section">
          <h2>Personal Statement</h2>
          <p>I learn by either doing or watching. I am fortunate to have been born in a time when, if I ever have a question, I can find a YouTube video and learn. My big loves are History, Music and experiencing new things.</p>
          <p>I have an analytical brain and play strategy games. These have helped me to understand cause and effect. Every action has a reaction and this has made me very aware of the world in which I live. When I discovered music, I found "my passion" and want to explore all the opportunities available to me to see how I can establish my career.</p>
        </div>

        <div className="section">
          <h2>Key Attributes</h2>
          <ul>
            <li>Punctual</li>
            <li>Passionate about music</li>
            <li>Inquisitive</li>
            <li>Polite</li>
            <li>Loyal</li>
            <li>Has Integrity</li>
            <li>Technical</li>
            <li>Creative</li>
          </ul>
        </div>

        <div className="section">
          <h2>Education</h2>
          <div className="card">
            <h3>BRIT School (Current)</h3>
            <p>UAL Extended Diploma in Music Technology</p>
            <p>Year 1: Distinction</p>
          </div>
          <div className="card">
            <h3>Elstree Screen Arts (ESA)</h3>
            <p>English Literature & Language, Maths, Music Technology, Photography, Science, Drama</p>
          </div>
        </div>

        <div className="section">
          <h2>Experience</h2>

          <div className="week-card">
            <h3>2025 - Amplify You (Universal Music Group)</h3>
            <p>Two-week work experience working with live briefs at Island Records / EMI.</p>
            <p><strong>Departments:</strong></p>
            <ul>
              <li>Marketing</li>
              <li>International Marketing</li>
              <li>A&R</li>
              <li>Sync</li>
            </ul>
          </div>

          <div className="week-card">
            <h3>2025 - Event 360 (Paid Freelance)</h3>
            <p>Live sports events company. Runner working with audio technician.</p>
            <p><strong>Tasks:</strong> Cable runs, assisting audio tech, setting up PA systems</p>
          </div>

          <div className="week-card">
            <h3>2025 - Shemesh / RSY Netzer (Volunteering)</h3>
            <p>Youth Leader at annual summer camp for 50 kids.</p>
            <p><strong>Tasks:</strong> Planning activities, wellbeing, team working, managing children</p>
          </div>

          <div className="week-card">
            <h3>2023 - Bigtime Academy (Paid)</h3>
            <p>Teaching Assistant at youth theatre company.</p>
            <p><strong>Tasks:</strong> Backstage work, show development, working with children</p>
          </div>
        </div>

        <div className="section">
          <h2>Technical Skills</h2>
          <ul>
            <li><strong>Audio:</strong> Logic Pro</li>
            <li><strong>Design:</strong> Photoshop</li>
            <li><strong>Productivity:</strong> Google Suite</li>
            <li><strong>Social:</strong> TikTok, Instagram</li>
          </ul>
        </div>

        <div className="section">
          <h2>Strengths Summary</h2>
          <ol>
            <li><strong>Live events experience</strong> - Already working freelance at Event 360</li>
            <li><strong>People skills</strong> - Youth leadership and teaching experience</li>
            <li><strong>Technical + Creative</strong> - Combines analytical thinking with musical passion</li>
            <li><strong>Self-directed learner</strong> - Learns through doing and watching</li>
            <li><strong>Reliable</strong> - Punctual, loyal, has integrity</li>
          </ol>
        </div>

        <div className="section">
          <h2>Target Roles</h2>
          <h3>Priority (Business Side)</h3>
          <ul>
            <li>A&R Assistant / Coordinator</li>
            <li>Marketing Assistant / Coordinator (Music)</li>
            <li>Sync Licensing Assistant</li>
            <li>Label Operations Assistant</li>
            <li>Artist Management Assistant</li>
            <li>Music Publishing Assistant</li>
            <li>Digital Marketing Assistant (Music)</li>
          </ul>
        </div>

        <Link href="/" className="back-link">Back to Home</Link>
      </div>
    </main>
  )
}
