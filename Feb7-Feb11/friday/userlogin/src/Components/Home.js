import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
function Home() {
    const history = useNavigate();
    const [user,setUser] = useState(undefined);
    useEffect(() => {

        if (!localStorage.getItem("UserId")) {
            history("/login");
          }
        else{
            setUser(localStorage.getItem("UserId"));
            // console.log(localStorage.getItem("UserId"));
        }
    }, [])
    return (
        <div>
            Welcome {user}
        </div>
    )
}

export default Home
