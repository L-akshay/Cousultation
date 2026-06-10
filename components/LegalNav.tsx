import Link from "next/link";

export default function LegalNav() {
  return (
    <nav className="legal-nav">
      <div className="part1 logo">
        <Link href="/">
          <h1>
            <i className="ri-gemini-fill"></i>WizardZ
          </h1>
        </Link>
      </div>
      <div className="part2">
        <Link href="/#services-section"><h3>サービス</h3></Link>
        <Link href="/#caseStudy-section"><h3>導入事例</h3></Link>
        <Link href="/contact"><h3>お問い合わせ</h3></Link>
        <Link href="/privacy-policy"><h3>プライバシーポリシー</h3></Link>
        <Link href="/terms-of-service"><h3>利用規約</h3></Link>
      </div>
    </nav>
  );
}
