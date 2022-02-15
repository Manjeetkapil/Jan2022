import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
function Home() {
    const history = useNavigate();
    const [user,setUser] = useState(undefined);
    useEffect(() => {

        if (!localStorage.getItem("UserData")) {
            history("/login");
          }
        else{
            let userData = JSON.parse(localStorage.getItem("UserData"));
            let userId = localStorage.getItem("UserId");
            setUser(userData[userId])

            // console.log(localStorage.getItem("UserId"));
        }
    }, [])
    return (
        <div className='Dash'>
            {user ? <div>
                <h1>Welcome </h1>
                <h3>{user.name}</h3>
                <h3>{user.email}</h3>
                <h3>{user.mobile}</h3>
                <h3>{user.address}</h3>
                </div>:null}
        </div>
    )
}

export default Home
