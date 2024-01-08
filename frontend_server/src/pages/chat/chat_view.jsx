import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Chat_view(props) {
    const {recipient_id}=useParams()

    useEffect((()=>{
        console.log(props.current_recipient)
    }),[])


    return (
        <div class="body">
            <div class="main">

                <div class="party_2_container">
                    <div class="contact_container">
                        <img src="./assets/back_icon.svg" alt="" onClick={(e)=>{ props.navy('index')  }}/>

                            <img src={props.current_recipient.profile_photo_url} alt=""></img>
                                <div class="chat_details">
                                    <span>{props.current_recipient.display_name}</span>
                                    <span>Online {recipient_id}</span>
                                </div>
                                <div>
                                    <img style={{width: '35px'}} src="./assets/main_logo.svg" alt=""></img>
                                </div>
                            </div>
                    </div>

                    <div class="game_controls">
                        <div>
                            <span>Hello world</span>
                        </div>
                        <button>Next</button>
                    </div>

                    <div class="sent_received_messages_container">


                        <div class="received_message_container">
                            <div class="received_message_content">
                                <div class="received_message" >
                                    <span>Hello How are you</span>
                                </div>
                                <span>12:00</span>
                            </div>
                        </div>

                        <div class="sent_message_container">
                            <div class="sent_message_content">
                                <div class="sent_message">
                                    <span>Hello How are yojsndfjskdj dfvgjio df dfv rfverf erv erfv  egv  ergve erfv refv tgv u</span>
                                </div>
                                <span>12:00 Seen</span>
                            </div>
                        </div>


                        <div class="sent_message_container">
                            <div class="sent_message_content">
                                <div class="sent_message">
                                    <span>Hello</span>
                                </div>
                                <span>12:00 Seen</span>
                            </div>
                        </div>


                        <div class="sent_message_container">
                            <div class="sent_message_content">
                                <div class="sent_message">
                                    <span>Hello How are yojsndfjskdj dfvgjio df dfv rfverf erv erfv  egv  ergve erfv refv tgv u</span>
                                </div>
                                <span>12:00 Seen</span>
                            </div>
                        </div>


                        <div class="sent_message_container">
                            <div class="sent_message_content">
                                <div class="sent_message">
                                    <span>Hello How are yojsndfjskdj dfvgjio df dfv rfverf erv erfv  egv  ergve erfv refv tgv u</span>
                                </div>
                                <span>12:00 Seen</span>
                            </div>
                        </div>


                        <div class="sent_message_container">
                            <div class="sent_message_content">
                                <div class="sent_message">
                                    <span>Hello How are yojsndfjskdj dfvgjio df dfv rfverf erv erfv  egv  ergve erfv refv tgv u</span>
                                </div>
                                <span>12:00 Seen</span>
                            </div>
                        </div>


                        <div class="received_message_container">
                            <div class="received_message_content">
                                <div class="received_message" >
                                    <span>Hello How are you</span>
                                </div>
                                <span>12:00</span>
                            </div>
                        </div>

                        <div class="sent_message_container">
                            <div class="sent_message_content">
                                <div class="sent_message">
                                    <span>Hello How are yojsndfjskdj dfvgjio df dfv rfverf erv erfv  egv  ergve erfv refv tgv u</span>
                                </div>
                                <span>12:00 Seen</span>
                            </div>
                        </div>



                    </div>

                    <div class="message_bar">
                        <div class="message_bar_container">
                            <div class="message_container">
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