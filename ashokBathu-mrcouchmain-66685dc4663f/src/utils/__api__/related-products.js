import axios from "axios";
export const getFrequentlyBought = async () => {
  const response = await axios.get("/api/frequently-bought-products");
  return response.data;
};
export const getRelatedProducts = async () => {
  const response = await axios.get("http://3.0.78.116:8080/products?category.categoryName=Recliners&isActive=true&_limit=10");
  return response.data;
};
