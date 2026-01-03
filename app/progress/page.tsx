'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

interface VideoItem {
  id: string
  title: string
}

interface WeekData {
  week: number
  title: string
  videos: VideoItem[]
}

interface CourseData {
  id: string
  title: string
  icon: string
  weeks: WeekData[]
}

const courses: CourseData[] = [
  {
    id: 'foundation',
    title: 'Music Industry Foundations',
    icon: '🎓',
    weeks: [
      { week: 1, title: 'How the Music Industry Works', videos: [
        { id: 'f1w1v1', title: 'How the music industry works' },
        { id: 'f1w1v2', title: 'How record labels work' },
        { id: 'f1w1v3', title: 'Major vs independent labels' },
        { id: 'f1w1v4', title: 'Music revenue streams' },
        { id: 'f1w1v5', title: 'Damian Keyes - Industry overview' },
      ]},
      { week: 2, title: 'Publishing & Royalties', videos: [
        { id: 'f1w2v1', title: 'Music publishing explained' },
        { id: 'f1w2v2', title: 'PRS for Music - how it works' },
        { id: 'f1w2v3', title: 'Performance vs mechanical royalties' },
        { id: 'f1w2v4', title: 'How streaming royalties work' },
        { id: 'f1w2v5', title: 'Writer share vs publisher share' },
      ]},
      { week: 3, title: 'Record Labels - Departments & Roles', videos: [
        { id: 'f1w3v1', title: 'Record label departments' },
        { id: 'f1w3v2', title: 'What does A&R actually do' },
        { id: 'f1w3v3', title: 'A&R interviews' },
        { id: 'f1w3v4', title: 'How labels market artists' },
        { id: 'f1w3v5', title: 'Day in the life - record label' },
      ]},
      { week: 4, title: 'The Artist Journey', videos: [
        { id: 'f1w4v1', title: 'How artists get signed 2024' },
        { id: 'f1w4v2', title: 'Record deals explained' },
        { id: 'f1w4v3', title: '360 deals explained' },
        { id: 'f1w4v4', title: 'TikTok changed music' },
        { id: 'f1w4v5', title: 'Artist development' },
      ]},
      { week: 5, title: 'Sync Licensing Deep Dive', videos: [
        { id: 'f1w5v1', title: 'Sync licensing explained' },
        { id: 'f1w5v2', title: 'Music supervisor interview' },
        { id: 'f1w5v3', title: 'How to get music in TV/film' },
        { id: 'f1w5v4', title: 'Master vs publishing rights' },
        { id: 'f1w5v5', title: 'Sync agents explained' },
        { id: 'f1w5v6', title: 'Art of the Sync' },
      ]},
      { week: 6, title: 'Music Marketing', videos: [
        { id: 'f1w6v1', title: 'Music marketing campaigns' },
        { id: 'f1w6v2', title: 'Damian Keyes 21 day plan' },
        { id: 'f1w6v3', title: 'TikTok marketing 2024' },
        { id: 'f1w6v4', title: 'Spotify marketing strategy' },
        { id: 'f1w6v5', title: 'How labels use data' },
        { id: 'f1w6v6', title: 'Burstimo - marketing tips' },
      ]},
      { week: 7, title: 'Distribution & Streaming', videos: [
        { id: 'f1w7v1', title: 'How Spotify playlists work' },
        { id: 'f1w7v2', title: 'Music distribution explained' },
        { id: 'f1w7v3', title: 'Spotify algorithm' },
        { id: 'f1w7v4', title: 'How to pitch to Spotify' },
        { id: 'f1w7v5', title: 'AWAL vs The Orchard' },
      ]},
      { week: 8, title: 'Artist Management', videos: [
        { id: 'f1w8v1', title: 'What does a music manager do' },
        { id: 'f1w8v2', title: 'Artist management interviews' },
        { id: 'f1w8v3', title: 'Manager commission explained' },
        { id: 'f1w8v4', title: 'Scooter Braun interview' },
        { id: 'f1w8v5', title: 'Label vs manager relationship' },
      ]},
      { week: 9, title: 'Streaming Economics', videos: [
        { id: 'f1w9v1', title: 'Spotify royalties - how much?' },
        { id: 'f1w9v2', title: 'Will Page interview' },
        { id: 'f1w9v3', title: 'Artist-centric royalties' },
        { id: 'f1w9v4', title: 'AI impact on music' },
      ]},
      { week: 10, title: 'UK Music Industry', videos: [
        { id: 'f1w10v1', title: 'UK music industry overview' },
        { id: 'f1w10v2', title: 'BRIT Awards behind scenes' },
        { id: 'f1w10v3', title: 'Great Escape festival' },
        { id: 'f1w10v4', title: 'BBC Radio 1 playlist' },
        { id: 'f1w10v5', title: 'AIM independent music' },
      ]},
      { week: 11, title: 'Interview Preparation', videos: [
        { id: 'f1w11v1', title: 'Music industry interview tips' },
        { id: 'f1w11v2', title: 'How I got my job at a label' },
        { id: 'f1w11v3', title: 'Industry news (stay current)' },
      ]},
      { week: 12, title: 'Your Industry Pitch', videos: [
        { id: 'f1w12v1', title: 'Voice memo: Industry story recorded' },
      ]},
    ]
  },
  {
    id: 'sync',
    title: 'Sync Specialist',
    icon: '🎬',
    weeks: [
      { week: 1, title: 'The Sync Workflow', videos: [
        { id: 's1w1v1', title: 'How sync licensing actually works' },
        { id: 's1w1v2', title: 'Music supervisor explains process' },
        { id: 's1w1v3', title: 'From brief to placement' },
        { id: 's1w1v4', title: 'Day in the life sync team' },
        { id: 's1w1v5', title: 'Sync agent explains role' },
      ]},
      { week: 2, title: 'Music Supervisors', videos: [
        { id: 's1w2v1', title: 'What music supervisors look for' },
        { id: 's1w2v2', title: 'Music supervisor interview compilation' },
        { id: 's1w2v3', title: 'Alexandra Patsavas interview' },
        { id: 's1w2v4', title: 'Randall Poster interview' },
        { id: 's1w2v5', title: 'Guild of Music Supervisors' },
        { id: 's1w2v6', title: 'How supervisors find music' },
      ]},
      { week: 3, title: 'Rights and Clearance', videos: [
        { id: 's1w3v1', title: 'Master vs sync rights explained' },
        { id: 's1w3v2', title: 'Music clearance process' },
        { id: 's1w3v3', title: 'Why songs get rejected (rights)' },
        { id: 's1w3v4', title: 'One stop vs two stop' },
        { id: 's1w3v5', title: 'Sample clearance nightmares' },
        { id: 's1w3v6', title: 'Pre-cleared music explained' },
      ]},
      { week: 4, title: 'Sync Fees and Money', videos: [
        { id: 's1w4v1', title: 'Sync fees explained' },
        { id: 's1w4v2', title: 'How sync fees are negotiated' },
        { id: 's1w4v3', title: 'TV vs film vs advert fees' },
        { id: 's1w4v4', title: 'Factors affecting sync fees' },
        { id: 's1w4v5', title: 'Gratis and low fee syncs' },
      ]},
      { week: 5, title: 'Reading Sync Briefs', videos: [
        { id: 's1w5v1', title: 'How to read a sync brief' },
        { id: 's1w5v2', title: 'What briefs actually mean' },
        { id: 's1w5v3', title: 'Common brief language' },
        { id: 's1w5v4', title: 'Responding to briefs' },
        { id: 's1w5v5', title: 'Brief red flags' },
      ]},
      { week: 6, title: 'Pitching Music', videos: [
        { id: 's1w6v1', title: 'How to pitch music for sync' },
        { id: 's1w6v2', title: 'What NOT to do when pitching' },
        { id: 's1w6v3', title: 'Building a pitch playlist' },
        { id: 's1w6v4', title: 'Following up professionally' },
        { id: 's1w6v5', title: 'Musicbed pitching tips' },
      ]},
      { week: 7, title: 'Catalogue Knowledge', videos: [
        { id: 's1w7v1', title: 'Building music knowledge' },
        { id: 's1w7v2', title: 'How sync teams organize music' },
        { id: 's1w7v3', title: 'Knowing your catalogue' },
        { id: 's1w7v4', title: 'Genre knowledge for sync' },
        { id: 's1w7v5', title: 'Deep cuts and hidden gems' },
      ]},
      { week: 8, title: 'Technical Requirements', videos: [
        { id: 's1w8v1', title: 'Stems for sync explained' },
        { id: 's1w8v2', title: 'Metadata for sync' },
        { id: 's1w8v3', title: 'Instrumental versions importance' },
        { id: 's1w8v4', title: 'Clean versions for sync' },
        { id: 's1w8v5', title: 'Alt mixes and edits' },
      ]},
      { week: 9, title: 'Media Types Deep Dive', videos: [
        { id: 's1w9v1', title: 'TV sync vs film sync' },
        { id: 's1w9v2', title: 'Advertising sync explained' },
        { id: 's1w9v3', title: 'Trailer music licensing' },
        { id: 's1w9v4', title: 'Video game music licensing' },
        { id: 's1w9v5', title: 'Promo music licensing' },
      ]},
      { week: 10, title: 'Case Studies - Iconic Placements', videos: [
        { id: 's1w10v1', title: 'Best TV music moments' },
        { id: 's1w10v2', title: 'Songs made famous by sync' },
        { id: 's1w10v3', title: 'Grey\'s Anatomy music legacy' },
        { id: 's1w10v4', title: 'Stranger Things music impact' },
        { id: 's1w10v5', title: 'Breaking Bad music choices' },
        { id: 's1w10v6', title: 'Peaky Blinders music' },
      ]},
      { week: 11, title: 'Production Music & Libraries', videos: [
        { id: 's1w11v1', title: 'Production music libraries explained' },
        { id: 's1w11v2', title: 'Library vs label sync' },
        { id: 's1w11v3', title: 'How libraries work' },
        { id: 's1w11v4', title: 'Epidemic Sound explained' },
        { id: 's1w11v5', title: 'Musicbed business model' },
      ]},
      { week: 12, title: 'Your Sync Career', videos: [
        { id: 's1w12v1', title: 'Careers in sync licensing' },
        { id: 's1w12v2', title: 'How I got into sync' },
        { id: 's1w12v3', title: 'Sync networking tips' },
        { id: 's1w12v4', title: 'Music Week sync conference' },
        { id: 's1w12v5', title: 'Sync award winners' },
      ]},
    ]
  },
  {
    id: 'marketing',
    title: 'Marketing Specialist',
    icon: '📱',
    weeks: [
      { week: 1, title: 'The Release Campaign', videos: [
        { id: 'm1w1v1', title: 'Music release campaign explained' },
        { id: 'm1w1v2', title: 'Damian Keyes 21 day plan' },
        { id: 'm1w1v3', title: 'How labels release music' },
        { id: 'm1w1v4', title: 'Pre-save campaigns explained' },
        { id: 'm1w1v5', title: 'Release week strategy' },
        { id: 'm1w1v6', title: 'Post-release marketing' },
      ]},
      { week: 2, title: 'Platform Deep Dive - Spotify', videos: [
        { id: 'm1w2v1', title: 'How Spotify algorithm works' },
        { id: 'm1w2v2', title: 'Spotify for Artists tutorial' },
        { id: 'm1w2v3', title: 'Editorial vs algorithmic playlists' },
        { id: 'm1w2v4', title: 'How to pitch to Spotify' },
        { id: 'm1w2v5', title: 'Release Radar explained' },
        { id: 'm1w2v6', title: 'Discover Weekly explained' },
      ]},
      { week: 3, title: 'Platform Deep Dive - TikTok', videos: [
        { id: 'm1w3v1', title: 'TikTok music marketing 2024' },
        { id: 'm1w3v2', title: 'How songs go viral on TikTok' },
        { id: 'm1w3v3', title: 'TikTok algorithm explained' },
        { id: 'm1w3v4', title: 'Labels using TikTok' },
        { id: 'm1w3v5', title: 'TikTok influencer campaigns' },
        { id: 'm1w3v6', title: 'TikTok trends to music success' },
      ]},
      { week: 4, title: 'Platform Deep Dive - Instagram & YouTube', videos: [
        { id: 'm1w4v1', title: 'Instagram Reels for music' },
        { id: 'm1w4v2', title: 'YouTube music marketing' },
        { id: 'm1w4v3', title: 'YouTube Shorts explained' },
        { id: 'm1w4v4', title: 'Instagram vs TikTok strategy' },
        { id: 'm1w4v5', title: 'Music video promotion' },
        { id: 'm1w4v6', title: 'Building artist community' },
      ]},
      { week: 5, title: 'Reading Streaming Data', videos: [
        { id: 'm1w5v1', title: 'Spotify for Artists analytics' },
        { id: 'm1w5v2', title: 'Chartmetric tutorial' },
        { id: 'm1w5v3', title: 'Understanding streaming data' },
        { id: 'm1w5v4', title: 'What metrics matter' },
        { id: 'm1w5v5', title: 'Data-driven music marketing' },
      ]},
      { week: 6, title: 'Paid Advertising', videos: [
        { id: 'm1w6v1', title: 'Facebook/Meta ads for music' },
        { id: 'm1w6v2', title: 'TikTok ads for artists' },
        { id: 'm1w6v3', title: 'YouTube ads for music' },
        { id: 'm1w6v4', title: 'Spotify ads explained' },
        { id: 'm1w6v5', title: 'Paid vs organic strategy' },
        { id: 'm1w6v6', title: 'Marketing budget allocation' },
      ]},
      { week: 7, title: 'Content Strategy', videos: [
        { id: 'm1w7v1', title: 'Content calendar for artists' },
        { id: 'm1w7v2', title: 'Behind the scenes content' },
        { id: 'm1w7v3', title: 'User generated content music' },
        { id: 'm1w7v4', title: 'Storytelling in music marketing' },
        { id: 'm1w7v5', title: 'Content repurposing' },
        { id: 'm1w7v6', title: 'Engagement strategies' },
      ]},
      { week: 8, title: 'PR & Playlisting', videos: [
        { id: 'm1w8v1', title: 'Music PR explained' },
        { id: 'm1w8v2', title: 'How to get blog coverage' },
        { id: 'm1w8v3', title: 'Playlist pitching strategy' },
        { id: 'm1w8v4', title: 'Working with PR agencies' },
        { id: 'm1w8v5', title: 'Press release for music' },
        { id: 'm1w8v6', title: 'UK music blogs and press' },
      ]},
      { week: 9, title: 'Campaign Case Studies', videos: [
        { id: 'm1w9v1', title: 'Viral music marketing campaigns' },
        { id: 'm1w9v2', title: 'How artists broke in 2024' },
        { id: 'm1w9v3', title: 'Billie Eilish marketing' },
        { id: 'm1w9v4', title: 'UK artist breakout stories' },
        { id: 'm1w9v5', title: 'Failed marketing campaigns' },
      ]},
      { week: 10, title: 'International Marketing', videos: [
        { id: 'm1w10v1', title: 'International music marketing' },
        { id: 'm1w10v2', title: 'Breaking artists globally' },
        { id: 'm1w10v3', title: 'Territory-specific marketing' },
        { id: 'm1w10v4', title: 'UK artists breaking US' },
        { id: 'm1w10v5', title: 'Asian music markets' },
      ]},
      { week: 11, title: 'Working With Artists', videos: [
        { id: 'm1w11v1', title: 'Working with artists marketing' },
        { id: 'm1w11v2', title: 'Marketing and artist relations' },
        { id: 'm1w11v3', title: 'Getting artist buy-in' },
        { id: 'm1w11v4', title: 'Creative vs commercial tension' },
        { id: 'm1w11v5', title: 'Managing artist expectations' },
      ]},
      { week: 12, title: 'Your Marketing Portfolio', videos: [
        { id: 'm1w12v1', title: 'Music marketing career' },
        { id: 'm1w12v2', title: 'Marketing portfolio tips' },
        { id: 'm1w12v3', title: 'Music marketing interview tips' },
      ]},
    ]
  },
  {
    id: 'ar',
    title: 'A&R Foundations',
    icon: '🎤',
    weeks: [
      { week: 1, title: 'What A&R Actually Is', videos: [
        { id: 'a1w1v1', title: 'What does A&R do' },
        { id: 'a1w1v2', title: 'A&R day in the life' },
        { id: 'a1w1v3', title: 'Modern A&R explained' },
        { id: 'a1w1v4', title: 'A&R myths debunked' },
        { id: 'a1w1v5', title: 'How A&R has changed' },
        { id: 'a1w1v6', title: 'A&R vs talent scout' },
      ]},
      { week: 2, title: 'Finding Artists', videos: [
        { id: 'a1w2v1', title: 'How A&Rs find artists' },
        { id: 'a1w2v2', title: 'A&R data tools' },
        { id: 'a1w2v3', title: 'Scouting on TikTok' },
        { id: 'a1w2v4', title: 'SoundCloud scouting' },
        { id: 'a1w2v5', title: 'Live show scouting' },
        { id: 'a1w2v6', title: 'Manager relationships' },
      ]},
      { week: 3, title: 'Evaluating Artists', videos: [
        { id: 'a1w3v1', title: 'What makes an artist signable' },
        { id: 'a1w3v2', title: 'A&R artist evaluation' },
        { id: 'a1w3v3', title: 'Beyond the music - artist package' },
        { id: 'a1w3v4', title: 'Red flags when signing' },
        { id: 'a1w3v5', title: 'Commercial vs artistic potential' },
        { id: 'a1w3v6', title: 'Evaluating live performance' },
      ]},
      { week: 4, title: 'Understanding Deals', videos: [
        { id: 'a1w4v1', title: 'Record deals explained' },
        { id: 'a1w4v2', title: '360 deal breakdown' },
        { id: 'a1w4v3', title: 'Distribution deals vs label deals' },
        { id: 'a1w4v4', title: 'Advance and recoupment' },
        { id: 'a1w4v5', title: 'Options in record contracts' },
        { id: 'a1w4v6', title: 'What artists want from labels' },
      ]},
      { week: 5, title: 'Demo Listening', videos: [
        { id: 'a1w5v1', title: 'How A&Rs listen to demos' },
        { id: 'a1w5v2', title: 'What A&Rs hear in 10 seconds' },
        { id: 'a1w5v3', title: 'Demo feedback tips' },
        { id: 'a1w5v4', title: 'Why demos get rejected' },
        { id: 'a1w5v5', title: 'Good demo vs bad demo' },
      ]},
      { week: 6, title: 'Artist Development', videos: [
        { id: 'a1w6v1', title: 'Artist development explained' },
        { id: 'a1w6v2', title: 'A&R and artist creative process' },
        { id: 'a1w6v3', title: 'Developing an artist\'s sound' },
        { id: 'a1w6v4', title: 'Artist development timeline' },
        { id: 'a1w6v5', title: 'Working with producers' },
        { id: 'a1w6v6', title: 'Songwriting camps explained' },
      ]},
      { week: 7, title: 'The A&R Meeting', videos: [
        { id: 'a1w7v1', title: 'A&R meeting process' },
        { id: 'a1w7v2', title: 'Pitching an artist to your label' },
        { id: 'a1w7v3', title: 'What makes a successful pitch' },
        { id: 'a1w7v4', title: 'A&R competition for artists' },
        { id: 'a1w7v5', title: 'Building internal support' },
      ]},
      { week: 8, title: 'Trends and Genre Knowledge', videos: [
        { id: 'a1w8v1', title: 'Music trends 2024' },
        { id: 'a1w8v2', title: 'How to spot trends early' },
        { id: 'a1w8v3', title: 'Genre evolution' },
        { id: 'a1w8v4', title: 'UK music scene trends' },
        { id: 'a1w8v5', title: 'Underground to mainstream' },
      ]},
      { week: 9, title: 'A&R and Other Departments', videos: [
        { id: 'a1w9v1', title: 'A&R and marketing working together' },
        { id: 'a1w9v2', title: 'Label departments explained' },
        { id: 'a1w9v3', title: 'A&R role in releases' },
        { id: 'a1w9v4', title: 'A&R and artist managers' },
      ]},
      { week: 10, title: 'A&R Stories and Case Studies', videos: [
        { id: 'a1w10v1', title: 'How artists got signed stories' },
        { id: 'a1w10v2', title: 'A&R signing stories' },
        { id: 'a1w10v3', title: 'Missed signings - artists labels passed on' },
        { id: 'a1w10v4', title: 'Bidding wars for artists' },
      ]},
      { week: 11, title: 'The A&R Career Path', videos: [
        { id: 'a1w11v1', title: 'How to get into A&R' },
        { id: 'a1w11v2', title: 'A&R career path' },
        { id: 'a1w11v3', title: 'A&R assistant role' },
        { id: 'a1w11v4', title: 'Building A&R reputation' },
        { id: 'a1w11v5', title: 'A&R networking' },
      ]},
      { week: 12, title: 'Your A&R Identity', videos: [
        { id: 'a1w12v1', title: 'A&R interview tips' },
        { id: 'a1w12v2', title: 'What labels look for in A&Rs' },
        { id: 'a1w12v3', title: 'A&R portfolio advice' },
      ]},
    ]
  },
  {
    id: 'publishing',
    title: 'Publishing & Royalties',
    icon: '💰',
    weeks: [
      { week: 1, title: 'What Is Music Publishing?', videos: [
        { id: 'p1w1v1', title: 'Music publishing explained simply' },
        { id: 'p1w1v2', title: 'Copyright in music' },
        { id: 'p1w1v3', title: 'Master vs publishing rights' },
        { id: 'p1w1v4', title: 'What does a music publisher do' },
        { id: 'p1w1v5', title: 'History of music publishing' },
        { id: 'p1w1v6', title: 'Songwriter vs recording artist' },
      ]},
      { week: 2, title: 'Royalty Types', videos: [
        { id: 'p1w2v1', title: 'Performance royalties explained' },
        { id: 'p1w2v2', title: 'Mechanical royalties explained' },
        { id: 'p1w2v3', title: 'Sync royalties explained' },
        { id: 'p1w2v4', title: 'Print royalties explained' },
        { id: 'p1w2v5', title: 'All royalty types compared' },
      ]},
      { week: 3, title: 'Collection Societies (UK Focus)', videos: [
        { id: 'p1w3v1', title: 'PRS for Music explained' },
        { id: 'p1w3v2', title: 'PPL explained' },
        { id: 'p1w3v3', title: 'MCPS explained' },
        { id: 'p1w3v4', title: 'PRS vs PPL difference' },
        { id: 'p1w3v5', title: 'How to register with PRS' },
      ]},
      { week: 4, title: 'The Publisher\'s Role', videos: [
        { id: 'p1w4v1', title: 'What music publishers do' },
        { id: 'p1w4v2', title: 'Why songwriters sign to publishers' },
        { id: 'p1w4v3', title: 'Publisher vs PRO' },
        { id: 'p1w4v4', title: 'Sub-publishing explained' },
        { id: 'p1w4v5', title: 'Publisher sync teams' },
        { id: 'p1w4v6', title: 'A&R in publishing' },
      ]},
      { week: 5, title: 'Streaming Royalties Deep Dive', videos: [
        { id: 'p1w5v1', title: 'How Spotify pays artists' },
        { id: 'p1w5v2', title: 'Streaming royalties flow' },
        { id: 'p1w5v3', title: 'Why streaming pays so little' },
        { id: 'p1w5v4', title: 'Pro-rata vs user-centric' },
        { id: 'p1w5v5', title: 'The streaming pie' },
      ]},
      { week: 6, title: 'Publishing Deals', videos: [
        { id: 'p1w6v1', title: 'Publishing deal types' },
        { id: 'p1w6v2', title: 'Publishing advance explained' },
        { id: 'p1w6v3', title: 'Co-publishing deal' },
        { id: 'p1w6v4', title: 'Admin deal explained' },
        { id: 'p1w6v5', title: 'Full publishing vs co-pub' },
        { id: 'p1w6v6', title: 'Publishing deal terms' },
      ]},
      { week: 7, title: 'Writer Splits and Credits', videos: [
        { id: 'p1w7v1', title: 'Songwriting splits explained' },
        { id: 'p1w7v2', title: 'How to split songwriting credits' },
        { id: 'p1w7v3', title: 'Producer credits and points' },
        { id: 'p1w7v4', title: 'Split sheets explained' },
        { id: 'p1w7v5', title: 'Sampling and publishing' },
        { id: 'p1w7v6', title: 'Interpolation explained' },
      ]},
      { week: 8, title: 'Metadata and Registration', videos: [
        { id: 'p1w8v1', title: 'Music metadata explained' },
        { id: 'p1w8v2', title: 'ISRC and ISWC codes' },
        { id: 'p1w8v3', title: 'Why songs don\'t get paid' },
        { id: 'p1w8v4', title: 'Registering songs properly' },
        { id: 'p1w8v5', title: 'The black box explained' },
      ]},
      { week: 9, title: 'Publishing and Sync Connection', videos: [
        { id: 'p1w9v1', title: 'Sync licensing publishing side' },
        { id: 'p1w9v2', title: 'Publisher sync vs label sync' },
        { id: 'p1w9v3', title: 'Clearing sync rights' },
        { id: 'p1w9v4', title: 'Sync fees publishing share' },
        { id: 'p1w9v5', title: 'Re-records and covers sync' },
      ]},
      { week: 10, title: 'Catalogue Acquisitions', videos: [
        { id: 'p1w10v1', title: 'Catalogue acquisitions explained' },
        { id: 'p1w10v2', title: 'Why catalogues are selling' },
        { id: 'p1w10v3', title: 'Hipgnosis Songs Fund' },
        { id: 'p1w10v4', title: 'Catalogue valuation' },
        { id: 'p1w10v5', title: 'Primary Wave, Round Hill' },
      ]},
      { week: 11, title: 'The Publishing Industry', videos: [
        { id: 'p1w11v1', title: 'Major publishers explained' },
        { id: 'p1w11v2', title: 'Independent publishers' },
        { id: 'p1w11v3', title: 'Careers in music publishing' },
        { id: 'p1w11v4', title: 'Publishing A&R explained' },
        { id: 'p1w11v5', title: 'Day in the life publishing' },
      ]},
      { week: 12, title: 'Your Publishing Knowledge', videos: [
        { id: 'p1w12v1', title: 'Publishing interview tips' },
        { id: 'p1w12v2', title: 'Publishing career advice' },
      ]},
    ]
  },
]

