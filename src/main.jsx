import React from 'react'
import BodyContent from './body_content.jsx'
import ListContent from './list_content.jsx'

export default class Main extends React.Component {
	render() {
		const { title, body, children } = this.props.content
		const listContentNodes = children.map((child) => {
			const { title, name, thumbnail } = child;
			return (
				<ListContent title={title} link={name} thumbnail={thumbnail} />
			)
		})
		return (
			<div className="main">
				<BodyContent title={title} body={body} />
				{listContentNodes}
			</div>
		)
	}
}
