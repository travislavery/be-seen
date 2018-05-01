var React = require("react");
var Scroll = require("react-scroll");
var ScrollLink = Scroll.ScrollLink;
import {NavItem} from 'react-bootstrap'

class NavbarLink extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    	<NavItem {...this.props}>
        	{this.props.title}
        </NavItem>
	);
  }
}

NavbarLink = ScrollLink(NavbarLink)

export default NavbarLink;

//<li><a {...this.props}>{this.props.children}</a></li>