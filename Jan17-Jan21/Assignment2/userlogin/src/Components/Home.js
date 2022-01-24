import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
function Home() {
    const history = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("UserId")) {
            history("/login");
          }
    }, [])
    return (
        <div>
            Welcome user.
        </div>
    )
}

export default Home
