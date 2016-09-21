import React from 'react'
import User from './User.jsx'
import Logo from './Logo.jsx'

export default React.createClass({
	render(){
		return(
			<div className="tool_bar">
				<User />
				<div className="menu">
					<div className="tools">
						<img src="/settings.png"/>
						<p>SETTINGS</p>
					</div>
					<div className="tools">
						<img src="/volunteer.png"/>
						<p>MANAGE VOLUNTEER</p>
					</div>
					<div className="tools">
						<img src="/dispatch.png"/>
						<p>DIPATCH</p>
					</div>
					<div className="tools">
						<img src="/data_visual.png"/>
						<p>DATA VISUAL</p>
					</div>
				</div>
				<Logo />
			</div>
		)
	}

})