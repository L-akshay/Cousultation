export default function Navbar() {
  return (
    <nav>
      <div className="part1 logo">
        <h1>
          <i className="ri-gemini-fill"></i>WizardZ
        </h1>
      </div>
      <div className="part2">
        <h3>私たちについて</h3>
        <h3>サービス</h3>
        <h3>活用事例</h3>
        <h3>料金プラン</h3>
        <h3>ブログ</h3>
        <button>見積もりを依頼する</button>
      </div>
    </nav>
  );
}
