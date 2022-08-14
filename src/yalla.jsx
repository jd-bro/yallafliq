import React from "react";
let menu = require("./menu.json");

//import "./styles.css";
console.log(menu);
menu = menu.Menu;
console.log(menu);

export const Yalla = () => {
  return (
    <>
      <div className="menu-container">
        {getCategories()}
        {menu.map((data, key) => {
          return <div key={key}>{data.name}</div>;
        })}
      </div>
    </>
  );
};

function getCategories() {
  var categories = [];
  for (let i = 0; i < menu.length; i++) {
    let obj = menu[i];
    return (
      <div className="categ">
        <h1>{obj.name}</h1>
      </div>
    );
  }
}
