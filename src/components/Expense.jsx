import styled from 'styled-components'

const Expense = ({title, time, image, ammount}) => {
	return (
		<SExpense>
			<div className='icon'>
				<img src={image} />
			</div>

			<div className='middle'>
				<h3>{title}</h3>

				<span className="time">{time}</span>
			</div>

			<div className='ammount'>
				<h2>-{ammount}</h2>
			</div>
		</SExpense>
	)
}

export default Expense

const SExpense = styled.div`
	display: flex;
	gap: 1rem;

	.icon{
		background-color: #32a7e2;
		max-width: 60px;
		aspect-ratio: 1 / 1;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		border-radius: 50%;
	}

	.middle{
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: .5rem;

		h3{
			font-weight: normal;
		}

		.time{
			font-size: .8rem;
			color: #888;
		}
	}
`