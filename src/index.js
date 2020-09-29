import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

const resumePath = 'pdf/dmitrykutin-resume.pdf'

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" exact component={App} />
            <Route path="/resume" exact component={() => {return(
                <div>
                    <object data={resumePath} type="application/pdf" width="100%" height="2300px">
                        <p>Alternative text - include a link <a href={resumePath}>to the PDF!</a></p>
                    </object>
                </div>)}} />
            <Route path="*" component={() => {return(
                <div className="not-found">
                    <h1>Uh oh! 404 Page Not Found</h1>
                    <h2>Back to</h2>
                    <a href="/"> Homepage </a>
                </div>)}}/>
        </Switch>
    </Router>, document.getElementById('root'));
registerServiceWorker();
