"use client";
import React, { use, useState, useEffect } from "react";
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
import { useStore } from "../../service/api/Store";
import { uploadFile } from "../../utils/uploadFile";
export default function ModalForm() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [title, setTitle] = useState("");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState(Number);

  const [url, setUrl] = useState(null);

  const { Data, insertData } = useStore();
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleSumbit = async (e) => {
    // console.log(url);
    e.preventDefault();
    if (!image) {
      setError("No file selected");
      return;
    }

    try {
      const downloadURL = await uploadFile(image, setProgress, setError);
      setUrl(downloadURL);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };
  useEffect(() => {
    if (url) {
      const data = {
        id: Data.length,
        title: title,
        description: description,
        productImage: url,
        username: "Alberto",
        userTitle: "Senior Developer at Gojek",
        MiniImage: "miniG1",
        price: parseFloat(price),
      };
      insertData(data);
      // console.log(data);
    }
  }, [url]);
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
                  {/* <Input
                    // autoFocus
                    //   endContent={
                    //     <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    //   }
                    label="image URL"
                    placeholder="Image URL"
                    variant="bordered"
                    onChange={(e) => setImage(e.target.value)}
                    className="mb-3"
                  /> */}
                  <input type="file" onChange={handleChange} className="mb-3" />
                  {/* <Button color="success" onClick={handleUpload}>
                    Take a photo
                  </Button> */}
                  {/* {image && (
                    <div>
                      <img src={image} alt="Uploaded file" width="300" />
                      <p>
                        URL:{" "}
                        <a href={url} target="_blank" rel="noopener noreferrer">
                          {url}
                        </a>
                      </p>
                    </div>
                  )} */}
                  <Input
                    //   endContent={
                    //     <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    //   }
                    label="Price"
                    placeholder="Price"
                    variant="bordered"
                    type="number"
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
