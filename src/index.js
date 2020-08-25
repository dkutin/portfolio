import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" exact component={App} />
            <Route path="*" component={() => {return(
                <div className="not-found">
                    <h1>Uh oh! 404 Page Not Found</h1>
                    <h2>Back to</h2>
                    <a href="/"> Homepage </a>
                </div>)}}/>
        </Switch>
    </Router>, document.getElementById('root'));
registerServiceWorker();
