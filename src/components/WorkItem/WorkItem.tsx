import { Work } from '../../types/work.ts'
import styles from './WorkItem.module.scss'

interface WorkItemProps extends Work {
}

const WorkItem = ({text, img, title}: WorkItemProps) => {
	return (
		<div className={ styles.workItem }>
			<img className={ styles.img } src={ img } alt="work-icon" />
			<div>
				<h5 className={ styles.title }>{ title }</h5>
				<p className={ styles.text }>{ text }</p>
			</div>
		</div>
	)
}

export default WorkItem