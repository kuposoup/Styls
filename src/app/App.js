import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { PageHeader } from '../components/PageHeader/PageHeader.component';
import { Inventory } from '../screens/Inventory/Inventory.screen';
import './App.scss';
import { SignInSignUp } from '../screens/SignInSignUp/SignInSignUp.component';
import { signInConfig, signUpConfig } from '../config/SignInSignUp/SignInSignUpConfig';

function App() {
    return (
        <div className="App">
            <Router>
                <PageHeader />
                <Switch>
                    <Route path="/" exact>
                    </Route>
                    <Route path="/appointments" exact>
                    </Route>
                    <Route path="/appointments/:id" exact>
                    </Route>
                    <Route path="/clients" exact>
                    </Route>
                    <Route path="/clients/:id" exact>
                    </Route>
                    <Route path="/inventory" exact>
                        <Inventory />
                    </Route>
                    <Route path="/inventory/:id" exact>
                    </Route>
                    <Route path="/account" exact>
                    </Route>
                    <Route path="/account/:id" exact>
                    </Route>
                    <Route path="/signup" exact>
                        <SignInSignUp 
                            formConfig={signUpConfig}
                        />
                    </Route>
                    <Route path="/signin" exact>
                        <SignInSignUp 
                            formConfig={signInConfig}
                        />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
