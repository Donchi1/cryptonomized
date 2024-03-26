import React from 'react'
import { usePathname } from "next/navigation"
import { FaHandHoldingUsd, FaMoneyBill, FaPaperPlane, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { DocumentData } from "firebase/firestore"

function TopSidebar({ currentUser }: { currentUser: DocumentData | null }) {
  const pathname = usePathname()

  return (
    <div className=" py-4" >
      <div className="flex justify-center flex-col items-center  gap-2">
        <div className="flex items-center  gap-3">
          <Image alt="profile" style={{ width: "70px", height: "70px" }} className="rounded-full" width={100} height={100} src={currentUser?.photo} />
          <div>

            <h6 className="text-lg font-[600]">

              <span className="text-sm text-red-400 font-normal">
                {currentUser?.firstname}  {currentUser?.lastname}
              </span>
            </h6>
            <p className="text-xs  text-gray-400">
              {currentUser?.email}
            </p>
            <div className="flex gap-4  items-center mt-2">
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#investModal"
                title="Invest"
                className="p-2 rounded-md text-xs font-bold outline-none  bg-gradient-to-tr from-light-blue-500  to-light-blue-700"
              >
                Invest Now
              </button>
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#transferModal"
                title="Transfer"
                className="  bg-red-500 text-white shadow-md p-2 rounded-md  outline-none hover:bg-red-500 transition-colors "
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default TopSidebar