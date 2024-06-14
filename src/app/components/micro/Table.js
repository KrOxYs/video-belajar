"use client";
import React, { useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import RatingStars from "./RatingStar";
import { useStore } from "../../service/api/Store";
import ButtonActions from "./ButtonActions";
import style from "../../globals.css";
export default function TableComp() {
  const { Data, getDataFromApi } = useStore();
  // console.log(Data);

  useEffect(() => {
    getDataFromApi();
  }, []);
  return (
    <Table
      aria-label="Example static collection table "
      className=" overflow-hidden"
    >
      <TableHeader>
        <TableColumn>No</TableColumn>
        <TableColumn>Judul Content</TableColumn>
        <TableColumn>Deskripsi</TableColumn>
        <TableColumn>Author</TableColumn>
        {/* <TableColumn width={30}>Rating</TableColumn> */}
        <TableColumn>Price</TableColumn>
        <TableColumn>Actions</TableColumn>
      </TableHeader>
      <TableBody>
        {Data.map((item, key) => (
          <TableRow key={`${key}`}>
            <TableCell>{key + 1}</TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell>{item.username}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>
              <ButtonActions id={item.id} />
            </TableCell>
          </TableRow>
        ))}
        {/* <TableRow key="2">
          <TableCell>Zoey Lang</TableCell>
          <TableCell>Technical Lead</TableCell>
          <TableCell>Paused</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Jane Fisher</TableCell>
          <TableCell>Senior Developer</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>William Howard</TableCell>
          <TableCell>Community Manager</TableCell>
          <TableCell>Vacation</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>Active</TableCell>
        </TableRow> */}
      </TableBody>
    </Table>
  );
}
