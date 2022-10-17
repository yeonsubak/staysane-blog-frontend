import React from "react";
/**
 * This component is only used to avoid CSS purge by Tailwind CSS during webpacking.
 * NOT INTENDED FOR DIRECT IMPORT & USE
 * @returns AvoidCSSPurge
 */
const AvoidCSSPurge = () => {
  return (
    <div className="hidden" id="avoid_css_purge">
      <span className="border-pink-600 text-pink-600"></span>
      <span className="border-cyan-600 text-cyan-600"></span>
      <span className="border-sky-600 text-sky-600"></span>
      <span className="border-fuchsia-600 text-fuchsia-600"></span>
      <span className="border-rose-600 text-rose-600"></span>
      <span className="border-amber-600 text-amber-600"></span>
    </div>
  );
};

export default AvoidCSSPurge;
