import React from "react";
import NRIA from "/NRIA.png";

const KitsCollaboration = () => {
  return (
    <div className=" mx-auto font-[Afacad] bg-[#f3f4f6]">
      <h2 className=" text-[25px] lg:text-[50px] text-center text-[#020031] font-semibold text mb-3 ">
        Our Collaboration
      </h2>
      <div className="flex flex-col gap-7 md:flex-row  items-center justify-center">
        {/* Logo Section */}
        <div className="mb-6 md:mb-0">
          <img
            src={NRIA}
            alt="NRI Logo"
            className=" max-w-[1100px]   object-contain"
          />
        </div>

        {/* Content Section */}
        <div className="text-center md:text-left">
          <p className="mb-2 font-[Afacad] text-[#000000] font-medium text:[12px] lg:text-[25px] ">
            Sri Durga Malleswara Educational Society established NRI Institute
            of Technology in 2008 to extend its mission of excellence begun with
            NRI College of Pharmacy a year earlier. NRIIT is situated near
            Vijayawada in a peaceful setting, approved by AICTE and permanently
            affiliated to Jawaharlal Nehru Technological University Kakinada
            (JNTUK). Accredited with a NAAC ‘A’ Grade and ISO certified, it
            combines rigorous academics with hands-on learning and strong
            placement outcomes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KitsCollaboration;
