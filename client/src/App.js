import React, { Component } from 'react';
import { Card, Button , CardColumns} from 'react-bootstrap';
import Pay from './Pay/Payment';

const PAYMENT = 1;
const NON_PAYMENT = 0;

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
    var page = this.state.page
    switch (page) {
      case NON_PAYMENT:
        return (<CardColumns>{this.state.cards}</CardColumns>);
        break;
      case PAYMENT:
        return (<Pay data = {this.state.selectedItem}/>);
        break;
      default:
        return (<>Loading..</>)
    }
  }
  componentDidMount(){
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
            for(let index = 0; index<data.length ;index++){
              cards.push(
                <Card border = "primary" style={{ width: '18rem' }}>
                <Card.Header>{data[index].name}</Card.Header>
                <Card.Img variant="top" width = "400" height = "300" src = {data[index].image}/>
                <Card.Body>
                  <Card.Title>$: {data[index].price}</Card.Title>
                  <Card.Text>
                      {data[index].description}
                  </Card.Text>
                  <Button variant="primary" value = {index} onClick = {this.handleOnClick} >Buy Now</Button>
                </Card.Body>
              </Card>
            )
            }
            this.setState({
              page: NON_PAYMENT,
              cards: cards,
              data: data
            })
        })
    })
  }

  handleOnClick=event=>{
      console.log("Selected item", event.target.value);
      let index = parseInt(event.target.value)
      let selected = this.state.data[index]
      this.setState({
          selectedItem : selected,
          page : PAYMENT
      });
  }
}

export default App;
