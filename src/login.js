export async function login({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "narbu" && password === "gurung") {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}
