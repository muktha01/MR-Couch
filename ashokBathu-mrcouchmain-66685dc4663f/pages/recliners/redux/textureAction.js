/* eslint-disable import/prefer-default-export */
/* eslint-disable spaced-comment */
import * as requestFromServer from "./textureCrud";
import { callTypes, TexturePageSlice } from "./textureSlice";

const { actions } = TexturePageSlice;


export const fetchTexture = () => (dispatch) =>
  requestFromServer
    .getTexture()
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedTexture({ data }));
    })
    .catch((error) => {
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });


    export const fetchProduct = (id) => (dispatch) =>
    requestFromServer
      .getProducts(id)
      .then((response) => {
        const { data } = response;
        dispatch(actions.fetchedProducts({ data }));
      })
      .catch((error) => {
        // eslint-disable-next-line no-param-reassign
        error.clientMessage = "Can't find";
        dispatch(actions.catchError({ error, callType: callTypes.list }));
      });
  
  export const fetchProductById = (id) => (dispatch) =>
    requestFromServer
      .getProductById(id)
      .then((response) => {
        const { data } = response;
        dispatch(actions.fetchedProductById({ data }));
      })
      .catch((error) => {
        // eslint-disable-next-line no-param-reassign
        error.clientMessage = "Can't find";
        dispatch(actions.catchError({ error, callType: callTypes.list }));
      });
  




