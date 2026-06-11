import Link from "next/link";
import { siteConfig } from "@/config/site";

const { links } = siteConfig;

export default function Navbar() {
  return (
    <nav>
      <div className="part1 logo">
        <Link href={links.home}>
          <h1>
            <i className="ri-gemini-fill"></i>WizardZ
          </h1>
        </Link>
      </div>
      <div className="part2">
        <Link href={links.home}>
          <h3>私たちについて</h3>
        </Link>
        <Link href={links.services}>
          <h3>サービス</h3>
        </Link>
        <Link href={links.caseStudy}>
          <h3>活用事例</h3>
        </Link>
        <Link href={links.contact}>
          <h3>料金プラン</h3>
        </Link>
        <Link href={links.contact}>
          <h3>ブログ</h3>
        </Link>
        <Link href={links.contact} className="quote-btn">
          見積もりを依頼する
        </Link>
      </div>
    </nav>
  );
}
