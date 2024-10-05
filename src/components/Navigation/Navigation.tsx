import { useState } from 'react'
import { links } from '../../data/links.ts'
import styles from './Navigation.module.scss'

const Navigation = () => {
	const [open, setOpen] = useState(false)
	
	const handleSetOpen = () => {
		setOpen(prev => !prev)
	}
	
	return (
		<div className={ styles.navigation }>
			<img src="/src/assets/logo.png" alt="" />
			<nav>
				<ul className={ `${ styles.links } ${ open && styles.open }` }>
					{
						links.map(link => <li key={ link } className={ styles.link }>
							{ link }
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