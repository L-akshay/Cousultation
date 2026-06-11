import PageHeader from "../PageHeader";
import WorkCard from "./WorkCard";
import { workData } from "@/lib/data";

const Work = () => {
  return (
    <section
      id="howitworks"
      className="w-full px-4 py-6 flex flex-col pt-28 gap-10 pb-10 md:pb-28 md:pt-20 md:gap-20"
    >
      <PageHeader
        title={"使い方"}
        subTitle={"時間を節約するシンプルでスマートなプロセス。"}
      />
      <div className="work-container flex flex-col gap-16 items-center justify-center md:flex-row md:flex-wrap lg:gap-14">
        {workData.map((work) => (
          <WorkCard key={work.no} work={work} />
        ))}
      </div>
    </section>
  );
};

export default Work;
