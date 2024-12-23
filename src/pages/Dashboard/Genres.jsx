import { BreadCrumbComponent } from "../../components/BreadCrumbComponent"
import { DashHeader } from "../../components/DashHeader"
import { PaginationComponent } from "../../components/PaginationComponent"
import TableComponent from "../../components/TableComponent"

const breadItems =[{name:"Genres",link:"/dashboard/genres"}];
const headers=['a','b'];
const tableItems=[{'a':'bbb','b':'vvvvv'}];

export const Genres= ()=>{
    return(
        <div className="flex flex-col bg-slate-50 gap-6 p-6 ">
        <BreadCrumbComponent items={breadItems}/>

        {/* Header section */}
          <DashHeader
           title={"Genres Management"}
           header={"Manage your genres inventory"}
           btn_des={"Add new genre"}
           btnBool={true}
          /> 
  
  
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