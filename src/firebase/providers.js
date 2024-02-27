import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider= new GoogleAuthProvider();

export const sigInWithGoogle=async()=>{
    try{
        const result= await signInWithPopup(FirebaseAuth,googleProvider)
        const user=result.user;
        const {displayName,email,photoURL,uid}=user

        return{
            ok:true,
            //User info
            displayName,email,photoURL,uid
        }
    }
    catch(error){
        const errorCode=error.code;
        const errorMessage=error.message;

        return{
            ok:false,
            //Error info
            errorCode,errorMessage
        }
    }
}

export const registerUserWithEmailPassword=async ({email,password,displayName})=>{
    try{
    //console.log('final:'+email,password,displayName);

        const resp= await createUserWithEmailAndPassword(FirebaseAuth,email,password)
        const{uid,photoURL}=resp.user;

        await updateProfile(FirebaseAuth.currentUser,{displayName});
        
        return {ok:true, uid,photoURL,email,displayName}

    }
    catch(error){
        ///=TODO Hacer un diccionario de los tipos de errores y los mensajes
        return {ok:false, errorMessage:error.message}
    }
}

export const loginWithEmailPassword= async ({email,password})=>{

    try{
        const resp= await signInWithEmailAndPassword(FirebaseAuth,email,password)
        //console.log(JSON.stringify(resp.user))
        const{uid,displayName,photoURL}=resp.user;

        await updateProfile(FirebaseAuth.currentUser,{displayName});
        
        return{
            ok:true,
            uid,
            displayName,
            photoURL,
            errorMessage:null
        }

    }
    catch(error){
        ///=TODO Hacer un diccionario de los tipos de errores y los mensajes
        return {ok:false, errorMessage:error.message}
    }
}

//Funcion de logout completa
export const logoutFirebase= async()=>{
    return await FirebaseAuth.signOut();
}