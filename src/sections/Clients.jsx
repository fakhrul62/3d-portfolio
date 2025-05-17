import React from "react";
import { clientReviews } from "../constants";

const Clients = () => {
  return (
    <section className="sm:px-10 px-5 my-20">
      <h3 className="sm:text-4xl text-3xl font-semibold bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent">
        Hear from My Clients
      </h3>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-12">
        {clientReviews.map((client) => (
          <div
            key={client.id}
            className="rounded-lg md:p-10 p-5 col-span-1 bg-zinc-900 bg-opacity-50"
          >
            <p className="text-white">{client.review}</p>
            <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start gap-5 mt-7">
              <div className="flex gap-3">
                <img
                  src={client.img}
                  alt={client.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex flex-col">
                  <h4 className="text-zinc-200 font-semibold">{client.name}</h4>
                  <p className="text-zinc-400 md:text-base text-sm font-light">{client.position}</p>
                </div>
              </div>
              <div className="flex self-end items-center gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <img
                    key={index}
                    src="/3d-portfolio/assets/star.png"
                    alt="star"
                    className="w-4 h-4"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
