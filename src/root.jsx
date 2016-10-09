import React from 'react'
import 'whatwg-fetch'
import * as Promise from 'bluebird'
import Header from './header.jsx'

export default class Root extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	checkStatus(response) {
		if (response.status >= 200 && response.status < 300) {
			return response
		} else {
			let error = new Error(response.statusText)
			error.response = response
			throw error
		}
	}

	getJson(path) {
		return fetch(path)
			.then(this.checkStatus)
			.then((response) => {
				return response.json()
			})
	}

	getText(path) {
		if (path) {
			return fetch(path)
				.then(this.checkStatus)
				.then((response) => {
					return response.text()
				}).catch((error) => {
					return ''
				})
		} else {
			return Promise.resolve('')
		}
	}

	getContents() {
		this.getJson('resources/json/site.json').then((json) => {
			let contents = {}
			return Promise.map(json.contents, (content) => {
				contents[content.name] = {
					name: content.name,
					title: content.title,
					body: '',
					thumbnail: content.thumbnail_url ? content.thumbnail_url : '',
					children: content.children
				}
				const url = content.content_url ? content.content_url : ''
				return this.getText(url).then((body) => {
					contents[content.name].body = body
				})
			}).then(() => {
				console.log(contents);
				this.setState({ contents })
			})
		})
	}

	componentDidMount() {
		this.getContents()
	}

	render() {
		return (
			<div className="root">
				<Header />
				{this.props.children && React.cloneElement(this.props.children, {
					contents: this.state.contents
				}) }
			</div>
		)
	}
}
