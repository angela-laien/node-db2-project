
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: 'WER12345P', make: 'Tesla', model: 'model x', mileage: '100' },
        { VIN: 'LAI12345P', make: 'Tesla', model: 'model S', mileage: '103' },
        { VIN: 'XIE12345P', make: 'Tesla', model: 'model Y', mileage: '300' },
      ]);
    });
};
