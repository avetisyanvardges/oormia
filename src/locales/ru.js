import { ruLoginScreen } from 'locales/screens/Auth/ru';
import { ruEventScreen } from 'locales/screens/Event/ru';

export default {
  ...ruLoginScreen,
  ...ruEventScreen,
  // LANGUAGES
  'locales.select_language': 'Выберите язык',
  'locales.hy': 'Հայերեն',
  'locales.en': 'English',
  'locales.ru': 'Русский',

  // VALIDATIONS
  'field.required': 'Поле обязательно к заполнению.',
  'field.password':
    'Должен содержать не менее 8 символов и содержать как минимум 1 цифру и 1 специальный символ.',

  // MENU
  'menu.home': 'Главная',
  'menu.map': 'Карта',
  'menu.tickets': 'Билеты',
  'menu.profile': 'Профиль',

  // HOME
  find_nearby_event: 'Найти ближайшее событие',
  speakers: 'Спикеры',
  no_speakers_found: 'Спикеры не найдены',
  best_of_the_week: 'Лучшее на неделе',
  no_events_found: 'Мероприятия не найдены',
  notifications: 'Уведомления',
  no_notifications_yet: 'Уведомлений пока нет',
  stay_tuned_for_updates:
    'Оставайтесь на связи для обновлений и важных сообщений. Мы уведомим вас, когда появится что-то новое или примечательное.',

  // TICKETS
  my_tickets: 'Мои билеты',
  upcoming: 'Предстоящие',
  past: 'Прошедшие',
  no_upcoming_tickets_found: 'Билетов на предстоящие мероприятия не найдено',
  no_past_tickets_found: 'Прошлых билетов не найдено',
  no_tickets_available: 'Похоже, что в данный момент билеты недоступны',

  Date: 'Дата',
  Time: 'Время',
  Place: 'Место',

  // CREATE EVENT
  create_event: 'Создать мероприятие',
  send_request: 'Отправить запрос',

  // PROFILE
  'profile.events': 'Мероприятия',
  'profile.groups': 'Группы',
  create_new_group: 'Создать новую группу',
  'btn.Calendar': 'Календарь',
  'btn.edit_profile': 'Ред. профиль',
  edit_profile: 'Редактировать профиль',
  'btn.save': 'Сохранить',
  'profile.language': 'Язык',
  'profile.settings': 'Настройки',
  'profile.privacy_policy': 'Политика конфиденциальности',
  'profile.delete_account': 'Удалить аккаунт',
  'btn.delete_account': 'Удалить аккаунт',
  delete_your_account: 'Удалить ваш аккаунт',
  warning_delete_account:
    'Вы потеряете все свои данные, удалив свой аккаунт. Это действие нельзя отменить.',
  'btn.Cancel': 'Отмена',
  'btn.log_out': 'Выйти',
  app_version: 'Версия приложения {{version}}',

  'btn.follow': 'Подписаться',
  'btn.invite': 'Пригласить',
  'btn.invited': 'Приглашенный',
  'btn.send': 'Отправить',
  'btn.continue': 'Продолжить',

  // GROUPS
  on_weekends: 'В выходные',
  monthly: 'Ежемесячно',
  yearly: 'Ежегодно',
  upload_an_image: 'Загрузить изображение',
  'label.group_name': 'Задать уникальное название группы',
  'label.group_description': 'Создать захватывающее описание',
  'placeholder.group_name': 'Имя',
  'placeholder.group_description': 'Описание',
  members: 'Участники',
  event_frequency: 'Частота событий',
  categories: 'Категории',
  choose_up_to_3_categories: 'Выберите до 3 категорий',
  'btn.create_group': 'Создать группу',

  'label.empty': '',
};
