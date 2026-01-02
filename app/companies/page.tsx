import Link from 'next/link'

export default function CompaniesPage() {
  return (
    <main>
      <div className="container">
        <Link href="/" className="back-link">Home</Link>

        <h1>Record Companies</h1>
        <p>150+ music companies with direct links to their careers pages. Tap any link to apply.</p>

        <div className="section">
          <h2>The Big Three (Major Labels)</h2>

          <div className="company-section">
            <h3>Universal Music Group</h3>
            <p><a href="https://www.universalmusic.com/careers/" target="_blank" rel="noopener">Careers Page</a> - Kensington, London</p>
            <div className="company-list">
              <div className="company-item"><strong>Island Records</strong> - Pop, Urban, Alternative (Ethan did work experience here)</div>
              <div className="company-item"><strong>EMI Records</strong> - Heritage, Pop (Ethan did work experience here)</div>
              <div className="company-item"><strong>Polydor</strong> - Pop, Rock (UK largest pop label)</div>
              <div className="company-item"><strong>Decca Records</strong> - Classical, Crossover</div>
              <div className="company-item"><strong>Virgin Records</strong> - Pop, Alternative</div>
              <div className="company-item"><strong>Capitol UK</strong> - Pop, Urban</div>
              <div className="company-item"><strong>0207 Def Jam</strong> - UK Hip Hop, Grime</div>
            </div>
          </div>

          <div className="company-section">
            <h3>Sony Music UK</h3>
            <p><a href="https://www.sonymusic.co.uk/careers" target="_blank" rel="noopener">Careers Page</a> - Kensington, London</p>
            <div className="company-list">
              <div className="company-item"><strong>Columbia Records UK</strong> - Pop, Rock</div>
              <div className="company-item"><strong>RCA Records UK</strong> - Pop, Urban</div>
              <div className="company-item"><strong>Epic Records UK</strong> - Pop, Alternative</div>
              <div className="company-item"><strong>Since '93</strong> - UK Urban</div>
              <div className="company-item"><strong>Ministry of Sound</strong> - Dance, Compilations</div>
            </div>
          </div>

          <div className="company-section">
            <h3>Warner Music UK</h3>
            <p><a href="https://www.warnermusic.co.uk/careers" target="_blank" rel="noopener">Careers Page</a> - Kensington, London</p>
            <div className="company-list">
              <div className="company-item"><strong>Atlantic Records UK</strong> - Pop, Urban</div>
              <div className="company-item"><strong>Parlophone</strong> - Pop, Rock</div>
              <div className="company-item"><strong>Elektra UK</strong> - Alternative, Pop</div>
              <div className="company-item"><strong>Asylum Records</strong> - Pop</div>
            </div>
          </div>

          <div className="company-section">
            <h3>BMG (Fourth Major)</h3>
            <p><a href="https://www.bmg.com/careers" target="_blank" rel="noopener">Careers Page</a> - London</p>
            <p>Artist-friendly deals, transparent model. George Ezra, Kylie Minogue, Rick Astley.</p>
          </div>
        </div>

        <div className="section">
          <h2>Major Independent Labels</h2>

          <div className="company-section">
            <h3>Beggars Group</h3>
            <p><a href="https://beggars.com/group/jobs" target="_blank" rel="noopener">Careers Page</a> - Wandsworth, London</p>
            <div className="company-list">
              <div className="company-item"><a href="https://4ad.com" target="_blank" rel="noopener">4AD</a> - Alternative, Indie</div>
              <div className="company-item"><a href="https://xlrecordings.com" target="_blank" rel="noopener">XL Recordings</a> - Various (Adele, Radiohead)</div>
              <div className="company-item"><a href="https://www.roughtraderecords.com" target="_blank" rel="noopener">Rough Trade Records</a> - Indie, Alternative</div>
              <div className="company-item"><a href="https://matadorrecords.com" target="_blank" rel="noopener">Matador Records</a> - Indie, Alternative</div>
            </div>
          </div>

          <div className="company-list">
            <div className="company-item"><a href="https://www.dominomusic.com" target="_blank" rel="noopener">Domino Recording Company</a> - Arctic Monkeys, Franz Ferdinand</div>
            <div className="company-item"><a href="https://ninjatune.net" target="_blank" rel="noopener">Ninja Tune</a> - Electronic, Hip Hop</div>
            <div className="company-item"><a href="https://www.pias.com/careers" target="_blank" rel="noopener">PIAS</a> - Distribution + Label Services</div>
            <div className="company-item"><a href="https://warp.net" target="_blank" rel="noopener">Warp Records</a> - Electronic, Experimental</div>
            <div className="company-item"><a href="https://partisanrecords.com" target="_blank" rel="noopener">Partisan Records</a> - Idles, Fontaines D.C.</div>
          </div>
        </div>

        <div className="section">
          <h2>Dance & Electronic Labels</h2>
          <div className="company-list">
            <div className="company-item"><a href="https://defected.com" target="_blank" rel="noopener">Defected Records</a> - House Music (very active hiring)</div>
            <div className="company-item"><a href="https://hospitalrecords.com" target="_blank" rel="noopener">Hospital Records</a> - Drum & Bass</div>
            <div className="company-item"><a href="https://anjunabeats.com" target="_blank" rel="noopener">Anjunabeats / Anjunadeep</a> - Trance, Progressive</div>
            <div className="company-item"><a href="https://rinse.fm" target="_blank" rel="noopener">Rinse</a> - UK Dance, Grime, Bass</div>
          </div>
        </div>

        <div className="section">
          <h2>Music Publishing Companies</h2>

          <h3>Major Publishers</h3>
          <div className="company-list">
            <div className="company-item"><a href="https://www.umusicpub.com" target="_blank" rel="noopener">Universal Music Publishing Group</a></div>
            <div className="company-item"><a href="https://www.sonymusicpub.com" target="_blank" rel="noopener">Sony Music Publishing</a></div>
            <div className="company-item"><a href="https://www.warnerchappell.com" target="_blank" rel="noopener">Warner Chappell Music</a></div>
          </div>

          <h3>Independent Publishers</h3>
          <div className="company-list">
            <div className="company-item"><a href="https://www.kobaltmusic.com/careers" target="_blank" rel="noopener">Kobalt</a> - Tech-forward, transparent</div>
            <div className="company-item"><a href="https://www.concord.com/careers" target="_blank" rel="noopener">Concord</a> - Large catalogue</div>
            <div className="company-item"><a href="https://www.sentricmusic.com" target="_blank" rel="noopener">Sentric Music</a> - Good for emerging artists</div>
          </div>
        </div>

        <div className="section">
          <h2>Sync Licensing Companies</h2>
          <div className="company-list">
            <div className="company-item"><a href="https://puresyncinc.com" target="_blank" rel="noopener">Pure Sync</a></div>
            <div className="company-item"><a href="https://www.twelvedb.com" target="_blank" rel="noopener">Twelve Decibels</a></div>
            <div className="company-item"><a href="https://siren.uk.com" target="_blank" rel="noopener">SIREN</a></div>
            <div className="company-item"><a href="https://www.thesyncagency.com" target="_blank" rel="noopener">The Sync Agency</a></div>
          </div>
        </div>

        <div className="section">
          <h2>Artist Management</h2>
          <div className="company-list">
            <div className="company-item"><a href="https://www.tapmusic.net" target="_blank" rel="noopener">TaP Music</a> - Dua Lipa, Lana Del Rey</div>
            <div className="company-item"><a href="https://www.septembermanagement.com" target="_blank" rel="noopener">September Management</a> - Adele, Little Simz</div>
            <div className="company-item"><a href="https://www.ymugroup.com" target="_blank" rel="noopener">YMU Group</a></div>
            <div className="company-item"><a href="https://www.wildlife-ent.com" target="_blank" rel="noopener">Wildlife Entertainment</a> - Arctic Monkeys</div>
            <div className="company-item"><a href="https://www.twentytwo.co.uk" target="_blank" rel="noopener">Twenty Two</a> - Central Cee</div>
          </div>
        </div>

        <div className="section">
          <h2>Key Career Pages to Check Weekly</h2>
          <div className="company-list">
            <div className="company-item"><a href="https://www.universalmusic.com/careers" target="_blank" rel="noopener">universalmusic.com/careers</a></div>
            <div className="company-item"><a href="https://www.sonymusic.co.uk/careers" target="_blank" rel="noopener">sonymusic.co.uk/careers</a></div>
            <div className="company-item"><a href="https://www.warnermusic.co.uk/careers" target="_blank" rel="noopener">warnermusic.co.uk/careers</a></div>
            <div className="company-item"><a href="https://beggars.com/group/jobs" target="_blank" rel="noopener">beggars.com/group/jobs</a></div>
            <div className="company-item"><a href="https://www.bmg.com/careers" target="_blank" rel="noopener">bmg.com/careers</a></div>
            <div className="company-item"><a href="https://www.aim.org.uk/jobs" target="_blank" rel="noopener">aim.org.uk/jobs</a></div>
          </div>
        </div>

        <Link href="/" className="back-link">Back to Home</Link>
      </div>
    </main>
  )
}
