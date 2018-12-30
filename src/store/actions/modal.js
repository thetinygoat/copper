import * as actionTypes from "./actions";

export const openModal = () => {
	return {
		type: actionTypes.OPEN_MODAL
	};
};
export const closeModal = () => {
	return {
		type: actionTypes.CLOSE_MODAL
	};
};
