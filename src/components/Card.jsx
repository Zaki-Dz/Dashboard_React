import styled from 'styled-components'
import BoxesIcon from '../assets/png/boxes.png'
import PlantIcon from '../assets/png/plant.png'

const Card = () => {
	return (
		<Container>
			<SCard>
				<div className="images">
					<img src={BoxesIcon} />

					<img src={PlantIcon} />
				</div>

				<span className="title">Save more money</span>

				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, velit?</p>

				<button>View Tips</button>
			</SCard>
		</Container>
	)
}

export default Card

const Container = styled.div`
	padding-inline: 2rem;
`

const SCard = styled.div`
	background-color: #edf0f6;
	border-radius: 1rem;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	.images{
		display: flex;
		justify-content: space-between;
		margin-bottom: -2rem;

		img{
			max-height: 80px;
			width: unset;
			transform: translateY(-2rem);
		}
	}

	.title{
		font-weight: bold;
		margin-bottom: -.5rem;
	}

	p{
		color: #848992;
		font-size: .8rem;
	}

	button{
		background-color: #111;
		width: 100%;
		border: none;
		border-radius: .25rem;
		padding: 1rem;
		color: white;
		font-weight: bold;
		text-transform: uppercase;
	}
`