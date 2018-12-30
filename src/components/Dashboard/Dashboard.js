import React from "react";
import { Menu, MenuItem, MenuDivider } from "@blueprintjs/core";
import styled from "styled-components";

const Wrapper = styled.section`
	flex-grow: 0;
`;

export default function BudgetStatus() {
	return (
		<Wrapper>
			<Menu style={{ backgroundColor: "transparent" }}>
				<h2>Dashboard</h2>
				<MenuDivider />
				<MenuItem text="Expenses" icon="dollar" />
				<MenuItem text="Calender" icon="calendar" />
				<MenuItem text="Settings" icon="cog" />
			</Menu>
		</Wrapper>
	);
}
