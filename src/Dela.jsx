import React from "react";
import s from "./User.module.css";

function User(props) {
  return (
    <>
      <h1 className={s.heading}>{props.name}</h1>
      <p>{props.age ?? 27}</p>
    </>
  );
}

export default User;
