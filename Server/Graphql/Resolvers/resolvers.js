const api = require("../../api/api");
const path = require("path");
const fs = require("fs");

module.exports = {
  Query: {
    getCurrentUserData: (_, __, { user }) => api.getCurrentUserData(user),
  },
  Mutation: {
    uploadFile: async (_, { file }) => {
      const { createReadStream, filename } = await file;

      const stream = createReadStream();
      const pathName = path.join(
        "E:/Web Projects/On going/Shopit.com/",
        `server/public/images/${filename}`
      );

      await stream.pipe(fs.createWriteStream(pathName));

      return {
        filename,
        url: `http://localhost:4000/images/${filename}`,
      };
    },
    createUser: (_, userData, { res }) => api.createUser(userData, res),
    loginUser: (_, userData, { res }) => api.loginUser(userData, res),
    logOutUser: (_, __, { res }) => api.logOutUser(res),
  },
};
