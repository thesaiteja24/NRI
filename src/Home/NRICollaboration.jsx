import React from "react";
import NRIA from "/NRIA.png";

const NRICollaboration = () => {
  return (
    <div className="w-full flex items-center justify-center bg-white font-[Afacad] px-4">
      <div className="text-center pl-10 pr-10">
        <h2 className="text-[25px] lg:text-[50px] text-[#020031] font-semibold mb-6">
          Our Collaboration
        </h2>
        <div className="flex flex-col gap-7 md:flex-row items-center justify-center">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0">
            <img
              src={NRIA}
              alt="NRI Logo"
              className="max-w-[1100px] object-contain"
            />
          </div>

          {/* Content Section */}
          <div className="text-center md:text-left ">
            <p className="text-[#000000] font-medium text-2xl lg:text-2xl leading-relaxed">
              Sri Durga Malleswara Educational Society established NRI Institute
              of Technology in 2008 to extend its mission of excellence begun
              with NRI College of Pharmacy a year earlier. NRIIT is situated
              near Vijayawada in a peaceful setting, approved by AICTE and
              permanently affiliated to Jawaharlal Nehru Technological
              University Kakinada (JNTUK). Accredited with a NAAC ‘A’ Grade and
              ISO certified, it combines rigorous academics with hands-on
              learning and strong placement outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NRICollaboration;
