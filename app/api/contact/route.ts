import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
    try {
        const { clinic, email, phone, volume, message } = await req.json()

        // text fallback
        text: `Clinic: ${clinic}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nVolume: ${volume}\nMessage: ${message}`

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        })

        await transporter.sendMail({
            from: `"${clinic}" <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER,
            replyTo: email,
            subject: `New Demo Request — ${clinic}`,
            text: `Clinic: ${clinic}\nEmail: ${email}\nVolume: ${volume}\nMessage: ${message}`, // fallback for plain-text clients
            html: `
  <div style="font-family: Arial, Helvetica, sans-serif; max-width: 560px; margin: 0 auto; background: #f6f6f6; padding: 24px;">
    <div style="background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #eee;">
      <div style="background: #e11d2e; padding: 20px 28px;">
        <h1 style="color: #fff; font-size: 18px; margin: 0; letter-spacing: -0.02em;">New Demo Request</h1>
      </div>
      <div style="padding: 28px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #333;">
          <tr>
            <td style="padding: 10px 0; font-weight: bold; width: 140px; border-bottom: 1px solid #f0f0f0;">Clinic Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${clinic}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #f0f0f0;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
              <a href="mailto:${email}" style="color: #e11d2e; text-decoration: none;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #f0f0f0;">Phone</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${phone || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #f0f0f0;">Patient Volume</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${volume || 'Not specified'}</td>
          </tr>
        </table>

        <div style="margin-top: 20px;">
          <p style="font-weight: bold; font-size: 14px; color: #333; margin-bottom: 8px;">Additional Details</p>
          <p style="font-size: 14px; color: #555; line-height: 1.6; background: #fafafa; padding: 14px 16px; border-radius: 8px; border: 1px solid #f0f0f0;">
            ${message ? message.replace(/\n/g, '<br/>') : 'No additional details provided.'}
          </p>
        </div>

        <a href="mailto:${email}" style="display: inline-block; margin-top: 24px; background: #e11d2e; color: #fff; text-decoration: none; padding: 12px 22px; border-radius: 8px; font-size: 13px; font-weight: bold;">
          Reply to ${clinic}
        </a>
      </div>
    </div>
    <p style="text-align: center; font-size: 11px; color: #999; margin-top: 16px;">
      Sent from your CareSync Landing Page's request form.
    </p>
  </div>
  `,
        })

        return NextResponse.json({ success: true })
    } catch (err) {
        console.error(err)
        return NextResponse.json({ success: false, error: 'Failed to send' }, { status: 500 })
    }
}