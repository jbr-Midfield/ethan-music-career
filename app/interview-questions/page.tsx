import Link from 'next/link'

export default function InterviewQuestionsPage() {
  const roles = [
    {
      name: 'A&R',
      questions: [
        {
          q: 'Tell me about an unsigned artist you\'ve discovered recently',
          asking: 'Do you actually spend time finding new music?',
          answer: 'Name a specific artist (not someone already buzzing), where you found them, what stood out, why they have potential. Reference your BRIT School network.'
        },
        {
          q: 'What makes an artist ready to sign?',
          asking: 'Do you understand this is a business decision?',
          answer: 'Unique voice/sound, existing fanbase, strong work ethic, clear vision, songwriting ability, the full package. Mention talent alone isn\'t enough.'
        },
        {
          q: 'How do you stay current with new music?',
          asking: 'Is finding music a job or a lifestyle?',
          answer: 'Specific platforms (SoundCloud, Spotify Viral, TikTok), playlists you follow, live shows, conversations with music people.'
        },
        {
          q: 'Walk me through how you\'d evaluate this demo',
          asking: 'Can you articulate what you hear?',
          answer: 'Gut feel first, voice/sound distinctiveness, song quality, production potential, what needs development, commercial vs artistic merit.'
        },
        {
          q: 'Tell me about your time at Universal Music Group',
          asking: 'What did you actually learn?',
          answer: 'Worked across 4 departments. In A&R: how demos are evaluated, what meetings look like. Something that surprised you. A moment that confirmed this is what you want.'
        }
      ]
    },
    {
      name: 'Marketing',
      questions: [
        {
          q: 'Walk me through a release campaign timeline',
          asking: 'Do you understand the basics?',
          answer: '6 weeks: assets ready. 4 weeks: pitch Spotify, teasers. 2 weeks: press, pre-save. Release week: all platforms active. Post: sustain, react to data.'
        },
        {
          q: 'How does the Spotify algorithm work?',
          asking: 'Do you understand the platforms?',
          answer: 'Tracks save rate, skip rate, completion rate. Feeds Release Radar and Discover Weekly. Editorial playlists = humans, algorithmic = data. First 24-48 hours matter.'
        },
        {
          q: 'How would you market [artist] on TikTok?',
          asking: 'Do you understand modern marketing?',
          answer: 'What\'s TikTok-able about the song (hook, dance, lyric). Content strategy. Influencer approach if budget. Sound page strategy. Converting TikTok to streams.'
        },
        {
          q: 'How would you allocate a £10,000 marketing budget?',
          asking: 'Can you prioritise?',
          answer: 'Content creation £2-3k, Paid social £3-4k, Spotify Marquee £2k, PR/playlist plugging £2k, Contingency £1k. Show ROI thinking.'
        },
        {
          q: 'An artist doesn\'t want to do TikTok. How do you handle that?',
          asking: 'Can you navigate pushback?',
          answer: 'Understand their concern. Present alternatives (creator-led content). Show data without being pushy. Find compromise. Know when to back off.'
        }
      ]
    },
    {
      name: 'Sync & Licensing',
      questions: [
        {
          q: 'Walk me through the sync process from brief to placement',
          asking: 'Do you understand the workflow?',
          answer: 'Brief arrives, review requirements, search catalogue, create pitch playlist (5-10 options), send to supervisor, they select, clear rights, negotiate fee, deliver assets.'
        },
        {
          q: 'What\'s the difference between a master license and sync license?',
          asking: 'Do you understand music rights?',
          answer: 'Sync = composition (songwriters/publishers). Master = recording (label/artist). Need BOTH for most placements. "One-stop" = one party controls both.'
        },
        {
          q: 'Pitch me a song for [scenario]',
          asking: 'Can you think on your feet?',
          answer: 'Pick something that genuinely fits. Explain WHY - mood, energy, lyrics. Mention practical stuff (clearable? has instrumental?). Offer alternative.'
        },
        {
          q: 'What makes a song syncable?',
          asking: 'Do you understand what supervisors want?',
          answer: 'Clear rights, lyrics not too specific, instrumental available, clean version available, strong emotional hook, builds that work with editing, not overused.'
        },
        {
          q: 'Tell me about your UMG Sync experience',
          asking: 'What did you actually learn?',
          answer: 'Worked in Sync department. How briefs are handled. Pitches you observed. How sync works with A&R and marketing. A placement that excited you.'
        }
      ]
    },
    {
      name: 'Publishing',
      questions: [
        {
          q: 'Explain the two copyrights in a song',
          asking: 'Do you understand the fundamental concept?',
          answer: 'Composition (melody, lyrics) = songwriters/publishers. Sound recording = label/artist. Publishing deals with composition side. Cover versions need publishing not master.'
        },
        {
          q: 'What\'s the difference between PRS and PPL?',
          asking: 'Do you know UK collection societies?',
          answer: 'PRS = performance royalties for songwriters/publishers. PPL = performance royalties for performers/labels. Same play generates royalties for BOTH. PRS = song, PPL = recording.'
        },
        {
          q: 'Walk me through how a Spotify stream generates royalties',
          asking: 'Do you understand streaming economics?',
          answer: 'Spotify takes ~30%. Remaining 70% split: ~55% to master (label/artist), ~15% to publishing. Publishing goes to PROs, then publishers, then songwriters.'
        },
        {
          q: 'What\'s a co-publishing deal?',
          asking: 'Do you understand deal structures?',
          answer: 'Writer keeps 50% writer\'s share. Publisher and writer split 50% publisher\'s share. Writer ends up with 75% total. Compare to full publishing (50/50) and admin (writer keeps 85-90%).'
        },
        {
          q: 'Why do royalties end up in the black box?',
          asking: 'Do you understand metadata?',
          answer: 'Wrong metadata (ISRC, ISWC, IPI numbers), unregistered songs, conflicting ownership claims, uncleared samples, venues that don\'t report.'
        }
      ]
    }
  ]

  const universalQuestions = [
    {
      q: 'Why do you want to work in the music industry?',
      tip: 'Don\'t just say "I love music" - be specific about what aspect, when you knew, what you\'ve done to pursue it.'
    },
    {
      q: 'Where do you see yourself in 5 years?',
      tip: 'Show ambition but don\'t sound like you\'ll leave in a year. Connect to the company.'
    },
    {
      q: 'What questions do you have for us?',
      tip: 'Always ask something: What does success look like in 6 months? What\'s the team structure? What do you enjoy about working here?'
    },
    {
      q: 'Tell me about your UMG placement',
      tip: '4 departments: A&R, Marketing, International Marketing, Sync. What you contributed, what surprised you, what confirmed your direction.'
    },
    {
      q: 'Why should we hire you?',
      tip: 'Production background = unique ear. UMG experience = understands labels. BRIT School = serious about music. Photoshop, tech skills. Work ethic.'
    }
  ]

  return (
    <main>
      <div className="container">
        <Link href="/" className="back-link">Home</Link>

        <h1>Interview Questions Guide</h1>
        <p>90 questions across 9 role types. Record yourself answering before every interview.</p>

        <div className="card">
          <h2>General Tips</h2>
          <p><strong>They're always assessing:</strong></p>
          <ul>
            <li>Do you actually love music? (Not just say you do)</li>
            <li>Will you do the boring admin without complaining?</li>
            <li>Can you work in a team?</li>
            <li>Do you understand this is a business?</li>
            <li>Are you curious and eager to learn?</li>
          </ul>
          <p><strong>Always have ready:</strong></p>
          <ul>
            <li>An artist you've discovered recently</li>
            <li>An album/song you're currently obsessed with</li>
            <li>A campaign or industry story you found interesting</li>
            <li>Why THIS company specifically</li>
          </ul>
        </div>

        {roles.map((role, i) => (
          <div key={i} className="section">
            <h2>{role.name} Questions</h2>
            {role.questions.map((q, j) => (
              <div key={j} className="question-card">
                <h4>"{q.q}"</h4>
                <p className="asking"><strong>What they're really asking:</strong> {q.asking}</p>
                <div className="answer">
                  <strong>How to answer:</strong> {q.answer}
                </div>
              </div>
            ))}
          </div>
        ))}

        <div className="section">
          <h2>Universal Questions (All Roles)</h2>
          {universalQuestions.map((q, i) => (
            <div key={i} className="question-card">
              <h4>"{q.q}"</h4>
              <div className="answer">
                <strong>Tip:</strong> {q.tip}
              </div>
            </div>
          ))}
        </div>

        <div className="card">
          <h2>How to Use This Guide</h2>
          <ol>
            <li>Identify which role you're interviewing for</li>
            <li>Record yourself answering all questions for that role</li>
            <li>Listen back and re-record until you sound confident</li>
            <li>Keep recordings on your phone to review before interviews</li>
          </ol>
        </div>

        <Link href="/" className="back-link">Back to Home</Link>
      </div>
    </main>
  )
}
