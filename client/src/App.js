import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
  return (
     <button type="button" onClick = {this.handleOnClick}>Click Me!</button>
  )}

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

        })
    })
    }
}

export default App;
