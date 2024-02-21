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
  selected_bank: {},
  filter_by_location: {},
  filter_by_date: '',
  filter_by_day: '',
  filter_by_partOfDate: '',
  filter_by_name: '',
  filter_by_categories: [],
  filter_by_time: {
    hour: 0,
    minute: 0,
  },
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
    set_selected_bank: (state = initialState, { payload }) => ({
      ...state,
      selected_bank: payload,
    }),
    set_filter_by_location: (state = initialState, { payload }) => ({
      ...state,
      filter_by_location: payload,
    }),
    set_filter_by_date: (state = initialState, { payload }) => ({
      ...state,
      filter_by_date: payload,
    }),
    set_filter_by_day: (state = initialState, { payload }) => ({
      ...state,
      filter_by_day: payload,
    }),
    set_filter_by_partOfDate: (state = initialState, { payload }) => ({
      ...state,
      filter_by_partOfDate: payload,
    }),
    set_filter_by_name: (state = initialState, { payload }) => ({
      ...state,
      filter_by_name: payload,
    }),
    set_filter_by_categories: (state = initialState, { payload }) => ({
      ...state,
      filter_by_categories: payload,
    }),
    set_filter_by_time: (state = initialState, { payload }) => ({
      ...state,
      filter_by_categories: payload,
    }),
    reset_filters: (state = initialState, { payload }) => ({
      ...state,
      filter_by_location: {},
      filter_by_date: '',
      filter_by_partOfDate: '',
      filter_by_name: '',
      filter_by_categories: [],
      filter_by_time: {
        hour: 0,
        minute: 0,
      },
    }),
  },
});

export const {
  clean_selected_event,
  set_selected_bank,
  set_filter_by_location,
  set_filter_by_date,
  set_filter_by_day,
  set_filter_by_partOfDate,
  set_filter_by_name,
  set_filter_by_categories,
  set_filter_by_time,
  reset_filters,
} = eventsSlice.actions;

export default eventsSlice.reducer;
