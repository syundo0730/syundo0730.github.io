import React from 'react'
import Main from './main.jsx'
import Loading from './loading.jsx'

class Content extends React.Component {
	constructor(props, name) {
		super(props)
		this.name = name
	}
	render() {
		let elem = ''
		if (this.props.contents) {
			const bodyNode = this.props.contents[this.name]
			const { title, body } = bodyNode
			const content = {
				title,
				body,
				name: this.name,
				children: this.props.contents[this.name].children.map((childName) => {
					const childNode = this.props.contents[childName]
					const { title, body, thumbnail} = childNode
					return {
						title,
						body,
						name: childName,
						thumbnail,
					}
				})
			}
			elem = <Main content={content} />
		} else {
			elem = <Loading />
		}
		return (
			<div className={this.name}>
				{elem}
			</div>
		)
	}
}

export class Home extends Content {
	constructor(props) {
		super(props, "home")
	}
}

export class About extends Content {
	constructor(props) {
		super(props, "about")
	}
}

export class Works extends Content {
	constructor(props) {
		super(props, "works")
	}
}

export class Robots extends Content {
	constructor(props) {
		super(props, "robots")
	}
}

export class Vanilla extends Content {
	constructor(props) {
		super(props, "vanilla")
	}
}

export class WheelRobot extends Content {
	constructor(props) {
		super(props, "wheel_robot")
	}
}

export class Others extends Content {
	constructor(props) {
		super(props, "others")
	}
}

export class Society extends Content {
	constructor(props) {
		super(props, "society")
	}
}

export class Tools extends Content {
	constructor(props) {
		super(props, "tools")
	}
}
