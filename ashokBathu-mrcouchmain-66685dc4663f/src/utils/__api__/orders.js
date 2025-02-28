import axios from "axios";
const getOrders = async (slug) => {
  console.log("ressss------",slug)

  const response = await axios.get(`http://3.0.78.116:8080/orders/${slug}`);
  return response.data;
};
const getIds = async () => {
  const response = await axios.get("/api/users/order-ids");
  return response.data;
};
const getOrder = async (id) => {
  const response = await axios.get("/api/users/order", {
    params: {
      id,
    },
  });
  return response.data;
};
export default {
  getOrders,
  getOrder,
  getIds,
};
