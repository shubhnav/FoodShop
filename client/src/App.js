import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
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
      return(<>hello 2</>)
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
              cards.push(<Button variant="primary">{data[index].name}</Button>)
            }
            this.setState({
              data: true
            })
        })
    })
    }
}

export default App;
