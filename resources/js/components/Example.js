import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './Dashboard'
import TambahPasien from './TambahPasien'
import UbahPasien from './UbahPasien'

function Example() {
    return (
        
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8" style={{paddingTop:'20px'}}>
                <BrowserRouter > 
                    <Switch> 
                        <Route exact path = '/' component = { Dashboard }/>
                        <Route exact path = '/add' component = { TambahPasien }/>
                        <Route path="/ubah/:id" component={UbahPasien} />
                    </Switch>
                </BrowserRouter>
                    
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
