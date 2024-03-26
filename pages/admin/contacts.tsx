import React from 'react'
import { useFormik } from 'formik';
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import * as Icons from "react-icons/bs"
import moment from 'moment';
import * as Yup from "yup"
import { deleteDoc, doc, DocumentData } from 'firebase/firestore';
import { db } from '@/db/firebaseDb';
import Toast from '@/utils/Alert';
import useCollection from '@/components/hooks/UseCollection';
import AdminNavbar from '@/components/admin/AdminNavbar';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHero from '@/components/admin/AdminHero';
import FooterAdmin from '@/components/admin/FooterAdmin';
import handleStatus from '@/utils/handleStatus';
import { makeRequestApi } from '@/utils/makeRequest';




type transType = {
  to: string
  from: string
  message: string
  subject: string
  file: string
  name: string
};



function Contacts() {
  const [contacts, isLoading, isError] =
    useCollection("contacts");



  const formik = useFormik({
    initialValues: {
      to: "",
      message: "",
      subject: "",
      file: "",
      name: ""
    } as transType,

    validationSchema: Yup.object({
      to: Yup.string().required("Receipiant required"),
      message: Yup.string().required("Textbox can't be empty"),
      subject: Yup.string(),
      file: Yup.string(),
      name: Yup.string()
    }),

    onSubmit: (values) => sendMail(values),
  });


  const sendMail = async (val: transType) => {
    try {

      await makeRequestApi.post("/message", val)
      formik.resetForm()
      Toast.success.fire("Email successfully sent")
    } catch (error: any) {
      console.log(error.response.data.message)
    }
  }




  const handleDelete = async (item: DocumentData) => {
    try {
      await deleteDoc(
        doc(db, "contacts", item.id)
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
      field: "uid",
      headerName: "ID",
      width: 90,

    },
    {
      field: "name",
      headerName: "Name",
      width: 200,

    },
    {
      field: "subject",
      headerName: "Subject",
      width: 150,
    },

    {
      field: "date",
      headerName: "Date",
      renderCell: (params) => <span >{moment(params.row.date.toDate()).fromNow()}</span>,
      width: 130,
    },
    {
      field: "message",
      headerName: "Message",
      width: 300,
    },
    {
      field: "status",
      headerName: "Status",
      renderCell: (params) => <span >{handleStatus(params.row.status)}</span>,
      width: 100,

    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: ({ row }) => {
        return (
          <div className='flex items-center gap-4'>

            <Icons.BsTrash
              onClick={() => handleDelete(row)}
              size={24}
              className="cursor-pointer text-red-500 ml-4"
            />
            <button type='button' data-bs-toggle="modal"
              data-bs-target="#messageModal"
              onClick={() =>
                (formik.setValues({ ...formik.values, to: row.email, name: row.name }))
              }
            >
              <Icons.BsEnvelope size={24} className='text-light-blue-700 cursor-pointer ' />
            </button>
          </div>
        );
      },
    },
  ];



  return (
    <>
      <div className="modal fade " data-bs-backdrop="static" data-bs-keyboard="false" id="messageModal" tabIndex={-1}>
        <div
          className="col-lg-8 col-sm-12 col-xs-12 modal-dialog modal-dialog-centered"

        >
          <div className="contact modal-content bg-gray-900">
            <div className="modal-header">

              <h5 className="modal-title text-bold  uppercase text-red-500">
                Message
              </h5>
              <button
                style={{ width: "10%" }}
                onClick={() => {
                  formik.resetForm()
                  formik.setSubmitting(false)
                }}

                className="btn-close text-danger border-0 w-16 "
                data-bs-dismiss="modal"
                aria-label="close"
              ></button>
            </div>
            <form className="form mt-2 px-2" onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col-12">
                  <input
                    required
                    type="text"
                    style={{ backgroundColor: "#212529", border: "none" }}
                    className="form-control  rounded-lg"
                    placeholder="Receipiant"
                    {...formik.getFieldProps("to")}
                  />

                </div>
                <div className=" col-12">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="form-control !border-red-500 !border rounded-lg"
                    style={{ backgroundColor: "#212529", border: "none" }}
                    {...formik.getFieldProps("subject")}
                  />

                </div>

                <div className="form-group col-md-12">

                  <textarea
                    required
                    rows={8}
                    style={{ backgroundColor: "#212529", border: "none" }}
                    className="form-control resize-none !border-none rounded-lg"
                    placeholder="Your Message"
                    {...formik.getFieldProps("message")}
                  ></textarea>


                </div>
                <div className="col-md-12 text-center mb-4">
                  <button
                    type="submit"
                    value="Send message"
                    className=" tracking-wide font-semibold bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-gray-100 w-full py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    title="Submit Your Message!"
                    disabled={formik.isSubmitting}
                  >
                    {formik.isSubmitting
                      ? "Submitting..."
                      : "Submit Message"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>



      <AdminNavbar />
     

      <div className='flex h-screen'>



        <AdminSidebar />

        <div className="list-container   min-h-screen">

          <AdminHero title="Contacts" />
          <div className=" mt-10 " />
          <DataGrid
            columns={columns}
            rows={contacts}
            getRowId={(rows) => rows?.id}
            editMode="cell"
            autoHeight
            loading={isLoading}
            disableRowSelectionOnClick


            className='main-bg  text-white '
          />


        </div>
      </div>


      <FooterAdmin />
    </>


  )
}

export default Contacts

Contacts.defaultProps = {
  needsAuth: true,
  isAdmin: true

}