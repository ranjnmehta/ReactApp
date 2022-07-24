import React from "react";
import AddressDetails from "./AddressDetails";
import Basicdetails from "./Basicdetails";
import ContactDetails from "./ContactDetails";
import EduDeatails from "./EduDeatails";




export default class Main extends React.Component{


    render(): React.ReactNode {
        return(
            <div>
                <Basicdetails></Basicdetails>
                <EduDeatails></EduDeatails>
                <ContactDetails></ContactDetails>
                <AddressDetails></AddressDetails>          
            </div>

        )
    }
}