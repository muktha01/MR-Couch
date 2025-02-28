import axios from "axios";
// get all product slug
const getSlugs = async () => {
  const response = await axios.get("/api/products/slug-list");
  return response.data;
};

// get product based on slug
const getProduct = async (slug) => {
  const response = await axios.get("/api/products/slug", {
    params: {
      slug,
    },
  });
  return response.data;
};

// get product based on id
const getProductDetails = async (slug) => {
  console.log("ressss------",slug)

  const response = await axios.get(`http://3.0.78.116:8080/products/${slug}`);
  console.log("ressss------",response)
  return response.data;
  return null;
};

// search profucts
const searchProducts = async (name, category) => {
  const response = await axios.get("/api/products/search", {
    params: {
      name,
      category,
    },
  });
  return response.data;
};
export default {
  getSlugs,
  getProduct,
  searchProducts,
  getProductDetails,
};
