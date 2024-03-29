import React from 'react'
import AdminHero from '@/components/admin/AdminHero'
import AdminNavbar from '@/components/user/UserNavbar'
import FooterAdmin from '@/components/user/FooterUser'
import AdminSidebar from '@/components/admin/AdminSidebar'
import useCollectionGroup from '@/components/hooks/UseCollectionGroup'
import {DataGrid, GridColDef} from '@mui/x-data-grid'
import * as Icons from "react-icons/bs"
import moment from 'moment'
import handleStatus from '@/utils/handleStatus'
import { useRouter } from 'next/router'
import { deleteDoc, doc, DocumentData } from 'firebase/firestore'
import { db } from '@/db/firebaseDb'
import Toast from '@/utils/Alert'
import Image from 'next/image'



function Payments() {
  
  const [ payments, loading, error ] = useCollectionGroup("paymentDatas");
   const router = useRouter()

   const handleDelete = async (item: DocumentData) => {
    try {
      await deleteDoc(
        doc(db, "payments", item.uid, "paymentDatas", item.id)
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
          field: "idx",
          headerName: "ID",
        },
        {
          field: "firstname",
          headerName: "Name",
          width: 100,
          
        },
        {
          field: "email",
          headerName: "Email",
          width: 160,
          
        },
        {
          field: "paymentAmount",
          headerName: "Amount",
          width: 100,
        },
        {
          field: "dailyIncrement",
          headerName: "D-Increment",
          width: 90,
        },
        {
          field: "prove",
          headerName: "Prove",
          width: 150,
          renderCell: (params) => {
            return (
              <div className=" ">
                <a
                  href={params.row?.prove}
                  className="inline-flex items-center gap-4"
                  download
                >
                  <Image
                    height={12}
                    width={12}
                    src={params.row?.prove}
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
          renderCell: (params)=> <span>{handleStatus(params.row?.status)}</span>
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
                    router.push(`payments/edit/${params.row.uid}/${params.row.id}`)
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
            <AdminHero title="Payments" />
            <div className=" mt-10 " />
            
             
            <div  style={{ height:'500px' }}>

            <DataGrid 
            columns={columns}
            rows={payments}
            getRowId={(row) => row?.id}
            disableRowSelectionOnClick
            checkboxSelection
            autoPageSize
            className="main-bg text-white overflow-x-scroll "
            
            loading={loading}
            />
           
    </div>
    </div>
    </div>
    <FooterAdmin />
    </>
  )
}

export default Payments

Payments.defaultProp = {
    needsAuth: true,
    isAdmin: true
  
  
}
