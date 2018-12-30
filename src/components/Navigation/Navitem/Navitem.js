import React from "react";

function hasDropDown(props) {
	if (props.hasDropDown) {
		return true;
	} else {
		return false;
	}
}

export default function Navitem(props) {
	return (
		<div>
			<p>navitem</p>
		</div>
	);
}
