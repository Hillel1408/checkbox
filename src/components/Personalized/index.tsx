"use client";

import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";

const Personalized = () => {
  const [activeTab, setActiveTab] = useState(2);

  const items = [
    {
      label: "Retail",
      text: "Get more customers, credit applications, and accounts with a reputation people trust.",
    },
    {
      label: "Home Services",
      text: "Get more customers, credit applications, and accounts with a reputation people trust.",
    },
    {
      label: "Real Estate",
      text: "Get more customers, credit applications, and accounts with a reputation people trust.",
    },
    {
      label: "Restaurants",
      text: "Get more customers, credit applications, and accounts with a reputation people trust.",
    },
  ];

  return (
    <section className="bg-[#E3E3E3] pt-[54px] pb-[100px]">
      <div className="container">
        <div className="px-[60px]">
          <h2 className="text-[40px] text-[#000] font-bold text-center mb-[55px]">
            Personalized for your industry and business.
          </h2>

          <div className="grid grid-cols-[0.8fr_1fr] gap-[52px]">
            <ul className="flex flex-col gap-10 text-[24px] font-medium leading-[30px] text-[#000]">
              {items.map((item, index) => (
                <li
                  className="cursor-pointer"
                  onClick={() => {
                    setActiveTab(index);
                  }}
                >
                  <div className="flex justify-between items-center">
                    {item.label}
                    <div>
                      <Image
                        src="/images/icon-2.png"
                        alt=""
                        width={18}
                        height={18}
                      />
                    </div>
                  </div>
                  <div
                    className={classNames(
                      "px-9 py-11 bg-white rounded-[30px] border border-[#000] mt-10",
                      activeTab === index ? "block" : "hidden"
                    )}
                  >
                    <h3 className="text-[30px] font-bold mb-3">
                      Financial Services
                    </h3>

                    <p className="text-[20px] mb-3">{item.text}</p>

                    <button className="text-[17px] text-[#707070] font-bold flex gap-4 items-center">
                      Get started now
                      <Image
                        src="/images/icon-3.png"
                        alt=""
                        width={40}
                        height={12}
                      />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="py-12 px-11 rounded-[30px] bg-white border border-[#000] min-h-[570px]">
              <div className="relative h-full rounded-[30px] overflow-hidden border border-[#000]">
                <Image
                  src="/images/img-1.jpg"
                  alt=""
                  layout="fill"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personalized;
