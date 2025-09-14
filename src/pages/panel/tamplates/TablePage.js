import Layout from "../../../components/templates/panel/layouts";
import TableView from "../../../components/templates/panel/templates/TableView";

const TablePage = () => {
  return (
    <>
      <Layout>
        <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <TableView />
        </section>
      </Layout>
    </>
  );
};

export default TablePage;
