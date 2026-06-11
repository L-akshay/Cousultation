import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "プライバシーポリシー — Thinkly",
  description: "Thinklyのプライバシーポリシー。個人情報の収集・利用・管理についての方針を説明します。",
};

export default function PrivacyPolicy() {
  return (
    <Container>
      <div className="px-6 md:px-12 lg:px-24 py-20 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[var(--text-heading)] mb-4 text-shadow">
          プライバシーポリシー
        </h1>
        <p className="text-sm text-[var(--text-muted)] mb-12">
          最終更新日：2026年6月10日
        </p>

        <Section title="1. はじめに">
          Thinkly（以下「当社」）は、お客様のプライバシーを尊重し、個人情報の保護に努めます。
          本プライバシーポリシーは、当社のサービスをご利用いただく際に収集する情報と、
          その利用方法について説明するものです。
        </Section>

        <Section title="2. 収集する情報">
          当社は以下の情報を収集することがあります。
          <ul className="list-disc list-inside mt-3 flex flex-col gap-2">
            <li>氏名・メールアドレスなどの登録情報</li>
            <li>サービス利用状況・操作ログ</li>
            <li>デバイス情報・IPアドレス・ブラウザの種類</li>
            <li>お問い合わせ内容</li>
          </ul>
        </Section>

        <Section title="3. 情報の利用目的">
          収集した情報は以下の目的で利用します。
          <ul className="list-disc list-inside mt-3 flex flex-col gap-2">
            <li>サービスの提供・改善・新機能の開発</li>
            <li>お客様サポートへの対応</li>
            <li>サービスに関する重要なお知らせの送付</li>
            <li>不正利用の検知・防止</li>
            <li>法令上の義務の履行</li>
          </ul>
        </Section>

        <Section title="4. 情報の共有">
          当社は、以下の場合を除き、お客様の個人情報を第三者に販売・譲渡・共有しません。
          <ul className="list-disc list-inside mt-3 flex flex-col gap-2">
            <li>お客様の同意がある場合</li>
            <li>法令に基づく開示が必要な場合</li>
            <li>サービス提供に必要な業務委託先（守秘義務契約あり）への提供</li>
          </ul>
        </Section>

        <Section title="5. Cookieの使用">
          当社のサービスはCookieおよび類似の技術を使用して、ユーザーエクスペリエンスの向上および
          利用状況の分析を行います。ブラウザの設定からCookieを無効にすることができますが、
          一部の機能が正常に動作しなくなる場合があります。
        </Section>

        <Section title="6. データの保管・セキュリティ">
          お客様の情報は、業界標準の暗号化技術および適切なセキュリティ対策を講じたサーバーに保管されます。
          ただし、インターネット上での完全なセキュリティを保証することはできません。
        </Section>

        <Section title="7. お客様の権利">
          お客様は以下の権利を有します。
          <ul className="list-disc list-inside mt-3 flex flex-col gap-2">
            <li>保有する個人情報へのアクセス・確認</li>
            <li>不正確な情報の訂正・削除の請求</li>
            <li>マーケティング目的の利用に対するオプトアウト</li>
            <li>アカウントの削除およびデータの消去の請求</li>
          </ul>
          これらの権利を行使する場合は、下記の連絡先までお問い合わせください。
        </Section>

        <Section title="8. 未成年者のプライバシー">
          当社のサービスは13歳未満の方を対象としていません。
          13歳未満の方から意図せず個人情報を収集していることが判明した場合、
          速やかに該当情報を削除します。
        </Section>

        <Section title="9. 本ポリシーの変更">
          本プライバシーポリシーは予告なく変更される場合があります。
          重要な変更がある場合は、サービス上またはメールにてお知らせします。
          変更後も引き続きサービスをご利用いただいた場合、変更内容に同意したものとみなします。
        </Section>

        <Section title="10. お問い合わせ">
          本ポリシーに関するご質問・ご要望は以下までご連絡ください。
          <p className="mt-3">
            <span className="font-medium text-[var(--text-heading)]">Thinkly サポート</span>
            <br />
            メール：privacy@thinkly.app
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
