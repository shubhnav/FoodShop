import { useSelector } from "react-redux"
import "./App.css"
import Menu from "./features/menu/menu"
import { RootState } from "./app/store"

export function App (){
  const total = useSelector((state:RootState)=>state.Payment.total);


  return (<div className="App">
    <header className="App-header">
      <p style={{fontWeight: "bold"}}>
        Total {total} 
      </p>
      
      <Menu />
    </header>
  </div>)
}
