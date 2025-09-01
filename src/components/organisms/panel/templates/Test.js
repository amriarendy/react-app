import React from "react";
import Table from "../../../elements/tables";
import Thead from "../../../elements/tables/Thead";
import Tbody from "../../../elements/tables/Tbody";
import Trow from "../../../elements/tables/Trow";
import Td from "../../../elements/tables/Td";
import Th from "../../../elements/tables/Th";
import Taction from "../../../elements/tables/Taction";

const Test = () => {
  return (
    <>
      <Table>
        <Thead>
          <Trow>
            <Th classname={"pr-3 sm:pl-6"}>No</Th>
            <Th>cscs</Th>
            <Th>cscs</Th>
            <Th>Action</Th>
          </Trow>
        </Thead>
        <Tbody>
          <Trow>
            <Td classname={"pl-4 pr-3 font-medium sm:pl-6"}>1</Td>
            <Td>fsef</Td>
            <Td>fsef</Td>
            <Td classname={"space-x-2"}>
              <Taction />
            </Td>
          </Trow>
          <Trow>
            <Td classname={"pl-4 pr-3 font-medium sm:pl-6"}>2</Td>
            <Td>fsef</Td>
            <Td>fsef</Td>
            <Td classname={"space-x-2"}>
              <Taction />
            </Td>
          </Trow>
          <Trow>
            <Td classname={"pl-4 pr-3 font-medium sm:pl-6"}>3</Td>
            <Td>fsef</Td>
            <Td>fsef</Td>
            <Td classname={"space-x-2"}>
              <Taction />
            </Td>
          </Trow>
          <Trow>
            <Td classname={"pl-4 pr-3 font-medium sm:pl-6"}>4</Td>
            <Td>fsef</Td>
            <Td>fsef</Td>
            <Td classname={"space-x-2"}>
              <Taction />
            </Td>
          </Trow>
          <Trow>
            <Td classname={"pl-4 pr-3 font-medium sm:pl-6"}>5</Td>
            <Td>fsef</Td>
            <Td>fsef</Td>
            <Td classname={"space-x-2"}>
              <Taction />
            </Td>
          </Trow>
        </Tbody>
      </Table>
    </>
  );
};

export default Test;
