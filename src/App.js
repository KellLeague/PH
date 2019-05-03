import React , {Component}  from 'react';
import {HashRouter} from 'react-router-dom';
import Navbar from './components/navbar';

class App extends Component {
  render(){
    return (
      <HashRouter>
      <>
      <Navbar/>
      </>
    </HashRouter>
    )

    
  }


}
export default App;