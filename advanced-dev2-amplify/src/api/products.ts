import { generateClient } from "aws-amplify/api";
import * as mutations from "@/graphql/mutations";
import * as queries from "@/graphql/queries";
import { uploadData, getUrl } from "aws-amplify/storage";

const client = generateClient({
  authMode: "userPool",
});

export const createProduct = async (
  file: File[],
  description: string,
  price: string,
  name: string,
  categoryID: string
) => {
  if (file === null) return;

  // Details of the item we are creating
  const itemDetails = {
    name: name,
    description: description,
    price: price,
    categoryID: categoryID,
  };

  // Create the item record via our API (without image)
  const response = await client.graphql({
    query: mutations.createProduct,
    variables: { input: itemDetails },
  });

  // Our newly created item
  //   const newItem = response.data.createProduct;
  //   if (!newItem) return;

  // Upload the Storage file:
  //   const result = await uploadData({
  //     key: `${newItem.id}-${file[0]?.name}`,
  //     data: file[0]!,
  //     options: {
  //       contentType: "image/png", // contentType is optional
  //     },
  //   }).result;

  //   // Update the item with it's image
  //   const updateItemDetails = {
  //     id: newItem.id,
  //     image: result?.key,
  //   };

  //   // Add the file association to the record:
  //   const updateResponse = await client.graphql({
  //     query: mutations.updateProduct,
  //     variables: { input: updateItemDetails },
  //   });

  //   const updatedItem = updateResponse.data.updateProduct;

  //   // If the record has no associated file, we can return early.
  //   if (!updatedItem.image) return;

  //   // Retrieve the file's signed URL:
  //   const signedURL = await getUrl({ key: updatedItem.image });

  //   console.log(signedURL);
};

export const getAllProducts = async () => {
  const products = await client.graphql({
    query: queries.listProducts,
  });
  return products.data.listProducts.items;
};

export const deleteProduct = async (id: string) => {
  await client.graphql({
    query: mutations.deleteProduct,
    variables: { input: { id: id } },
  });
};
