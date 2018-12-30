import React from "react";
import {
	Navbar,
	NavbarGroup,
	NavbarHeading,
	Colors,
	Alignment,
	Button,
	Intent,
	Popover,
	Position
} from "@blueprintjs/core";

import DropDown from "../DropDown/DropDown";

export default function NavigationItem(props) {
	let navigationItem = null;

	switch (props.type) {
	case "heading":
		navigationItem = <NavbarHeading>COPPER</NavbarHeading>;
		break;
	case "add":
		navigationItem = (
			<Popover content={<DropDown type="add" />} position={Position.BOTTOM}>
				<Button icon="plus" minimal={true} />
			</Popover>
		);
		break;
	case "login":
		navigationItem = (
			<Button
				minimal={true}
				style={{ color: Colors.WHITE }}
				icon="log-in"
				text="Login"
			/>
		);
		break;
	case "logout":
		navigationItem = (
			<Button
				text="Logout"
				icon="log-out"
				minimal={true}
				style={{ color: Colors.WHITE }}
			/>
		);
		break;
	case "signup":
		navigationItem = <Button intent={Intent.SUCCESS} text="Sign up" />;
		break;
	default:
		navigationItem = null;
	}
	return navigationItem;
}
