import Login from './pages/Log_in';
import Dashboard from './pages/Dashboard';
import MenuBar from './nav';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Management_select from './pages/Manage_Select';
import Manage_user from './pages/Manage_User';
import Manage_module from './pages/Manage_Module';
import Manage_plant from './pages/Manage_plant';

const Menu = () => {
	return ( 
		<Router>
			<MenuBar />
			<Switch>
				<Route path="/" exact component={Login} />
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/management_select" component={Management_select} />
				<Route path="/management/module" component={Manage_module} />
				<Route path="/management/user" component={Manage_user} />
				<Route path="/management/plant" component={Manage_plant} />
			</Switch>
		</Router>
	 );
}
 
export default Menu;
