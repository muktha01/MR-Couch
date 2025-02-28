/* eslint-disable import/prefer-default-export */
/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */

import axios from "axios";
// import { Texture } from "../../urls";

export function getOrders(slug) {
  return axios.get(`http://3.0.78.116:8080/store-customers?franchise_store.id=${slug}&_limit=10`);

}


export function getProducts(id) {
  return axios.get(`http://3.0.78.116:8080/orders?franchise_store.StoreName=Sofas&isActive=true&_limit=10`);
}

export function getProductById(id) {
  return axios.get(`http://3.0.78.116:8080/products/${id}`);
}
