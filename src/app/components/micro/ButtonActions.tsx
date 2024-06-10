"use client";
import React from "react";
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
export default function ButtonActions({ id }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { editData, deleteData, Data } = useStore();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  // console.log(Data[0].title);
  const handleSumbit = (e) => {
    e.preventDefault();
    // const data = {
    //   id: id,
    //   title: title,
    //   description: description,
    //   productImage: image,
    //   username: "Alberto",
    //   userTitle: "Senior Developer at Gojek",
    //   MiniImage: "miniG1",
    //   price: price,
    // };
    editData(id, {
      title: title,
      description: description,
      productImage: image,
      price: price,
    });
  };
  const handleClickEdit = () => {
    console.log(id);
    setTitle(Data[id].title);
    setDescription(Data[id].description);
    setImage(Data[id].productImage);
    setPrice(Data[id].price);
    onOpen();
  };
  const handleClick = () => {
    // console.log(id);
    deleteData(id);
  };

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
                  <Input
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
                  />
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
