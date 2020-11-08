import React, { Component } from 'react';
import { Card, Button , CardGroup} from 'react-bootstrap';
class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      cards : [],
      data: false
    }
    this.handleOnClick = this.handleOnClick.bind(this)
  }
  render(){
    if(this.state.data === true){
      return(
          <CardGroup>{this.state.cards}</CardGroup>
      )
    }
    else{
      return (<Button  variant="primary" onClick = {this.handleOnClick}>Click Me!</Button>)
    }
  }

  async handleOnClick(){
    return new Promise(async(resolve,reject)=>{
      await fetch("/hello",{
          mode: 'cors',
          method: "get",
          headers:{
            "Content-Type":"application/json"
          }
        }).then( async function(response){
          let data = await response.json();
          return data;
        }).then(data=>{
            data = data.data
            var cards = []
            console.log("response",data)
            for(let index = 0; index<data.length ;index++){
              cards.push(
                <Card border = "primary" style={{ width: '18rem' }}>
                <Card.Header>{data[index].name}</Card.Header>
                <Card.Img variant="top" width = "400" height = "400" src = {data[index].image}/>
                <Card.Body>
                  <Card.Title>{data[index].price}</Card.Title>
                  <Card.Text>
                      {data[index].description}
                  </Card.Text>
                  <Button variant="primary">Buy Now</Button>
                </Card.Body>
              </Card>
            )
            }
            this.setState({
              data: true,
              cards: cards
            })
        })
    })
    }
}

export default App;
