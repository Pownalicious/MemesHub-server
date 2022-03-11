"use strict";

function newImageUrl() {
  let id = Math.random().toString(36).substr(2, 9);
  let url = "https://api.lorem.space/image/game?w=1600&h=720&id=";
  return url + id;
}

function randomName() {
  return Math.random().toString(36).substr(2, 9);
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "posts",
      [
        {
          title: randomName(),
          imageUrl: newImageUrl(),
          genreId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: randomName(),
          imageUrl: newImageUrl(),
          genreId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: randomName(),
          imageUrl: newImageUrl(),
          genreId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: randomName(),
          imageUrl: newImageUrl(),
          genreId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: randomName(),
          imageUrl: newImageUrl(),
          genreId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: randomName(),
          imageUrl: newImageUrl(),
          genreId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: randomName(),
          imageUrl: newImageUrl(),
          genreId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: randomName(),
          imageUrl: newImageUrl(),
          genreId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: randomName(),
          imageUrl: newImageUrl(),
          genreId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: randomName(),
          imageUrl: newImageUrl(),
          genreId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: randomName(),
          imageUrl: newImageUrl(),
          genreId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: randomName(),
          imageUrl: newImageUrl(),
          genreId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: randomName(),
          imageUrl: newImageUrl(),
          genreId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: randomName(),
          imageUrl: newImageUrl(),
          genreId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: randomName(),
          imageUrl: newImageUrl(),
          genreId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: randomName(),
          imageUrl: newImageUrl(),
          genreId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("posts", null);
  },
};
