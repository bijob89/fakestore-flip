import React from "react";
import ProductSlider from "./slider/ProductSlider";
import banner from "../../src/assets/images/products/banner.jpg"
import banner_1 from "../../src/assets/images/products/banner_1.jpg"
import banner_2 from "../../src/assets/images/products/banner_2.jpg"

export default function LandingBanner() {
	return <div className="mb-2 landing-banner">
		<ProductSlider slidesToShow={1} overrideResponsiveness={true}>
			<img src={banner} alt="banner" />
			<img src={banner_1} alt="banner_1" />
			<img src={banner_2} alt="banner_2" />
		</ProductSlider>
	</div>
}
