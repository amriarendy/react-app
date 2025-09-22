import React, { useState, useEffect } from "react";
import Table from "../../../elements/tables/index";
import Thead from "../../../elements/tables/Thead";
import Tbody from "../../../elements/tables/Tbody";
import Trow from "../../../elements/tables/Trow";
import Td from "../../../elements/tables/Td";
import Th from "../../../elements/tables/Th";
import Terrors from "../../../elements/tables/Terrors";
import Button from "../../../elements/button/Button";
import Image from "../../../elements/image/Image";
import Href from "../../../elements/href/Href";

const Blog = ({ data, onDelete }) => {
  const [imageStatus, setImageStatus] = useState({});

  const imageCheck = async (url) => {
    try {
      const res = await fetch(url, { method: "HEAD" });
      return res.ok;
    } catch {
      return false;
    }
  };

  useEffect(() => {
    if (data && data.length > 0) {
      const imageChecks = async () => {
        const status = {};
        await Promise.all(
          data.map(async (item) => {
            const result = await imageCheck(item.urlPhoto);
            status[item.id] = result;
          })
        );
        setImageStatus(status);
      };
      imageChecks();
    }
  }, [data]);

  return (
    <>
      <Table attribute={{ label: "Add Data", action: "/dashboard/blogs/add" }}>
        <Thead>
          <Trow>
            <Th classname={"pr-1 sm:pl-6"}>No</Th>
            <Th>Thumbnail</Th>
            <Th>Title</Th>
            <Th>Category</Th>
            <Th>Date Publish</Th>
            <Th>Author</Th>
            <Th>Action</Th>
          </Trow>
        </Thead>
        <Tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <Trow classname={"border-b"} key={item.index}>
                <Td classname={"text-center font-medium w-14 flex-none"}>
                  {index + 1}
                </Td>
                <Td
                  classname={
                    "font-medium w-24 flex-auto flex items-center justify-center"
                  }
                >
                  <Image
                    src={
                      imageStatus[item.id]
                        ? `${item.urlThumbnail}`
                        : "https://placehold.co/150x150?text=Image+Not+Found"
                    }
                    alt={item.name}
                    classname={"rounded-full w-14 h-14"}
                  />
                </Td>
                <Td classname={"font-medium w-64 flex-auto"}>{item.title}</Td>
                <Td classname={"font-medium w-64 flex-auto"}>
                  {item.category}
                </Td>
                <Td classname={"font-medium w-64 flex-auto"}>
                  {item.publishedAt}
                </Td>
                <Td classname={"font-medium w-64 flex-auto"}>{item.author}</Td>
                <Td classname={"font-medium w-32 flex-auto space-x-2"}>
                  <Href
                    id={"btnEdit"}
                    route={"/dashboard/blogs/edit"}
                    classname={
                      "rounded rounded-lg inline-flex items-center px-2 py-1 text-white bg-yellow-400 hover:bg-yellow-500"
                    }
                  >
                    Edit
                  </Href>
                  <Button
                    id={"btnDelete"}
                    route={"button"}
                    onClick={() => onDelete(item.id)}
                    classname={
                      "rounded rounded-lg inline-flex items-center px-2 py-1 text-white bg-red-700 hover:bg-red-500"
                    }
                  >
                    Delete
                  </Button>
                </Td>
              </Trow>
            ))
          ) : (
            <Trow>
              <Terrors colSpan={7}>Data Not Found!</Terrors>
            </Trow>
          )}
        </Tbody>
      </Table>
    </>
  );
};

export default Blog;
