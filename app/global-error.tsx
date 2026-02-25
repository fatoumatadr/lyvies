"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="fr">
      <body style={{ backgroundColor: "#F5EDE0", margin: 0 }}>
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
                color: "#3B2218",
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
                border: "1px solid #3B2218",
                background: "transparent",
                color: "#3B2218",
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
