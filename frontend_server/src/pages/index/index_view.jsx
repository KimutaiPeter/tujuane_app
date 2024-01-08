import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Contact_conainer from "./components/contact_container";
import Search_n_contact from "./main_components/search_n_contacts";

export default function Index_view(props) {

    useEffect((()=>{
        console.log('Hello world',props.my_details)
    }),[])

    return (
        <div className="body">
            <div className="main">
                <Search_n_contact chat_with_individual={props.chat_with_individual} my_details={props.my_details} />
                <div className="control_bar">
                    <div>
                        <img onClick={() => { navigate('/chat') }} src="./assets/groups.svg" alt="" />
                    </div>
                    <div>
                        <img src="./assets/settings.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}