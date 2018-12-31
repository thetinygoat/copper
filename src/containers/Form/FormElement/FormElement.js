import React from "react";
import { FormGroup, InputGroup } from "@blueprintjs/core";

export default function FormElements(props) {
	return (
		<div>
			<FormGroup
				helperText={props.helperText}
				label={props.label}
				labelFor={props.id}
				labelInfo={props.labelInfo}
			>
				<InputGroup
					id={props.id}
					placeholder={props.placeholder}
					type={props.type}
					leftIcon={props.leftIcon}
				/>
			</FormGroup>
		</div>
	);
}
