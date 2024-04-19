import { generateClient } from "aws-amplify/api";
import * as mutations from "@/graphql/mutations";
import * as queries from "@/graphql/queries";
import { getAllCategoriesWithProducts } from "@/graphql/custom-queries";
import { uploadData, getUrl } from "aws-amplify/storage";

const client = generateClient({
  authMode: "userPool",
});

export const createCategory = async (name: string) => {
  const category = await client.graphql({
    query: mutations.createCategory,
    variables: {
      input: {
        name,
      },
    },
  });
  return category.data.createCategory;
};

export const getAllCategories = async () => {
  const categories = (await client.graphql({
    query: getAllCategoriesWithProducts,
  })) as any;
  return categories.data.listCategories.items;
};
