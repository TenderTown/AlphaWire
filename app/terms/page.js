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

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p style={{ fontSize: 12, color: C.muted, fontFamily: MONO }}>Last updated: February 15, 2026</p>
        </div>

        <Section title="1. ACCEPTANCE OF TERMS">
          <p>By accessing or using the Alphawire website (alpha-wire.vercel.app) and any associated services ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service.</p>
        </Section>

        <Section title="2. DESCRIPTION OF SERVICE">
          <p>Alphawire provides a psychometric assessment tool that measures behavioral traits and generates a trader profile based on your responses. The Service includes a free assessment with limited results and paid reports with detailed analysis.</p>
          <p>Alphawire is an educational and self-awareness tool. It is NOT a financial advisory service, investment platform, brokerage, or trading system. No part of the Service constitutes financial advice, investment advice, trading advice, or any other form of professional financial guidance.</p>
        </Section>

        <Section title="3. NOT FINANCIAL ADVICE">
          <p><strong style={{ color: C.text }}>IMPORTANT DISCLAIMER:</strong> The information provided by Alphawire, including but not limited to trader profiles, archetype descriptions, strategy alignment recommendations, risk prescriptions, and any TradingView indicators, is for educational and informational purposes only. Nothing in the Service should be construed as a recommendation to buy, sell, or hold any financial instrument.</p>
          <p>Trading and investing involve substantial risk of loss. Past performance does not guarantee future results. You are solely responsible for your own trading and investment decisions. Alphawire and its operators are not liable for any financial losses incurred as a result of using information from the Service.</p>
          <p>You should consult with a qualified financial advisor before making any investment or trading decisions.</p>
        </Section>

        <Section title="4. ACCOUNTS AND PURCHASES">
          <p>Certain features of the Service require payment. By making a purchase, you agree to provide accurate payment information and authorize us to charge your payment method for the amount specified. All sales of digital products are final. Refund requests may be considered on a case-by-case basis within 14 days of purchase by contacting our support email.</p>
          <p>Prices are subject to change without notice. Any price changes will not affect purchases already completed.</p>
        </Section>

        <Section title="5. INTELLECTUAL PROPERTY">
          <p>The Alphawire assessment system, including the nine-dimension framework, all survey questions, scoring methodology, archetype system, composite scoring formulas, tension analysis framework, strategy alignment matrix, and all associated content, is proprietary intellectual property.</p>
          <p>You may not reproduce, distribute, modify, reverse-engineer, or create derivative works from any portion of the Service, assessment instrument, or reports without written permission. Your purchase of a report grants you a personal, non-transferable, non-exclusive license to use the report for your own individual purposes.</p>
        </Section>

        <Section title="6. USER CONDUCT">
          <p>You agree not to: (a) share, resell, or redistribute purchased reports or indicators; (b) attempt to reverse-engineer the assessment scoring system; (c) use the Service for any unlawful purpose; (d) misrepresent your identity or affiliation; (e) interfere with the operation of the Service.</p>
        </Section>

        <Section title="7. ACCURACY OF ASSESSMENT">
          <p>The Alphawire assessment measures self-reported behavioral tendencies. Results depend on the accuracy and honesty of your responses. No psychometric assessment is 100% accurate. Your profile is a guide, not a definitive classification. Profiles may change over time as you take the assessment again.</p>
          <p>Alphawire makes no guarantees regarding the accuracy, completeness, or usefulness of any profile, report, or recommendation generated by the Service.</p>
        </Section>

        <Section title="8. TRADINGVIEW INDICATORS">
          <p>TradingView indicators provided as part of paid packages are educational tools calibrated to your profile. They are NOT trading signals and should NOT be used as the sole basis for trading decisions. The indicators do not guarantee profits and are provided "as-is" without warranty of any kind.</p>
        </Section>

        <Section title="9. LIMITATION OF LIABILITY">
          <p>To the maximum extent permitted by law, Alphawire and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, trading losses, data loss, or other intangible losses, resulting from your use of or inability to use the Service.</p>
          <p>Our total liability for any claim arising from the Service shall not exceed the amount you paid for the specific product or service giving rise to the claim.</p>
        </Section>

        <Section title="10. INDEMNIFICATION">
          <p>You agree to indemnify and hold harmless Alphawire, its operators, and affiliates from any claims, losses, damages, liabilities, and expenses (including legal fees) arising from your use of the Service, your trading or investment activities, or your violation of these Terms.</p>
        </Section>

        <Section title="11. MODIFICATIONS">
          <p>We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated date. Your continued use of the Service after changes constitutes acceptance of the modified Terms.</p>
        </Section>

        <Section title="12. GOVERNING LAW">
          <p>These Terms are governed by the laws of the State of Michigan, United States, without regard to conflict of law principles. Any disputes shall be resolved in the courts located in Michigan.</p>
        </Section>

        <Section title="13. CONTACT">
          <p>For questions about these Terms, contact us at the support email listed on our Stripe checkout page.</p>
        </Section>
      </div>

      <Footer />
    </PageWrapper>
  );
}
