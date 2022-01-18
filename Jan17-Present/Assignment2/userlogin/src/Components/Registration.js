import React , {useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";
function Registration() {

    const [data,setData] = useState({
        userId:'',
        name:'',
        email:'',
        mobile:'',
        address:'',
        password:''
    })
    
    const history = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("UserId")) {
            history("/");
          }
    }, [])
  const handleSubmit = (evt) => {
    evt.preventDefault();
    let UserData = localStorage.getItem("UserData");
    if(UserData){
        UserData[data.userId] = data;
    }
    else{
        UserData = {}
        UserData[data.userId] = data;
    }
    localStorage.setItem("UserData",JSON.stringify(UserData));
    history("/login");
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
        <div style={{ textAlign: "center" }}>Register Yourself</div>
        <br />
        <label>UserId:</label>
        <input
          type="text"
          className="username"
          value={data.userId}
          onChange={(e) => setData({...data, userId:e.target.value})}
          required
        ></input>
        <br />
        <br />
        <label>Name: </label>
        <input
          type="text"
          className="name"
          value={data.name}
          onChange={(e) => setData({...data, name:e.target.value})}
        ></input>
        <br />
        <br />
        <label>Email: </label>
        <input
          type="email"
          className="email"
          value={data.email}
          onChange={(e) => setData({...data, email:e.target.value})}
          required
        ></input>
        <br />
        <br />
        <label>Mobile: </label>
        <input
          type="number"
          className="mobile"
          value={data.mobile}
          onChange={(e) => setData({...data, mobile:e.target.value})}
        ></input>
        <br />
        <br />
        <label>Address: </label>
        <input
          type="text"
          className="address"
          value={data.address}
          onChange={(e) => setData({...data, address:e.target.value})}
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

export default Registration
