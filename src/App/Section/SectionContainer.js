import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Row, Col} from 'react-bootstrap'

class SectionContainer extends Component{
	constructor(props){
		super(props)

		this.state = {
            id: props.id_string
		}
	}

	render(){
		return (
            <Row id={this.state.id} className="mainSection" data-id={this.state.id}>
                {this.state.id}
            </Row>
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

export default connect(mapStateToProps, {})(SectionContainer);