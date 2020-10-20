const cloudinary = require("../Storage/cloudinary");

exports.uploadFile = async (file) => {
  const { createReadStream, filename } = await file;
  var result = [];
  await new Promise((res) => {
    createReadStream()
      .pipe(
        cloudinary.uploader.upload_stream(
          { folder: "shopit" },
          (error, res) => {
            if (error) console.log(err);
            result.push(res.secure_url);
            console.log(result);
          }
        )
      )
      .on("finish", res);
  });

  console.log(result);
  return {
    url: `https://res.cloudinary.com/dumb56xhj/image/upload/v1602892312/shopit/${filename}`,
    filename,
  };
};
