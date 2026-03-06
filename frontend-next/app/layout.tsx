export const metadata = {
  title: "Portfolio",
  description: "Public portfolio page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, fontFamily: "sans-serif", background: "#0b0b0b", color: "#fff" }}>
        {children}
      </body>
    </html>
  );
}