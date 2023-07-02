import React from "react";

function PageSoon() {
  return (
    <div className="py-12 px-24 flex flex-col place-content-center h-screen w-full gap-4">
      <h1 className="text-[#4F4F4F] font-poppins text-4xl capitalize font-bold">
        coming soon...
      </h1>
      <p className="text-xl font-poppins text-gray-400 w-[400px]">
        We are working on something exciting. This information will be released
        very soon!
      </p>
      <img
        src="./img/muy-pronto.png"
        alt="coming soon image"
        className="w-28"
      />
    </div>
  );
}

export default PageSoon;
