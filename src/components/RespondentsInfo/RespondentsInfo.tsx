import Section from '../../wrappers/Section/Section.tsx'
import { respondents } from '../../data/respondents.ts'
import styles from './RespondentsInfo.module.scss'

const RespondentsInfo = () => {
	return (
		<Section className={ styles.respondentsInfo }>
			<div className={ styles.respondentsList }>
				{ respondents.map(respondent => (
					<div key={ respondent.id } className={ styles.respondentsItem }>
						<div className={ styles.title }>
							{ respondent.title }
						</div>
						<div className={ styles.text }>
							{ respondent.text }
						</div>
					</div>
				)) }
			</div>
		</Section>
	)
}

export default RespondentsInfo