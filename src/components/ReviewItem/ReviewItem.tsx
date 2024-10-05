import { Review } from '../../types/review.ts'
import styles from './ReviewItem.module.scss'

interface ReviewItemProps extends Review {
}

const ReviewItem = ({img, city, fullName, text}: ReviewItemProps) => {
	return (
		<div className={ styles.reviewItem }>
			<div className={ styles.itemHeader }>
				<img className={ styles.photo } src={ img } alt="photo" />
				<div className={ styles.itemInfo }>
					<div className={ styles.fullName }>{ fullName }</div>
					<div className={ styles.city }>{ city }</div>
				</div>
			</div>
			<div className={ styles.text }>
				{ text }
			</div>
		</div>
	)
}

export default ReviewItem