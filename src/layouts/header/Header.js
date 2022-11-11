import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
	const navigate = useNavigate()


	return (
		<header>
			{/* <div className='d-flex align-items-center justify-content-center'> */}
			<div className='container'>
				<div className='row'>
					<div className='col-4 col-md-2 logo' onClick={() => navigate('/')}>
						<h3>FakeStore</h3>
					</div>
					<div className='col-8 d-md-none d-flex justify-content-end align-items-center'>
						<i className="fa fa-search me-3" aria-hidden="true"></i>
						<i className="fa fa-shopping-cart me-3" aria-hidden="true"></i>
						<i className="fa fa-user me-3" aria-hidden="true"></i>
					</div>
					<div className='d-none col-6 search d-md-flex align-items-center'>
						<input name="search" placeholder='Search for products, brands and more' />
						<i className="fa fa-search" aria-hidden="true"></i>
					</div>
					<div className='d-none col-4 d-md-flex justify-content-around align-items-center'>
						<button className='py-1'>Login</button>
						<span>More <i className="fa fa-caret-down ms-2" aria-hidden="true"></i></span>
						<span className='cart'  onClick={() => navigate('/cart')}><i className="fa fa-shopping-cart me-2" aria-hidden="true"></i> Cart</span>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header