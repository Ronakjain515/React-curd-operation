import React, { Component, Suspense } from "react";
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import Users from "./users/users";
import { ROUTES_PATH } from "./constants/routes";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path={ROUTES_PATH.USERS} component={Users} />
                        <Redirect exact path={"*"} to={ROUTES_PATH.USERS} />
                    </Switch>  
                </Suspense>
            </BrowserRouter>
        );
    }
}

export default App;
