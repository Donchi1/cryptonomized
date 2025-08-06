import React, { useEffect, useState } from "react";
import { dataPop } from "@/utils/dataPopUp";
import Image from "next/image";

function InvestmentPopup() {
 
  const [popIndex, setPopIndex] = useState(0);
  const [openPop, setOpenPop] = useState(false);

  useEffect(() => {
    (() => {
      let pop = popIndex + 1
      if (pop > dataPop.length - 1) pop = 0;
      setTimeout(() => {
        setPopIndex(pop);
        setOpenPop(true);
        setTimeout(() => {
          setOpenPop(false);
        }, 7000);
      }, 18000);
    })();
  },[popIndex]);


  return (
    <section style={{position: "fixed", zIndex: 50, top: "80%", right: "2%"}}>
      {openPop && (
        <div className="w-full py-3 px-2 shadow-sm bg-black shadow-sec-bg bg-sec-bg border border-main-color/70 rounded-md flex items-center justify-between gap-2">
          <div className="flex items-center justify-center bg-white rounded-full w-12 h-12">
          <Image src={"/assets/img/bitcoin-logo.png"} alt="" width={30} height={30} />
          </div>
          <p className="text-white/70 [&_b]:bg-gradient-to-r [&_b]:from-main-color [&_b]:to-sec-bg [&_b]:bg-clip-text [&_b]:capitalize">
            Someone from <b className="text-yellow-500">{dataPop[popIndex].country}</b> just{" "}
            {dataPop[popIndex].type} <b className="text-yellow-500">{dataPop[popIndex].amount}</b> Euros
          </p>
        </div>
      )}
    </section>
  );
}

export default InvestmentPopup;
