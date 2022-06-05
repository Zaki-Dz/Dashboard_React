import styled from 'styled-components'
import Spend from './Spend'

const Spends = () => {
	return (
		<SSpends>
			<Spend title='Food and Drinks' ammount='872.400' progress='30' />

			<Spend title='Shopping' ammount='1.378.200' progress='50' />

			<Spend title='Housing' ammount='872.400' progress='40' />

			<Spend title='Transportation' ammount='872.400' progress='20' />

			<Spend title='Vehicule' ammount='872.400' progress='35' />
		</SSpends>
	)
}

export default Spends

const SSpends = styled.div`
	padding-inline: 2rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	flex: 1;
`