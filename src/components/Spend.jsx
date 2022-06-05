import styled from 'styled-components'

const Spend = ({title, ammount, progress}) => {
	return (
		<SSpend>
			<div className='top'>
				<span className='category'>{title}</span>

				<span className='ammount'>{ammount}</span>
			</div>

			<div className="progress">
				<span style={{width: progress + '%'}}></span>
			</div>
		</SSpend>
	)
}

export default Spend

const SSpend = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	.top{
		display: flex;
		justify-content: space-between;

		.category{
			font-weight: bold;
		}
	}

	.progress{
		height: 5px;
		width: 100%;
		background-color: #eceff5;
		position: relative;
		border-radius: 1rem;
		overflow: hidden;

		span{
			position: absolute;
			background-color: #35bb98;
			height: 100%;
		}
	}
`