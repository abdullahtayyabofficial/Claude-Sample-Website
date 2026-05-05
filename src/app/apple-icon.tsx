import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'linear-gradient(135deg, #010738 0%, #15a1df 100%)',
          borderRadius: '40px',
        }}
      >
        <span
          style={{
            color: 'white',
            fontSize: 82,
            fontWeight: 700,
            letterSpacing: '-3px',
            fontFamily: 'sans-serif',
            lineHeight: 1,
          }}
        >
          AT
        </span>
      </div>
    ),
    { ...size },
  )
}
