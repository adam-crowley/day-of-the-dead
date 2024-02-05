/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  return knex('locations').insert([
    {
      id: 1,
      name: 'Pallas Cat Palace',
      description: 'Any mice in the vicinity should keep a careful eye out.',
    },
    {
      id: 2,
      name: 'Bear Fields',
      description: `Towering trees and rivers overflowing with Salmon.`,
    },
    {
      id: 3,
      name: 'Flying squirrel Grove',
      description:
        'Where the trees are tall but the squirrels are too lazy to climb them.',
    },
    {
      id: 4,
      name: 'Capybara Spa',
      description: `Where any Capybara worth it's salt baths in a hot spring with lemons.`,
    },
  ])
}
