import React from "react";
import { Divider } from "@blueprintjs/core";

export default function CurrencyDisplay(props) {
	return (
		<div>
			<p style={{ fontSize: "1em" }}>{props.type}</p>
			<Divider vertical={true} />
			<h3 className="bp3-heading">
				<span
					style={{
						fontSize: ".7em",
						position: "relative",
						top: "-10px",
						fontWeight: "normal"
					}}
				>
					{props.currency}
				</span>
				{props.value}
			</h3>
		</div>
	);
}
