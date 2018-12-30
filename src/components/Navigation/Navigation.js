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
import NavigationItem from "./NavigationItem/NavigationItem";

export default function Navigation() {
	return (
		<div>
			<Navbar style={{ background: Colors.DARK_GRAY2, color: Colors.WHITE }}>
				<Navbar.Group align={Alignment.LEFT}>
					<NavigationItem type="heading" />
				</Navbar.Group>
				<Navbar.Group align={Alignment.RIGHT}>
					<NavigationItem type="add" />
					<NavigationItem type="login" />
					<NavigationItem type="logout" />
					<NavigationItem type="signup" />
				</Navbar.Group>
			</Navbar>
		</div>
	);
}
