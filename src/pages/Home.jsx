import React from "react";
import { useSelector } from "react-redux";
import Login from "../Components/Login";

function Home() {
  const data = useSelector((state)=> state.todo.getTodos.data);
  console.log(data);
  return (
    <div>
      {data.map((el)=>(
        <div key={el.id}>{el.value}</div>
      ))}
    </div>
  );
}

export default Home;
