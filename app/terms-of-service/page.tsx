import type { Metadata } from "next";
import LegalNav from "@/components/LegalNav";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

const { name, email, hours, address, legal } = siteConfig;

export const metadata: Metadata = {
  title: `利用規約 | ${name}`,
  description: `${name}のサービス利用規約をご確認ください。`,
};

export default function TermsOfServicePage() {
  return (
    <>
      <LegalNav />

      <main className="legal-page">
        <div className="legal-hero">
          <span className="legal-badge">法的情報</span>
          <h1>利用規約</h1>
          <div className="legal-meta">
            <span><i className="ri-calendar-line"></i> 最終更新日：{legal.termsUpdated}</span>
            <span><i className="ri-file-text-line"></i> バージョン {legal.termsVersion}</span>
          </div>
        </div>

        <div className="legal-highlight">
          本利用規約（以下「本規約」）は、{name}（以下「当社」）が提供するすべてのサービス
          （以下「本サービス」）の利用条件を定めるものです。
          本サービスをご利用になる前に、本規約を必ずお読みください。
          ご利用開始をもって、本規約に同意いただいたものとみなします。
        </div>

        <div className="legal-section">
          <h2>第1条（定義）</h2>
          <p>本規約において使用する用語の定義は、以下のとおりです。</p>
          <ul>
            <li>「本サービス」とは、当社が提供するデジタルマーケティングサービス全般を指します</li>
            <li>「ユーザー」とは、本規約に同意のうえ本サービスを利用する個人または法人を指します</li>
            <li>「コンテンツ」とは、本サービス上に掲載されるテキスト・画像・動画・データ等を指します</li>
            <li>「知的財産権」とは、著作権・商標権・特許権・意匠権その他の知的財産に関する権利を指します</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>第2条（サービスの利用）</h2>
          <p>ユーザーは、本規約および関連法令を遵守したうえで本サービスを利用するものとします。以下の行為は禁止します。</p>
          <ul>
            <li>法令または公序良俗に違反する行為</li>
            <li>当社または第三者の知的財産権・プライバシー・名誉を侵害する行為</li>
            <li>本サービスの運営を妨害・阻害する行為</li>
            <li>不正アクセス・クラッキング・フィッシングその他の不正行為</li>
            <li>虚偽の情報を登録・提供する行為</li>
            <li>スパム・迷惑メールの送信</li>
            <li>当社の事前承認なく本サービスを第三者に転売・再販する行為</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>第3条（料金および支払い）</h2>
          <p>本サービスの利用料金は、別途ご契約いただいた見積書・発注書に記載の金額とします。</p>
          <table className="legal-table">
            <thead>
              <tr><th>項目</th><th>内容</th></tr>
            </thead>
            <tbody>
              <tr><td>支払い方法</td><td>銀行振込・クレジットカード・その他当社指定の方法</td></tr>
              <tr><td>支払い期限</td><td>請求書発行日から30日以内（別途合意がある場合はその期限）</td></tr>
              <tr><td>遅延損害金</td><td>支払期限を超過した場合、年利14.6%の遅延損害金が発生します</td></tr>
              <tr><td>消費税</td><td>表示金額に別途消費税（現行税率）が加算されます</td></tr>
            </tbody>
          </table>
        </div>

        <div className="legal-section">
          <h2>第4条（知的財産権）</h2>
          <p>
            本サービスに関連するすべてのコンテンツ・デザイン・ソフトウェア・商標等の
            知的財産権は、当社または正当な権利者に帰属します。
          </p>
          <p>
            ユーザーがご提供いただいた資料・データ等の知的財産権はユーザーに帰属します。
            ただし、ユーザーは当社が本サービスの提供目的のために当該資料等を利用することを許諾するものとします。
          </p>
          <div className="legal-highlight">
            当社が制作・納品した成果物の著作権は、料金完済をもってユーザーに移転します。
            ただし、当社が従来から保有するノウハウ・汎用ツール・ライブラリ等は当社に帰属し続けます。
          </div>
        </div>

        <div className="legal-section">
          <h2>第5条（秘密保持）</h2>
          <p>
            当社およびユーザーは、本サービスの提供・利用を通じて知り得た相手方の秘密情報を、
            相手方の書面による事前承諾なく第三者に開示・漏洩してはならず、
            本サービスの目的以外に使用しないものとします。
          </p>
          <p>本条の義務は、契約終了後3年間継続するものとします。</p>
        </div>

        <div className="legal-section">
          <h2>第6条（免責事項）</h2>
          <p>当社は、以下の事項について責任を負いません。</p>
          <ul>
            <li>天災・戦争・停電・通信障害等の不可抗力によるサービス停止・損害</li>
            <li>ユーザーの設定・操作ミスに起因する損害</li>
            <li>第三者のサービス・ツールの仕様変更・停止による影響</li>
            <li>検索エンジンのアルゴリズム変更による順位変動</li>
            <li>本サービス利用により期待した効果が得られなかった場合</li>
          </ul>
          <div className="legal-highlight">
            当社の損害賠償責任は、いかなる場合も当該月の利用料金を上限とします。
          </div>
        </div>

        <div className="legal-section">
          <h2>第7条（解約・契約終了）</h2>
          <p>
            ユーザーは、契約書に定める解約予告期間（原則30日前）に書面または
            電子メールにて通知することで契約を解約できます。
          </p>
          <p>
            当社は、ユーザーが本規約に違反した場合、事前通知なく本サービスの提供を停止し、
            または契約を解除することができます。
          </p>
        </div>

        <div className="legal-section">
          <h2>第8条（準拠法・管轄裁判所）</h2>
          <p>
            本規約は、日本法を準拠法として解釈されるものとします。
            本サービスに関して紛争が生じた場合、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
          </p>
        </div>

        <div className="legal-section">
          <h2>第9条（規約の変更）</h2>
          <p>
            当社は、必要と判断した場合に本規約を変更することができます。
            変更後の規約は、当ページへの掲載または電子メールでの通知をもって効力を生じます。
            変更後も継続してサービスをご利用の場合、変更後の規約に同意したものとみなします。
          </p>
        </div>

        <div className="legal-section">
          <h2>第10条（お問い合わせ）</h2>
          <p>本規約に関するご質問は、以下にご連絡ください。</p>
          <div className="legal-highlight">
            <strong>{name} 法務・コンプライアンス部門</strong><br />
            メール：{email.legal}<br />
            受付時間：{hours}<br />
            住所：{address.full}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
