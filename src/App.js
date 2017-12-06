import React, { Component } from 'react'

// Framework imports
import { 
	AppContainer,
	Header, 
	MenuPanel, 
	Menu,
	Tab,
	Footer } from 'odeum-app'

// Framework helper imports
import { RenderFooterLabel, handleLink } from './framework/FooterLabel'

// Content imports
import Homepage from './content/Homepage/Homepage'
// import Installation from './content/docs/Installation'
// import Helppage from './content/Helppage/Helppage'

class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			helpID: 0
		}
	}

	render() {
		return (
			<AppContainer>
				<Header/>
				<MenuPanel>

					<Menu route={'/'}>
						<Homepage />
					</Menu>

					<Menu icon={'star'} label={'Dashboard'} route={'/dashboard'}>
						<Tab icon={'dashboard'} label={'Dashboard'} route={'/'}>
							Dashboard ... 
						</Tab>
					</Menu>

					<Menu icon={'web_asset'} label={'Pages'} route={'/pages'}>
						<Tab icon={'check_circle'} label={'Published'} route={'/published'}>
							Published pages ...
						</Tab>
						<Tab icon={'mode_edit'} label={'Drafts'} route={'/drafts'}>
							Draft pages ... 
						</Tab>
						<Tab icon={'access_time'} label={'Scheduled'} route={'/scheduled'}>
							Scheduled pages ... 
						</Tab>
						<Tab icon={'delete'} label={'Trashed'} route={'/trashed'}>
							Trashed pages ... 
						</Tab>
					</Menu>

					<Menu icon={'web'} label={'Content'} route={'/content'}>
						<Tab icon={'web'} label={'Content'}>
							Content ... 
						</Tab>						
					</Menu>
					
					<Menu icon={'photo_camera'} label={'Media'} route={'/media'}>
						<Tab icon={'photo_camera'} label={'Media'} route={'/media'}>
							Media ...
						</Tab>
					</Menu>

					<Menu icon={'people'} label={'Users'} route={'/users'}>
						<Tab icon={'people'} label={'Users'} route={'/'}>
							Users ...
						</Tab>
					</Menu>

					<Menu icon={'view_module'} label={'Apps'} route={'/apps'}>
						<Tab icon={'view_module'} label={'Apps'} route={'/'}>
							Apps ...
						</Tab>
					</Menu>

					<Menu icon={'settings'} label={'Settings'} route={'/settings'}>
						<Tab icon={'settings'} label={'Settings'} route={'/'}>
							Settings ...
						</Tab>
					</Menu>

				</MenuPanel>
				<Footer label={RenderFooterLabel} labelLink={handleLink()} helpID={'Messages ...'} />
			</AppContainer>
		)
	}
}

export default App
