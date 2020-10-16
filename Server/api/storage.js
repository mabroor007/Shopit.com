const cloudinary = require("../Storage/cloudinary");
const fs = require("fs");
const path = require("path");

exports.uploadFile = async (file) => {
  const { createReadStream, filename } = await file;
  const stream = createReadStream();

  const pathname = path.join(__dirname, `../public/images/${filename}`);

  await stream.pipe(fs.createWriteStream(pathname));
  return {
    url: `http://localhost:4000/public/images/${filename}`,
    filename,
  };
};
