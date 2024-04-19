import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  Modal,
  SpaceBetween,
} from "@cloudscape-design/components";
import { createCategory } from "@/api/categories";

function AddCategory() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleSubmit() {
    // createItem();
    setLoading(true);
    await createCategory(name);
    //   await createProduct(file, description, price, name, "");
    setLoading(false);
    setOpen(false);
  }

  return (
    <>
      <Button onClick={() => setOpen(true)}>Add Category</Button>
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
        header="Add Category"
      >
        <SpaceBetween direction="vertical" size="xs">
          <Input
            ariaLabel="Input field"
            value={name}
            placeholder="Name"
            onChange={({ detail }) => setName(detail.value)}
          />
        </SpaceBetween>
      </Modal>
    </>
  );
}

export default AddCategory;
