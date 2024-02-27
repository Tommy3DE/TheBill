import React from 'react';
import barb from "../../../assets/jobsExamples/barb.png";
import fin from "../../../assets/jobsExamples/fin.png";
import kons from "../../../assets/jobsExamples/kons.png";
import kos from "../../../assets/jobsExamples/kos.png";
import ksie from "../../../assets/jobsExamples/ksie.png";
import med from "../../../assets/jobsExamples/med.png";
import tat from "../../../assets/jobsExamples/tat.png";
import stom from "../../../assets/jobsExamples/stom.png";

interface JobTile {
  id: number;
  title: React.ReactNode;
  pic: string;
}

const JobsExamples = () => {
  const jobs: JobTile[] = [
    { id: 1, title: <>SALONY <span className="text-[#1A9367]">BARBERSKIE</span></>, pic: barb },
    { id: 2, title: <>SALONY <span className="text-[#1A9367]">TATUAŻU</span></>, pic: tat },
    { id: 3, title: <>SALONY <span className="text-[#1A9367]">KOSMETYCZNE</span></>, pic: kos },
    { id: 4, title: <>USŁUGI <span className="text-[#1A9367]">MEDYCZNE</span></>, pic: med },
    { id: 5, title: <>USŁUGI <span className="text-[#1A9367]">STOMATOLOGICZNE</span></>, pic: stom },
    { id: 6, title: <>USŁUGI <span className="text-[#1A9367]">KONSULTINGOWE</span></>, pic: kons },
    { id: 7, title: <>USŁUGI <span className="text-[#1A9367]">FINANSOWE</span></>, pic: fin },
    { id: 8, title: <>USŁUGI <span className="text-[#1A9367]">KSIĘGOWE</span></>, pic: ksie },
  ];

  return (
    <div className="mx-[8%] mt-36 tracking-wider">
      <h1 className="text-5xl font-playFair text-center">Chcemy oferować Ci <span className="text-[#1A9367]">więcej czasu</span></h1>
      <h3 className="text-3xl font-poppins text-center mt-10 text-gray-700">
        Nasza aplikacja, znajduje zastosowanie w <br />
        <span className="font-black text-black">każdej formie działalności gospodarczej.</span>
      </h3>
      <div className="grid lg:grid-cols-3 gap-4 mt-10">
        {jobs.slice(0, 3).map((job) => (
          <div key={job.id} className="flex flex-col items-center justify-center">
            <img src={job.pic} alt="Job example" />
            <div className='font-playFair text-3xl mt-10 font-black'>{job.title}</div>
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-2 gap-4 mt-10">
        {jobs.slice(3, 5).map((job) => (
          <div key={job.id} className="flex flex-col items-center justify-center">
            <img src={job.pic} alt="Job example"/>
            <div className='font-playFair text-3xl mt-10 font-black'>{job.title}</div>
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-3 gap-4 mt-10">
        {jobs.slice(5).map((job) => (
          <div key={job.id} className="flex flex-col items-center justify-center">
            <img src={job.pic} alt="Job example"/>
            <div className='font-playFair text-3xl mt-10 font-black'>{job.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsExamples;
