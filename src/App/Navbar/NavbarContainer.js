import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Navbar, Button, Nav, NavItem} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import Scroll from 'react-scroll'
import NavbarLink from './NavbarLink'
let Link       = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;

class NavbarContainer extends Component{
	constructor(){
		super()

		this.state = {
			//activeKey: 1,
		}
	}
	componentDidMount(){
		Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
	}

	componentWillUnmount(){
		Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
	}
	scrollToTop() {
    scroll.scrollToTop();
  }
  scrollToBottom() {
    scroll.scrollToBottom();
  }
  scrollTo() {
    scroll.scrollTo(100);
  }
  stickyNavbar(){
  	const navbar = document.getElementById('navbar-top')
  	const sticky = navbar.offsetTop
  }

	render(){
		const sectionObjects = [
			{href: 'home', title: "Home", key: 1}, 
			{href: 'aboutUs', title: "About Us", key: 2}, 
			{href: 'embroidery', title: "Embroidery", key: 3}, 
			{href: 'screenPrinting', title: "Screen Printing", key: 4}, 
			{href: 'vinyl', title: "Vinyl", key: 5}, 
			{href: 'extras', title: "Design", key: 6}]

		const navbarLinks = sectionObjects.map(obj => <NavbarLink key={obj.key} eventKey={obj.key} activeClass="active" hashSpy={true} to={obj.href} spy={true} smooth={true} duration={250} title={obj.title} />)
		return (
			<Navbar fluid fixedTop inverse collapseOnSelect id="navbarTop" role="navigation">
        <Navbar.Header>
          <Navbar.Brand >
            <a href="#" className="navbar-brand">
              BeSeen Promotions
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse id="navCollapsed">
        	<Nav id="navbar-pills" bsStyle="pills" activeKey={this.state.activeKey} >
        			{navbarLinks}
        	</Nav>
        </Navbar.Collapse>
		  </Navbar>
		)
	}
}

const mapStateToProps = (state) => {
 const { loading, response } = state.postsByJsonPlaceholder.toJS()
 return {
    loading,
    response
 }
}

export default connect(mapStateToProps, {})(NavbarContainer)