"use client";
import React, { use, useState } from "react";
import {
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
import { useStore } from "../../utils/Store";
export default function ModalForm() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const { Data, insertData } = useStore();
  // console.log(Data);
  // console.log(title, description, image);
  const handleSumbit = (e) => {
    e.preventDefault();
    const data = {
      id: Data.length,
      title: title,
      description: description,
      productImage: image,
      username: "Alberto",
      userTitle: "Senior Developer at Gojek",
      MiniImage: "miniG1",
      price: price,
    };
    insertData(data);
  };
  // console.log(Data);
  return (
    <>
      <Button onPress={onOpen} className="bg-green-400 mb-5">
        Tambah Data
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Tambah Data
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
                  />
                  <Textarea
                    label="Description"
                    placeholder="Enter your description"
                    className="max-w-xs mb-3"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <Input
                    // autoFocus
                    //   endContent={
                    //     <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    //   }
                    label="image URL"
                    placeholder="Image URL"
                    variant="bordered"
                    onChange={(e) => setImage(e.target.value)}
                    className="mb-3"
                  />
                  <Input
                    //   endContent={
                    //     <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    //   }
                    label="Price"
                    placeholder="Price"
                    variant="bordered"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <ModalFooter>
                    <Button color="danger" variant="flat" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" type="submit" onPress={onClose}>
                      Tambah Data
                    </Button>
                  </ModalFooter>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
