import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from './routes/Products';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Products />} />
			</Routes>
		</div>
	);
}

export default App;
