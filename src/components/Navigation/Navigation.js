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

import DropDown from "./DropDown/DropDown";

export default function Navigation() {
	return (
		<div>
			<Navbar style={{ background: Colors.DARK_GRAY2, color: Colors.WHITE }}>
				<Navbar.Group align={Alignment.LEFT}>
					<NavbarHeading>COPPER</NavbarHeading>
				</Navbar.Group>
				<Navbar.Group align={Alignment.RIGHT}>
					<Popover content={<DropDown type="add" />} position={Position.BOTTOM}>
						<Button icon="plus" minimal={true} />
					</Popover>
					<Button minimal={true} style={{ color: Colors.WHITE }} icon="log-in">
						Login
					</Button>
					<Button
						text="Logout"
						icon="log-out"
						minimal={true}
						style={{ color: Colors.WHITE }}
					/>
					<Button intent={Intent.SUCCESS} text="Sign up" />
				</Navbar.Group>
			</Navbar>
		</div>
	);
}
