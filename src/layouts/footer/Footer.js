import React from 'react'
import FooterLinks from './FooterLinks'

function Footer() {
	const links = [
		["Contact Us", "About Us", "Careers", "Press", "Wholesale", "Corporate Information"],
		["Payments", "Shipping", "Cancellations", "FAQ", "Report"],
		["Return Policy", "Terms of Use", "Security", "Privacy", "Sitemap"],
		["Facebook", "Twitter", "Youtube"]
	]
	return (
		<footer>
			<div className='row p-5 footer-main'>
				<div className='col-12 col-md-8 links'>
					<div className='row'>
						{
							links.map((_links, ind) => <div className='col-12 col-md-3 mb-3' key={`foot-item-${ind}`}><FooterLinks links={_links} /></div>)
						}
					</div>
				</div>
				<div className='col-12 col-md-4 address'>
					<div className='row'>
						<div className='col-12 col-md-6 mb-3'>
							<p>Lorem ipsum dolor sit amet,</p>
							<p>consectetur adipiscing elit, sed do eiusmod</p>
							<p>tempor incididunt ut labore et</p>
							<p>dolore magna aliqua.</p>
							<p>Ut enim ad minim veniam,</p>
							<p>quis nostrud</p>
						</div>
						<div className='col-12 col-md-6'>
							<p>Lorem ipsum dolor sit amet,</p>
							<p>consectetur adipiscing elit, sed do eiusmod</p>
							<p>tempor incididunt ut labore et</p>
							<p>dolore magna aliqua.</p>
							<p>Ut enim ad minim veniam,</p>
							<p>quis nostrud</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer