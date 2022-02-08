import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "./Body.css"
import Delete from "../../images/delete.png";

class Body extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      data:[],
    }
    this.handleClick = this.handleClick.bind(this);

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=100')
    .then((response)=>response.json())
    .then(response=>{
      this.setState({data:response})
      console.log(response);
    })
  }
  handleClick = (id) =>{
    function removeClicked(item){
      if (item.id === id){
        return false;
      }
      return true;
    }
    this.setState({data:this.state.data.filter(removeClicked)})
  }

  render() {
    return (
    <Container>
    <div className="mybody">
      {this.state.data.map((item)=>(
        <Card className="card" key={item.id}>
          <Card.Body>
            <Card.Title>
              {item.title}
              <img onClick={()=>this.handleClick(item.id)} className="delete" src={Delete} alt="" style={{width:"100px",height:"100px"}}/>
            </Card.Title>
            <img src={item.url} alt="" style={{width:"100px",height:"100px",marginLeft:"100px"}}/>
            <br />
          </Card.Body>
        </Card>
      ))}
    </div>
    </Container>
    );
  }
}

export default Body;
