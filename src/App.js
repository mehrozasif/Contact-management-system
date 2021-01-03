import logo from './logo.svg';
import './App.css';
import Contacts from './Component/Contacts'
import Header from './Component/Header'
import {Provider} from './Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <Provider>
        <div className="">
        <Header branding="Conatct Manager" />
        <div className="container">
          <Contacts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