export default function ProgressTracker() {
  const [completedVideos, setCompletedVideos] = useState<Set<string>>(new Set())
  const [expandedCourses, setExpandedCourses] = useState<Set<string>>(new Set(['foundation']))
  const [isLoaded, setIsLoaded] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('ethan-progress')
    if (saved) {
      setCompletedVideos(new Set(JSON.parse(saved)))
    }
    setIsLoaded(true)
  }, [])

  // Save to localStorage when changed
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('ethan-progress', JSON.stringify(Array.from(completedVideos)))
    }
  }, [completedVideos, isLoaded])

  const toggleVideo = (videoId: string) => {
    setCompletedVideos(prev => {
      const next = new Set(prev)
      if (next.has(videoId)) {
        next.delete(videoId)
      } else {
        next.add(videoId)
      }
      return next
    })
  }

  const toggleCourse = (courseId: string) => {
    setExpandedCourses(prev => {
      const next = new Set(prev)
      if (next.has(courseId)) {
        next.delete(courseId)
      } else {
        next.add(courseId)
      }
      return next
    })
  }

  const getTotalVideos = () => {
    return courses.reduce((total, course) =>
      total + course.weeks.reduce((weekTotal, week) => weekTotal + week.videos.length, 0), 0)
  }

  const getCourseCompleted = (course: CourseData) => {
    return course.weeks.reduce((total, week) =>
      total + week.videos.filter(v => completedVideos.has(v.id)).length, 0)
  }

  const getCourseTotal = (course: CourseData) => {
    return course.weeks.reduce((total, week) => total + week.videos.length, 0)
  }

  const totalVideos = getTotalVideos()
  const totalCompleted = completedVideos.size
  const overallPercent = Math.round((totalCompleted / totalVideos) * 100)

  if (!isLoaded) {
    return (
      <main>
        <div className="container">
          <p>Loading your progress...</p>
        </div>
      </main>
    )
  }

  return (
    <main>
      <header className="header">
        <div className="container">
          <Link href="/" className="back-link">← Back</Link>
          <h1>Learning Progress</h1>
          <p>Track your journey through all 297 videos</p>
        </div>
      </header>

      <div className="container">
        {/* Overall Progress */}
        <section className="section">
          <div className="progress-overview card">
            <div className="progress-stats">
              <div className="stat-big">
                <span className="stat-number">{totalCompleted}</span>
                <span className="stat-label">/ {totalVideos} videos</span>
              </div>
              <div className="stat-percent">{overallPercent}%</div>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${overallPercent}%` }} />
            </div>
          </div>
        </section>

        {/* Course Breakdown */}
        <section className="section">
          <h2>Courses</h2>
          {courses.map(course => {
            const completed = getCourseCompleted(course)
            const total = getCourseTotal(course)
            const percent = Math.round((completed / total) * 100)
            const isExpanded = expandedCourses.has(course.id)

            return (
              <div key={course.id} className="course-section">
                <button
                  className="course-header"
                  onClick={() => toggleCourse(course.id)}
                >
                  <div className="course-header-left">
                    <span className="course-icon">{course.icon}</span>
                    <div className="course-info">
                      <h3>{course.title}</h3>
                      <span className="course-progress-text">{completed} / {total} videos ({percent}%)</span>
                    </div>
                  </div>
                  <div className="course-header-right">
                    <div className="mini-progress-bar">
                      <div className="mini-progress-fill" style={{ width: `${percent}%` }} />
                    </div>
                    <span className="expand-icon">{isExpanded ? '▼' : '▶'}</span>
                  </div>
                </button>

                {isExpanded && (
                  <div className="course-weeks">
                    {course.weeks.map(week => (
                      <div key={week.week} className="week-section">
                        <h4>Week {week.week}: {week.title}</h4>
                        <div className="video-list">
                          {week.videos.map(video => (
                            <label key={video.id} className="video-item">
                              <input
                                type="checkbox"
                                checked={completedVideos.has(video.id)}
                                onChange={() => toggleVideo(video.id)}
                                className="video-checkbox"
                              />
                              <span className={`video-title ${completedVideos.has(video.id) ? 'completed' : ''}`}>
                                {video.title}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </section>

        {/* Milestones */}
        <section className="section">
          <h2>Milestones</h2>
          <div className="milestones-grid">
            {[
              { count: 1, label: 'First video watched', icon: '🎬' },
              { count: 50, label: '50 videos watched', icon: '🔥' },
              { count: 100, label: '100 videos watched', icon: '💯' },
              { count: 150, label: '150 videos watched', icon: '🚀' },
              { count: 200, label: '200 videos watched', icon: '⭐' },
              { count: 297, label: 'All videos complete!', icon: '🏆' },
            ].map(milestone => (
              <div
                key={milestone.count}
                className={`milestone-card ${totalCompleted >= milestone.count ? 'achieved' : ''}`}
              >
                <span className="milestone-icon">{milestone.icon}</span>
                <span className="milestone-label">{milestone.label}</span>
                {totalCompleted >= milestone.count && <span className="milestone-check">✓</span>}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
