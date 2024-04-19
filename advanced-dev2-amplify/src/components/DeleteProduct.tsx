import { Product } from "@/API";
import { deleteProduct } from "@/api/products";
import { Button } from "@cloudscape-design/components";
import React, { useState } from "react";

type DeleteProductProps = {
  item: Product[];
};

function DeleteProduct({ item }: DeleteProductProps) {
  const [loading, setLoading] = useState(false);
  const handleDelete = async () => {
    setLoading(true);
    await deleteProduct(item[0].id);
    setLoading(false);
  };
  return (
    <Button
      disabled={item.length === 0 || loading}
      loading={loading}
      variant="primary"
      onClick={handleDelete}
    >
      Delete
    </Button>
  );
}

export default DeleteProduct;
