import React from "react";
import { Menu, MenuItem } from "@blueprintjs/core";

export default function Navitem(props) {
	let dropDown = null;
	switch (props.type) {
	case "add":
		dropDown = (
			<Menu>
				<Menu.Item text=" New month" icon="calendar" />
			</Menu>
		);
	}
	return dropDown;
}
