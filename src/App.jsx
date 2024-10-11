
import './App.css'
import { Route } from 'react-router-dom/cjs/react-router-dom.min'
import OrderPizza from './pages/OrderPizza'
import Home from './pages/Home'
import Success from './pages/Success'

function App() {
  
  
  return (
    <>
      <Route exact path='/'><Home/></Route>
      <Route exact path='/Home'><Home/></Route>
      <Route exact path='/OrderPizza'><OrderPizza/></Route>
      <Route
          path="/success"
          render={(props) => <Success {...props.location.state} />}
        />
    
    </>
  )
}

export default App
