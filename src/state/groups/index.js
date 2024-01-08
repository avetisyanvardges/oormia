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
      let mutatedState = state.invited_members;
      console.log(payload.id, 'PAYLOAD ID -----');
      if (state.invited_members.includes(payload.id)) {
        mutatedState = state.invited_members.filter(id => id !== payload.id);
      } else {
        mutatedState.push(payload.id);
      }

      state.invited_members = mutatedState;
    },
  },
});

export const { inviteMember } = groupSlice.actions;

export default groupSlice.reducer;
