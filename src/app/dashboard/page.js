// import TableComp from "../components/micro/Table";
"use client";
import TableComp from "../components/micro/Table";
import ModalForm from "../components/micro/ModalForm";
import "../globals.css";
export default function Page() {
  return (
    <div className="w-auto ml-10 md:h-screen">
      {/* <h1>Dashboard</h1> */}
      <div className="mt-10 w-auto mr-10 mb-11 no-scrollbar">
        <ModalForm />
        <TableComp />
      </div>
      {/* <div className="w-full flex flex-wrap flex-row gap-4">
        {data.map((item, key) => (
          <NormalCard key={key} data={ite} />
        ))}
      </div> */}
    </div>
  );
}
