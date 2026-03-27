import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../db/firebaseDb"
import Toast from "./Alert"
import { deleteFromCloudinary } from "./deleteFromCloudinary"

const handleDelete = async (docRef: string,{profile, url}:{profile?: boolean, url?: string} ) => {
    try {
        await deleteDoc(doc(db, docRef))
        if(profile && url){
            await deleteFromCloudinary(url)
        }
        Toast.success.fire({
          text: "Document successfully Deleted"
        })   
      } catch (error: any) {
        Toast.error.fire({
          text: error.message
        })
        
        
      }
  }

  export default handleDelete