import { createSlice } from '@reduxjs/toolkit';
import { getAllEvents } from 'state/events/operations/getAllEvents';
import { getWeekTopEvents } from 'state/events/operations/getWeekTopEvents';
import { getPromotionEvents } from 'state/events/operations/getPromotionEvents';
import { getEventById } from 'state/events/operations/getEventById';
import { getEventHistory } from 'state/events/operations/getEventHistory';
import { userSlice } from 'state/user';
import { getUpcomingEventHistory } from 'state/events/operations/getUpcomingEventHistory';
import { getAllNotModeratedEvents } from 'state/events/operations/getAllNotModeratedEvents';
import { getRequestedEvents } from 'state/events/operations/getRequestedEvents';

const initialState = {
  loader: false,
  events: [],
  week_top_events: [],
  promotion_events: [],
  selected_event: {},
  event_history: [],
  not_moderated: [],
  requested_events: [],
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  extraReducers: builder => {
    builder.addCase(getAllEvents.fulfilled, (state, action) => {
      state.events = action?.payload.filter(ev => ev.moderated);
    });
    builder.addCase(getWeekTopEvents.fulfilled, (state, action) => {
      state.week_top_events = action?.payload.filter(ev => ev.moderated);
    });
    builder.addCase(getPromotionEvents.fulfilled, (state, action) => {
      state.promotion_events = action?.payload.filter(ev => ev.moderated);
    });
    builder.addCase(getEventById.fulfilled, (state, action) => {
      state.selected_event = action?.payload;
    });
    builder.addCase(getEventHistory.fulfilled, (state, action) => {
      console.log(action.payload, 'PastTickets payload');
      state.event_history = action?.payload;
    });
    builder.addCase(getUpcomingEventHistory.fulfilled, (state, action) => {
      state.upcoming = action?.payload;
    });
    builder.addCase(getRequestedEvents.fulfilled, (state, action) => {
      state.requested_events = action?.payload;
    });
    builder.addCase(getAllNotModeratedEvents.fulfilled, (state, action) => {
      state.not_moderated = action?.payload?.filter(
        ev => ev.eventType !== 'REQUESTED',
      );
    });
  },
  reducers: {
    clean_selected_event: state => ({
      ...state,
      selected_event: '',
    }),
  },
});

export const { clean_selected_event } = userSlice.actions;

export default eventsSlice.reducer;
