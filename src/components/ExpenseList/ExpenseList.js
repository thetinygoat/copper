import React from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";
import styled from "styled-components";

const Wrapper = styled.section`
	flex-grow: 2;
`;

export default function BudgetStatus() {
	return (
		<Wrapper>
			<Card interactive={true} elevation={Elevation.TWO}>
				<h5>
					<a href="#">Card heading</a>
				</h5>
				<p>Card content</p>
				<Button>Submit</Button>
			</Card>
		</Wrapper>
	);
}
