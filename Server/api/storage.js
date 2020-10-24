const cloudinary = require("../Storage/cloudinary");
const fs = require("fs");

exports.uploadFileFromStream = async (file) => {
  const { createReadStream, filename } = await file;

  const upload = async () => {
    let details;
    await createReadStream().pipe(
      cloudinary.uploader.upload_stream(
        { folder: "shopit" },
        (error, result) => {
          if (error) return console.log(error);
          console.log(result);
          details = result;
        }
      )
    );
    return details;
  };
  const data = await upload();
  console.log(data);

  return {
    url: `https://res.cloudinary.com/dumb56xhj/image/upload/v1602892312/shopit/${filename}`,
    filename,
  };
};

exports.uploadFileFromStorage = () => {};
