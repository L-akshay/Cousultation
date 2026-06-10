import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const { name, tagline, links } = siteConfig;

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h2>
            <i className="ri-gemini-fill"></i>{name}
          </h2>
          <p dangerouslySetInnerHTML={{ __html: tagline.replace("、", "、<br />") }} />
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>サービス</h4>
            <ul>
              <li><Link href={links.services}>検索エンジン最適化</Link></li>
              <li><Link href={links.services}>クリック課金広告</Link></li>
              <li><Link href={links.services}>SNSマーケティング</Link></li>
              <li><Link href={links.services}>メールマーケティング</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>企業情報</h4>
            <ul>
              <li><Link href={links.home}>ホーム</Link></li>
              <li><Link href={links.caseStudy}>導入事例</Link></li>
              <li><Link href={links.contact}>お問い合わせ</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>法的情報</h4>
            <ul>
              <li><Link href={links.privacyPolicy}>プライバシーポリシー</Link></li>
              <li><Link href={links.termsOfService}>利用規約</Link></li>
              <li><Link href={links.contact}>お問い合わせ</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
        <div className="footer-legal-links">
          <Link href={links.privacyPolicy}>プライバシーポリシー</Link>
          <span>|</span>
          <Link href={links.termsOfService}>利用規約</Link>
          <span>|</span>
          <Link href={links.contact}>お問い合わせ</Link>
        </div>
      </div>
    </footer>
  );
}
