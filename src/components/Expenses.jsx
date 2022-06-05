import styled from 'styled-components'
import MenuIcon from '../assets/png/menuIcon.png'
import CartIcon from '../assets/svg/cartIcon.svg'
import TransportIcon from '../assets/svg/transportIcon.svg'
import HouseIcon from '../assets/svg/houseIcon.svg'
import Expense from './Expense'

const Expenses = ({title}) => {
	return (
		<SExpenses>
			<div className="top">
				<h3>{title}</h3>

				<img src={MenuIcon} />
			</div>

			<Expense
				title='Grocery'
				time='5:12 pm * Description'
				image={CartIcon}
				ammount='326.800'
			/>

			<Expense
				title='Transportation'
				time='5:12 pm * Description'
				image={TransportIcon}
				ammount='15.000'
			/>
		</SExpenses>
	)
}

export default Expenses

const SExpenses = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	.top{
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 2px solid #eee;
		padding-bottom: .5rem;

		img{
			max-width: 30px;
		}
	}
`