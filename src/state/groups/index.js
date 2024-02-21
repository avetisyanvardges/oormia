import { createSlice } from '@reduxjs/toolkit';
import { getAllGroups } from 'state/groups/operations/getAllGroups';

const initialState = {
  groups: [],
  invited_members: [],
};

export const groupSlice = createSlice({
  name: 'group',
  initialState,
  extraReducers: builder => {
    builder.addCase(getAllGroups.fulfilled, (state, action) => {
      state.groups = action?.payload;
    });
  },
  reducers: {
    inviteMember: (state, { payload }) => {
      state.invited_members = payload;
    },
  },
});

export const { inviteMember } = groupSlice.actions;

export default groupSlice.reducer;
