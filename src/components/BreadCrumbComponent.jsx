import { Breadcrumb } from "flowbite-react";



export function BreadCrumbComponent({items}) {
  return (
    <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 rounded-md shadow px-3 py-3 dark:bg-gray-800">
    {
        items.map((item)=>(
            <Breadcrumb.Item key={item.link} href={item.link} icon={item.icon}>{item.name}</Breadcrumb.Item>
        ))
    }
          
    </Breadcrumb>
  );
}


