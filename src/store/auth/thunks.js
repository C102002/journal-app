import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, sigInWithGoogle } from "../../firebase/providers";
import { clearNotesLogout } from "../journal/journalSlice";
import { checkingCredentials,logout,login } from "./authSlice"

//NT: Thunks son tareas asincrona
export const checkingAuthentication =(email, password)=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn=()=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials());

        const result=await sigInWithGoogle();
        if (!result.ok) return dispatch(logout(errorMessage));

        dispatch(login(result));
    }
}

export const startCreatingUserWithEmailPassword=({email,password,displayName})=>{
    return async(dispatch)=>{
    console.log(email,password,displayName);


        dispatch(checkingCredentials());
        const result = await registerUserWithEmailPassword({email,password,displayName})
        const {ok,uid,photoURL,errorMessage}=result

        if(!ok) return dispatch(logout(errorMessage));

        dispatch(login({uid,displayName,email,photoURL}))
    }
}

export const startLoginWithEmailPassword=({email='', password=''})=>{

    return async(dispatch)=>{
        //console.log(email,password);

        dispatch(checkingCredentials());
        const result= await loginWithEmailPassword({email,password});
        const {ok,uid,displayName,photoURL,errorMessage}=result;
        //console.log(JSON.stringify('result'+result));

        if(!ok) return dispatch(logout(errorMessage));

        dispatch(login({uid,displayName,email,photoURL}))

    }
}

export const startLogout=()=>{
    const errorMessage=null

    return async(dispatch)=>{

        await (logoutFirebase);
        // console.log('se deslogueo');
        dispatch(clearNotesLogout());
        dispatch(logout(errorMessage));
    }
}