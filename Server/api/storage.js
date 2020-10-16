const cloudinary = require("../Storage/cloudinary");

exports.uploadFile = async (file) => {
  const { createReadStream, filename } = await file;
  var res = [];
  const cld_file_upload = cloudinary.uploader.upload_stream(
    { folder: "shopit" },
    (error, result) => {
      if (error) console.log(err);
      res.push(result.secure_url);
      console.log(res);
    }
  );

  await new Promise((res) => {
    createReadStream().pipe(cld_file_upload).on("finish", res);
  });

  return {
    url: `https://res.cloudinary.com/dumb56xhj/image/upload/v1602892312/shopit/${filename}`,
    filename,
  };
};
