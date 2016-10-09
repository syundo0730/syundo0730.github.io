import React from 'react'
import Remarkable from 'remarkable'

export default class BodyContent extends React.Component {
	rawMarkup(markup) {
		const md = new Remarkable();
		md.set({ html: true, breaks: true, linkify: true });
		const rawMarkup = md.render(markup)
		return { __html: rawMarkup }
	}
	render() {
		const { title, body } = this.props
		const rawBody = this.rawMarkup(body)
		return (
			<div className="body-content">
				<section className="content">
					<p className="body" dangerouslySetInnerHTML={rawBody}></p>
				</section>
			</div>
		)
	}
}
