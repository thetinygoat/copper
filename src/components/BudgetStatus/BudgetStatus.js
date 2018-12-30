import React from "react";
import { Button, Card, Elevation, Divider } from "@blueprintjs/core";
import styled from "styled-components";
import CurrencyDisplay from "../CurrencyDisplay/CurrencyDisplay";

const Wrapper = styled.section`
	flex-grow: 0.3;
`;

export default function BudgetStatus() {
	return (
		<Wrapper>
			<Card interactive={false} elevation={Elevation.TWO}>
				<CurrencyDisplay type="Savings" currency="$" value="430" />
				<CurrencyDisplay type="Income" currency="$" value="10" />
				<CurrencyDisplay type="Expenses Today" currency="$" value="1000" />
			</Card>
		</Wrapper>
	);
}
