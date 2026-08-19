export function WindowsStationStatic() {
  return (
    <div style={{ maxWidth: "1000px", margin: "40px auto", padding: "20px", color: "#eee9df", background: "#0e0e0d", fontFamily: "sans-serif", border: "1px solid rgba(255,255,255,0.1)" }}>
      <div style={{ background: "#131312", padding: "30px" }}>
        <span style={{ fontSize: "11px", color: "#d9283f", textTransform: "uppercase", letterSpacing: "1px", fontFamily: "monospace" }}>MANOS ABIERTAS / ESTAÇÃO TÉCNICA</span>
        <h2 style={{ fontSize: "28px", color: "#ffffff", margin: "15px 0" }}>Estação Windows & Ferramentas Essenciais</h2>
        <p style={{ fontSize: "13px", color: "#a09a90", lineHeight: "1.6", marginBottom: "25px" }}>
          Mimetização segura de CMD, PowerShell, Bloco de Notas e Explorador de Arquivos integrada ao Manos Abiertas para apoio educacional e tecnológico.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "15px" }}>
          <div style={{ padding: "15px", border: "1px solid rgba(255,255,255,0.08)", background: "#191917" }}>
            <strong style={{ display: "block", color: "#fff", fontSize: "12px", marginBottom: "5px", fontFamily: "monospace" }}>CMD Seguro</strong>
            <span style={{ color: "#8a847b", fontSize: "11px" }}>Simulador de terminal.</span>
          </div>
          <div style={{ padding: "15px", border: "1px solid rgba(255,255,255,0.08)", background: "#191917" }}>
            <strong style={{ display: "block", color: "#fff", fontSize: "12px", marginBottom: "5px", fontFamily: "monospace" }}>PowerShell</strong>
            <span style={{ color: "#8a847b", fontSize: "11px" }}>Automação e objetos.</span>
          </div>
          <div style={{ padding: "15px", border: "1px solid rgba(255,255,255,0.08)", background: "#191917" }}>
            <strong style={{ display: "block", color: "#fff", fontSize: "12px", marginBottom: "5px", fontFamily: "monospace" }}>Notepad & Explorer</strong>
            <span style={{ color: "#8a847b", fontSize: "11px" }}>Gerenciamento local.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
