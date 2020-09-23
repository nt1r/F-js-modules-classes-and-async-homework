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
  // TODO feedback：fetch默认的method就是get，可以指定
  // TODO feedback：命名可以更表意一些，json过于抽象
  // TODO feedback：既然用到await/async， 可以await两次获取返回的数据
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
