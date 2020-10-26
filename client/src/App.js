import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
  return (
  <>hello
  <button type="button" onClick={this.handleClick}>Click Me!</button> </>
  )}
  async handleClick(){
    return new Promise(async(resolve,reject)=>{
      await fetch("/insta",{
          crossDomain:true,
          method: "get",
          headers:{
            "Content-Type":"application/json"
          }
        }).then( async function(response){
          console.log("response",response);
          let data = await response.json();
          return data;
        }).then(data=>{

        })
    })
    }
}

export default App;
