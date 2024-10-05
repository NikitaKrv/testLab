import { ChangeEvent, FormEvent, FocusEvent, useState } from 'react'
import Cancel from '../../assets/cancel.svg?react'
import Completed from '../../assets/completed.svg?react'
import Section from '../../wrappers/Section/Section.tsx'
import styles from './Form.module.scss'

const Form = () => {
	const [name, setName] = useState('')
	const [tel, setTel] = useState('')
	const [nameClicked, setNameClicked] = useState(false)
	const [telClicked, setTelClicked] = useState(false)
	const [nameError, setNameError] = useState('')
	const [telError, setTelError] = useState('')
	const [checked, setChecked] = useState(false)
	const nameCls = []
	const telCls = []
	
	if (nameClicked && nameError) {
		nameCls.push(styles.error)
	}
	
	if (telClicked && telError) {
		telCls.push(styles.error)
	}
	
	const handleSetName = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.value.length > 0) setNameError('')
		setName(e.target.value)
	}
	
	const handleSetTel = (e: ChangeEvent<HTMLInputElement>) => {
		const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
		if (re.test(tel)) {
			setTelError('')
		} else {
			setTelError('Укажите правильный телефон')
		}
		
		setTel(e.target.value)
	}
	
	const handleSetChecked = (e: ChangeEvent<HTMLInputElement>) => {
		setChecked(e.target.checked)
	}
	
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}
	
	const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
		switch (e.target.name) {
			case 'name':
				if (!name) setNameError('Укажите имя')
				setNameClicked(true)
				return
			case 'tel':
				if (!tel) setTelError('Укажите телефон')
				setTelClicked(true)
				return
		}
	}
	
	return (
		<Section title="Отправь форму">
			<form className={ styles.form } onSubmit={ handleSubmit }>
				<div>
					<div className={ styles.formItem }>
						<input
							id="personName"
							type="text"
							name="name"
							placeholder="Имя"
							className={ nameCls.join(' ') }
							value={ name }
							onChange={ handleSetName }
							onBlur={ handleBlur }
						/>
						<label htmlFor="personName">Имя</label>
						{ nameCls.length > 0 && <Cancel className={ styles.icon } /> }
						{
							nameClicked
							&& !nameError.length
							&& name.length > 0
							&& <Completed className={ styles.icon } />
						}
						{ nameError && <div className={ styles.errorText }>{ nameError }</div> }
					</div>
					<div className={ styles.formItem }>
						<input
							id="personTel"
							type="tel"
							name="tel"
							placeholder="Телефон"
							className={ telCls.join(' ') }
							value={ tel }
							onChange={ handleSetTel }
							onBlur={ handleBlur }
						/>
						<label htmlFor="personTel">Телефон</label>
						{ telCls.length > 0 && <Cancel className={ styles.icon } /> }
						{
							telClicked
							&& !telError.length
							&& tel.length > 0
							&& <Completed className={ styles.icon } />
						}
						{ telError && <div className={ styles.errorText }>{ telError }</div> }
					</div>
				</div>
				<div>
					<div className={ styles.formItem }>
						<input
							checked={ checked }
							className={ styles.checkbox }
							onChange={ handleSetChecked }
							id="checkbox"
							type="checkbox"
						/>
						<label htmlFor="checkbox">Согласен, отказываюсь</label>
					</div>
					<div className={ styles.formItem }>
						<button className={ styles.btn } type="submit">Отправить</button>
					</div>
				</div>
			</form>
		</Section>
	)
}

export default Form