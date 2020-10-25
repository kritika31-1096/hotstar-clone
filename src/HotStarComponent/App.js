import React, { Component, Fragment } from 'react';
import { Route, Switch,Link} from 'react-router-dom';
import Login from './AuthComponent/Login';
import Register from './AuthComponent/Register';
import HeaderComponent from './HeaderComponent/Header';
import Slider from './SliderComponent/Slider';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <header>
                <HeaderComponent/>
                </header>
                <main>
                    <Switch>
                        {/*switch check first if truthy then check next one */}
                        <Route path="/login"  component={Login}/>
                        <Route path="/register"  component={Register}/>

                       
                    </Switch>
                </main>
                <section>
                    <Slider/>
                </section>
            </Fragment>
         );
    }
}
 
export default App;