import type { Metadata } from "next";
import LegalNav from "@/components/LegalNav";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

const { name, email, phone, hours, hoursShort, address, metadata: meta } = siteConfig;

export const metadata: Metadata = {
  title: `お問い合わせ | ${name}`,
  description: `${name}へのご相談・お問い合わせはこちらから。初回相談は無料です。`,
};

export default function ContactPage() {
  return (
    <>
      <LegalNav />

      <main className="contact-page">
        {/* Hero */}
        <div className="contact-page-hero">
          <span className="legal-badge">お問い合わせ</span>
          <h1>いつでも、お気軽に<br />ご相談ください</h1>
          <p>
            サービスのご質問、お見積もりのご依頼、その他なんでもお気軽にどうぞ。
            専任スタッフが1営業日以内にご返信いたします。
          </p>
        </div>

        <div className="contact-page-grid">
          {/* Form */}
          <div className="contact-form-card">
            <h2>メッセージを送る</h2>
            <form>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="lastName">姓</label>
                  <input type="text" id="lastName" placeholder="山田" />
                </div>
                <div className="form-group">
                  <label htmlFor="firstName">名</label>
                  <input type="text" id="firstName" placeholder="太郎" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="company">会社名</label>
                <input type="text" id="company" placeholder="株式会社○○" />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  メールアドレス <span style={{ color: "#e00" }}>*</span>
                </label>
                <input type="email" id="email" placeholder="taro@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">電話番号</label>
                <input type="tel" id="phone" placeholder={phone} />
              </div>
              <div className="form-group">
                <label htmlFor="service">ご興味のあるサービス</label>
                <select id="service">
                  <option value="">選択してください</option>
                  <option value="seo">検索エンジン最適化（SEO）</option>
                  <option value="ppc">クリック課金広告（PPC）</option>
                  <option value="sns">SNSマーケティング</option>
                  <option value="email">メールマーケティング</option>
                  <option value="other">その他・複数のサービス</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="budget">月額予算の目安</label>
                <select id="budget">
                  <option value="">選択してください</option>
                  <option value="under30">30万円未満</option>
                  <option value="30to100">30〜100万円</option>
                  <option value="100to300">100〜300万円</option>
                  <option value="over300">300万円以上</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">
                  お問い合わせ内容 <span style={{ color: "#e00" }}>*</span>
                </label>
                <textarea
                  id="message"
                  placeholder="ご相談内容・ご要望をご記入ください"
                  required
                ></textarea>
              </div>
              <button type="submit" className="form-submit-btn">
                送信する <i className="ri-send-plane-line"></i>
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="contact-info-card">
            <h2>連絡先情報</h2>

            <div className="info-item">
              <div className="info-icon">
                <i className="ri-map-pin-line"></i>
              </div>
              <div className="info-text">
                <h4>所在地</h4>
                <p>
                  {address.zip}<br />
                  {address.prefecture}{address.city}<br />
                  {address.building}
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="ri-mail-line"></i>
              </div>
              <div className="info-text">
                <h4>メールアドレス</h4>
                <p>{email.info}<br />{email.support}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="ri-phone-line"></i>
              </div>
              <div className="info-text">
                <h4>電話番号</h4>
                <p>{phone}<br />受付時間：{hoursShort}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="ri-time-line"></i>
              </div>
              <div className="info-text">
                <h4>営業時間</h4>
                <p>{hoursShort}<br />土・日・祝日：休業</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="ri-customer-service-2-line"></i>
              </div>
              <div className="info-text">
                <h4>返答目安</h4>
                <p>お問い合わせ受付後、<br />1営業日以内にご返信いたします</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="contact-map">
          <div className="contact-map-placeholder">
            <i className="ri-map-2-line"></i>
            <p>{address.mapLabel}</p>
          </div>
        </div>

        {/* FAQ */}
        <div className="contact-faq">
          <h2>よくあるご質問</h2>

          <div className="faq-item">
            <h4>初回相談は無料ですか？</h4>
            <p>
              はい、初回のご相談・お見積もりは完全無料です。オンラインまたはお電話にてご対応いたします。
              まずはお気軽にご連絡ください。
            </p>
          </div>
          <div className="faq-item">
            <h4>契約最低期間はありますか？</h4>
            <p>
              サービスにより異なりますが、多くのプランで最低3ヶ月からのご契約をお願いしています。
              詳細はお問い合わせ時にご説明します。
            </p>
          </div>
          <div className="faq-item">
            <h4>効果が出るまでどのくらいかかりますか？</h4>
            <p>
              SEOは通常3〜6ヶ月で効果が表れ始め、PPC・SNS広告はキャンペーン開始直後から
              データの蓄積が始まります。業種・競合状況により異なりますため、詳しくはご相談ください。
            </p>
          </div>
          <div className="faq-item">
            <h4>レポートや進捗報告はありますか？</h4>
            <p>
              月次レポートを標準でご提供します。月次定例ミーティング（オンライン）も実施し、
              数字の解説・次月の施策方針をご説明します。
            </p>
          </div>
          <div className="faq-item">
            <h4>海外向けのマーケティングにも対応していますか？</h4>
            <p>
              英語・中国語・韓国語圏向けのデジタルマーケティングにも対応しています。
              グローバル展開をご検討の際はお気軽にご相談ください。
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
