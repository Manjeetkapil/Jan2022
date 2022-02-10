import React,{useState,useEffect} from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "./Body.css"
import Delete from "../../images/delete.png";

function Body() {
    const [data,setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=13')
        .then((response)=>response.json())
        .then(response=>{
          setData(response);
          console.log(response);
        })
        .catch(setData([{
            id:1,
            title:"Not able to fetch",
            src:"xyz",
        }]))
    }, [])

    let handleClick = (id) =>{
        function removeClicked(item){
          if (item.id === id){
            return false;
          }
          return true;
        }
        setData(data.filter(removeClicked))
      }
    
  return (
    <Container>
    <div className="mybody">
      {data.map((item)=>(
        <Card className="card" key={item.id}>
          <Card.Body>
            <Card.Title>
              {item.title}
              <img onClick={()=>handleClick(item.id)} className="delete" src={Delete} alt="" style={{width:"100px",height:"100px"}}/>
            </Card.Title>
            <img src={item.url} alt="" style={{width:"100px",height:"100px",marginLeft:"100px"}}/>
            <br />
          </Card.Body>
        </Card>
      ))}
    </div>
    </Container>
  )
}

export default Body;