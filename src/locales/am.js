import { amLoginScreen } from 'locales/screens/Auth/am';
import { amEventScreen } from 'locales/screens/Event/am';

export default {
  ...amLoginScreen,
  ...amEventScreen,
  // LANGUAGES
  'locales.select_language': 'Ընտրեք լեզուն',
  'locales.hy': 'Հայերեն',
  'locales.en': 'English',
  'locales.ru': 'Русский',

  // VALIDATIONS
  'field.required': 'Պարտադիր դաշտ',
  'field.password':
    'Դա պետք է լինի 8 կամ ավելի նիշանոց և պարունակելու առնվազը 1 թիվ և 1 հատ հատվող նշան։',

  // MENU
  'menu.home': 'Գլխավոր',
  'menu.map': 'Քարտեզ',
  'menu.tickets': 'Տոմսեր',
  'menu.profile': 'Պրոֆիլ',

  // HOME
  find_nearby_event: 'Գտեք մոտակա իրադարձություն',
  speakers: 'Խոսնակներ',
  no_speakers_found: 'Խոսնակներ չեն գտնվել',
  no_speakers_available: 'Կարծես թե այս պահին հասանելի խոսնակներ չկան...',
  best_of_the_week: 'Շաբաթվա լավագույնը',
  no_events_found: 'Իրադարձություններ չեն գտնվել',
  notifications: 'Ծանուցումներ',
  no_notifications_yet: 'Դեռևս ծանուցումներ չկան',
  stay_tuned_for_updates:
    'Հետևեք թարմացումներին և կարևոր հաղորդագրություններին: Մենք ձեզ կտեղեկացնենք, երբ ինչ-որ նոր կամ ուշագրավ բան լինի:',

  // TICKETS
  my_tickets: 'Իմ Տոմսերը',
  upcoming: 'Առաջիկա',
  past: 'Անցյալ',
  no_upcoming_tickets_found: 'Առաջիկա տոմսեր չեն գտնվել',
  no_past_tickets_found: 'Անցյալ տոմսեր չեն գտնվել',
  no_tickets_available: 'Կարծես թե այս պահին հասանելի տոմսեր չկան',

  Date: 'Ամսաթիվ',
  Time: 'Ժամ',
  Place: 'Տեղ',

  // CREATE EVENT
  create_event: 'Ստեղծել Միջոցառում',
  send_request: 'Ուղարկել Հարցում',
  create_group: 'Ստեղծել Խումբ',

  // PROFILE
  'profile.events': 'Միջոցառումներ',
  'profile.groups': 'Խմբեր',
  create_new_group: 'Ստեղծել նոր խումբ',
  no_groups_yet: 'Դեռ խմբեր չկան',
  'btn.Calendar': 'Օրացույց',
  'btn.edit_profile': 'Խմբ. հաշիվը',
  edit_profile: 'Խմբագրել հաշիվը',
  'btn.save': 'Պահպանել',
  'profile.language': 'Լեզու',
  'profile.settings': 'Կարգավորումներ',
  'profile.privacy_policy': 'Գաղտնիության քաղաքականություն',
  'profile.delete_account': 'Ջնջել հաշիվը',
  'btn.delete_account': 'Ջնջել հաշիվը',
  delete_your_account: 'Ջնջեք ձեր հաշիվը',
  warning_delete_account:
    'Դուք կկորցնեք ձեր բոլոր տվյալները՝ ջնջելով ձեր հաշիվը: Այս գործողությունը հնարավոր չէ հետարկել:',
  'btn.Cancel': 'Չեղարկել',
  'btn.log_out': 'Դուրս գալ',
  app_version: 'Հավելվածի տարբերակը {{version}}',

  'btn.follow': 'Հետևել',
  'btn.message': 'Գրել',
  'btn.invite': 'Հրավիրել',
  'btn.invited': 'Հրավիրված',
  'btn.send': 'Ուղարկել',
  'btn.continue': 'Շարունակել',

  // GROUPS
  on_weekends: 'Հանգստյան օրերին',
  monthly: 'Ամսական',
  yearly: 'Տարեկան',
  upload_an_image: 'Վերբեռնեք պատկեր',
  'label.group_name': 'Սահմանեք խմբի եզակի անուն',
  'label.group_description': 'Ստեղծեք ազդեցիկ նկարագրություն',
  'placeholder.group_name': 'Անուն',
  'placeholder.group_description': 'Նկարագրություն',
  members: 'Անդամներ',
  event_frequency: 'Իրադարձությունների հաճախականությունը',
  categories: 'Կատեգորիաներ',
  choose_up_to_3_categories: 'Ընտրեք մինչև 3 կատեգորիա',
  'btn.create_group': 'Ստեղծել խումբ',
  'placeholder.search': 'Որոնել',
  'label.empty': '',
};
