import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function AccessoriesAllProducts() {
  const getAllProducts = await productByCategory("accessories");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
