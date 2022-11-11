import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import '../../assets/css/landinglayout.css'

function LandingLayout(props) {
	return (
		<div className='main'>
			<Header />
			{props.children}
			<Footer />
		</div>
	)
}

export default LandingLayout