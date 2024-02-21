import { enLoginScreen } from 'locales/screens/Auth/en';
import { enEventScreen } from 'locales/screens/Event/en';

export default {
  ...enLoginScreen,
  ...enEventScreen,
  // LANGUAGES
  'locales.select_language': 'Select a language',
  'locales.hy': 'Հայերեն',
  'locales.en': 'English',
  'locales.ru': 'Русский',

  // VALIDATIONS
  'field.required': 'Field is required',
  'field.password':
    'Must be 8 or more characters and contain at least 1 number and 1 special character.',

  // MENU
  'menu.home': 'Home',
  'menu.map': 'Map',
  'menu.tickets': 'Tickets',
  'menu.profile': 'Profile',

  // HOME
  find_nearby_event: 'Find Nearby Event',
  speakers: 'Speakers',
  no_speakers_found: 'No speakers found',
  best_of_the_week: 'Best of the Week',
  no_events_found: 'No Events found',
  notifications: 'Notifications',
  no_notifications_yet: 'No notifications yet',
  stay_tuned_for_updates:
    "Stay tuned for updates and important messages. We'll notify you when there's something new or noteworthy.",

  // TICKETS
  my_tickets: 'My Tickets',
  upcoming: 'Upcoming',
  past: 'Past',
  no_upcoming_tickets_found: 'No upcoming tickets found',
  no_past_tickets_found: 'No past tickets found',
  no_tickets_available:
    'It seems like there are no tickets available at the moment',

  Date: 'Date',
  Time: 'Time',
  Place: 'Place',

  // CREATE EVENT
  create_event: 'Create Event',
  send_request: 'Send a Request',

  // PROFILE
  'profile.events': 'Events',
  'profile.groups': 'Groups',
  create_new_group: 'Create New Group',
  'btn.Calendar': 'Calendar',
  'btn.edit_profile': 'Edit Profile',
  edit_profile: 'Edit Profile',
  'btn.save': 'Save',
  'profile.language': 'Language',
  'profile.settings': 'Settings',
  'profile.privacy_policy': 'Privacy Policy',
  'profile.delete_account': 'Delete Account',
  'btn.delete_account': 'Delete Account',
  delete_your_account: 'Delete your account',
  warning_delete_account:
    'You will lose all your data by deleting your account. This action cannot be undone.',
  'btn.Cancel': 'Cancel',
  'btn.log_out': 'Log Out',
  app_version: 'App Version {{version}}',

  'btn.follow': 'Follow',
  'btn.invite': 'Invite',
  'btn.invited': 'Invited',
  'btn.send': 'Send',
  'btn.continue': 'Continue',

  // GROUPS
  on_weekends: 'On weekends',
  monthly: 'Monthly',
  yearly: 'Yearly',
  upload_an_image: 'Upload an image',
  'label.group_name': 'Set a Unique Group Name',
  'label.group_description': 'Craft a Compelling Description',
  'placeholder.group_name': 'Name',
  'placeholder.group_description': 'Description',
  members: 'Members',
  event_frequency: 'Event Frequency',
  categories: 'Categories',
  choose_up_to_3_categories: 'Choose up to 3 categories',
  'btn.create_group': 'Create group',

  'label.empty': '',
};
