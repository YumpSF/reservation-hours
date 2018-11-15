const faker = require('faker');
const moment = require('moment');
const fs = require('fs');

const generateRestaurant = () => {
  const file = fs.createWriteStream('./server/database/restaurant.csv');
  file.write('id,name\n');
  let i = 1;
  const write = () => {
    while (i < 100000000) {
      i += 1;
      const randomName = `${faker.company.catchPhraseAdjective()} ${faker.company.bsNoun()}`;
      if (!file.write(`${i},${randomName}\n`)) {
        return;
      }
    }
    file.end(() => {
      console.log('done');
    });
  };
  file.on('drain', () => {
    write();
  });
  write();
};

// const generateReservation = () => {
//   const reservation = [];
//   for (let i = 1; i < 2000; i += 1) {
//     const restId = Math.floor(Math.random() * 100);
//     const randomReservee = `${faker.name.findName()}`;
//     const randomReservation = faker.date.future(0.05);
//     let randomTime = parseInt(12 + (Math.random() * 10), 10);
//     if (Math.random() >= 0.5) {
//       randomTime += ':30:00';
//     } else {
//       randomTime += ':00:00';
//     }
//     randomTime = `${moment(randomReservation).format('YYYY-MM-DD')} ${randomTime}`;
//     reservation.push({
//       id: i,
//       reservee: randomReservee,
//       time: randomTime,
//       restaurant_id: restId,
//     });

//     const query = 'INSERT INTO reservation(reservee, time, restaurantId) VALUES(?, CAST(? AS DATETIME), ?)';
//     db.query(query, [randomReservee, randomTime, restId], (err) => {
//       if (err) { throw new Error(err); }
//     });
//   }
//   return reservation;
// };

// const generateHour = () => {
//   const hour = [];
//   for (let i = 1; i <= 100; i += 1) {
//     const restId = i;
//     let openingHour = 6 + Math.floor(Math.random() * 5);
//     if (openingHour > 10) {
//       openingHour = `0${openingHour}`;
//     }
//     if (Math.random() >= 0.5) {
//       openingHour += ':30';
//     } else {
//       openingHour += ':00';
//     }
//     let closingHour = 21 + Math.floor(Math.random() * 5);
//     if (closingHour > 24) {
//       closingHour -= 24;
//     }
//     if (Math.random() >= 0.5) {
//       closingHour += ':30';
//     } else {
//       closingHour += ':00';
//     }
//     for (let j = 0; j < 7; j += 1) {
//       hour.push({
//         id: i,
//         weekday: j,
//         openingHour,
//         closingHour,
//         restaurant_id: restId,
//       });
//       const query = 'INSERT INTO hour(weekday, openingHour, closingHour, restaurantId) VALUES(?, ?, ?, ?)';
//       db.query(query, [j, openingHour, closingHour, restId], (err) => {
//         if (err) { throw new Error(err); }
//       });
//     }
//   }
//   db.end();
//   return hour;
// };

generateRestaurant();
// generateReservation();
// generateHour();
