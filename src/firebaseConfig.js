import { getFirestore}  from "firebase/firestore/lite";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, addDoc,serverTimestamp,doc,setDoc } from "firebase/firestore"; 


//Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpkJWmvxx0h_W-HYJCH9zvogVLsKsmYNc",
  authDomain: "clone-34589.firebaseapp.com",
  projectId: "clone-34589",
  storageBucket: "clone-34589.appspot.com",
  messagingSenderId: "624416063982",
  appId: "1:624416063982:web:d81d7e504167a3b010ceff"
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);

const db=getFirestore(app);
const auth=getAuth(app);

const provider=new GoogleAuthProvider();
// export const addData=(formData)=>{
//   db.collection('emails').doc().add(
//     {
//                  recipients:formData.recipients,
//            subject:formData.subject,
//            message:formData.message,
//            timestamp: serverTimestamp(),
//   })
// }

export const addData=async(formData)=>{
  const collectionRef=collection(db,"emails")
   setDoc(collection(db,"emails"),
        {
           recipients:formData.recipients,
           subject:formData.subject,
           message:formData.message,
           timestamp: serverTimestamp(),
        }
  );
}
export {db,auth,provider};