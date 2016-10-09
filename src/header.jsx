import React from 'react'
import { Link } from 'react-router'

export default class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<nav className="nav">
					<ul>
						<li className="nav-item"><Link to="/" >HOME</Link></li>
						<li className="nav-item"><Link to="/about" >ABOUT</Link></li>
						<li className="nav-item"><Link to="/works" >WORKS</Link></li>
					</ul>
				</nav>
			</header>
		)
	}
}
