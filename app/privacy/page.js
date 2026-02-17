"use client";
import { C, MONO, SANS } from "../../lib/constants";
import { Nav, Btn, PageWrapper, Footer } from "../../components/ui";

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <h2 style={{ fontFamily: MONO, fontSize: 11, fontWeight: 700, color: C.accent, letterSpacing: 2, marginBottom: 10 }}>
        {title}
      </h2>
      <div style={{ fontSize: 13, color: C.dim, lineHeight: 1.7, display: "flex", flexDirection: "column", gap: 10 }}>
        {children}
      </div>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <PageWrapper>
      <Nav
        links={[
          { href: "/", label: "HOME" },
        ]}
        cta={{ href: "/assessment", label: "TAKE THE TEST" }}
      />
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "48px 24px 80px", position: "relative", zIndex: 5 }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontFamily: MONO, fontSize: 10, color: C.accent, letterSpacing: 2, marginBottom: 10 }}>LEGAL</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, letterSpacing: "-1px", lineHeight: 1.1, marginBottom: 16 }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: 12, color: C.muted, fontFamily: MONO }}>Last updated: February 15, 2026</p>
        </div>

        <Section title="1. OVERVIEW">
          <p>Alphawire ("we," "our," "us") respects your privacy. This Privacy Policy explains what information we collect, how we use it, and your rights regarding that information when you use our website and services.</p>
        </Section>

        <Section title="2. INFORMATION WE COLLECT">
          <p><strong style={{ color: C.text }}>Assessment Responses:</strong> When you take the Alphawire assessment, your answers are processed in your browser to generate your profile. Your individual survey responses are not stored on our servers or transmitted to any third party. All scoring happens client-side (on your device).</p>
          <p><strong style={{ color: C.text }}>Purchase Information:</strong> When you purchase a paid report, payment is processed by Stripe, Inc. We receive your email address, name, and payment confirmation from Stripe. We do not receive or store your full credit card number, bank account details, or other sensitive financial information — Stripe handles this directly.</p>
          <p><strong style={{ color: C.text }}>Profile Scores:</strong> When you make a purchase, your dimension scores and archetype index are passed to our payment processor so we can generate your personalized report. This data is linked to your purchase and email for fulfillment purposes only.</p>
          <p><strong style={{ color: C.text }}>Automatically Collected:</strong> Like most websites, we may collect basic analytics data including pages visited, time spent, browser type, device type, and referring URL. We do not use this data to personally identify you.</p>
        </Section>

        <Section title="3. HOW WE USE YOUR INFORMATION">
          <p>We use collected information to: (a) generate your personalized assessment results; (b) fulfill paid report purchases and deliver your report via email; (c) respond to customer support inquiries; (d) improve the Service through aggregated, anonymized usage analytics; (e) comply with legal obligations.</p>
          <p>We do NOT use your information to: (a) sell to third parties; (b) send unsolicited marketing emails; (c) build advertising profiles; (d) share individual assessment responses with anyone.</p>
        </Section>

        <Section title="4. DATA SHARING">
          <p>We do not sell, rent, or trade your personal information to third parties. We share data only with:</p>
          <p><strong style={{ color: C.text }}>Stripe, Inc.:</strong> Our payment processor. Stripe's handling of your payment information is governed by their own privacy policy at stripe.com/privacy.</p>
          <p><strong style={{ color: C.text }}>Vercel, Inc.:</strong> Our website hosting provider. Vercel may collect standard server logs. Vercel's privacy policy is at vercel.com/legal/privacy-policy.</p>
          <p>We may also disclose information if required by law, legal process, or to protect the rights, property, or safety of Alphawire or others.</p>
        </Section>

        <Section title="5. DATA RETENTION">
          <p>Assessment responses are processed in your browser and are not retained by us. Purchase records (email, name, scores, transaction details) are retained for as long as necessary to fulfill the purchase and comply with legal and accounting obligations. You may request deletion of your purchase data by contacting us.</p>
        </Section>

        <Section title="6. DATA SECURITY">
          <p>We implement reasonable security measures to protect your information. Payment processing is handled entirely by Stripe, which maintains PCI-DSS compliance. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>
        </Section>

        <Section title="7. COOKIES AND TRACKING">
          <p>The Service may use essential cookies for site functionality. We do not use advertising cookies or tracking pixels. If we implement analytics tools in the future, they will collect only anonymized, aggregate data.</p>
        </Section>

        <Section title="8. YOUR RIGHTS">
          <p>You have the right to: (a) request access to the personal data we hold about you; (b) request correction of inaccurate data; (c) request deletion of your data; (d) opt out of any future marketing communications. To exercise these rights, contact us at the support email listed on our Stripe checkout page.</p>
          <p>If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA). If you are located in the European Economic Area, you have additional rights under the General Data Protection Regulation (GDPR). Contact us to exercise these rights.</p>
        </Section>

        <Section title="9. CHILDREN'S PRIVACY">
          <p>The Service is not intended for individuals under the age of 18. We do not knowingly collect personal information from minors. If we learn that we have collected data from a minor, we will delete it promptly.</p>
        </Section>

        <Section title="10. THIRD-PARTY LINKS">
          <p>The Service may contain links to third-party websites (e.g., Stripe checkout, TradingView). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.</p>
        </Section>

        <Section title="11. CHANGES TO THIS POLICY">
          <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Your continued use of the Service after changes constitutes acceptance of the revised policy.</p>
        </Section>

        <Section title="12. CONTACT">
          <p>For privacy-related questions or data requests, contact us at the support email listed on our Stripe checkout page.</p>
        </Section>
      </div>

      <Footer />
    </PageWrapper>
  );
}
