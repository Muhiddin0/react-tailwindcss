import React from "react";
import "../assets/style.css";

import rasim from "../assets/logo192.svg";

export default function PartfolioPage() {
  return (
    <div className="container mx-auto px-5 py-1">
      <div className="min-h-screen w-full flex items-center justify-center flex-col">
        {/* avatar */}
        <img
          className="w-[13.3125rem] h-[13.3125rem]"
          src={rasim}
          alt="img"
          width={150}
          height={150}
        />

        {/* title text */}
        <h1 className="max-w-[41rem] text-center text-[3.4375rem] mt-5 font-[800]">
          I do code and make content{" "}
          <span className="bg-gradient-to-r from-[#FF8660] to-[#9A33FF] bg-clip-text text-transparent">
            about it!
          </span>
        </h1>

        {/* params */}
        <p className="text-center mt-10 text-[#C5C5C5] 600 max-w-[460px]">
          I am a seasoned full-stack software engineer with over 8 years of
          professional experience, specializing in backend development. My
          expertise lies in crafting robust and scalable SaaS-based
          architectures on the Amazon AWS platform.
        </p>

        {/* btns */}
        <div className="w-full flex flex-wrap items-center justify-center gap-3 mt-6">
          <button className="py-2 px-4 bg-white text-slate-950 rounded-full">
            Get In Touch
          </button>
          <button className="py-2 px-4 border-2 border-white text-white rounded-full">
            Get In Touch
          </button>
        </div>

        <div className="w-full mt-10">
          <b className="text-center block text-[#C5C5C5] mt-6">
            EXPERIENCE WITH
          </b>
        </div>
      </div>
    </div>
  );
}
