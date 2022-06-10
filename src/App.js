import React, { Component, createRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import Home from '../src/pages/Home'
import Account from './pages/Auth/Account';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import NotFound from './pages/NotFound';

// component
import NavbarSb from './components/NavbarSb';
import CartOffCanvas from './components/CartOffCanvas';
import Footer from './components/Footer';
import OffCanvas from './components/OffCanvas';

class App extends Component {
	constructor (props) {
		super(props)
		this.state = {
			cartOffCanvs : false,
			burgerOffCanvs : false
		}
	}

	render() {
		return (
			<BrowserRouter>
				<header>
					<NavbarSb 
						cartOnClick={() => this.setState({cartOffCanvs : true})}
						burgerOnClick={() => this.setState({burgerOffCanvs : true})}
					/>
					<CartOffCanvas 
						cartIsOpen={this.state.cartOffCanvs}
						cartToggle={() => this.setState({cartOffCanvs : false})}
						cartIsClose={() => this.setState({cartOffCanvs : false})}
					/>
					<OffCanvas 
						burgerIsOpen={this.state.burgerOffCanvs}
						burgerToggle={() => this.setState({burgerOffCanvs : false})}
					/>
				</header>

				<Routes>
					<Route path='/' element={<Home />} />

					<Route path='/account' element={<Account />}>
						<Route path='login' element={<Login />} />
						<Route path='register' element={<Register />} />
					</Route>

					<Route path='*' element={<NotFound />} />
				</Routes>

				<Footer />
			</BrowserRouter>
		);
	}
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
