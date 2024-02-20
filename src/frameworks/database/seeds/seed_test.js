/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('Test01').del()
  await knex('Test01').insert([
    {id: 1, nama: 'david', status:1},
    {id: 2, nama: 'jegel',status:1},
    {id: 3, nama: 'indra',status:1},
    {id: 4, nama: 'rigen',status:1},
    {id: 5, nama: 'hifzi',status:1},
    {id: 6, nama: 'kohar',status:1},
    {id: 7, nama: 'boris',status:1},
    {id: 8, nama: 'bokir',status:1},
    {id: 9, nama: 'bene',status:1},
    {id: 10, nama: 'dion',status:1},
    {id: 11, nama: 'oki',status:1},
    {id: 12, nama: 'rengga',status:1},
    {id: 13, nama: 'praz',status:1},
    {id: 14, nama: 'teguh',status:1},
    {id: 15, nama: 'arie',status:1},
    {id: 16, nama: 'keriting',status:1},
    {id: 17, nama: 'inda',status:1},
    {id: 18, nama: 'permata',status:1},
    {id: 19, nama: 'sari',status:1},
    {id: 20, nama: 'neneng',status:1},
  ]);
};
