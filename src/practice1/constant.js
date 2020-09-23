const ADDRESS = "https://console.amazonaws.cn";
const PORT = 4455;
const PATH = "/api";
const REGION = "cn-north-1";

// TODO feedback:定义个对象有些大材小用了，可以直接在1-4行前面加export
const aws = {
  address: ADDRESS,
  port: PORT,
  path: PATH,
  region: REGION,
};

export default aws;
