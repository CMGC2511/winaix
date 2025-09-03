"use client";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <h1 style={{ fontSize: 34, fontWeight: 800, marginBottom: 12 }}>Winaix — IA de futebol com transparência</h1>
      <p style={{ color: "#555", maxWidth: 700 }}>
        Previsões calibradas para as 10 principais ligas. Edge real vs. odds, explicações claras e gestão de banca integrada.
      </p>
      <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
        <Link href="/pricing" style={{ padding: "10px 16px", background: "#111", color: "#fff", borderRadius: 10, textDecoration: "none" }}>
          Ver Planos
        </Link>
        <Link href="/privacy" style={{ padding: "10px 16px", background: "#f1f1f1", color: "#111", borderRadius: 10, textDecoration: "none" }}>
          Como tratamos os dados
        </Link>
      </div>
    </section>
  );
}
