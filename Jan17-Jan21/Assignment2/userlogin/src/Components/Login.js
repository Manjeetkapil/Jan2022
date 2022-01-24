import React, {useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";

function Login() {
    const history = useNavigate();
    const [data,setData] = useState({
        userId:"",
        password:""
    })
    useEffect(() => {
        if (localStorage.getItem("UserId")) {
            history("/");
          }
    }, [])
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
  const handleSubmit = async (evt) => {
    if (evt) {
      evt.preventDefault();
      let UserData = JSON.parse(localStorage.getItem("UserData"));
      if(UserData){
        if(data.userId in UserData){
            if(UserData[data.userId].password == data.password){
                localStorage.setItem("UserId",data.userId);
                    history("/");
            }
            else{
                alert("Your userId or Password Wrong")
            }
        }
        else{
            history("/registration");
        }
       }
       else{
        history("/registration"); 
       }
    }
  };
  return (
    <>
      <form
        style={{
          marginTop: "100px",
          marginLeft: "50px",
          border: "solid 1px",
          width: "max-content",
          borderColor: "green",
        }}
        onSubmit={handleSubmit}
      >
        <div style={{ textAlign: "center" }}>Login</div>
        <br />
        <label>UserId:</label>
        <input
          type="text"
          className="userId"
          value={data.userId}
          onChange={(e) => setData({...data, userId:e.target.value})}
          required
        ></input>
        <br />
        <br />
        <label>Password: </label>
        <input
          type="password"
          className="password"
          value={data.password}
          onChange={(e) => setData({...data, password:e.target.value})}
          required
        ></input>
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </>
  );
}

export default Login
