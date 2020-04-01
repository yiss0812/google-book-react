import React, { component } from 'React';
import Header from './Header';
import Books from './Books';

// import './app.css';

class App extends component{
    render() {
        return(
            <div className='App'>
                <Header/>
                <Books/>
            </div>
        );
    }

}

export default App;


