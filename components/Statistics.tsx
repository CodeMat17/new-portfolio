import StatBtn from "./StatBtn";

const Statistics = () => {
  return (
    <div className='px-4 py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto max-w-5xl'>
      <StatBtn
        number={10}
        tag='YEARS OF EXPERIENCE'
        classnames='animate-shimmer1 text-center'
      />
      <StatBtn
        number={505}
        tag='PROJECTS COMPLETED'
        classnames='animate-shimmer2'
      />
      <StatBtn
        number={12}
        tag='TECHNOLOGIES MASTERED'
        classnames='animate-shimmer3'
      />
      <StatBtn number={56} tag='HAPPY CLIENTS' classnames='animate-shimmer4' />
    </div>
  );
};

export default Statistics;
