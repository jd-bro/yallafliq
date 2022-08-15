import React from "react";
let menu = require("./menu.json");
menu = menu.Menu;
export class Category extends React.Component { 
    render() {
         
         return (
             <div>
                 {this.props.categories.map(category =>renderCategorywiseData(category,menu))}
             </div>
         );
     }
}
function renderCategorywiseData(params,menuParams){
     return (
             <div>
                 <h2>{params}</h2>
                 {getCategoryWiseData(params,menuParams).map(item => <li>{item.name} {item.price}</li>)}
            </div>
         );
}
function getCategoryWiseData(params,menuParams){
    var categoryWise = [];
    for(let i =0;i<menuParams.length;i++){
        if(menuParams[i].category==params){
            categoryWise.push(menuParams[i]);
        }
    }
    return categoryWise;
}