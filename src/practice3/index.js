const url = `https://v1.jinrishici.com/all.json`;

/* export const getPoetry = () => {
  return fetch(url, {
    method: "get",
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    })
    .then((json) => {
      return [`${json.origin}`, `${json.author}`, `${json.content}`];
    });
}; */

export const getPoetry = async () => {
  const json = await fetch(url, {
    method: "get",
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
  return [`${json.origin}`, `${json.author}`, `${json.content}`];
};
