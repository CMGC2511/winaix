"use client";
import Link from "next/link";
export default function NavBar() {
  return (
    <header style={{ borderBottom: "1px solid #eee", padding: "12px 16px" }}>
      <strong>Winaix</strong> · <Link href="/pricing">Preços</Link> · <Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link>
    </header>
  );
}
