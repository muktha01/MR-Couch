/* eslint-disable import/prefer-default-export */
/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */

import axios from "axios";
// import { Texture } from "../../urls";

export function getTexture() {
  return axios.get(`http://3.0.78.116:8080/textures`);
}


export function getProducts(id) {
  return axios.get(`http://3.0.78.116:8080/products?category=${id}&_limit=20`);
}

export function getProductById(id) {
  return axios.get(`http://3.0.78.116:8080/products/${id}`);
}
