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
					onClick={() => this.props.isOpen("Add Expense", "expense")}
				/>
				<Menu.Item
					text="Income"
					icon="dollar"
					onClick={() => this.props.isOpen("Add Income", "income")}
				/>
				<Menu.Item
					text="Savings"
					icon="bank-account"
					onClick={() => this.props.isOpen("Update Savings", "saving")}
				/>
			</Menu>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		isOpen: (modalType, formType) =>
			dispatch(modalActions.openModal(modalType, formType))
	};
};

export default connect(
	null,
	mapDispatchToProps
)(DropDown);
