import React from "react";

function Card(props) {
  return (
    <>
      <div className="bg-purple-200 p-6 rounded-lg">
        <div className="flex justify-center mb-4">
          <img src={props.url} alt={props.title} className="h-10" />
        </div>
        <div className="flex flex-col items-center">
          <div className="text-xl font-semibold mb-2">{props.title}</div>
          <p className="text-center">{props.content}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
