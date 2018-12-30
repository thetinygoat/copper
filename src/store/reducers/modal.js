import * as actions from "../actions/actions";
let initialState = {
	autoFocus: true,
	canEscapeKeyClose: true,
	canOutsideClickClose: true,
	enforceFocus: true,
	isOpen: false,
	usePortal: true
};

export default (state = initialState, action) => {
	switch (action.type) {
	case actions.OPEN_MODAL:
		return {
			...state,
			isOpen: true
		};
	case actions.CLOSE_MODAL:
		return {
			...state,
			isOpen: false
		};
	default:
		return state;
	}
};
