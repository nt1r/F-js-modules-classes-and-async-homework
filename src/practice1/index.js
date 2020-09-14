import getURL from "./utils";
import aws from "./constant";

function generateUrl() {
  const { address, port, path } = aws;
  return getURL(address, port, path);
}

function generateRegion() {
  return aws.region;
}

export const url = generateUrl();

export const region = generateRegion();
