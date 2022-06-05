import styled from 'styled-components'
import ProfileImage from '../assets/png/samantha.png'

const SideBar = () => {
	const sidebarLinks = ['Dashboard', 'Expenses', 'Wallets', 'Summary', 'Accounts', 'Settings']

	return (
		<Saside>
			<Profile>
				<Avatar>
					<img src={ProfileImage} />

					<span className="notification">4</span>
				</Avatar>

				<h3>Samantha</h3>

				<span className="email">samantha@gmail.com</span>
			</Profile>

			<Snav>
				<nav>
					<ul>
						{sidebarLinks.map(link => {
							return (
								<li className={link === 'Expenses' ? 'active' : ''}>
									<a href="#">{link}</a>
								</li>
							)
						})}
					</ul>
				</nav>
			</Snav>
		</Saside>
	)
}

export default SideBar

const Saside = styled.aside`
	position: fixed;
	max-width: 300px;
	height: 100vh;
	padding: 5rem;
	color: white;
	display: flex;
	flex-direction: column;
	gap: 5rem;
`

const Profile = styled.aside`
	display: flex;
	flex-direction: column;
	gap: .5rem;

	h3{
		font-size: 1.7rem;
	}

	.email{
		color: #888;
	}
`

const Avatar = styled.div`
	position: relative;
	max-width: 80px;
	margin-bottom: 1rem;

	.notification{
		position: absolute;
		top: 0;
		right: 0;
		background-color: #dc3434;
		width: 30px;
		aspect-ratio: 1 / 1;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		transform: translate(50%, -50%);
		font-weight: bold;
	}
`

const Snav = styled.nav`
	ul{
		display: flex;
		flex-direction: column;
		gap: 1rem;

		li{
			padding-block: .5rem;
			font-size: 1.2rem;
			font-weight: bold;
			color: #888;

			&.active{
				color: white;
			}
		}
	}
`