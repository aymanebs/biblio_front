import { BreadCrumbComponent } from "../../components/BreadCrumbComponent"
import { DashHeader } from "../../components/DashHeader"
import { PaginationComponent } from "../../components/PaginationComponent"
import TableComponent from "../../components/TableComponent"

const breadItems =[{name:"Users",link:"/dashboard/users"}];
const headers=['a','b'];
const tableItems=[{'a':'bbb','b':'vvvvv'}];

export const Users = ()=>{

    return(
        <div className="flex flex-col bg-slate-50 gap-6 p-6 ">
        <BreadCrumbComponent items={breadItems}/>

        {/* Header section */}
          <DashHeader
           title={"Users Management"}
           header={"Manage your users inventory"}
           btnBool={false}
          />

        {/* Filters Section */}
        <section className="bg-gray-50 p-4 rounded-lg shadow">
            <div className="flex justify-end gap-4">
            <input
                type="text"
                placeholder="Search users..."
                className="px-4 py-2 border rounded-lg "
            />
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
    )

}