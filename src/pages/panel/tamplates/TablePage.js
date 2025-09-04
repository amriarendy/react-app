import PanelLayout from "../PanelLayout";
import TableView from "../../../components/templates/panel/templates/TableView";

const TablePage = () => {
  return (
    <>
      <PanelLayout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <TableView />
        </section>
      </PanelLayout>
    </>
  );
};

export default TablePage;
