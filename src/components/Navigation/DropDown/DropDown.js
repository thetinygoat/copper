import React from "react";
import { Menu, MenuItem } from "@blueprintjs/core";

export default function Navitem(props) {
	let dropDown = null;
	switch (props.type) {
	case "add":
		dropDown = (
			<Menu>
				<Menu.Item text="Month" icon="calendar" />
			</Menu>
		);
	}
	return dropDown;
}
