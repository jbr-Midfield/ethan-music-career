'use client'

import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export interface Company {
  name: string
  lat: number
  lng: number
  area: string
  type: 'Major Label' | 'Indie Label' | 'Publishing' | 'Sync' | 'Management' | 'Dance'
  careers?: string
  sublabels?: string[]
}

interface CompanyMapProps {
  companies: Company[]
}

// Custom marker icons by company type
const createIcon = (color: string) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      background-color: ${color};
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 2px 5px rgba(0,0,0,0.3);
    "></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12]
  })
}

const typeColors: Record<string, string> = {
  'Major Label': '#6c5ce7',  // Purple (matches accent)
  'Indie Label': '#00b894',  // Green
  'Publishing': '#0984e3',   // Blue
  'Sync': '#e17055',         // Orange
  'Management': '#fdcb6e',   // Yellow
  'Dance': '#e84393'         // Pink
}

export default function CompanyMap({ companies }: CompanyMapProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div style={{
        height: '400px',
        background: '#f0f0f0',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#666'
      }}>
        Loading map...
      </div>
    )
  }

  // Center on London
  const londonCenter: [number, number] = [51.5074, -0.1278]

  return (
    <div style={{ marginBottom: '2rem' }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '1rem',
        fontSize: '0.9rem'
      }}>
        {Object.entries(typeColors).map(([type, color]) => (
          <div key={type} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              backgroundColor: color,
              border: '2px solid white',
              boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
            }} />
            <span>{type}</span>
          </div>
        ))}
      </div>

      <MapContainer
        center={londonCenter}
        zoom={12}
        style={{
          height: '400px',
          width: '100%',
          borderRadius: '12px',
          zIndex: 1
        }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {companies.map((company, index) => (
          <Marker
            key={index}
            position={[company.lat, company.lng]}
            icon={createIcon(typeColors[company.type] || '#6c5ce7')}
          >
            <Popup>
              <div style={{ minWidth: '150px' }}>
                <strong style={{ fontSize: '1rem' }}>{company.name}</strong>
                <br />
                <span style={{ color: '#666' }}>{company.type}</span>
                <br />
                <span style={{ color: '#888', fontSize: '0.9rem' }}>{company.area}</span>
                {company.careers && (
                  <>
                    <br />
                    <a
                      href={company.careers}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#6c5ce7', fontSize: '0.9rem' }}
                    >
                      View Careers Page
                    </a>
                  </>
                )}
                {company.sublabels && company.sublabels.length > 0 && (
                  <>
                    <br />
                    <span style={{ fontSize: '0.85rem', color: '#888' }}>
                      Labels: {company.sublabels.join(', ')}
                    </span>
                  </>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
