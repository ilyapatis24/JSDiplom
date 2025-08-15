connection = new Mongo();
db = connection.getDB('booking');
db.users.insert({
  email: 'admin@mail.ru',
  passwordHash: '$2b$10$KlNjMFWBbV8inTvcC/BSguRYIXEpPMPd6gnYxiYZUjeVz90S0.M.K',
  name: 'Admin',
  contactPhone: '+79115464012',
  role: 'admin',
});

db.users.insert({
  email: 'manager@mail.ru',
  passwordHash: '$2b$10$mQvNMAKPS3GYSgjILwXdFuIzDUHmC9mwWE./WHFX/7dLQPQHgKjrO',
  name: 'Manager',
  contactPhone: '+79315121243',
  role: 'manager',
});

db.users.insert({
  email: 'client@mail.ru',
  passwordHash: '$2b$10$DmuAYiojMrS1nTEyLuQ5o.L5pSdY0BGmps9GfIYe3Ogl5aHuv/p/i',
  name: 'Client',
  contactPhone: '+79065440113',
  role: 'client',
});

db.hotels.insert({
  _id: ObjectId('66a03c03efad029c0db37f83'),
  title: 'Аквалина',
  description: '​Санкт-Петербург, Подъездной переулок, 13​2,5 км до центра',
  createdAt: ISODate('2025-08-14T12:26:32.617Z'),
  updatedAt: ISODate('2025-08-14T12:26:32.617Z'),
  files: ''
});

db.hotels.insert({
  _id: ObjectId('66a03c28efad029c0db37f85'),
  title: 'Отель Park Side',
  description: '​Санкт-Петербург, Сердобольская улица, 7​6 км до центра',
  createdAt: ISODate('2025-08-14T12:26:32.617Z'),
  updatedAt: ISODate('2025-08-14T12:26:32.617Z'),
  files: ''
});

db.rooms.insert({
  hotel: ObjectId('66a03c03efad029c0db37f83'),
    title: 'Классический номер c двуспальной кроватью',
    description: 'В номере находится чайная станция, телевизор с интерактивным гостиничным управлением. Зона отдыха оборудована журнальным столом и стульями. Ванная комната оборудована душевой кабиной, туалетом, феном и банными принадлежностями.',
    images: '',
    createdAt: ISODate('2025-08-14T12:26:32.617Z'),
    updatedAt: ISODate('2025-08-14T12:26:32.617Z'),
    isEnable: true
});

db.rooms.insert({
  hotel: ObjectId('66a03c28efad029c0db37f85'),
    title: 'Классический номер c двумя односпальными кроватями',
    description: 'Апартаменты с премиальной отделкой и полной меблировкой в новом апарт-отеле бизнес-класса PARK SIDE.',
    images: '',
    createdAt: ISODate('2025-08-14T12:26:32.617Z'),
    updatedAt: ISODate('2025-08-14T12:26:32.617Z'),
    isEnable: true
});