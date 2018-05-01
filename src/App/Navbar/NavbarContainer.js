import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Navbar, Button, Nav, NavItem} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import Scrollspy from 'react-scrollspy'

class NavbarContainer extends Component{
	constructor(){
		super()

		this.state = {
			activeKey: 1,
		}
	}
	handleClick(event) {
		//event.preventDefault()
		//window.scrollTo({top: event.target.offsetTop, behavior: "smooth"})
	}
	handleSelect(key) {
		this.setState({
	  	activeKey: key
	  })
	  
	}

	handleScroll(element){
		const foundLink = document.querySelectorAll(`a[href='#${element.dataset.id}']`)
		foundLink[0].click()
	}

	render(){
		return (
			<Navbar fluid fixedTop inverse collapseOnSelect id="navbarTop" role="navigation" //className="ninetyFromTop">
			>
        <Navbar.Header>
          <Navbar.Brand >
            <a href="#" className="navbar-brand">
              BeSeen Promotions
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse id="navCollapsed">
        	<Nav id="navbar-pills" bsStyle="pills" activeKey={this.state.activeKey} onSelect={key => this.handleSelect(key)}>
	        		<NavItem eventKey={1} href='#home' onClick={(event)=> this.handleClick(event)}>
	        			Home
	        		</NavItem>
	        		<NavItem eventKey={2} href='#aboutUs' >
	        			About Us
	        		</NavItem>
	        		<NavItem eventKey={3} href='#embroidery'>
	        			Embroidery
	        		</NavItem>
	        		<NavItem eventKey={4} href='#screenPrinting'>
	        			Screen Printing
	        		</NavItem>
	        		<NavItem eventKey={5} href='#vinyl'>
	        			Vinyl
	        		</NavItem>
	        		<NavItem eventKey={6} href='#extras'>
	        			Design
	        		</NavItem>
        	</Nav>
        </Navbar.Collapse>
        <Scrollspy
        		className="scrollspy-ul"
        		items={ ['home', 'aboutUs', 'embroidery', 'screenPrinting', 'vinyl', 'extras'] } 
        		currentClassName="active"
        		onUpdate={element => this.handleScroll(element)}>
        </Scrollspy>
		  </Navbar>
		)
	}
}
//onSelect={(key, event)=> this.handleClick(key, event)}

//</Nav>
//<Nav id="navbar-pills" bsStyle="pills" activeKey={this.state.activeKey} onSelect={key => this.handleSelect(key)}>
//<Navbar inverse fixedTop className="navbar-toggleable-md">
//<Navbar.Header>
//<Navbar.Brand>
//<Navbar.Collapse className="justify-content-between">
//<NavLink
//	to="/"
//	exact>
//	<h3>Home</h3>
//</NavLink>

const mapStateToProps = (state) => {
	return {
		user: {}
	}
}

export default connect(mapStateToProps, {})(NavbarContainer)