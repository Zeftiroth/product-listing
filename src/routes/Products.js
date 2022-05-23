import React, { useEffect, useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ProductCard from '../components/ProductCard';
import data from '../data/ProductDetails';
import Form from 'react-bootstrap/Form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Products() {
	const [dat, setDat] = useState('');
	const [prods, setProds] = useState('');
	const [search, setSearch] = useState('');

	const getSearchInput = (e) => {
		console.log(e.target.value);
		setSearch(e.target.value);
	};
	const [searchResultText, setSearchResultText] = useState('');
	const filterBySearchText = () => {
		let filProds = dat.filter((title) =>
			title.title.toLowerCase().includes(search.toLowerCase())
		);
		console.log(filProds);
		if (filProds.length === 0) {
			setSearchResultText(`Item ${search} is not found`);
		} else {
			setSearchResultText('');
			setProds(filProds);
		}
		console.log(dat);
	};

	const sortByNameOrPrice = (e) => {
		console.log(e.target.value);

		let sortInput = e.target.value;
		let beforeSort = [...prods];
		if (prods.length < 1) {
			beforeSort = [...dat];
		}

		if (sortInput === 'name') {
			let sortProds = beforeSort.sort((a, b) => {
				return a.title.localeCompare(b.title, undefined, {
					numeric: true,
					sensitivity: 'base',
				});
			});
			console.log('sort by name', sortProds);
			setProds(sortProds);
		}
		if (sortInput === 'price') {
			let sortProds = beforeSort.sort((a, b) => {
				return a.price - b.price;
			});
			console.log(sortProds);
			setProds(sortProds);
		}
	};

	const initialSort = () => {
		let initialData = data.products.sort((a, b) => {
			return a.title.localeCompare(b.title, undefined, {
				numeric: true,
				sensitivity: 'base',
			});
		});
		setDat(initialData);
		console.log(initialData);
	};

	useEffect(() => {
		initialSort();
	}, []);

	return (
		<div>
			<div className='row'>
				<div className='mt-5 mb-5 fs-1 fw-bold f'>
					<u>Product Listing</u>
				</div>

				<div className='col-8  mx-auto'>
					<InputGroup className='mb-3'>
						<FormControl
							placeholder='Search'
							aria-label='Search'
							aria-describedby='basic-addon1'
							onChange={getSearchInput}
						/>

						<InputGroup.Text id='basic-addon1' onClick={filterBySearchText}>
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</InputGroup.Text>
					</InputGroup>
					<Form.Text id='searchHelpBlock' muted>
						{searchResultText}
					</Form.Text>
				</div>
			</div>
			<div className='row '>
				<div className='col-8 mx-auto'>
					<div style={{ textAlign: 'left' }} className='my-2'>
						Sort by:
					</div>
					<div style={{ maxWidth: '100px' }}>
						<Form.Select
							aria-label='Default select example'
							placeholder='Sort'
							onChange={sortByNameOrPrice}
						>
							<option></option>

							<option value='name'>Name</option>
							<option value='price'>Price</option>
						</Form.Select>
					</div>
				</div>
			</div>
			<div className='d-flex justify-content-center flex-wrap mt-5'>
				<ProductCard products={dat} filteredProducts={prods} />
			</div>
			<div>Footer</div>
		</div>
	);
}

export default Products;
