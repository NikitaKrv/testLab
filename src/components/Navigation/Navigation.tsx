import { useState } from 'react'
import { links } from '../../data/links.ts'
import Logo from '../../assets/logo.svg?react'
import styles from './Navigation.module.scss'

const Navigation = () => {
	const [open, setOpen] = useState(false)
	
	const handleSetOpen = () => {
		setOpen(prev => !prev)
	}
	
	return (
		<div className={ styles.navigation }>
			<Logo className={ `${ open && styles.openLogo }` } />
			<nav>
				<ul className={ `${ styles.links } ${ open && styles.open }` }>
					{
						links.map(link => <li key={ link.to } className={ styles.link }>
							<a
								onClick={ () => setOpen(false) }
								href={ `#${ link.to }` }
							>
								{ link.text }
							</a>
						</li>)
					}
				</ul>
			</nav>
			
			<input id="menu" type="checkbox" />
			<label onClick={ handleSetOpen } htmlFor="menu">
				<div className={ `${ styles.menu } ${ open && styles.close }` }>
					<div></div>
					<div></div>
				</div>
			</label>
		</div>
	)
}

export default Navigation