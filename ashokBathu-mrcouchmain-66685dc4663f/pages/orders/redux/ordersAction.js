/* eslint-disable import/prefer-default-export */
/* eslint-disable spaced-comment */
import * as requestFromServer from "./ordersCrud";
import { callTypes, OrdersPageSlice } from "./ordersSlice";

const { actions } = OrdersPageSlice;


export const fetchOrders = (slug) => (dispatch) =>
  requestFromServer
    .getOrders(slug)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedOrders({ data }));
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


      export const fetchOrderById = (id) => (dispatch) =>
      requestFromServer
        .getOrderbyId(id)
        .then((response) => {
          const { data } = response;
          dispatch(actions.fetchedOrderById({ data }));
        })
        .catch((error) => {
          // eslint-disable-next-line no-param-reassign
          error.clientMessage = "Can't find";
          dispatch(actions.catchError({ error, callType: callTypes.list }));
        });
    

      


