import Works from '../../components/Works/Works.tsx'
import Stat from '../../components/Stat/Stat.tsx'
import Reviews from '../../components/Reviews/Reviews.tsx'
import Questions from '../../components/Questions/Questions.tsx'
import RespondentsInfo from '../../components/RespondentsInfo/RespondentsInfo.tsx'
import Form from '../../components/Form/Form.tsx'
import Footer from '../../components/Footer/Footer.tsx'

const Main = () => {
	return (
		<main>
			<Works />
			<Stat />
			<Reviews />
			<Questions />
			<RespondentsInfo />
			<Form />
			<Footer />
		</main>
	)
}

export default Main