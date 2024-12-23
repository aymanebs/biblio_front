import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";


export function BreadCrumbComponent({items}) {
  return (
    <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 rounded-md shadow px-3 py-3 dark:bg-gray-800">
    <Breadcrumb.Item href="/dashboard" icon={HiHome}> Home</Breadcrumb.Item>
    {
        items.map((item)=>(
            <Breadcrumb.Item key={item.link} href={item.link} icon={item.icon}>{item.name}</Breadcrumb.Item>
        ))
    }
          
    </Breadcrumb>
  );
}
