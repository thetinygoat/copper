import React, { Component } from "react";
import styled from "styled-components";
import Navigation from "../../components/Navigation/Navigation";
import Dashboard from "../../components/Dashboard/Dashboard";
import ExpenseList from "../../components/ExpenseList/ExpenseList";
import BudgetStatus from "../../components/BudgetStatus/BudgetStatus";

const Wrapper = styled.section`
	width: 80%;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-top: 1em;
`;

class Layout extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<Wrapper>
					<Dashboard />
					<ExpenseList />
					<BudgetStatus />
				</Wrapper>
			</div>
		);
	}
}

export default Layout;
