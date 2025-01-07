import { useEffect, useState } from "react";
import { BreadCrumbComponent } from "../../components/BreadCrumbComponent";
import TableComponent from "../../components/TableComponent";
import { PaginationComponent } from "../../components/PaginationComponent";
import { DashHeader } from "../../components/DashHeader";
import { HiHome } from "react-icons/hi";
import { BookModalCreate } from "../../components/BookModalCreate";
import { createBook, deleteBook, getAllBooks } from "../../api/bookApi";
import { BookModalUpdate } from "../../components/BookModalUpdate";

const headers = ["title", "author", "price", "genre"];

const breadItems = [
  { name: "Home", link: "/dashboard", icon: HiHome },
  { name: "Books", link: "/dashboard/books" },
];

const Books = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false); 
  const [tableItems, setTableItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

  console.log("selectedBook",selectedBook);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const data = await getAllBooks();
        setTableItems(data);
      } catch (err) {
        setError("Failed to fetch books.");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleModalSave = async (bookData) => {
    try {
      setLoading(true);
      if (selectedBook) {
        await updateBook(selectedBook.id, bookData);
      } else {
        await createBook(bookData);
      }
      const data = await getAllBooks();
      setTableItems(data);
      setIsModalOpen(false);
      setIsUpdateModalOpen(false);
    } catch (err) {
      setError("Failed to save book.");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateSave = async (updatedBook) => {
    try {
      setLoading(true);
      await updateBook(updatedBook);
      const data = await getAllBooks();
      setTableItems(data);
      setIsUpdateModalOpen(false);
    } catch (err) {
      setError("Failed to update book.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClick = async (bookId) => {
    const confirmed = window.confirm("Are you sure you want to delete this book?");
    if (!confirmed) return;

    try {
      setLoading(true);
      await deleteBook(bookId);
      const data = await getAllBooks();
      setTableItems(data);
    } catch (err) {
      setError("Failed to delete book.");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateClick = (book) => {
    setSelectedBook(book);
    setIsUpdateModalOpen(true);
  };

  return (
    <div className="flex flex-col bg-slate-50 gap-6 p-6">
      <BreadCrumbComponent items={breadItems} />
      <DashHeader
        title={"Books Management"}
        header={"Manage your book inventory"}
        btn_des={"Add new book"}
        btnBool={true}
        onClick={() => {
          setSelectedBook(null);
          setIsModalOpen(true);
        }}
      />

      <main className="bg-white rounded-lg shadow-lg">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <TableComponent
            headers={headers}
            items={tableItems}
            onEdit={handleUpdateClick}
            onDelete={handleDeleteClick}
          />
        )}
      </main>

      <div className="pt-1">
        <PaginationComponent />
      </div>

      <BookModalCreate
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleModalSave}
      />

      <BookModalUpdate
        isOpen={isUpdateModalOpen} 
        onClose={() => setIsUpdateModalOpen(false)}
        onSave={handleUpdateSave}
        book={selectedBook}
      />
    </div>
  );
};



export default Books;
