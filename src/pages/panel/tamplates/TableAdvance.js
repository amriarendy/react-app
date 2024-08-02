import { useEffect, useState } from "react";
import PanelLayout from "../PanelLayout";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import AttributeTable from "../../../components/table/advance/AttributeTable";
import Table from "../../../components/table/advance/Table";
import Thead from "../../../components/table/advance/Thead";
import Tfoot from "../../../components/table/advance/Tfoot";
import { TABLE_ADVANCE_FORMAT } from "../../../libs/constants/formats/TableTemplate";
import useDummy from "../../../hooks/useDummy";
import { ImageRounded } from "../../../components/ui/Image";
import Taction from "../../../components/table/advance/Taction";
import CheckBox from "../../../components/ui/CheckBox";


const TableAdvance = () => {
  const breadCrumbs = {
    page: "Table Advance",
    data: [
      { page: "Templates", route: "/templates/table-advance" },
      { page: "Table Advance", route: "/templates/table-advance" },
    ],
  };

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const toggleAddModal = () => {
    setIsAddModalOpen(!isAddModalOpen);
  };
  
  const { data, loading, error } = useDummy("users");

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const columns = data && data.length > 0 ? data : <p>Data Not Found..</p>;
  
  return (
    <>
      <PanelLayout>
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        <AttributeTable attribute={TABLE_ADVANCE_FORMAT.attribute} />
        <Table>
          <Thead
                thead={TABLE_ADVANCE_FORMAT.th}
                attribute={TABLE_ADVANCE_FORMAT.attribute}/>
          <tbody>
                {data.length > 0 ? (
                  data.map((item, index) => (
                    <tr key={item.id} className="border-b dark:border-gray-700">

<td class="w-4 p-4">
            <div class="flex items-center">
            <CheckBox item={{ id: "checkbox-1" }} />
            </div>
          </td>

<td class="w-4 p-4">
            <div class="flex items-center">
            {index + 1}
            </div>
          </td>
<td className="flex items-center p-4 mr-12 space-x-6 whitespace-nowrap">
                        <ImageRounded
                          src={item.avatar}
                          alt={item.name}
                          rounded="full"
                          w={10}
                          h={10}
                        />
                        <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                          <div className="text-base font-semibold text-gray-900 dark:text-white">
                            {item.name}
                          </div>
                          <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            {item.email}
                          </div>
                        </div>
                      </td>
                      <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                        {item.biography}
                      </td>
                      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item.position}
                      </td>
                      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item.country}
                      </td>
                      <td className="p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="flex items-center">
                          {item.status === "Active" ? (
                            <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>
                          ) : (
                            <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
                          )}
                          {item.status}
                        </div>
                      </td>
                      <Taction
                        taction={item}
                        attribute={TABLE_ADVANCE_FORMAT.attribute}
                      />
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="px-4 py-3 text-center">
                      Data Not Found
                    </td>
                  </tr>
                )}
              </tbody>
        </Table>
        <Tfoot />
      </PanelLayout>
    </>
  );
};

export default TableAdvance;
