import React from "react";
import {Category} from "./category";
let menu = require("./menu.json");

//import "./styles.css";
console.log(menu);
menu = menu.Menu;
console.log(menu);


export class Yalla extends React.Component { 
    state={"categories":getCategories()}
  render(){
  return (
    <>
      <div className="menu-container">
          <Category categories = {this.state.categories}/>
        {/* {menu.map((data, key) => {
          return <div key={key}>{data.name}</div>;
        })} */}
      </div>
    </>
  );
  }
}

function getCategories() {
  var categories = [];
  for (let i = 0; i < menu.length; i++) {
    let obj = menu[i];
    if(!categories.includes(obj.category))
         categories.push(obj.category);
  }
  return categories;
}
