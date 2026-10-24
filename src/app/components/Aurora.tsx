// Ambient animated background. Fixed, non-interactive, sits behind all content.
// Soft blurred colour blobs in the locked accent family (emerald / cyan / indigo).
export function Aurora() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div
        className="aurora-blob aurora-a"
        style={{
          top: "-10%",
          left: "-5%",
          width: "45vw",
          height: "45vw",
          background: "rgba(16,185,129,0.28)", // emerald
        }}
      />
      <div
        className="aurora-blob aurora-b"
        style={{
          top: "20%",
          right: "-10%",
          width: "40vw",
          height: "40vw",
          background: "rgba(34,211,238,0.22)", // cyan
        }}
      />
      <div
        className="aurora-blob aurora-c"
        style={{
          bottom: "-15%",
          left: "20%",
          width: "42vw",
          height: "42vw",
          background: "rgba(129,140,248,0.20)", // indigo
        }}
      />
      {/* darken so foreground text keeps contrast over the colour */}
      <div className="absolute inset-0 bg-zinc-950/55" />
    </div>
  );
}
