import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

//Components
import Message from "./components/message";

export default function Chat_view(props) {
    const [current_recipient,set_current_recipient]=useState(null)
    const [messeges, set_messeges] = useState([])
    const [my_messege, set_my_messege] = useState('')
    

    useEffect((() => {
        console.log(props.current_recipient)
        //Load draft message from database
        props.messages_update_needed()
    }), [])

    useEffect((()=>{set_current_recipient(props.current_recipient)}),[current_recipient])
    useEffect((()=>{set_messeges(props.messages); console.log('Messages updated')}),[props.messages])


    function send_messege(){
        console.log('Sending message')
        var date=new Date() 
        props.send_message({sender_id:props.my_details['_id'] , recipient_id:current_recipient['_id'], body: my_messege, media_url: null, message_type: 'message', reaction_id: null, status:'sending','date':date.toISOString() })
        set_my_messege('')
    }

    function handle_onKeyPressed(key){
        
        if(key==="Enter"){
            send_messege()
        }
    }


    return (
        <div className="body">
            <div className="main">

                <div className="party_2_container">
                    <div className="contact_container">
                        <img src="./assets/back_icon.svg" alt="" onClick={(e) => { props.navy('index') }} />

                        <img src={props.current_recipient.profile_photo_url} alt=""></img>
                        <div className="chat_details">
                            <span>{props.current_recipient.display_name}</span>
                            <span>{props.current_recipient.status}</span>
                        </div>
                        <div>
                            <img style={{ width: '35px' }} src="./assets/main_logo.svg" alt=""></img>
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

                    {(()=>{
                        return messeges.map((messege)=>{
                            return (<Message  key={messege.id} my_details={props.my_details} messege={messege} />)
                        })
                    })()}
                


                </div>

                <div className="message_bar">
                    <div className="message_bar_container">
                        <div className="message_container">
                            <input type="text" name="" id="" placeholder="Message" value={my_messege} onChange={(e) => { set_my_messege(e.target.value); }} onKeyPress={(e)=>{handle_onKeyPressed(e.key)}} />
                            <img src="./assets/plus_icon.svg" alt="" />
                        </div>
                        <img src="./assets/mic_icon.svg" alt="" onClick={(e)=>{send_messege()}}/>
                    </div>
                </div>

            </div>
        </div>
    )
}