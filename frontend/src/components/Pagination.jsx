export default function Pagination({ currentPage, totalPages, handlePage}) {


  const generatePageNumbers = () => {
    const pages = [];
    for (let i = 0; i < totalPages; i++) {
      pages.push(
        <li key={i}>
          <a
            className={`relative block rounded bg-transparent px-3 py-1.5 text-sm ${
              currentPage === i ? "bg-gray-600 text-white" : "text-neutral-600"
            } transition-all duration-300 hover:bg-neutral-100 hover:text-black`}
            href="#"
            onClick={() => handlePage(i)}
          >
            {i + 1}
          </a>
        </li>
      );
    }
    return pages;
  };

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="list-style-none flex">
          <li>
            <a
              className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#"
              aria-label="Previous"
              onClick={() => {
                if(currentPage !== 0) {
                  handlePage(currentPage - 1)
                }
              }}
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {generatePageNumbers()}
          <li>
            <a
              className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#"
              aria-label="Next"
              onClick={() => {
                if(currentPage !== (totalPages-1)) {
                  handlePage(currentPage + 1)
                }
              }}
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
