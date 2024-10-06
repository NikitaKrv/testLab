import { works } from '../../data/works.ts'
import Section from '../../wrappers/Section/Section.tsx'
import WorkItem from '../WorkItem/WorkItem.tsx'
import styles from './Works.module.scss'

const Works = () => {
	return (
		<Section id="work" title="Как это работает">
			<div className={ styles.works }>
				{ works.map(work => <WorkItem key={ work.img } { ...work } />) }
			</div>
		</Section>
	)
}

export default Works