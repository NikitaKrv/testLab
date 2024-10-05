import styles from './HeaderContent.module.scss'

const HeaderContent = () => {
	return (
		<div className={ styles.headerContent }>
			<h1 className={ styles.title }>
				Говорят, никогда не поздно сменить профессию
			</h1>
			<h3 className={ styles.subtitle }>
				Сделай круто тестовое задание и у тебя получится
			</h3>
			<button className={ styles.btn }>Проще простого!</button>
		</div>
	)
}

export default HeaderContent