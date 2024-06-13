import { useEffect, useState } from "react";
import { getPaged } from "./services/employeeService"
import Title from "./components/Title.jsx";
import Table from "./components/Table.jsx";
import Pagination from "./components/Pagination.jsx";
import Size from "./components/Size.jsx";

export default function App() {

  const [data, setData] = useState([]);
  const [size, setSize] = useState(3);
  const [page, setPage] = useState(0);


  const fetchData = async (sort, page, size) => {
    const response = await getPaged(sort, page, size);
    setData(response);
  }

  useEffect(() => {
    fetchData('id,asc', page, size);
  }, [size, page])

  const handleSize = (size) => {
    setSize(size);
    setPage(0)
  }

  const handlePage = (page) => {
    setPage(page);
  }

  return (
    <>
      <div className="flex flex-col items-center gap-3">
        <Title 
          title='Tabla paginada React' 
          urlImage="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" 
          altImage="Table React paged" 
        />
        <Size sizeSelected={size} handleSize={handleSize} />
        <Table data={data.content} />
        <Pagination currentPage={page} totalPages={data.totalPages} handlePage={handlePage} />
      </div>
    </>
  );
}
