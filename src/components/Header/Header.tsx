import Container from '../../wrappers/Container/Container.tsx'
import Navigation from '../Navigation/Navigation.tsx'
import HeaderContent from '../HeaderContent/HeaderContent.tsx'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={ styles.header }>
			<Container>
				<Navigation />
				<HeaderContent />
			</Container>
		</header>
	)
}

export default Header