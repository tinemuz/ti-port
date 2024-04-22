import { motion } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "../../util/useMediaQuery";

export default function Slider() {
  return (
    <div className="mx-6">
      <div className="bg-stone-200 pb-3 pt-16"></div>
      <div className="">
        {/* Section One */}
        <div className="grid h-5 grid-cols-3 border border-slate-900">
          <div className="col-span-2"></div>
          <div className="border-l border-l-slate-900"></div>
        </div>
        <div className="aspect-3/1 grid grid-cols-3 border border-b-0 border-t-0 border-slate-900">
          <div className="col-span-2"></div>
          <div className="col-span-1 border-l border-l-slate-900"></div>
        </div>
        {/* Section Two */}
        <div className="grid h-5 grid-cols-3 border border-slate-900">
          <div className=""></div>
          <div className="border-l border-l-slate-900"></div>
          <div className="border-l border-l-slate-900"></div>
        </div>
        <div className="aspect-3/1 grid grid-cols-3 border border-b-0 border-t-0 border-slate-900">
          <div className=""></div>
          <div className="border-l border-l-slate-900"></div>
          <div className="border-l border-l-slate-900"></div>
        </div>
        {/* Section Three */}
        <div className="grid h-5 grid-cols-3 border border-slate-900">
          <div className=""></div>
          <div className="border-l border-l-slate-900"></div>
          <div className="border-l border-l-slate-900"></div>
        </div>
        <div className="aspect-3/1 grid grid-cols-3 border border-b-0 border-t-0 border-slate-900">
          <div className=""></div>
          <div className="border-l border-l-slate-900"></div>
          <div className="border-l border-l-slate-900"></div>
        </div>
        {/* Section Four */}
        <div className="grid h-5 grid-cols-3 border border-slate-900">
          <div className=""></div>
          <div className="border-l border-l-slate-900"></div>
          <div className="border-l border-l-slate-900"></div>
        </div>
        <div className="aspect-3/1 grid grid-cols-3 border border-b-0 border-t-0 border-slate-900">
          <div className=""></div>
          <div className="border-l border-l-slate-900"></div>
          <div className="border-l border-l-slate-900"></div>
        </div>
        <div className="grid h-5 grid-cols-3 border border-slate-900">
          <div className=""></div>
          <div className="border-l border-l-slate-900"></div>
          <div className="border-l border-l-slate-900"></div>
        </div>
      </div>
    </div>
  );
}
