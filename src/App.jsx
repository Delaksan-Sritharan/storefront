import React from "react";
import User from "./Dela";
import Button from "./Button";
import s from "./app.module.css";
function App() {
  return (
    <div className={s.heading}>
      <User name="Dela" age={24}/>
      <User name="sesa"/>
      
    </div>
  );
}

export default App;
