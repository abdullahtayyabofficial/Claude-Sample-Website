import { NextRequest, NextResponse } from 'next/server'

// Resend integration — requires RESEND_API_KEY and CONTACT_EMAIL env vars
// Set these in Vercel environment variables before deployment

interface ContactPayload {
  name: string
  email: string
  phone?: string
  businessType: string
  message: string
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactPayload

    if (!body.name || !body.email || !body.businessType || !body.message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_EMAIL

    if (!apiKey || !toEmail) {
      console.error('Missing RESEND_API_KEY or CONTACT_EMAIL env vars')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    const { Resend } = await import('resend')
    const resend = new Resend(apiKey)

    await resend.emails.send({
      from: 'Portfolio Contact <noreply@abdullahtayyab.com>',
      to: toEmail,
      replyTo: body.email,
      subject: `New enquiry from ${body.name} — ${body.businessType}`,
      text: [
        `Name: ${body.name}`,
        `Email: ${body.email}`,
        `Phone: ${body.phone || 'Not provided'}`,
        `Business Type: ${body.businessType}`,
        ``,
        `Message:`,
        body.message,
      ].join('\n'),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
