import type { Metadata } from "next";
import LegalNav from "@/components/LegalNav";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

const { name, email, hours, address, legal } = siteConfig;

export const metadata: Metadata = {
  title: `プライバシーポリシー | ${name}`,
  description: `${name}のプライバシーポリシーをご確認ください。お客様の個人情報の取り扱いについて詳しく説明しています。`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <LegalNav />

      <main className="legal-page">
        <div className="legal-hero">
          <span className="legal-badge">法的情報</span>
          <h1>プライバシーポリシー</h1>
          <div className="legal-meta">
            <span><i className="ri-calendar-line"></i> 最終更新日：{legal.privacyUpdated}</span>
            <span><i className="ri-shield-check-line"></i> バージョン {legal.privacyVersion}</span>
          </div>
        </div>

        <div className="legal-highlight">
          {name}（以下「当社」）は、お客様の個人情報を適切に保護することを重要な責務と認識し、
          個人情報の保護に関する法律（個人情報保護法）および関連法令を遵守します。
          本ポリシーをお読みいただき、ご同意のうえサービスをご利用ください。
        </div>

        <div className="legal-section">
          <h2>1. 収集する個人情報</h2>
          <p>当社は、サービスの提供・改善を目的として、以下の個人情報を収集する場合があります。</p>
          <ul>
            <li>氏名・会社名・役職などの基本情報</li>
            <li>メールアドレス・電話番号などの連絡先情報</li>
            <li>請求先・配送先住所</li>
            <li>クレジットカード情報等の決済情報（暗号化処理済み）</li>
            <li>ウェブサイト利用状況（IPアドレス・Cookie・アクセスログ等）</li>
            <li>お問い合わせ内容・サポート対応履歴</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>2. 個人情報の利用目的</h2>
          <p>収集した個人情報は、以下の目的に限り利用します。</p>
          <table className="legal-table">
            <thead>
              <tr><th>利用目的</th><th>具体的な内容</th></tr>
            </thead>
            <tbody>
              <tr><td>サービスの提供・運営</td><td>ご依頼いただいた業務の遂行、契約の履行</td></tr>
              <tr><td>お問い合わせ対応</td><td>ご質問・ご相談へのご回答、サポート対応</td></tr>
              <tr><td>マーケティング</td><td>新サービス・キャンペーン情報のご案内（同意を得た場合のみ）</td></tr>
              <tr><td>サービス改善</td><td>統計分析によるサービス品質向上</td></tr>
              <tr><td>法的義務の履行</td><td>法令に基づく開示・保存義務への対応</td></tr>
            </tbody>
          </table>
        </div>

        <div className="legal-section">
          <h2>3. Cookieの利用について</h2>
          <p>
            当社のウェブサイトでは、サービスの利便性向上およびアクセス解析のためにCookieを使用しています。
            Cookieの利用に同意いただけない場合は、ブラウザの設定で無効化できますが、
            一部の機能がご利用いただけなくなる場合があります。
          </p>
          <ul>
            <li><strong>必須Cookie：</strong>サービスの基本機能に必要なもの</li>
            <li><strong>分析Cookie：</strong>Google Analytics等によるアクセス解析</li>
            <li><strong>広告Cookie：</strong>行動ターゲティング広告の配信</li>
            <li><strong>機能Cookie：</strong>言語設定・ログイン状態の保持</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>4. 第三者への提供</h2>
          <p>当社は、以下の場合を除き、お客様の個人情報を第三者に提供・開示しません。</p>
          <ul>
            <li>お客様ご本人の同意がある場合</li>
            <li>法令に基づく開示が必要な場合（裁判所命令・行政機関の要請等）</li>
            <li>人の生命・身体・財産の保護のために緊急に必要な場合</li>
            <li>業務委託先へ委託業務の遂行に必要な範囲で提供する場合</li>
          </ul>
          <div className="legal-highlight">
            業務委託先との間では、個人情報保護に関する契約を締結し、適切な管理・監督を行います。
          </div>
        </div>

        <div className="legal-section">
          <h2>5. 個人情報の保存期間</h2>
          <p>
            個人情報は、利用目的を達成するために必要な期間、または法令が定める保存期間の
            いずれか長い期間、安全に保管します。保存期間終了後は、速やかかつ安全な方法で削除します。
          </p>
        </div>

        <div className="legal-section">
          <h2>6. お客様の権利</h2>
          <p>お客様は、当社が保有する個人情報について、以下の権利を行使できます。</p>
          <ul>
            <li>個人情報の開示・確認請求</li>
            <li>個人情報の訂正・追加・削除請求</li>
            <li>個人情報の利用停止・消去請求</li>
            <li>第三者提供の停止請求</li>
            <li>メールマガジン等の配信停止（オプトアウト）</li>
          </ul>
          <p>ご請求の際は、下記「お問い合わせ先」までご連絡ください。本人確認のうえ、合理的な期間内に対応いたします。</p>
        </div>

        <div className="legal-section">
          <h2>7. セキュリティ対策</h2>
          <p>当社は、個人情報の漏洩・滅失・毀損を防止するため、以下のセキュリティ対策を実施しています。</p>
          <ul>
            <li>SSL/TLS暗号化通信によるデータ保護</li>
            <li>アクセス権限の厳格な管理と定期的な見直し</li>
            <li>セキュリティ教育・訓練の定期実施</li>
            <li>外部からの不正アクセス監視・防御システムの導入</li>
            <li>定期的なセキュリティ監査の実施</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>8. ポリシーの変更</h2>
          <p>
            当社は、法令の改正またはサービスの変更に伴い、本ポリシーを改定することがあります。
            重要な変更が生じた場合は、ウェブサイト上での告知またはメールにてお知らせします。
            改定後のポリシーは、当ページへの掲載をもって効力を生じるものとします。
          </p>
        </div>

        <div className="legal-section">
          <h2>9. お問い合わせ先</h2>
          <p>個人情報の取り扱いに関するご質問・ご請求は、以下までご連絡ください。</p>
          <div className="legal-highlight">
            <strong>{name} 個人情報保護担当窓口</strong><br />
            メール：{email.privacy}<br />
            受付時間：{hours}<br />
            住所：{address.full}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
