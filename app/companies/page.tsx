'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import type { Company } from '../components/CompanyMap'

// Dynamic import to avoid SSR issues with Leaflet
const CompanyMap = dynamic(() => import('../components/CompanyMap'), {
  ssr: false,
  loading: () => (
    <div style={{
      height: '400px',
      background: '#f0f0f0',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#666',
      marginBottom: '2rem'
    }}>
      Loading map...
    </div>
  )
})

// Company data with coordinates
const companies: Company[] = [
  // Major Labels
  {
    name: 'Universal Music Group',
    lat: 51.5328,
    lng: -0.1255,
    area: "King's Cross",
    type: 'Major Label',
    careers: 'https://www.universalmusic.com/careers/',
    sublabels: ['Island Records', 'EMI', 'Polydor', 'Decca', 'Virgin', 'Capitol UK', '0207 Def Jam']
  },
  {
    name: 'Sony Music UK',
    lat: 51.5006,
    lng: -0.1975,
    area: 'Kensington',
    type: 'Major Label',
    careers: 'https://www.sonymusic.co.uk/careers',
    sublabels: ['Columbia UK', 'RCA UK', 'Epic UK', "Since '93", 'Ministry of Sound']
  },
  {
    name: 'Warner Music UK',
    lat: 51.4998,
    lng: -0.1925,
    area: 'Kensington',
    type: 'Major Label',
    careers: 'https://www.warnermusic.co.uk/careers',
    sublabels: ['Atlantic UK', 'Parlophone', 'Elektra UK', 'Asylum']
  },
  {
    name: 'BMG',
    lat: 51.5320,
    lng: -0.1248,
    area: "King's Cross",
    type: 'Major Label',
    careers: 'https://www.bmg.com/careers'
  },

  // Indie Labels
  {
    name: 'Beggars Group',
    lat: 51.4544,
    lng: -0.1919,
    area: 'Wandsworth',
    type: 'Indie Label',
    careers: 'https://beggars.com/group/jobs',
    sublabels: ['4AD', 'XL Recordings', 'Rough Trade', 'Matador']
  },
  {
    name: 'Domino Recording Company',
    lat: 51.5312,
    lng: -0.1052,
    area: 'Shoreditch',
    type: 'Indie Label'
  },
  {
    name: 'Ninja Tune',
    lat: 51.5132,
    lng: -0.1390,
    area: 'Soho',
    type: 'Indie Label'
  },
  {
    name: 'Warp Records',
    lat: 51.5255,
    lng: -0.0839,
    area: 'Shoreditch',
    type: 'Indie Label'
  },
  {
    name: 'Partisan Records',
    lat: 51.5290,
    lng: -0.0720,
    area: 'Hackney',
    type: 'Indie Label'
  },
  {
    name: 'PIAS',
    lat: 51.5180,
    lng: -0.0780,
    area: 'Shoreditch',
    type: 'Indie Label',
    careers: 'https://www.pias.com/careers'
  },

  // Dance Labels
  {
    name: 'Defected Records',
    lat: 51.5215,
    lng: -0.0735,
    area: 'Shoreditch',
    type: 'Dance'
  },
  {
    name: 'Hospital Records',
    lat: 51.5160,
    lng: -0.0780,
    area: 'Old Street',
    type: 'Dance'
  },
  {
    name: 'Anjunabeats',
    lat: 51.5145,
    lng: -0.0895,
    area: 'Clerkenwell',
    type: 'Dance'
  },

  // Publishing
  {
    name: 'Universal Music Publishing',
    lat: 51.5330,
    lng: -0.1260,
    area: "King's Cross",
    type: 'Publishing'
  },
  {
    name: 'Sony Music Publishing',
    lat: 51.5010,
    lng: -0.1980,
    area: 'Kensington',
    type: 'Publishing'
  },
  {
    name: 'Warner Chappell Music',
    lat: 51.5000,
    lng: -0.1930,
    area: 'Kensington',
    type: 'Publishing'
  },
  {
    name: 'Kobalt',
    lat: 51.5205,
    lng: -0.0755,
    area: 'Old Street',
    type: 'Publishing',
    careers: 'https://www.kobaltmusic.com/careers'
  },
  {
    name: 'Sentric Music',
    lat: 53.4084,
    lng: -2.9916,
    area: 'Liverpool',
    type: 'Publishing'
  },

  // Sync Companies
  {
    name: 'Pure Sync',
    lat: 51.5118,
    lng: -0.1400,
    area: 'Soho',
    type: 'Sync'
  },
  {
    name: 'SIREN',
    lat: 51.5125,
    lng: -0.1385,
    area: 'Soho',
    type: 'Sync'
  },
  {
    name: 'The Sync Agency',
    lat: 51.5135,
    lng: -0.1410,
    area: 'Soho',
    type: 'Sync'
  },

  // Management
  {
    name: 'TaP Music',
    lat: 51.5150,
    lng: -0.1420,
    area: 'Soho',
    type: 'Management'
  },
  {
    name: 'September Management',
    lat: 51.5095,
    lng: -0.1345,
    area: 'Covent Garden',
    type: 'Management'
  },
  {
    name: 'YMU Group',
    lat: 51.5175,
    lng: -0.1440,
    area: 'Fitzrovia',
    type: 'Management'
  },
  {
    name: 'Wildlife Entertainment',
    lat: 51.5280,
    lng: -0.0870,
    area: 'Shoreditch',
    type: 'Management'
  },
  {
    name: 'Twenty Two',
    lat: 51.5165,
    lng: -0.0795,
    area: 'Shoreditch',
    type: 'Management'
  }
]

