const urlModel = require("../models/url.model");

const { catchAsyncError } = require("../utils/catchAsyncError");

exports.hashUrl = catchAsyncError(async (req, res, next) => {
  const { fullUrl } = req.body;

  // check full url is exist in req.body or not
  if (!fullUrl) {
    return next(new Error("Full Url is required."));
  }

  // there may be a case that full url will be in our db then no need to create another hash url
  const isUrlExist = await urlModel.find({ fullUrl });

  if (isUrlExist) {
    const hashedUrl = isUrlExist.hashUrl;
    return res.status(200).send({
      success: true,
      hashedUrl: `${req.protocol}://${req.get("host")}/${hashedUrl}`,
    });
  }

  // creating hash url
  const urlObject = await urlModel.create({ fullUrl });
  const hashedUrl = urlObject.hashUrl;
  res.status(200).send({
    success: true,
    hashedUrl: `${req.protocol}://${req.get("host")}/${hashedUrl}`,
  });
});

exports.getHashUrl = catchAsyncError(async (req, res, next) => {
  const hashUrl = req.params.hashUrl;

  const urlObject = urlModel.find({ hashUrl });

  if (!urlObject) {
    return res.status(404).send("Invalid hash url");
  }
  res.redirect(urlObject.fullUrl);
});
