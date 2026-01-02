import Link from 'next/link'

export default function ArtistRostersPage() {
  const labels = [
    {
      group: 'Universal Music Group',
      labels: [
        {
          name: 'Island Records UK',
          artists: [
            { name: 'Drake', genre: 'Hip Hop', url: 'https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4' },
            { name: 'Ariana Grande', genre: 'Pop', url: 'https://open.spotify.com/artist/66CXWjxzNUsdJxJ2JdwvnR' },
            { name: 'Sigrid', genre: 'Pop', url: 'https://open.spotify.com/artist/4TrraAsitQKl821DQY42cZ' },
            { name: 'Dermot Kennedy', genre: 'Singer-Songwriter', url: 'https://open.spotify.com/artist/5KNNVgR6LBIABRIomyCwKJ' }
          ]
        },
        {
          name: 'Polydor Records',
          artists: [
            { name: 'Billie Eilish', genre: 'Pop', url: 'https://open.spotify.com/artist/6qqNVTkY8uBg9cP3Jd7DAH' },
            { name: 'Olivia Rodrigo', genre: 'Pop', url: 'https://open.spotify.com/artist/1McMsnEElThX1knmY4oliG' },
            { name: 'Sam Fender', genre: 'Rock', url: 'https://open.spotify.com/artist/50JJSqHUf2RQ9xsHs0KMHg' },
            { name: 'Years & Years', genre: 'Pop', url: 'https://open.spotify.com/artist/5ugBKfkjpv4RBpySxPYYRL' }
          ]
        },
        {
          name: '0207 Def Jam',
          artists: [
            { name: 'Stormzy', genre: 'Grime/UK Hip Hop', url: 'https://open.spotify.com/artist/2SrSdSvpminqmStGELCSNd' },
            { name: 'Jorja Smith', genre: 'R&B', url: 'https://open.spotify.com/artist/4OBJLual30L7gRl5UkeRcT' },
            { name: 'Aitch', genre: 'UK Hip Hop', url: 'https://open.spotify.com/artist/0eWjkKKede6JyBMdqneXFg' },
            { name: 'Fredo', genre: 'UK Hip Hop', url: 'https://open.spotify.com/artist/1Ae3AixCYOCHuJl6LH8vkU' }
          ]
        }
      ]
    },
    {
      group: 'Sony Music UK',
      labels: [
        {
          name: 'Columbia Records UK',
          artists: [
            { name: 'Harry Styles', genre: 'Pop', url: 'https://open.spotify.com/artist/6KImCVD70vtIoJWnq6nGn3' },
            { name: 'Adele', genre: 'Pop/Soul', url: 'https://open.spotify.com/artist/4dpARuHxo51G3z768sgnrY' },
            { name: 'Calvin Harris', genre: 'Dance', url: 'https://open.spotify.com/artist/7CajNmpbOovFoOoasH2HaY' },
            { name: 'Beyonce', genre: 'R&B/Pop', url: 'https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m' }
          ]
        },
        {
          name: 'RCA Records UK',
          artists: [
            { name: 'Doja Cat', genre: 'Pop/Hip Hop', url: 'https://open.spotify.com/artist/5cj0lLjcoR7YOSnhnX0Po5' },
            { name: 'SZA', genre: 'R&B', url: 'https://open.spotify.com/artist/7tYKF4w9nC0nq9CsPZTHyP' },
            { name: 'Miley Cyrus', genre: 'Pop', url: 'https://open.spotify.com/artist/5YGY8feqx7naU7z4HrwZM6' },
            { name: 'Khalid', genre: 'R&B', url: 'https://open.spotify.com/artist/6LuN9FCkKOj5PcnpouEgny' }
          ]
        }
      ]
    },
    {
      group: 'Warner Music UK',
      labels: [
        {
          name: 'Atlantic Records UK',
          artists: [
            { name: 'Ed Sheeran', genre: 'Pop', url: 'https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V' },
            { name: 'Charli XCX', genre: 'Pop', url: 'https://open.spotify.com/artist/25uiPmTg16RbhZWAqwLBy5' },
            { name: 'Coldplay', genre: 'Rock', url: 'https://open.spotify.com/artist/4gzpq5DPGxSnKTe4SA8HAU' },
            { name: 'Burna Boy', genre: 'Afrobeats', url: 'https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa' }
          ]
        },
        {
          name: 'Parlophone Records',
          artists: [
            { name: 'Dua Lipa', genre: 'Pop', url: 'https://open.spotify.com/artist/6M2wZ9GZgrQXHCFfjv46we' },
            { name: 'Kylie Minogue', genre: 'Pop', url: 'https://open.spotify.com/artist/4RVnAU35WRWra6OZ3CbbMA' },
            { name: 'Gorillaz', genre: 'Alternative', url: 'https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ' },
            { name: 'David Guetta', genre: 'Dance', url: 'https://open.spotify.com/artist/1Cs0zKBU1kc0i8ypK3B9ai' }
          ]
        },
        {
          name: 'Asylum Records UK',
          artists: [
            { name: 'Raye', genre: 'R&B/Pop', url: 'https://open.spotify.com/artist/5KKpBU5eC2tJDzf0wmlRp2' },
            { name: 'AJ Tracey', genre: 'UK Hip Hop', url: 'https://open.spotify.com/artist/4Xi6LSfFqv26XgP9NKN26U' },
            { name: 'Joel Corry', genre: 'Dance', url: 'https://open.spotify.com/artist/3hteYQFiMFbJY7wS0xDymP' },
            { name: 'Rudimental', genre: 'Dance', url: 'https://open.spotify.com/artist/4WN5naL3ofxrVBgFpguzKo' }
          ]
        }
      ]
    },
    {
      group: 'Major Indies',
      labels: [
        {
          name: 'XL Recordings',
          artists: [
            { name: 'Adele', genre: 'Pop/Soul', url: 'https://open.spotify.com/artist/4dpARuHxo51G3z768sgnrY' },
            { name: 'Radiohead', genre: 'Alternative', url: 'https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb' },
            { name: 'Tyler, The Creator', genre: 'Hip Hop', url: 'https://open.spotify.com/artist/4V8LLVI7PbaPR0K2TGSxFF' },
            { name: 'The xx', genre: 'Indie', url: 'https://open.spotify.com/artist/3iOvXCl6edW5Um0fXEBRXy' }
          ]
        },
        {
          name: 'Domino',
          artists: [
            { name: 'Arctic Monkeys', genre: 'Rock', url: 'https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH' },
            { name: 'Franz Ferdinand', genre: 'Rock', url: 'https://open.spotify.com/artist/0XNa1vTidXlvJ2gHSsRi4A' }
          ]
        },
        {
          name: 'Ninja Tune',
          artists: [
            { name: 'Bonobo', genre: 'Electronic', url: 'https://open.spotify.com/artist/0cmWgDlu9CwTgxPhf403hb' },
            { name: 'Bicep', genre: 'Electronic', url: 'https://open.spotify.com/artist/73A3bLnfnz5BoQjb4gNCga' },
            { name: 'Peggy Gou', genre: 'Electronic', url: 'https://open.spotify.com/artist/5SS0FFWU58LQqIYT4X4OMC' }
          ]
        },
        {
          name: 'Partisan Records',
          artists: [
            { name: 'IDLES', genre: 'Post-Punk', url: 'https://open.spotify.com/artist/2FrsiJUQo0Kf5ikvX2W4EL' },
            { name: 'Fontaines D.C.', genre: 'Post-Punk', url: 'https://open.spotify.com/artist/3FZKiLzK4Oyxn6wHCJwJCF' },
            { name: 'Ezra Collective', genre: 'Jazz', url: 'https://open.spotify.com/artist/1bKgpz1OhLJwUjwIrLgtqH' }
          ]
        }
      ]
    },
    {
      group: 'Dance Labels',
      labels: [
        {
          name: 'Defected Records',
          artists: [
            { name: 'Disclosure', genre: 'House', url: 'https://open.spotify.com/artist/5Fmz1xq5SWbwIU3RZb4nj5' },
            { name: 'Purple Disco Machine', genre: 'House', url: 'https://open.spotify.com/artist/0U73nZLMkBwjGWcSb8KBOT' },
            { name: 'John Summit', genre: 'Tech House', url: 'https://open.spotify.com/artist/5ZfKCZSuqPwL6Ckd8OqmCp' }
          ]
        },
        {
          name: 'Hospital Records',
          artists: [
            { name: 'High Contrast', genre: 'D&B', url: 'https://open.spotify.com/artist/3C3cr0E9KHvvjYhJQHnPqc' },
            { name: 'Netsky', genre: 'D&B', url: 'https://open.spotify.com/artist/0ha7rdZ28ILfFLVdWtzcqm' }
          ]
        }
      ]
    }
  ]

  return (
    <main>
      <div className="container">
        <Link href="/" className="back-link">Home</Link>

        <h1>Label Artist Rosters</h1>
        <p>Top artists from each label. Tap to listen on Spotify. Before any interview, listen to at least 3 artists from that label.</p>

        <div className="card">
          <h2>Interview Prep Checklist</h2>
          <ul>
            <li>Listen to 3+ artists from that label's roster</li>
            <li>Pick one artist you can discuss in detail</li>
            <li>Know their most recent release</li>
            <li>Know one older track showing their development</li>
            <li>Be ready to say why you like their work</li>
            <li>Know one artist you'd sign to that label (not on their roster)</li>
          </ul>
        </div>

        {labels.map((group, i) => (
          <div key={i} className="section">
            <h2>{group.group}</h2>
            {group.labels.map((label, j) => (
              <div key={j} className="company-section">
                <h3>{label.name}</h3>
                <div className="company-list">
                  {label.artists.map((artist, k) => (
                    <div key={k} className="company-item">
                      <a href={artist.url} target="_blank" rel="noopener">{artist.name}</a>
                      <span style={{ color: 'var(--text-secondary)', marginLeft: '0.5rem' }}>({artist.genre})</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}

        <div className="card">
          <h2>Quick Study Playlists by Genre</h2>
          <ul>
            <li><a href="https://open.spotify.com/search/UK%20hip%20hop%20essential/playlists" target="_blank" rel="noopener">UK Hip Hop</a></li>
            <li><a href="https://open.spotify.com/search/grime%20essential/playlists" target="_blank" rel="noopener">Grime</a></li>
            <li><a href="https://open.spotify.com/search/UK%20garage/playlists" target="_blank" rel="noopener">UK Garage</a></li>
            <li><a href="https://open.spotify.com/search/drum%20and%20bass%20essential/playlists" target="_blank" rel="noopener">Drum & Bass</a></li>
            <li><a href="https://open.spotify.com/search/UK%20indie%20essential/playlists" target="_blank" rel="noopener">UK Indie</a></li>
            <li><a href="https://open.spotify.com/search/house%20essential/playlists" target="_blank" rel="noopener">House</a></li>
            <li><a href="https://open.spotify.com/search/afrobeats%20essential/playlists" target="_blank" rel="noopener">Afrobeats</a></li>
          </ul>
        </div>

        <Link href="/" className="back-link">Back to Home</Link>
      </div>
    </main>
  )
}
