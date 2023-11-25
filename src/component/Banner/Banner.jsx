import React from 'react';
import img from "../../assets/image/rumi.jpg"
import {BsFillCloudArrowDownFill} from "react-icons/bs";

import { TypeAnimation } from "react-type-animation";

const Banner = () => {
      // ?? Handle Download Resume
  const handleDownload = () => {
      const resumeUrl =
        "https://drive.google.com/file/d/17yZgTj5sajZ7tQgD70FGcCivGM5rWGc-/view?usp=sharing";
      const fileIdMatch = resumeUrl.match(/[-\w]{25,}/);
      const fileId = fileIdMatch?.[0] ?? "";
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      window.location.href = downloadUrl;
    };
  
        return (
              <div className="hero min-h-screen bg-fuchsia-300 px-8">
    <div className="hero-content flex-col lg:flex-row-reverse">
    <img className="border-4 border-blue-600 rounded-full w-3/6" src={img} />
      <div className="text-center md:text-start">
        <h1 className="text-3xl text-green-800 md:text-7xl font-bold">RUMI BEGUM</h1>
        <h1 className="text-3xl text-sky-900 md:text-5xl font-bold">Digital Marketer</h1>
        <div className="text-3xl md:text-5xl font-bold">
            <h1 className="text-3xl text-sky-900 md:text-5xl font-bold">Good At</h1>
        <h1 className='text-2xl text-blue-600 font-bold'><TypeAnimation
        sequence={[
          
          'SEO Rank BD',
          2000, 
          'SEO Increases ROI',
          2000,
          'Boost Website',
          2000,
          'Boost Website',
          2000
          
          
        ]}
        className="inline-block"
        wrapper="div"
        speed={50}
        repeat={Infinity}
      />
        </h1>
        </div>
        <p className="py-6"> Rumi Begum, a skilled SEO specialist with over two years of experience, is currently working at “DigitalMarketingBD Solution Private Ltd,” where I recently achieved an impressive Google ranking for the competitive keyword “online outsourcing training Uttara.” My passion for improving online visibility and proven track record in SEO have established me as a prominent figure in the industry, making me go-to expert for businesses seeking to enhance their online presence. I am committed to delivering exceptional results and strives to rank as a top “SEO expert”</p>
        <button onClick={handleDownload} className="btn btn-primary">my Resume <BsFillCloudArrowDownFill></BsFillCloudArrowDownFill> </button>
  
      </div>
    </div>
  </div>
        );
};

export default Banner;