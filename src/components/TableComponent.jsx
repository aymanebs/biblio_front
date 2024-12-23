import { Checkbox, Table } from "flowbite-react";

const TableComponent = ({headers, items})=>{
  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell className="p-4">
            <Checkbox />
          </Table.HeadCell>
          {
            headers.map((header)=>(
              <Table.HeadCell key={header}>{header}</Table.HeadCell>
            ))
          }
          <Table.HeadCell>
            <span className="">Actions</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">

          {items.map((item)=>(
             <Table.Row key={item.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
             <Table.Cell className="p-4">
               <Checkbox />
             </Table.Cell>
            { item.cover &&(
              <Table.Cell className="flex justify-start">
               <img
                 src="https://via.placeholder.com/50"
                 alt="Book Cover"
                 className="w-12 h-12 object-cover ml-4 rounded-sm"
               />
              </Table.Cell>
             )
            }
             
            {headers.map((header)=>
             (<Table.Cell key={header}>{item[header]}</Table.Cell>)       
            )}
             
         
             <Table.Cell>
               <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                 Edit
               </a>
             </Table.Cell>
           </Table.Row>
          ))}
         
 
        </Table.Body>
      </Table>
    </div>
  );
}

export default TableComponent;