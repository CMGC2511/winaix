"use client";

function openCheckout(priceId: string) {
  (window as any).paddle?.Checkout.open({ items: [{ priceId, quantity: 1 }] });
}

const card: React.CSSProperties = { border: "1px solid #eee", borderRadius: 14, padding: 20, width: "100%", maxWidth: 420 };

export default function PricingPage() {
  const basic = process.env.NEXT_PUBLIC_PRICE_BASIC!;
  const premium = process.env.NEXT_PUBLIC_PRICE_PREMIUM!;
  const token = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;

  return (
    <div>
      <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>Planos</h1>
      <p style={{ color: "#555", marginBottom: 24 }}>Escolhe o plano certo para ti.</p>

      {!token && (
        <div style={{ background: "#fff3cd", border: "1px solid #ffe69c", padding: 12, borderRadius: 8, marginBottom: 16 }}>
          ⚠️ Falta o <b>NEXT_PUBLIC_PADDLE_CLIENT_TOKEN</b> em <code>.env.local</code>. O checkout não vai abrir.
        </div>
      )}

      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        <div style={card}>
          <h2 style={{ fontSize: 20, fontWeight: 700 }}>Básico</h2>
          <div style={{ fontSize: 26, fontWeight: 800, margin: "8px 0" }}>80€ <span style={{ fontSize: 14, color: "#666" }}>/ ano</span></div>
          <ul style={{ lineHeight: 1.8, marginBottom: 16 }}>
            <li>Previsões 1X2 / Over-Under / BTTS</li>
            <li>10 ligas principais</li>
            <li>Histórico e ROI por liga</li>
            <li>Relatório mensal no painel</li>
          </ul>
          <button onClick={() => openCheckout(basic)} style={{ padding: "10px 14px", borderRadius: 10, background: "black", color: "white", border: "none" }}>
            Comprar Básico
          </button>
        </div>

        <div style={card}>
          <h2 style={{ fontSize: 20, fontWeight: 700 }}>Premium</h2>
          <div style={{ fontSize: 26, fontWeight: 800, margin: "8px 0" }}>150€ <span style={{ fontSize: 14, color: "#666" }}>/ ano</span></div>
          <ul style={{ lineHeight: 1.8, marginBottom: 16 }}>
            <li>Tudo do Básico</li>
            <li>Picks High-Confidence</li>
            <li>Alertas Telegram/Email</li>
            <li>Bankroll coach + simulação</li>
            <li>API token (read-only)</li>
          </ul>
          <button onClick={() => openCheckout(premium)} style={{ padding: "10px 14px", borderRadius: 10, background: "#4f46e5", color: "white", border: "none" }}>
            Comprar Premium
          </button>
        </div>
      </div>

      <p style={{ color: "#666", fontSize: 12, marginTop: 16 }}>
        * Pagamentos e faturação geridos pela Paddle (Merchant of Record).
      </p>
    </div>
  );
}
