import Container from '../../wrappers/Container/Container.tsx'
import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={ styles.footer }>
			<Container>
				© 2021 Лаборатория интернет
			</Container>
		</footer>
	)
}

export default Footer