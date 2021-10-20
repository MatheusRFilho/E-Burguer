import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Hamburguerias from './pages/hamburguerias';
import Pedidos from './pages/pedidos';
import FaleConosco from './pages/faleConosco';
import Login from './pages/login-register';
import Buy from './pages/buy';
import Profile from './pages/profile';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/hamburguerias" component={Hamburguerias} />
        <Route path="/pedidos" component={Pedidos} />
        <Route path="/fale-conosco" component={FaleConosco} />
        <Route path="/entrar-registrar" component={Login} />
        <Route path="/hamburgueria/:id" component={Buy} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
