import AdminHero from "@/components/admin/AdminHero";
import AdminNavbar from "@/components/admin/AdminNavbar";
import AdminSidebar from "@/components/admin/AdminSidebar";
import useCollectionGroup from "@/components/hooks/UseCollectionGroup";
import { db } from "@/db/firebaseDb";
import Toast from "@/utils/Alert";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { collection, deleteDoc, doc, DocumentData, getDocs, updateDoc } from "firebase/firestore";
import moment from "moment";
import { useRouter } from "next/router";
import * as Icons from "react-icons/bs";
import React, { useEffect } from "react";
import Image from "next/image";
import FooterAdmin from "@/components/user/FooterUser"
import formatCurrency from "@/utils/converter";

function Index() {
  const router = useRouter();
  const [transactions, isLoading, isError] =
    useCollectionGroup("transactionDatas");

  const handleDelete = async (item: DocumentData) => {
    try {
      await deleteDoc(
        doc(db, "transactions", item.uid, "transactionDatas", item.id)
      );
      Toast.success.fire({ text: "Document successfully deleted" });
    } catch (error: any) {
      Toast.error.fire({ text: error.code });
    }
    //api call for delete
    // setProductData((prev) => prev.filter((each) => each.id !== id));
  };


  const columns: GridColDef[] = [
    {
      field: "slNo",
      headerName: "ID",
    },
    {
      field: "firstname",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className=" ">
            <a
              href={params.row.photo}
              className="inline-flex items-center gap-4"
              download
            >
              <Image
                height={12}
                width={12}
                src={params.row.prove}
                alt="pics"
                className="w-12 rounded-full h-12"
              />
              {params.row.name}
            </a>
          </div>
        );
      },
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 100,
      renderCell: (params) => (<span>{formatCurrency(params.row.amount?.replace("$", ""))}</span>)
    },
    {
      field: "type",
      headerName: "Type",
      width: 100,
    },
    {
      field: "prove",
      headerName: "Prove",
      width: 150,
      renderCell: (params) => {
        return (
          <div className=" ">
            <a
              href={params.row.accessCodeProve}
              className="inline-flex items-center gap-4"
              download
            >
              <Image
                height={12}
                width={12}
                src={params.row.accessCodeProve}
                alt="pics"
                className="w-14 rounded-full h-14"
              />
            </a>
          </div>
        );
      },
    },

    {
      field: "date",
      headerName: "Date",
      renderCell: (params) => (
        <span>{moment(params.row.date.toDate()).fromNow()}</span>
      ),
      width: 130,
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <button
              onClick={() =>
                router.push(`transactions/edit/${params.row.uid}/${params.row.id}`)
              }
              className=" text-white px-4 py-2  outline-none border-none rounded-full bg-green-400"
            >
              Edit
            </button>
            <Icons.BsTrash
              onClick={() => handleDelete(params.row)}
              size={24}
              className="cursor-pointer text-red-500 ml-4"
            />
          </>
        );
      },
    },
  ];
  return (
    <>
      <AdminNavbar />

      <div className="flex">
        <AdminSidebar />

        <div className="list-container   h-screen  ">
              <AdminHero title="transactions" />
              <div className=" mt-10 " />
              <div style={{ height: '500px' }}>

                <DataGrid
                  columns={columns}
                  rows={transactions}
                  getRowId={(row) => row?.id}
                  disableRowSelectionOnClick
                  autoPageSize
                  className="main-bg text-white overflow-x-scroll"
                />
             
          </div>
        </div>
      </div>
      <FooterAdmin />
    </>
  );
}

export default Index;

Index.defaultProps = {
  needsAuth: true,
  isAdmin: true

}
