import { getAuth, getRedirectResult, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import { auth, database } from "./firebase";
import { ref, child, get, set } from "firebase/database";

export const getUsers = async ()=>{
  let users;
  const dbRef = ref(database);
  let snapshot = await get(child(dbRef, `users/`));
  if (snapshot.exists()) {
     users = snapshot.val();
    console.log("users", users);
  }
  return users;
};

export const updateUserData = (userId, key, value)=>{
  const db = database;
  set(ref(db, 'users/' + userId+'/'+key), value);
}

export function createUser(userId, name, email, imageUrl) {
  const db = database;
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

export function getUser(uid){
  const dbRef = ref(database);
  get(child(dbRef, `users/`+uid)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}
