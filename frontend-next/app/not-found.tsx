export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
        padding: 24,
      }}
    >
      <img
        src="/notFound.png"
        alt="Portfólio não encontrado"
        style={{ width: "min(840px, 90vw)"}}
      />

      <h1 style={{ fontSize: 33, fontWeight: 800 }}>
        Portfólio não encontrado
      </h1>
    </main>
  );
}