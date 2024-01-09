import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Chat_view(props) {
    const {recipient_id}=useParams()

    useEffect((()=>{
        console.log(props.current_recipient)
    }),[])


    return (
        <div className="body">
            <div className="main">

                <div className="party_2_container">
                    <div className="contact_container">
                        <img src="./assets/back_icon.svg" alt="" onClick={(e)=>{ props.navy('index')  }}/>

                            <img src={props.current_recipient.profile_photo_url} alt=""></img>
                                <div className="chat_details">
                                    <span>{props.current_recipient.display_name}</span>
                                    <span>Online {recipient_id}</span>
                                </div>
                                <div>
                                    <img style={{width: '35px'}} src="./assets/main_logo.svg" alt=""></img>
                                </div>
                            </div>
                    </div>

                    <div className="game_controls">
                        <div>
                            <span>Hello world</span>
                        </div>
                        <button>Next</button>
                    </div>

                    <div className="sent_received_messages_container">


                        <div className="received_message_container">
                            <div className="received_message_content">
                                <div className="received_message" >
                                    <span>Hello How are you</span>
                                </div>
                                <span>12:00</span>
                            </div>
                        </div>

                        <div className="sent_message_container">
                            <div className="sent_message_content">
                                <div className="sent_message">
                                    <span>Hello How are yojsndfjskdj dfvgjio df dfv rfverf erv erfv  egv  ergve erfv refv tgv u</span>
                                </div>
                                <span>12:00 Seen</span>
                            </div>
                        </div>


                        <div className="sent_message_container">
                            <div className="sent_message_content">
                                <div className="sent_message">
                                    <span>Hello</span>
                                </div>
                                <span>12:00 Seen</span>
                            </div>
                        </div>


                        <div className="sent_message_container">
                            <div className="sent_message_content">
                                <div className="sent_message">
                                    <span>Hello How are yojsndfjskdj dfvgjio df dfv rfverf erv erfv  egv  ergve erfv refv tgv u</span>
                                </div>
                                <span>12:00 Seen</span>
                            </div>
                        </div>


                        <div className="sent_message_container">
                            <div className="sent_message_content">
                                <div className="sent_message">
                                    <span>Hello How are yojsndfjskdj dfvgjio df dfv rfverf erv erfv  egv  ergve erfv refv tgv u</span>
                                </div>
                                <span>12:00 Seen</span>
                            </div>
                        </div>


                        <div className="sent_message_container">
                            <div className="sent_message_content">
                                <div className="sent_message">
                                    <span>Hello How are yojsndfjskdj dfvgjio df dfv rfverf erv erfv  egv  ergve erfv refv tgv u</span>
                                </div>
                                <span>12:00 Seen</span>
                            </div>
                        </div>


                        <div className="received_message_container">
                            <div className="received_message_content">
                                <div className="received_message" >
                                    <span>Hello How are you</span>
                                </div>
                                <span>12:00</span>
                            </div>
                        </div>

                        <div className="sent_message_container">
                            <div className="sent_message_content">
                                <div className="sent_message">
                                    <span>Hello How are yojsndfjskdj dfvgjio df dfv rfverf erv erfv  egv  ergve erfv refv tgv u</span>
                                </div>
                                <span>12:00 Seen</span>
                            </div>
                        </div>



                    </div>

                    <div className="message_bar">
                        <div className="message_bar_container">
                            <div className="message_container">
                                <input type="text" name="" id="" placeholder="Message"></input>
                                    <img src="./assets/plus_icon.svg" alt=""></img>
                                    </div>
                                    <img src="./assets/mic_icon.svg" alt=""></img>
                                    </div>
                            </div>

                        </div>
                    </div>
                    )
}