import React from "react";
import Image from "next/image";

export default function loading() {
  return (
    <div className="flex justify-center mt-16">
      {/* <img className="h-52" src="spinner.svg" alt="loading" /> */}
      <Image className="h-52" src="spinner.svg" alt="loading" />
    </div>
  );
}
