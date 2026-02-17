"use client";
import { C, MONO } from "../lib/constants";
import { Nav, Btn, PageWrapper, Footer } from "../components/ui";

export default function NotFound() {
  return (
    <PageWrapper>
      <Nav
        links={[{ href: "/", label: "HOME" }]}
        cta={{ href: "/assessment", label: "TAKE THE TEST" }}
      />
      <div style={{
        maxWidth: 500, margin: "0 auto", padding: "120px 24px",
        textAlign: "center", position: "relative", zIndex: 5,
      }}>
        <div style={{
          fontFamily: MONO, fontSize: 80, fontWeight: 900,
          color: C.accent, lineHeight: 1, marginBottom: 12, opacity: 0.3,
        }}>
          404
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>
          Signal Not Found
        </h1>
        <p style={{ fontSize: 14, color: C.dim, lineHeight: 1.6, marginBottom: 32 }}>
          This page doesn&apos;t exist — kind of like a trading edge that was never there.
          Let&apos;s get you back on track.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <Btn primary href="/">BACK TO HOME</Btn>
          <Btn href="/assessment">TAKE THE TEST</Btn>
        </div>
      </div>
      <Footer />
    </PageWrapper>
  );
}
