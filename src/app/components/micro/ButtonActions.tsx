"use client";
import React, { useEffect } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
  Textarea,
} from "@nextui-org/react";
import { useState } from "react";
import { useStore } from "../../utils/Store";
import { uploadFile } from "../../utils/uploadFile";
import { deleteFile } from "../../utils/deleteFile";

export default function ButtonActions({ id }: { id: number }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { editData, deleteData, Data } = useStore();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState<string>("");
  const [dataId, setDataId] = useState(null);
  const [imageName, setImageName] = useState<string>("");
  const [progress, setProgress] = useState(0);

  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);

  const getDataById = async (id) => {
    const response = await fetch(
      `https://${process.env.API_SECRET}.mockapi.io/api/product/${id}`
    );
    const data = await response.json();
    setDataId(data);
    // console.log(data);
  };
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setImageName(e.target.files[0].name);
    }
  };

  const handleSumbit = async (e) => {
    e.preventDefault();

    let imageUrl = image;
    if (typeof image === "object") {
      try {
        if (dataId && dataId.productImage) {
          await deleteFile(dataId.productImage);
        }
        imageUrl = await uploadFile(image, setProgress, setError);
        setImage(imageUrl);
      } catch (error) {
        console.error("Upload failed:", error);
        return;
      }
    }

    editData(id, {
      title: title,
      description: description,
      productImage: imageUrl,
      price: parseFloat(price),
    });
  };
  const handleClickEdit = () => {
    // console.log(dataId);
    setTitle(dataId.title);
    setDescription(dataId.description);
    setImage(dataId.productImage);
    setPrice(dataId.price);
    onOpen();
  };
  const handleClick = async () => {
    // console.log(id);
    if (dataId && dataId.productImage) {
      try {
        await deleteFile(dataId.productImage);
        deleteData(id);
      } catch (error) {
        console.error("Failed to delete data:", error);
      }
    } else {
      deleteData(id);
    }
  };

  useEffect(() => {
    getDataById(id);
  }, [id]);
  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">Open Menu</Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Dynamic Actions">
          {/* {(item) => ( */}
          <DropdownItem
            color="primary"
            className="text-black"
            // onClick={handleClickEdit}
            onPress={handleClickEdit}
          >
            Edit File
          </DropdownItem>
          <DropdownItem
            color="danger"
            className="text-danger"
            onClick={handleClick}
          >
            Delete File
          </DropdownItem>

          {/* )} */}
        </DropdownMenu>
      </Dropdown>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit Data
              </ModalHeader>
              <ModalBody>
                <form onSubmit={handleSumbit}>
                  <Input
                    autoFocus
                    //   endContent={
                    //     <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    //   }
                    label="title"
                    placeholder="title"
                    variant="bordered"
                    className="mb-3"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                  />
                  <Textarea
                    label="Description"
                    placeholder="Enter your description"
                    className="max-w-xs mb-3"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  />
                  {/* <Input
                    autoFocus
                    //   endContent={
                    //     <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    //   }
                    label="image URL"
                    placeholder="Image URL"
                    variant="bordered"
                    onChange={(e) => setImage(e.target.value)}
                    className="mb-3"
                    value={image}
                  /> */}
                  <input type="file" onChange={handleChange} />

                  <Input
                    autoFocus
                    //   endContent={
                    //     <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    //   }
                    label="Price"
                    placeholder="Price"
                    variant="bordered"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                  />
                  <ModalFooter>
                    <Button color="danger" variant="flat" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" type="submit" onPress={onClose}>
                      Ubah Data
                    </Button>
                  </ModalFooter>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
