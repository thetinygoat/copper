import * as actionTypes from "./actions";

export const openModal = (modalType, formType) => {
	return {
		type: actionTypes.OPEN_MODAL,
		modalType: modalType,
		formType: formType
	};
};
export const closeModal = () => {
	return {
		type: actionTypes.CLOSE_MODAL
	};
};
