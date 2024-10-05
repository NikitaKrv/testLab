import Slider, { Settings } from 'react-slick'
import Section from '../../wrappers/Section/Section.tsx'
import { reviews } from '../../data/reviews.ts'
import ReviewItem from '../ReviewItem/ReviewItem.tsx'
import NextArrow from '../NextArrow/NextArrow.tsx'
import PrevArrow from '../PrevArrow/PrevArrow.tsx'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './Reviews.module.scss'

const Reviews = () => {
	const settings: Settings = {
		dots: true,
		speed: 500,
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: <PrevArrow />,
		nextArrow: <NextArrow />,
		appendDots: dots => (
			<div className={ styles.dots }>
				<ul style={ {margin: '0px'} }> { dots } </ul>
			</div>
		),
		customPaging: () => (
			<div className={ styles.dotsItem } />
		),
		responsive: [
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
					arrows: false
				}
			},
			{
				breakpoint: 375,
				settings: {
					slidesToShow: 1,
					arrows: false
				}
			}
		]
	}
	
	return (
		<Section title="Отзывы" className={ styles.reviews }>
			<div className={ styles.slider }>
				<Slider { ...settings } >
					{
						reviews.map(review => <ReviewItem key={ review.id }{ ...review } />)
					}
				</Slider>
			</div>
		</Section>
	)
}

export default Reviews