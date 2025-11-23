import React from "react";

// Exact color mapping from the image
const leftSteps = [
  { label: "PERMISSION", color: "bg-[#00AEEF]" },
  { label: "SELECTION", color: "bg-[#8BC53F]" },
  { label: "VERIFICATION", color: "bg-[#C5D834]" },
  { label: "HEALTH TEST", color: "bg-[#E4ED29]" },
  { label: "AGRIMENT", color: "bg-[#F7941E]" },
  { label: "VISA APPLY", color: "bg-[#00AEEF]" },
  { label: "OPEN BANK ACCOUNT", color: "bg-[#00AEEF]" },
  { label: "IMMIGRATION PROCESS", color: "bg-[#8BC53F]" },
  { label: "BANK CLEARANCE", color: "bg-[#F7941E]" },
  { label: "AIR TICKETING", color: "bg-[#EC008C]" },
  { label: "FINAL", color: "bg-[#2E3192]" },
];

const rightTexts = [
  "Recruitment permission from Government",
  "Advertisement in newspaper, Scrutiny of applications, Evaluation of education, training, experience, health & age Theoretical and practical test",
  "Police clearance",
  "Medical Examination",
  "Signing of contract",
  "Endorsement/Obtaining visa from concerned embassy",
  "Opening of E.C Account",
  "Immigration clearance from Bangladesh Government",
  "Bangladesh bank clearance (if necessary)",
  "Air ticketing",
  "Dispatch",
];

const RecruitmentProcess = () => {
  return (
    <div className="w-full bg-[#F2F2F2] p-10 font-sans">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-[#2E3192] mb-12 uppercase tracking-wide">
        Recruitment Process & Training
      </h1>

      <div className="relative w-full flex justify-between px-6">

          
        {/* LEFT SIDE */}
        <div className="w-1/2 flex flex-col gap-4 pr-10 mt-4">
          {leftSteps.map((step, i) => (
            <div
              key={i}
              className={`flex items-center text-white m-6 px-6 py-3 font-bold text-lg rounded-r-full shadow-md relative ${step.color}`}
              style={{
                clipPath: "polygon(0% 0%, 92% 0%, 100% 50%, 92% 100%, 0% 100%)",
              }}
            >
              {step.label}
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="w-1/2 flex flex-col gap-4 pl-10 mt-4">
          {rightTexts.map((text, i) => (
            <div
              key={i}
              className="bg-[#D7E5F3] "
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecruitmentProcess;
