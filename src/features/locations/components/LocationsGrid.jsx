import { LocationsCard } from './LocationsCard'
import styles from './LocationsGrid.module.scss'
import { Container } from '../../../components/Container/Container'
import { api } from '../../../app/services/apiClient'

// id can be underfined
export const LocationsGrid = ({ id }) => {
	let locationsData = []

	// #region mock data
	// [
	// 	{
	// 		id: 1,
	// 		title: 'Сонячна Рівʼєра',
	// 		type: 'Море',
	// 		rate: 2,
	// 		image:
	// 			'https://image2url.com/r2/default/images/1770461401787-f00e54c3-ede3-493b-9b4b-c4f298fe4a21.png',
	// 	},
	// 	{
	// 		id: 2,
	// 		title: 'Тилігульський Спокій',
	// 		type: 'Море',
	// 		rate: 4,
	// 		image:
	// 			'https://image2url.com/r2/default/images/1770461473395-e26988ca-23c0-4ac1-91a8-71eaf2e5729e.png',
	// 	},
	// 	{
	// 		id: 3,
	// 		title: 'Кінбурнська Вольниця',
	// 		type: 'Море',
	// 		rate: 5,
	// 		image:
	// 			'https://image2url.com/r2/default/images/1770461551036-26198a2b-3a66-4888-98c1-3c3bc21395ea.png',
	// 	},
	// ]
	// #endregion
	
	if (id) {
		api.getUserLocations(id).then((data) => {
			locationsData = data
		})
	} else {
		api.getLocations().then((data) => {
			locationsData = data.items
		})
	}

	return (
		<Container>
			<ul className={styles.locationsGrid}>
				{locationsData.map((location) => (
					<li className={styles.locationsGridCard} key={location.id}>
						<LocationsCard
							place={location.place}
							image={location.image}
							rating={location.rate}
							title={location.title}
						/>
					</li>
				))}
			</ul>
		</Container>
	)
}
