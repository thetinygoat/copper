import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, MenuItem } from "@blueprintjs/core";
import * as modalActions from "../../../store/actions/modal";

class DropDown extends Component {
	render() {
		return (
			<Menu>
				<Menu.Item
					text="Expense"
					icon="credit-card"
					onClick={this.props.isOpen}
				/>
				<Menu.Item text="Income" icon="dollar" onClick={this.props.isOpen} />
				<Menu.Item
					text="Savings"
					icon="bank-account"
					onClick={this.props.isOpen}
				/>
			</Menu>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		isOpen: () => dispatch(modalActions.openModal())
	};
};

export default connect(
	null,
	mapDispatchToProps
)(DropDown);
