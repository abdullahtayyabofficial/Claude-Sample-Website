import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Abdullah Tayyab',
  description: 'Privacy policy for abdullahtayyab.com: how your information is collected, used, and protected.',
}

export default function PrivacyPolicyPage() {
  const lastUpdated = 'May 1, 2026'

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-light)] mb-3">
            Legal
          </p>
          <h1 className="text-3xl sm:text-4xl font-heading font-semibold text-[var(--color-text-primary)] mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-[var(--color-text-muted)]">Last updated: {lastUpdated}</p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-[var(--color-text-secondary)] leading-relaxed">

          <section>
            <h2 className="text-lg font-heading font-semibold text-[var(--color-text-primary)] mb-3">
              1. Overview
            </h2>
            <p>
              This Privacy Policy describes how Abdullah Tayyab (&ldquo;I&rdquo;, &ldquo;me&rdquo;, or &ldquo;my&rdquo;) collects, uses, and protects information that you provide when visiting <strong>abdullahtayyab.com</strong> (the &ldquo;Website&rdquo;). This is a personal portfolio and consulting website operated by a single individual, not a company or agency.
            </p>
            <p className="mt-3">
              By using this Website you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold text-[var(--color-text-primary)] mb-3">
              2. Information I Collect
            </h2>
            <p className="mb-3">I only collect information you voluntarily provide through the contact form:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Full Name:</strong> to address you properly</li>
              <li><strong>Email Address:</strong> to respond to your enquiry</li>
              <li><strong>Phone Number:</strong> optional, used only if you prefer a call</li>
              <li><strong>Business Type:</strong> to understand your context</li>
              <li><strong>Message:</strong> the content of your enquiry</li>
            </ul>
            <p className="mt-3">
              I do not collect any information automatically beyond what your browser sends as part of a standard HTTP request (e.g. IP address, browser type). This Website does not use analytics scripts, third-party tracking pixels, or advertising tags.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold text-[var(--color-text-primary)] mb-3">
              3. How I Use Your Information
            </h2>
            <p>Information submitted through the contact form is used solely to:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-3">
              <li>Respond to your enquiry or request</li>
              <li>Discuss a potential working relationship</li>
              <li>Follow up if you have asked me to do so</li>
            </ul>
            <p className="mt-3">
              I will not use your contact details for unsolicited marketing, newsletters, or any purpose beyond directly responding to your message.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold text-[var(--color-text-primary)] mb-3">
              4. Data Sharing
            </h2>
            <p>
              I do not sell, trade, rent, or share your personal information with any third parties, advertisers, or data brokers.
            </p>
            <p className="mt-3">
              Contact form submissions are processed via <strong>Resend</strong> (resend.com), an email delivery service. Resend receives your form data only to deliver the email notification to me. You can review Resend&apos;s privacy policy at <a href="https://resend.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[var(--color-brand-light)] hover:underline">resend.com/privacy-policy</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold text-[var(--color-text-primary)] mb-3">
              5. Data Retention
            </h2>
            <p>
              Your contact information is retained only for as long as necessary to conduct the conversation you initiated, or until you request its deletion. I do not store contact form submissions in any database. Messages are delivered by email and kept in my inbox.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold text-[var(--color-text-primary)] mb-3">
              6. Cookies
            </h2>
            <p>
              This Website does not use cookies for tracking, analytics, or advertising purposes. The site may use minimal technical cookies required for basic functionality (e.g. session state), but no personally identifiable information is stored in cookies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold text-[var(--color-text-primary)] mb-3">
              7. External Links
            </h2>
            <p>
              This Website contains links to external platforms including LinkedIn, Facebook, and Instagram. I am not responsible for the privacy practices of those platforms. Please review their respective privacy policies when visiting those sites.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold text-[var(--color-text-primary)] mb-3">
              8. Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-3">
              <li>Request access to any personal data I hold about you</li>
              <li>Request correction or deletion of your personal data</li>
              <li>Withdraw consent at any time by contacting me directly</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please email me at{' '}
              <a
                href="mailto:abdullahtayyab.805@gmail.com"
                className="text-[var(--color-brand-light)] hover:underline"
              >
                abdullahtayyab.805@gmail.com
              </a>
              . I will respond within 7 business days.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold text-[var(--color-text-primary)] mb-3">
              9. Security
            </h2>
            <p>
              This Website is served over HTTPS. While I take reasonable precautions to protect your information, no method of transmission over the internet is 100% secure. I cannot guarantee absolute security of data transmitted to this Website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold text-[var(--color-text-primary)] mb-3">
              10. Changes to This Policy
            </h2>
            <p>
              I may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated &ldquo;Last updated&rdquo; date. Continued use of the Website after changes constitutes acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold text-[var(--color-text-primary)] mb-3">
              11. Contact
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please contact me:
            </p>
            <div className="mt-4 p-5 rounded-xl bg-[var(--color-surface-muted)] border border-[var(--color-border)]">
              <p className="font-semibold text-[var(--color-text-primary)]">Abdullah Tayyab</p>
              <p>
                Email:{' '}
                <a
                  href="mailto:abdullahtayyab.805@gmail.com"
                  className="text-[var(--color-brand-light)] hover:underline"
                >
                  abdullahtayyab.805@gmail.com
                </a>
              </p>
              <p>Website: abdullahtayyab.com</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
