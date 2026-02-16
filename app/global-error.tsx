"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="fr">
      <body style={{ backgroundColor: "#DCDAD0", margin: 0 }}>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center", fontFamily: "Jost, sans-serif" }}>
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: 500,
                color: "#38261C",
                marginBottom: "1rem",
                textTransform: "uppercase",
              }}
            >
              Une erreur est survenue
            </h1>
            <button
              onClick={() => reset()}
              style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "0.875rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                border: "1px solid #38261C",
                background: "transparent",
                color: "#38261C",
                padding: "1rem 2rem",
                cursor: "pointer",
              }}
            >
              Réessayer
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
