import Section from '../../wrappers/Section/Section.tsx'
import styles from './Stat.module.scss'

const Stat = () => {
	return (
		<Section>
			<div className={ styles.stat }>
				<div className={ styles.statInfo }>
					<h3 className={ styles.title }>
						Круто, ты дошел до третьего блока
					</h3>
					<div className={ styles.text }>
						<div>
							63% опрошенных пользовались кредитами из-за того, что
							не могли покрыть непредвиденные расходы свыше 15 000 ₽.
						</div>
						<div>
							Доступ к заработанным деньгам помогает отказаться от
							кредитов и экономить деньги на процентах и штрафах.
						</div>
					</div>
				</div>
				<div className={ styles.images }>
					<img src="/src/assets/stat.png" alt="stat" />
					<img src="/src/assets/car.png" alt="car" />
				</div>
			</div>
		</Section>
	)
}

export default Stat