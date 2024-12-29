import { BreadCrumbComponent } from "../../components/BreadCrumbComponent";
import TableComponent from "../../components/TableComponent";
import { PaginationComponent } from "../../components/PaginationComponent";
import { DashHeader } from "../../components/DashHeader";
import { HiHome } from "react-icons/hi";

const headers=['a','b','c','d'];
const tableItems =[{a: 'the power of now',b: 'the power of now',c: 'the power of now'}]
const breadItems=[{name:"Home",link:"/dashboard",icon:HiHome},{name:"Books",link:"/dashboard/books"}]

const Books = () => {
  return (
    <div className="flex flex-col bg-slate-50 gap-6 p-6 ">
      <BreadCrumbComponent items={breadItems}/>
      {/* Header section */}
        <DashHeader
         title={"Books Management"}
         header={"Manage your book inventory"}
         btn_des={"Add new book"}
         btnBool={true}
        /> 

      {/* Filters Section */}
      <section className="bg-gray-50 p-4 rounded-lg shadow">
        <div className="flex justify-end gap-4">
          <input
            type="text"
            placeholder="Search books..."
            className="px-4 py-2 border rounded-lg "
          />
          <select className="px-4 py-2 border rounded-lg">
            <option value="">All Genres</option>
          </select>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-white rounded-lg shadow-lg ">
        <TableComponent
            headers={headers}
            items={tableItems}
        />
      </main>

      {/* Pagination */}
      <div className="pt-1">
        <PaginationComponent/>
      </div>
    </div>
  );
};

export default Books;