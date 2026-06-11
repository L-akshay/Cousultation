import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "利用規約 — Thinkly",
  description: "Thinklyの利用規約。サービスをご利用いただく際の条件と規則を説明します。",
};

export default function TermsOfService() {
  return (
    <Container>
      <div className="px-6 md:px-12 lg:px-24 py-20 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[var(--text-heading)] mb-4 text-shadow">
          利用規約
        </h1>
        <p className="text-sm text-[var(--text-muted)] mb-12">
          最終更新日：2026年6月10日
        </p>

        <Section title="1. 規約への同意">
          本利用規約（以下「本規約」）は、Thinkly（以下「当社」）が提供するサービスの
          利用条件を定めるものです。サービスをご利用いただくことで、本規約に同意したものとみなします。
          同意いただけない場合は、サービスのご利用をお控えください。
        </Section>

        <Section title="2. アカウントの登録">
          <ul className="list-disc list-inside flex flex-col gap-2">
            <li>サービスの一部機能はアカウント登録が必要です。</li>
            <li>登録情報は正確・最新の状態に保ってください。</li>
            <li>アカウントの認証情報は第三者と共有しないでください。</li>
            <li>アカウントの不正利用が判明した場合は、直ちに当社へご連絡ください。</li>
            <li>1人のユーザーが複数のアカウントを登録することは禁止します。</li>
          </ul>
        </Section>

        <Section title="3. 利用料金・支払い">
          <ul className="list-disc list-inside flex flex-col gap-2">
            <li>有料プランの料金は、各プランページに表示された金額とします。</li>
            <li>料金は月次または年次で前払いとなります。</li>
            <li>支払い済みの料金は、法令に別段の定めがある場合を除き返金されません。</li>
            <li>当社は事前通知のうえ、料金を変更する権利を有します。</li>
            <li>支払いが滞った場合、有料機能の利用が停止される場合があります。</li>
          </ul>
        </Section>

        <Section title="4. 禁止事項">
          以下の行為を禁止します。
          <ul className="list-disc list-inside mt-3 flex flex-col gap-2">
            <li>法令または公序良俗に反する行為</li>
            <li>当社または第三者の知的財産権・プライバシー権を侵害する行為</li>
            <li>サービスへの不正アクセス・リバースエンジニアリング・改ざん</li>
            <li>スパム・フィッシング・マルウェアの配布</li>
            <li>他のユーザーへの嫌がらせ・誹謗中傷</li>
            <li>自動化ツールを用いた過度なアクセス</li>
            <li>当社の事前承諾なしにサービスを商業目的で再販すること</li>
          </ul>
        </Section>

        <Section title="5. 知的財産権">
          Thinklyのサービス・ロゴ・デザイン・ソフトウェアに関する一切の知的財産権は
          当社に帰属します。本規約はお客様に対して、限定的・非独占的・譲渡不可の
          サービス利用ライセンスを付与するものであり、それ以外の権利を付与するものではありません。
        </Section>

        <Section title="6. ユーザーコンテンツ">
          お客様がサービス上に入力・アップロードしたコンテンツの所有権はお客様に帰属します。
          ただし当社に対し、サービス提供・改善・プロモーション目的で当該コンテンツを
          利用する非独占的ライセンスを付与するものとします。
          違法または不適切なコンテンツを投稿しないようにしてください。
        </Section>

        <Section title="7. サービスの可用性">
          当社はサービスの継続的な提供に努めますが、メンテナンス・技術的障害・
          不可抗力などにより、一時的にサービスが利用できない場合があります。
          当社はサービスの中断・変更・終了についての責任を負わないものとします。
        </Section>

        <Section title="8. 免責事項">
          サービスは「現状のまま」提供されます。当社は明示・黙示を問わず、
          サービスの正確性・完全性・特定目的への適合性を保証しません。
          法令の許容する最大限の範囲において、当社はサービス利用に起因する
          いかなる損害についても責任を負いません。
        </Section>

        <Section title="9. 責任の制限">
          当社の責任は、いかなる場合においても、お客様が当社に支払った
          直近12ヶ月間の料金総額を上限とします。
          間接損害・逸失利益・データ損失に対する責任は負いません。
        </Section>

        <Section title="10. 規約の変更">
          当社は本規約をいつでも変更する権利を有します。重要な変更は
          サービス上またはメールにてお知らせします。変更後も引き続き
          サービスをご利用いただいた場合、変更内容に同意したものとみなします。
        </Section>

        <Section title="11. アカウントの停止・終了">
          当社は、本規約への違反その他合理的な理由がある場合、
          事前通知なしにお客様のアカウントを停止・削除する権利を有します。
          お客様はいつでもアカウントを削除することができます。
          アカウント削除後、お客様のデータは当社のポリシーに従い処理されます。
        </Section>

        <Section title="12. 準拠法・管轄">
          本規約は日本法に準拠します。本規約に関する紛争については、
          東京地方裁判所を第一審の専属的合意管轄裁判所とします。
        </Section>

        <Section title="13. お問い合わせ">
          本規約に関するご質問は以下までご連絡ください。
          <p className="mt-3">
            <span className="font-medium text-[var(--text-heading)]">Thinkly サポート</span>
            <br />
            メール：legal@thinkly.app
          </p>
        </Section>
      </div>
    </Container>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-[var(--text-heading)] mb-3">
        {title}
      </h2>
      <div className="text-[var(--text-body)] leading-relaxed text-sm md:text-base">
        {children}
      </div>
    </section>
  );
}
