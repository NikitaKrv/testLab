import { Work } from '../types/work.ts'
import bags from '../assets/work/money-bags.png'
import truck from '../assets/work/truck.png'
import secure from '../assets/work/secure.png'
import waiting from '../assets/work/waiting.png'

export const works: Work[] = [
	{
		img: waiting,
		title: 'Прочитай задание внимательно',
		text: 'Думаю у тебя не займет это больше двух-трех минут',
	},
	{
		img: truck,
		title: 'Изучи весь макет заранее',
		text: 'Подумай как это будет работать на разных разрешениях и при скролле',
	},
	{
		img: secure,
		title: 'Сделай хорошо',
		text: 'Чтобы мы могли тебе доверить подобные задачи в будущем',
	},
	{
		img: bags,
		title: 'Получи предложение',
		text: 'Ну тут все просто, не я придумал правила, но думаю так и будет)))',
	}
]