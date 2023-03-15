export default class CustomError {
  static createError({ status = 500, response }) {
    const error = new Error();
    error.status = status;
    error.response = response;
    throw error;
  }
}
