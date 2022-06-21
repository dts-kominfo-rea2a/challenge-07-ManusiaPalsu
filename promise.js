const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (maafTelat) => {
  let promise1 = await promiseTheaterIXX();
  let promise2 = await promiseTheaterVGC();
  let combine = promise1.concat(promise2);
  let result = 0;
  combine.map((promise1) => promise1.hasil === maafTelat && (result += 1));
  return result;
};

module.exports = {
  promiseOutput,
};
