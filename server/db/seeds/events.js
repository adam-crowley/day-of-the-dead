/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  return knex('events').insert([
    {
      id: 1,
      location_id: 1,
      day: 'friday',
      time: '2pm - 3pm',
      name: 'Spirits Awaken',
      description:
        'Join us for a Dia de los Muertos celebration featuring music, dance, and colorful altars honoring ancestors.',
    },
    {
      id: 2,
      location_id: 2,
      day: 'friday',
      time: '4pm - 5pm',
      name: 'Dia de los Muertos Fiesta',
      description:
        'Come for traditional cuisine, music, and festive altars honoring our ancestors.',
    },
    {
      id: 3,
      location_id: 3,
      day: 'friday',
      time: '6pm - 7pm',
      name: 'Remembrance and Revelry',
      description:
        'Celebrate with music, laughter, and remembrance at our Dia de los Muertos event.',
    },
    {
      id: 4,
      location_id: 4,
      day: 'saturday',
      time: '2pm - 3pm',
      name: 'Celebrating Life Beyond',
      description:
        'Join us in celebrating life with music, dancing, and a sprinkle of magic.',
    },
    {
      id: 5,
      location_id: 1,
      day: 'saturday',
      time: '8pm - 9pm',
      name: 'Skeletons Dance at Dusk',
      description:
        'Watch skeletons come alive at our spooktacular event featuring music and dance.',
    },
    {
      id: 6,
      location_id: 2,
      day: 'sunday',
      time: '9pm - 10pm',
      name: 'From Darkness to Light',
      description: 'Join us for a candlelit remembrance honoring loved ones.',
    },
    {
      id: 7,
      location_id: 3,
      day: 'sunday',
      time: '8pm - 9pm',
      name: 'Altars Aglow',
      description: 'Celebrate with vibrant altars and music.',
    },
    {
      id: 8,
      location_id: 4,
      day: 'sunday',
      time: '8pm - 9pm',
      name: 'Honoring the Departed: Day of the Dead Jubilee',
      description:
        'Join the jubilee as we honor the departed with music and laughter.',
    },
  ])
}
