import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  visible: false,
  type: '',
  data: {},
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state, {payload}) => ({
      ...state,
      visible: true,
      type: payload.type,
      data: payload.data,
    }),
    hideModal: state => ({
      ...state,
      visible: false,
      type: '',
      data: {},
    }),
  },
});

export const {showModal, hideModal} = modalSlice.actions;
export default modalSlice.reducer;