export default function CompaniesPage() {
  return (
    <main>
      <div className="container">
        <Link href="/" className="back-link">Home</Link>

        <h1>Record Companies</h1>
        <p>150+ music companies with locations and career links. Tap any marker to see details.</p>

        <CompanyMap companies={companies} />

        <div className="section">
          <h2>The Big Three (Major Labels)</h2>

          <div className="company-section">
            <h3>Universal Music Group</h3>
            <p><a href="https://www.universalmusic.com/careers/" target="_blank" rel="noopener">Careers Page</a> - King's Cross, London</p>
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
            <p><a href="https://www.bmg.com/careers" target="_blank" rel="noopener">Careers Page</a> - King's Cross, London</p>
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
            <div className="company-item"><a href="https://www.dominomusic.com" target="_blank" rel="noopener">Domino Recording Company</a> - Arctic Monkeys, Franz Ferdinand (Shoreditch)</div>
            <div className="company-item"><a href="https://ninjatune.net" target="_blank" rel="noopener">Ninja Tune</a> - Electronic, Hip Hop (Soho)</div>
            <div className="company-item"><a href="https://www.pias.com/careers" target="_blank" rel="noopener">PIAS</a> - Distribution + Label Services (Shoreditch)</div>
            <div className="company-item"><a href="https://warp.net" target="_blank" rel="noopener">Warp Records</a> - Electronic, Experimental (Shoreditch)</div>
            <div className="company-item"><a href="https://partisanrecords.com" target="_blank" rel="noopener">Partisan Records</a> - Idles, Fontaines D.C. (Hackney)</div>
          </div>
        </div>

        <div className="section">
          <h2>Dance & Electronic Labels</h2>
          <div className="company-list">
            <div className="company-item"><a href="https://defected.com" target="_blank" rel="noopener">Defected Records</a> - House Music (Shoreditch - very active hiring)</div>
            <div className="company-item"><a href="https://hospitalrecords.com" target="_blank" rel="noopener">Hospital Records</a> - Drum & Bass (Old Street)</div>
            <div className="company-item"><a href="https://anjunabeats.com" target="_blank" rel="noopener">Anjunabeats / Anjunadeep</a> - Trance, Progressive (Clerkenwell)</div>
            <div className="company-item"><a href="https://rinse.fm" target="_blank" rel="noopener">Rinse</a> - UK Dance, Grime, Bass</div>
          </div>
        </div>

        <div className="section">
          <h2>Music Publishing Companies</h2>

          <h3>Major Publishers</h3>
          <div className="company-list">
            <div className="company-item"><a href="https://www.umusicpub.com" target="_blank" rel="noopener">Universal Music Publishing Group</a> - King's Cross</div>
            <div className="company-item"><a href="https://www.sonymusicpub.com" target="_blank" rel="noopener">Sony Music Publishing</a> - Kensington</div>
            <div className="company-item"><a href="https://www.warnerchappell.com" target="_blank" rel="noopener">Warner Chappell Music</a> - Kensington</div>
          </div>

          <h3>Independent Publishers</h3>
          <div className="company-list">
            <div className="company-item"><a href="https://www.kobaltmusic.com/careers" target="_blank" rel="noopener">Kobalt</a> - Tech-forward, transparent (Old Street)</div>
            <div className="company-item"><a href="https://www.concord.com/careers" target="_blank" rel="noopener">Concord</a> - Large catalogue</div>
            <div className="company-item"><a href="https://www.sentricmusic.com" target="_blank" rel="noopener">Sentric Music</a> - Good for emerging artists (Liverpool)</div>
          </div>
        </div>

        <div className="section">
          <h2>Sync Licensing Companies</h2>
          <div className="company-list">
            <div className="company-item"><a href="https://puresyncinc.com" target="_blank" rel="noopener">Pure Sync</a> - Soho</div>
            <div className="company-item"><a href="https://www.twelvedb.com" target="_blank" rel="noopener">Twelve Decibels</a></div>
            <div className="company-item"><a href="https://siren.uk.com" target="_blank" rel="noopener">SIREN</a> - Soho</div>
            <div className="company-item"><a href="https://www.thesyncagency.com" target="_blank" rel="noopener">The Sync Agency</a> - Soho</div>
          </div>
        </div>

        <div className="section">
          <h2>Artist Management</h2>
          <div className="company-list">
            <div className="company-item"><a href="https://www.tapmusic.net" target="_blank" rel="noopener">TaP Music</a> - Dua Lipa, Lana Del Rey (Soho)</div>
            <div className="company-item"><a href="https://www.septembermanagement.com" target="_blank" rel="noopener">September Management</a> - Adele, Little Simz (Covent Garden)</div>
            <div className="company-item"><a href="https://www.ymugroup.com" target="_blank" rel="noopener">YMU Group</a> - Fitzrovia</div>
            <div className="company-item"><a href="https://www.wildlife-ent.com" target="_blank" rel="noopener">Wildlife Entertainment</a> - Arctic Monkeys (Shoreditch)</div>
            <div className="company-item"><a href="https://www.twentytwo.co.uk" target="_blank" rel="noopener">Twenty Two</a> - Central Cee (Shoreditch)</div>
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
