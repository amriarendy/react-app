import React, { useState } from "react";
import Table from "../../../elements/tables";
import Thead from "../../../elements/tables/Thead";
import Tbody from "../../../elements/tables/Tbody";
import Trow from "../../../elements/tables/Trow";
import Td from "../../../elements/tables/Td";
import Th from "../../../elements/tables/Th";
import Taction from "../../../elements/tables/Taction";
import Terrors from "../../../elements/tables/Terrors";

const Test = ({ data }) => {
  return (
    <>
      <Table attribute={"toggleModal"}>
        <Thead>
          <Trow>
            <Th classname={"pr-1 sm:pl-6"}>No</Th>
            <Th>Product</Th>
            <Th>Category</Th>
            <Th>Brand</Th>
            <Th>Price</Th>
            <Th>Action</Th>
          </Trow>
        </Thead>
        <Tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <Trow classname={"border-b"} key={item.index}>
                <Td classname={"pl-4 pr-1 font-medium sm:pl-6"}>{index + 1}</Td>
                <Td>{item.product}</Td>
                <Td>{item.category}</Td>
                <Td>{item.technology}</Td>
                <Td>${item.price}</Td>
                <Td classname={"space-x-2"}>
                  <Taction />
                </Td>
              </Trow>
            ))
          ) : (
            <Trow>
              <Terrors colSpan={7}>Data Not Found</Terrors>
            </Trow>
          )}
        </Tbody>
      </Table>
    </>
  );
};

export default Test;
