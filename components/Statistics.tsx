const Statistics = () => {
  return (
    <div className='px-4 py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto'>
      <div className='flex flex-col sm:flex-row items-center justify-center gap-4 p-5 rounded-xl  bg-white shadow-md'>
        <p className='text-center text-3xl font-bold'>10</p>
        <p className='text-center tracking-wider'>YEARS OF EXPERIENCE</p>
      </div>
      <div className='flex flex-col sm:flex-row items-center justify-center gap-4 p-5 rounded-xl  bg-white shadow-md'>
        <p className='text-center text-3xl font-bold'>12</p>
        <p className='text-center tracking-wider'>PROJECTS COMPLETED</p>
      </div>
      <div className='flex flex-col sm:flex-row items-center justify-center gap-4 p-5 rounded-xl  bg-white shadow-md'>
        <p className='text-center text-3xl font-bold'>12</p>
        <p className='text-center tracking-wider'>TECHNOLOGIES MASTERED</p>
      </div>
      <div className='flex flex-col sm:flex-row items-center justify-center gap-4 p-5 rounded-xl  bg-white shadow-md'>
        <p className='text-center text-3xl font-bold'>12</p>
        <p className='text-center tracking-wider'>HAPPY CLIENTS</p>
      </div>
    </div>
  );
};

export default Statistics;
