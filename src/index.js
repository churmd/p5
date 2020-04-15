import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Notfound from "./NotFound";
import ModuloTimesTable from './sketches/moduloTimesTableCircle/ModuloTimesTable';
import SnowflakeGenerator from './sketches/snowfalkeGenerator/SnowflakeGenerator';

const routing = (
	<Router>
		<Switch>
			<Route exact path="/" component={App} />
			<Route exact path="/moduloTimesTable" component={ModuloTimesTable} />
			<Route exact path="/snowflakeGenerator" component={SnowflakeGenerator} />
			<Route component={Notfound} />
		</Switch>
	</Router>
);

ReactDOM.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
