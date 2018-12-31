import React, { Component } from "react";
import { Dialog, Classes, Button } from "@blueprintjs/core";
import { connect } from "react-redux";
import * as modalActions from "../../store/actions/modal";
import Form from "../../containers/Form/Form";

class Modal extends Component {
	render() {
		return (
			<Dialog
				icon={this.props.icon}
				onClose={this.props.handleClose}
				{...this.props.modal}
			>
				<div className={Classes.DIALOG_BODY}>
					<Form type={this.props.modal.formType} />
					<div className={Classes.DIALOG_FOOTER}>
						<div className={Classes.DIALOG_FOOTER_ACTIONS}>
							<Button>Submit</Button>
						</div>
					</div>
				</div>
			</Dialog>
		);
	}
}

const mapStateToProps = state => {
	return {
		modal: state.modal
	};
};
const mapDispatchToProps = dispatch => {
	return {
		handleClose: () => dispatch(modalActions.closeModal())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Modal);
