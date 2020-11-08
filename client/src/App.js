import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top"  />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )}

  async UNSAFE_componentWillMount(){
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
          console.log("response",data);
        })
    })
    }
}

export default App;
