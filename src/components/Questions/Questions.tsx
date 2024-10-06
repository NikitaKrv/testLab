import { useState } from 'react'
import { questions } from '../../data/questions.ts'
import Open from '../../assets/open.svg?react'
import Section from '../../wrappers/Section/Section.tsx'
import styles from './Questions.module.scss'

const Questions = () => {
	const [activeId, setActiveId] = useState<null | number>(null)
	
	const handleSetActiveId = (id: number) => {
		if (id === activeId) setActiveId(null)
		else setActiveId(id)
	}
	
	return (
		<Section id="questions" title="Вопросы и ответы">
			<div className={ styles.questions }>
				{
					questions.map(question => {
						return (
							<div key={ question.id } className={ styles.questionItem }>
								<div onClick={ () => handleSetActiveId(question.id) }>
									<div className={ styles.title }>{ question.title }</div>
									<div>
										<Open className={ activeId === question.id ? styles.open : '' } />
									</div>
								</div>
								{
									activeId === question.id && (
										<div className={ styles.text }>
											{ question.text }
										</div>
									)
								}
							
							</div>
						)
					})
				}
			</div>
		</Section>
	)
}

export default Questions