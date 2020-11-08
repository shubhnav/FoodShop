import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
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
          <>{this.state.cards}</>
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
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" width = "400" height = "400" src = {data[index].image}/>
                <Card.Body>
                  <Card.Title>{data[index].name}</Card.Title>
                  <Card.Text>
                      "Price : "{data[index].price}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
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
