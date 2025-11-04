import React, { useEffect, useLayoutEffect, useState } from "react";
import Button from "../components/Button";
import { getAuth,  GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

import { auth, database } from "../firebase/firebase";
import { ref, child, get, set } from "firebase/database";
import { createUser, updateUserData } from "../firebase/functions";

export default function SingIn() {

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    profileImage: "",
  });

  const [ loggedIn, setLoggedIn] = useState(false);


  const onUpdateProfile = (e)=>{
    console.log("Update profile");


    // updateUserData('zpB62wF6gWSXyYBClq1IzrbviIm1', 'lastLoginAt', 53453454)
  }
  const onSignClick = (e)=>{
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    // const auth = getAuth();
    console.log("auth:", auth);
    signInWithPopup(auth, provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      console.log("result", result);
      const token = result.user.accessToken;
      const user = result.user;

      createUser(user.uid, user.displayName, user.email, user.photoURL);

    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      //...
      console.table({errorCode,errorMessage,email,credential });
    });
  }

  const onLogOutClick = (e)=>{
    e.preventDefault();
    // const provider = new GoogleAuthProvider();
    // console.log("auth:", auth);

    signOut(auth).then(() => {
      console.log("Successfully logged out");
      setLoggedIn(false);
    }).catch((error) => {
      console.log("Error in logged out", error);
    });

  }

  useLayoutEffect( ()=>{

    // console.log("auth", auth);
    // const user = auth.currentUser;
    // console.log("user", user);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const displayName = user.displayName;
        console.log("displayName", displayName);
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;
        setUserInfo({
          name: displayName,
          email: email,
          profileImage: photoURL,
        });
        setLoggedIn(true);
      } else {
        setUserInfo({
          name: "No user",
        });
      }
    });

  }, [])



  return (
  <div className="flex flex-col items-center gap-4 justify-center mt-[200px]">
   { loggedIn ?
      <div>
        <Button onClick={onLogOutClick}>Log Out</Button>
      </div>
     :
    <div>
      <Button onClick={onSignClick}>Sing In</Button>
    </div> 
    }

   { 
   loggedIn ?
   <div>
      <Button onClick={onUpdateProfile}>Update Profile</Button>
    </div>
    :
    <div></div>
    }

    <div className="block w-full">
      <b>Current User Details: </b>
      <pre className="text-left">
        {JSON.stringify(userInfo, null, 2)}
      </pre>
      {
        console.log(userInfo)
      }

    </div>
  </div>);
}
