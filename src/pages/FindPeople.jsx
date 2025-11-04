import React, { useEffect } from "react";
import { getUsers } from "../firebase/functions";

export default function FindPeople() {

  useEffect(() => {
    getUsers();
  },[])

  return <div>FindPeople</div>;
}
