import React, { Component } from "react";
import FormElement from "./FormElement/FormElement";
export default class Form extends Component {
	expenseControls = [
		{
			type: "text",
			label: "Amount",
			labelInfo: "(required)",
			id: "expense-amount",
			placeholder: "Amount"
		},
		{
			type: "text",
			label: "Spent On",
			labelInfo: "(required)",
			id: "expense-spent-on",
			placeholder: "Spent On"
		}
	];

	savingControls = [
		{
			type: "text",
			label: "Amount",
			labelInfo: "(required)",
			id: "saving-amount",
			placeholder: "Amount"
		}
	];

	incomeControls = [
		{
			type: "text",
			label: "Amount",
			labelInfo: "(required)",
			id: "income-amount",
			placeholder: "Amount"
		}
	];

	render() {
		let controlArray = null;
		switch (this.props.type) {
			case "expense":
				controlArray = this.expenseControls;
				break;
			case "saving":
				controlArray = this.savingControls;
				break;
			case "income":
				controlArray = this.incomeControls;
				break;
			default:
				controlArray = [];
		}
		const form = controlArray.map(control => {
			return (
				<FormElement
					type={control.type}
					label={control.label}
					labelInfo={control.labelInfo}
					id={control.id}
					placeholder={control.placeholder}
				/>
			);
		});
		return form;
	}
}
