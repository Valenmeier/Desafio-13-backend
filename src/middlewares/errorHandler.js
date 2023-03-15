import EErrors from "../services/errors/enums.js";

export default (err, req, res, next) => {
  console.log("Ingreso Al err Handler");
  switch (err.status) {
    case EErrors.INVALID_TYPES_ERROR:
      res
        .status(err.status)
        .send({ status: err.status, response: err.response });
      break;
    default:
      res.status(err.status).send({ status: "err", response: "Unhandled error" });
  }
};
