import {useState} from 'react'
import styled from 'styled-components'
import PersonOne from '../assets/png/person1.png'
import PersonTwo from '../assets/png/person2.png'
import PersonThree from '../assets/png/person3.png'
import AddPerson from '../assets/png/addIcon.png'
import Expenses from './Expenses'
import Spends from './Spends'
import Card from './Card'
import { BarChart, Bar, Cell, ResponsiveContainer } from 'recharts'

const Content = () => {
	const [activeIndex, setActiveIndex] = useState(0)

	const handleIndex = (i, e) => {
		setActiveIndex(i)
	}

	const data = [
  {name: 'Page A',uv: 4000,pv: 2400,amt: 2400,},
  {name: 'Page B',uv: 3000,pv: 1398,amt: 2210,},
  {name: 'Page C',uv: 2000,pv: 9800,amt: 2290,},
  {name: 'Page D',uv: 2780,pv: 3908,amt: 2000,},
  {name: 'Page E',uv: 1890,pv: 4800,amt: 2181,},
  {name: 'Page F',uv: 2390,pv: 3800,amt: 2500,},
  {name: 'Page G',uv: 3490,pv: 4300,amt: 2100,},
  {name: 'Page A',uv: 4000,pv: 2400,amt: 2400,},
  {name: 'Page B',uv: 3000,pv: 1398,amt: 2210,},
  {name: 'Page C',uv: 2000,pv: 9800,amt: 2290,},
  {name: 'Page D',uv: 2780,pv: 3908,amt: 2000,},
  {name: 'Page E',uv: 1890,pv: 4800,amt: 2181,},
  {name: 'Page F',uv: 2390,pv: 3800,amt: 2500,},
  {name: 'Page G',uv: 3490,pv: 4300,amt: 2100,},
  {name: 'Page A',uv: 4000,pv: 2400,amt: 2400,},
  {name: 'Page B',uv: 3000,pv: 1398,amt: 2210,},
  {name: 'Page C',uv: 2000,pv: 9800,amt: 2290,},
  {name: 'Page D',uv: 2780,pv: 3908,amt: 2000,},
  {name: 'Page E',uv: 1890,pv: 4800,amt: 2181,},
  {name: 'Page F',uv: 2390,pv: 3800,amt: 2500,},
  {name: 'Page G',uv: 3490,pv: 4300,amt: 2100,}
]

	return (
		<Container>
			<Left>
				<Header>
					<h1>
						Expenses

						<span className="date">04-21 June, 2022</span>
					</h1>

					<Persons>
						<img src={PersonOne} />

						<img src={PersonTwo} />

						<img src={PersonThree} />

						<img src={AddPerson} />
					</Persons>
				</Header>

				<ResponsiveContainer width="100%" maxHeight="100px">
					<BarChart width={150} height={40} data={data}>
						<Bar dataKey="uv" fill="#d0e4ff">
							{data.map((item, i) => {
								return (
									<Cell
										onClick={(e) => handleIndex(i, e)}
										cursor='pointer'
										fill={i === activeIndex ? '#157aff' : '#d0e4ff'}
									/>
								)
							})}
						</Bar>
					</BarChart>
				</ResponsiveContainer>

				<Expenses title='Today' />

				<Expenses title='Monday, 23 March 2022' />
			</Left>

			<Right>
				<Title>
					<h3>Where your money go ?</h3>
				</Title>

				<Spends />

				<Card />
			</Right>
		</Container>
	)
}

export default Content

const Container = styled.div`
	display: flex;
	min-height: calc(100vh - 2rem);
	border-radius: 1rem;
	margin: 1rem;
	overflow: hidden;
	margin-left: 300px;
`

const Left = styled.div`
	background-color: white;
	flex: 2;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`

const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	h1{
		display: flex;
		flex-direction: column;
		gap: .5rem;

		.date{
			font-size: .8rem;
			font-weight: normal;
			color: #888;
		}
	}
`

const Persons = styled.div`
	display: flex;
	align-items: center;

	img{
		width: 30px;
		aspect-ratio: 1 / 1;
	}
`

const Right = styled.div`
	background-color: #f9fafc;
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding-bottom: 2rem;
`

const Title = styled.div`
	padding-block: 3rem;
	padding-bottom: 0;
	padding-left: 2rem;
`