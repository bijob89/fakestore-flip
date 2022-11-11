import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../elements/NextArrow";
import PrevArrow from "../elements/PrevArrow";

function ProductSlider({ children, slidesToShow = 4, overrideResponsiveness = false }) {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: overrideResponsiveness ? slidesToShow : 3,
					slidesToScroll: 1,
					infinite: true,
					nextArrow: <NextArrow />,
					prevArrow: <PrevArrow />,
					// dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: overrideResponsiveness ? slidesToShow : 2,
					slidesToScroll: 1,
					initialSlide: 2,
					nextArrow: <NextArrow />,
					prevArrow: <PrevArrow />,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: overrideResponsiveness ? slidesToShow : 1,
					slidesToScroll: 1,
					nextArrow: <NextArrow />,
					prevArrow: <PrevArrow />,
				}
			}
		]
	};
	return (
		<div>
			<Slider {...settings}>
				{children}
			</Slider>
		</div>
	)
}

export default ProductSlider