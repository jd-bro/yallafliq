import React from "react";
export class Category extends React.Component { 
    render() {
         
         return (
             <div>
                 {this.props.categories.map(title =>getCategorywiseData(title))}
             </div>
         );
     }
}
function getCategorywiseData(params){
     return (
             <div>
                 <th>{params}</th>
            </div>
         );
}