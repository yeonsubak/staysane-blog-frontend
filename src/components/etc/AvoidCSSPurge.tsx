import React from "react";
/**
 * This component is only used to avoid CSS purge by Tailwind CSS during webpacking.
 * NOT INTENDED FOR DIRECT IMPORT & USE
 * @returns AvoidCSSPurge
 */
const AvoidCSSPurge = () => {
  return (
    <div className="hidden" id="avoid_css_purge">
      <span className="border-pink-500 bg-pink-500 text-pink-500"></span>
      <span className="border-cyan-500 bg-cyan-500 text-cyan-500"></span>
      <span className="border-sky-500 bg-sky-500 text-sky-500"></span>
      <span className="border-fuchsia-500 bg-fuchsia-500 text-fuchsia-500"></span>
      <span className="border-rose-500 bg-rose-500 text-rose-500"></span>
      <span className="border-amber-500 bg-amber-500 text-amber-500"></span>
    </div>
  );
};

export default AvoidCSSPurge;
