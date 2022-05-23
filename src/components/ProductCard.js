import React, {
	useEffect,
	// useState
} from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

function ProductCard({ products, filteredProducts }) {
	// const [moStyle, setMoStyle] = useState({
	// 	minWidth: '286px',
	// 	minHeight: '286px',
	// });

	// const changeStyleOnMouseOver = (e) => {
	// 	console.log(e.target.id);
	// 	let mouseOverStyle = {
	// 		minWidth: '286px',
	// 		minHeight: '286px',
	// 		transform: 'scale(1.5)',
	// 		zIndex: '1',
	// 	};
	// 	setMoStyle(mouseOverStyle);
	// };
	// const changeStyleOnMouseLeave = (e) => {
	// 	let mouseOverStyle = {
	// 		minWidth: '286px',
	// 		minHeight: '286px',
	// 	};
	// 	setMoStyle(mouseOverStyle);
	// };
	let prods = products;
	console.log(products);
	console.log(filteredProducts);
	if (filteredProducts.length !== 0) {
		prods = filteredProducts;
	}
	useEffect(() => {}, []);
	const backupImg = (ev) => {
		ev.target.src = 'http://via.placeholder.com/286x286';
	};
	return (
		<div className=''>
			<div className='mx-auto col-10 d-flex justify-content-center flex-wrap '>
				{[...prods].map((prod, index) => {
					return (
						<Card
							className='m-3 custom-card'
							key={index}
							id={prod.id}
							style={{ width: '18rem' }}
						>
							<Card.Img
								id={prod.id}
								// onMouseEnter={changeStyleOnMouseOver}
								// onMouseLeave={changeStyleOnMouseLeave}
								className='hover-zoom'
								aria-haspopup='true'
								variant='top'
								src={
									(prod.image.src = null
										? 'http://via.placeholder.com/286x286'
										: prod.image.src)
								}
								onError={backupImg}
								style={{ minWidth: '286px', minHeight: '286px' }}
							/>
							<Card.Body>
								<Card.Title>{prod.title}</Card.Title>
								<Card.Text>Price RM {prod.price}</Card.Text>
								{/* <Button variant='primary'>Go somewhere</Button> */}
							</Card.Body>
						</Card>
					);
				})}
			</div>
		</div>
	);
}

export default ProductCard;
