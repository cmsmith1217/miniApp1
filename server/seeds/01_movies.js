/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movies').del()
  await knex('movies').insert([
    {name: 'Your Name', haveWatched: 1, toWatch: 0, description: "Your Name depicts the story of high school students Taki Tachibana and Mitsuha Miyamizu, who suddenly begin to swap bodies despite having never met, unleashing chaos on each other's lives."},
    {name: 'Evangelion: 1.0 You Are (Not) Alone', haveWatched: 1, toWatch: 0, description: "Set in the futuristic city of Tokyo-3 fifteen years after the Second Impact, Shinji Ikari and Rey Ayanami pilot mechas known as Eva units against a mysterious species named Angels."},
    {name: 'Sword Art Online', haveWatched: 1, toWatch: 0, description: "The series takes place in the 2020s and focuses on protagonists Kazuto 'Kirito' Kirigaya and Asuna Yuuki as they play through various virtual reality MMORPG worlds."},
    {name: 'Demon Slayer', haveWatched: 0, toWatch: 1, description: "The story takes place in Taishō era Japan, where a secret society, known as the Demon Slayer Corps, has been waging a secret war against demons for centuries."},
    {name: 'My Hero Academia', haveWatched: 0, toWatch: 0, description: "My Hero Academia is set in a world where about 80% of the human population has gained superpowers called 'Quirks', that can vary widely and can be inherited."},
    {name: 'Cowboy Bebop', haveWatched: 1, toWatch: 0, description: "In 2071, roughly fifty years after an accident with a hyperspace gateway which made Earth almost uninhabitable, humanity has colonized most of the rocky planets and moons of the Solar System."}
  ]);
};
