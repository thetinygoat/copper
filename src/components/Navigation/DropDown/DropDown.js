import React from "react";
import { Menu, MenuItem } from "@blueprintjs/core";

export default function Navitem(props) {
	let dropDown = null;
	switch (props.type) {
	case "add":
		dropDown = (
			<Menu>
				<Menu.Item text="Expense" icon="credit-card" />
				<Menu.Item text="Income" icon="dollar" />
				<Menu.Item text="Savings" icon="bank-account" />
			</Menu>
		);
	}
	return dropDown;
}
