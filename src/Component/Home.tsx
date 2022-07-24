import React from "react";

export default class Home extends React.Component{

   handleClick= ()=>{
           alert("yes");
   }

   

    render(): React.ReactNode {
        return(
            <div onClick={this.handleClick}>

             <div></div>

            </div>
        )
    }

}