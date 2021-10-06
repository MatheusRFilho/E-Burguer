import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Hamburguerias from './pages/hamburguerias';
import Pedidos from './pages/pedidos';
import FaleConosco from './pages/faleConosco';
import Login from './pages/login-register';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/hamburguerias" component={Hamburguerias} />
        <Route path="/pedidos" component={Pedidos} />
        <Route path="/fale-conosco" component={FaleConosco} />
        <Route path="/entrar-registrar" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
