import React, { Component } from "react";
import styled from "styled-components";
import Navigation from "../../components/Navigation/Navigation";
import BudgetStatus from "../../components/BudgetStatus/BudgetStatus";
import ExpenseList from "../../components/ExpenseList/ExpenseList";

const Wrapper = styled.section`
	width: 70%;
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
					<BudgetStatus />
					<ExpenseList />
				</Wrapper>
			</div>
		);
	}
}

export default Layout;
