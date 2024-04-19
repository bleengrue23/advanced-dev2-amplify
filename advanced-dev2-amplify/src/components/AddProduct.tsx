import {
  Box,
  Button,
  FileUpload,
  Input,
  Modal,
  Select,
  SpaceBetween,
} from "@cloudscape-design/components";
import { generateClient } from "aws-amplify/api";
import React, { useState } from "react";

import { createProduct } from "@/api/products";
import { useCategories } from "@/hooks/useCategories";

function AddProduct() {
  const { categories } = useCategories();
  const [loading, setLoading] = useState(false);
  const client = generateClient();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState<File[]>([]);
  const [selectedCategory, setSelectedCategory] = useState({
    label: categories[0]?.name as string,
    value: categories[0]?.id,
  });
  async function handleSubmit() {
    setLoading(true);
    await createProduct(file, description, price, name, selectedCategory.value);
    setLoading(false);
    setOpen(false);
  }

  return (
    <>
      <Button onClick={() => setOpen(true)}>Add Product</Button>
      <Modal
        onDismiss={() => setOpen(false)}
        visible={open}
        footer={
          <Box float="right">
            <SpaceBetween direction="horizontal" size="xs">
              <Button
                disabled={loading}
                variant="link"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                disabled={loading}
                loading={loading}
                variant="primary"
                onClick={() => handleSubmit()}
              >
                Submit
              </Button>
            </SpaceBetween>
          </Box>
        }
        header="Add Item"
      >
        <SpaceBetween direction="vertical" size="xs">
          <Input
            ariaLabel="Input field"
            value={name}
            placeholder="Name"
            onChange={({ detail }) => setName(detail.value)}
          />
          <Input
            ariaLabel="Input field"
            value={description}
            placeholder="Description"
            onChange={({ detail }) => setDescription(detail.value)}
          />
          <Input
            ariaLabel="Input field"
            value={price}
            placeholder="Price"
            onChange={({ detail }) => setPrice(detail.value)}
          />
          <Select
            ariaLabel="Input field"
            options={categories.map((category) => ({
              label: category?.name as string,
              value: category.id,
            }))}
            placeholder="Category"
            onChange={({ detail }) =>
              setSelectedCategory(detail.selectedOption as any)
            }
            selectedAriaLabel="Selected"
            selectedOption={selectedCategory}
            // value={price}
            // placeholder="Category"
            // onChange={({ detail }) => setPrice(detail.value)}
          />
          {/* <input id="inputFile" type="file" onChange={handleChangeFile} /> */}
          <FileUpload
            onChange={({ detail }) => setFile(detail.value)}
            value={file}
            i18nStrings={{
              uploadButtonText: (e) => (e ? "Choose files" : "Choose file"),
              dropzoneText: (e) =>
                e ? "Drop files to upload" : "Drop file to upload",
              removeFileAriaLabel: (e) => `Remove file ${e + 1}`,
              limitShowFewer: "Show fewer files",
              limitShowMore: "Show more files",
              errorIconAriaLabel: "Error",
            }}
            accept=".png"
            showFileLastModified
            showFileSize
            showFileThumbnail
            tokenLimit={3}
            multiple={false}
            constraintText="Upload your product image"
          />
        </SpaceBetween>
      </Modal>
    </>
  );
}

export default AddProduct;
