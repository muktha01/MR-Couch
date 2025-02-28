import axios from "axios";
const getTopNewProducts = async () => {
  const response = await axios.get("/api/furniture-shop/products?tag=new");
  return response.data;
};
const getTopSellingProducts = async () => {
  const response = await axios.get(
    "/api/furniture-shop/products?tag=top-selling"
  );
  return response.data;
};
const getFurnitureProducts = async () => {
  const response = await axios.get("http://3.0.78.116:8080/products?category.categoryName=Sofas&isActive=true&_limit=10");
  return response.data;
};

const getFurnitureRecliners = async () => {
  const response = await axios.get("http://3.0.78.116:8080/products?category.categoryName=Recliners&isActive=true&_limit=10");
  return response.data;
};
const getFurnitureOneSofas = async () => {
  const response = await axios.get("http://3.0.78.116:8080/products?subCategory.subCategoryName=1 Seaters Sofas&isActive=true&_limit=10");
  return response.data;//2 Seaters Sofas //LHS Sectionals
};
const getFurnitureTwoSofas = async () => {
  const response = await axios.get("http://3.0.78.116:8080/products?subCategory.subCategoryName=2 Seaters Sofas&isActive=true&_limit=10");
  return response.data;
};
const getFurnitureThreeSofas = async () => {
  const response = await axios.get("http://3.0.78.116:8080/products?subCategory.subCategoryName=3 Seaters Sofas&isActive=true&_limit=10");
  return response.data;
};

const getFurnitureLSofas = async () => {
  const response = await axios.get("http://3.0.78.116:8080/products?category.categoryName=Sectional Sofas&isActive=true&_limit=10");
  return response.data;
};

const getFurnitureShopNavList = async () => {
  const response = await axios.get("/api/furniture-shop/navigation");
  return response.data;
};
const getMainCarouselData = async () => {
  const response = await axios.get("/api/furniture-shop/main-carousel");
  return response.data;
};
export default {
  getTopNewProducts,
  getMainCarouselData,
  getFurnitureProducts,
  getTopSellingProducts,
  getFurnitureShopNavList,
  getFurnitureOneSofas,
  getFurnitureTwoSofas,
  getFurnitureThreeSofas,
  getFurnitureLSofas,
  getFurnitureRecliners,
};
