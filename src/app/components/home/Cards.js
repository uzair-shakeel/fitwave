import React from "react";
import Image from "next/image";

const Card = ({ image, name, title, company, quote }) => {
  return (
    <div className="card bg-yellow-400 p-6 rounded-lg shadow-lg w-80 mb-8 opacity-0 transform translate-y-10 transition-all duration-500 ease-out">
      <div className="flex items-center mb-4">
        <Image
          src={image}
          alt={name}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="ml-4">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-sm">
            {title} at {company}
          </p>
        </div>
      </div>
      <p className="text-lg">{quote}</p>
    </div>
  );
};

export default Card;
