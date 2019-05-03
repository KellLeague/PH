import React , {Component}  from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import AboutUs from './components/aboutus';

class App extends Component {
  render(){
    return (
      <HashRouter>
      <>
      <Navbar/>
      <Route path='/aboutUs' exact component={AboutUs} />
      </>
    </HashRouter>
    )

    
  }


}
export default App;