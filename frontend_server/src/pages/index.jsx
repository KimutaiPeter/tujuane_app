import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import io from 'socket.io-client'
//Firebase 
import { provider, auth } from "../global/config.js";
import { signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
//Pages
import Login_view from "./login/Login";
import Index_view from "./index/index_view";
import Chat_view from "./chat/chat_view.jsx";
//css
import './css/style.css'
import './css/login.css'
import './css/chat.css'
//Global variables
import global from "../global/global.js";


const socket = io('http://localhost:5001')

export default function Index() {
    const [page, set_page] = useState('login')
    const [my_details, set_my_details] = useState({ 'display_name': null, 'email': null, 'sid': null })
    const [friends_data, set_friends_data]=useState([])
    const [current_recipient,set_current_recipient]=useState({})


    useEffect((() => {
        get_user_details()
        get_friends_data()
        console.log('The page is now loaded')
    }), [])


    //Detect on backpress
    window.history.pushState(null, null, document.URL);
    window.addEventListener('popstate', function (event) {
        set_page('index');
    });





    function get_user_details() {
        //The auth data is saved in local storage, if its not there then authenticate again
        if (localStorage.getItem('my_details')) {
            var item=localStorage.getItem('my_details')
            set_my_details(JSON.parse(item))
            set_page('index')
        } else {
            const auth = getAuth();
            const user = auth.currentUser;
            if (user) {
                // The user is authenticated.
                console.log(user)
                set_page('index')
            } else {
                // The user is not authenticated.
                //console.log(user)
                set_page('login')
            }
        }

    }

    function auth_result_data(data) {
        console.log(data)
        set_my_details({ 'display_name': data['display_name'], 'email': data['email'], 'sid': null })
        localStorage.setItem('my_details',JSON.stringify({ 'display_name': data['display_name'], 'email': data['email'], 'sid': null }))
        set_page('index')
    }


    function chat_with_individual(user_data) {
        console.log(user_data)
        set_current_recipient(user_data)
        set_page('chat')
    }

    function navy(page) {
        set_page(page)
    }



    return (
        <>
            {(() => {
                if (page === 'login') {
                    return (<Login_view auth_result_data={auth_result_data} />)
                } else if (page === 'index') {
                    return (<Index_view my_details={my_details} send_api={send_api} friends_data={ friends_data } chat_with_individual={chat_with_individual} />)
                } else if (page === 'chat') {
                    return (<Chat_view current_recipient={current_recipient} chat_with_individual={chat_with_individual} navy={navy} />)
                }
            })()}
        </>
    )


    useEffect(() => {

        socket.on('connect', () => {
            console.log('Connected id:', socket.id)
            socket.emit('greeting', "HI")
            set_status_message('Connected id:' + String(socket.id))

        })

        socket.on('likeupdate', (count) => {
            console.log(count)
        })

        socket.on('disconnect', () => {
            console.log('I have disconnected')
        })

        function check_connection() {
            console.log(socket.connected)
            return socket.connected;
        }

        socket.on("connect_error", () => {
            console.log('Connection to the server has some issues')
            socket.connect();
        });

        function reconnect() {
            socket.connect()
        }

        function get_session_count() {
            socket.emit('get_users_count', 101)
        }

        socket.on('receive_user_count', (data) => {
            console.log(data)
        })

        socket.on('message_from_server', (message) => {
            console.log(message)
        })

        socket.on('message_from_group', (message) => {
            console.log(message)
            set_messages(messages => ([...messages, String("<group>" + message)]));
        })

        socket.on('message_from_individual', (message) => {
            console.log(message)
        })

    }, [socket])


    //Universal Functions
    function send_api(api_url,data){
        var headers={headers: {'Content-Type': 'application/json'},withCredentials: true}
        api_url=global.Backend_server+api_url
        var result_data=null
        var result_data =axios.post(api_url, data,headers)
                .then(res => { 
                    console.log(res.data)
                    result_data= res.data
                    return res.data
                    if (result_data['status'] === 'success') {
                        console.log('Success')
                    }
                 })
                .catch(e => { console.error(e) })
        console.log(result_data)
        return result_data
    }

    async function ai_send_api(api_url, data) {
        try {
          const headers = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          };
          api_url = global.Backend_server + api_url;
      
          const response = await axios.post(api_url, data, headers);
          const result_data = response.data;
      
          console.log(result_data);
      
          if (result_data['status'] === 'success') {
            console.log('Success');
          }
      
          return result_data; // Return the response data
        } catch (error) {
          console.error('API request failed:', error);
          throw error; // Rethrow the error to allow handling by caller
        }
      }
      

    function get_api(api_url,data){
        var headers={headers: {'Content-Type': 'application/json'},withCredentials: true}
        api_url=global.Backend_server+api_url
        var result_data=null
        var  result_data = axios.post(api_url, data,headers)
                .then(res => { 
                    console.log(res.data)
                    result_data= res.data
                    if (result_data['status'] === 'success') {
                        props.nav('/index')
                        console.log('Going to the index page')
                    }
                 })
                .catch(e => { console.error(e) })
        console.log(result_data)
        return result_data
    }


    //Functions That handle initialization data
    async function get_friends_data(){
        var response_data =await ai_send_api('/index/get_users',my_details)
        console.log(response_data)
        set_friends_data(response_data.data)
        console.log(response_data,friends_data)
    }

}