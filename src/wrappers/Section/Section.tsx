import { ReactNode } from 'react'
import Container from '../Container/Container.tsx'
import styles from './Section.module.scss'

interface SectionProps {
	title?: string,
	className?: string,
	id?: string,
	children: ReactNode
}

const Section = ({title, children, className, id}: SectionProps) => {
	const cls = [styles.section]
	
	if (className) cls.push(className)
	
	return (
		<section className={ cls.join(' ') } id={ id ? id : '' }>
			<Container>
				{
					title && <h3 className={ styles.title }>{ title }</h3>
				}
				{ children }
			</Container>
		</section>
	)
}

export default Section