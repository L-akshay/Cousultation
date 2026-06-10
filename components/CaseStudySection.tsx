export default function CaseStudySection() {
  return (
    <section id="caseStudy-section">
      <div className="services">
        <h3>導入事例</h3>
        <p>
          私たちが支援してきたお客様の成功ストーリーをご紹介します。
          業種を問わず、確かな成果を実現してきました。
        </p>
      </div>

      <div className="caseBox-container">
        <div className="caseBox caseBox1">
          <h4>
            大手ECサイトのSEO対策を実施した結果、わずか6ヶ月でオーガニック検索流入が
            230%増加。売上も前年比180%を達成し、業界内での認知度が大幅に向上しました。
            継続的なコンテンツ戦略と技術的SEOの組み合わせが成功の鍵となりました。
          </h4>
          <p>
            詳しく見る<i className="ri-arrow-right-up-line"></i>
          </p>
        </div>
        <div className="caseBox caseBox2">
          <h4>
            中堅製造業のリード獲得施策として、リスティング広告とSNS広告を組み合わせた
            統合キャンペーンを展開。広告費対効果（ROAS）を従来の3.2倍に改善し、
            月間問い合わせ件数を50件から320件へと大幅に拡大することに成功しました。
          </h4>
          <p>
            詳しく見る<i className="ri-arrow-right-up-line"></i>
          </p>
        </div>
        <div className="caseBox caseBox3">
          <h4>
            スタートアップ企業のブランド認知拡大を目的にInstagram・X・TikTokを
            横断したSNSマーケティングを実施。フォロワー数が3ヶ月で10倍に増加し、
            メディア掲載にも繋がるなど、オフライン施策への波及効果も生まれました。
          </h4>
          <p>
            詳しく見る<i className="ri-arrow-right-up-line"></i>
          </p>
        </div>
      </div>
    </section>
  );
}
