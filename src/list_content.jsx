import React from 'react'
import { Link } from 'react-router'

export default class ListContent extends React.Component {
	render() {
		const { title, link, thumbnail } = this.props
		const thumb_url = thumbnail ? thumbnail : 'resources/images/electric_borad.jpg'
		return (
			<div className="list-content">
				<Link to={link} >
					<section className="content" style={{backgroundImage: `url(${thumb_url})`}}>
						<div className="title">{title}</div>
					</section>
				</Link>
			</div>
		)
	}
}
