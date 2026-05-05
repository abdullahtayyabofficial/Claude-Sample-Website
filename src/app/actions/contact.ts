'use server'

import { Resend } from 'resend'

export async function sendContactEmail(data: {
  name: string
  email: string
  phone?: string
  businessType: string
  message: string
}): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_EMAIL

  if (!apiKey || !toEmail) {
    console.error('Missing RESEND_API_KEY or CONTACT_EMAIL env vars')
    return { success: false, error: 'Server configuration error' }
  }

  try {
    const resend = new Resend(apiKey)

    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: toEmail,
      replyTo: data.email,
      subject: `New enquiry from ${data.name} — ${data.businessType}`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || 'Not provided'}`,
        `Business Type: ${data.businessType}`,
        '',
        'Message:',
        data.message,
      ].join('\n'),
    })

    if (error) {
      console.error('Resend error:', error)
      return { success: false, error: 'Failed to send email' }
    }

    return { success: true }
  } catch (err) {
    console.error('Contact action error:', err)
    return { success: false, error: 'Internal error' }
  }
}
