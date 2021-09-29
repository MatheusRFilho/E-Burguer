import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Hamburguerias from './pages/hamburguerias';
import Pedidos from './pages/pedidos';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/hamburguerias" component={Hamburguerias} />
        <Route path="/pedidos" component={Pedidos} />
        {/* <Route path="/new-vehicle" component={BuyNewVehicle} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
