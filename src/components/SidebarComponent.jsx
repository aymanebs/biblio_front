import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiBookOpen, HiOutlineViewGridAdd} from "react-icons/hi";

const SidebarComponent = ()=>{

  const customTheme = {
    root: {
      base: "h-full w-64 pt-5",
      inner: "h-full overflow-y-auto overflow-x-hidden rounded bg-white py-4 px-3 dark:bg-orange-800"
    },
    item: {
      base: "flex items-center justify-center rounded-lg p-2 text-base font-normal text-orange-900 hover:bg-orange-100 dark:text-white dark:hover:bg-orange-700",
      active: "bg-orange-100 dark:bg-orange-700",
      icon: {
        base: "h-6 w-6 flex-shrink-0 text-orange-500 transition duration-75 group-hover:text-orange-900 dark:text-orange-400 dark:group-hover:text-white",
        active: "text-orange-600 dark:text-orange-500"
      },
      label: {
        base: "ml-3 flex-1 whitespace-nowrap text-left",
        active: "text-orange-700 dark:text-orange-100"
      },
      chip: {
        base: "ml-3 inline-flex items-center justify-center rounded-full bg-orange-200 px-2 py-1 text-sm font-medium text-orange-800 dark:bg-orange-600 dark:text-orange-100",
        active: "bg-orange-300 dark:bg-orange-700"
      }
    },
    itemGroup: {
      base: "mt-4 space-y-2 border-t border-orange-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-orange-700"
    }
  };

    return(
      
    
    <Sidebar aria-label="Default sidebar example" theme={customTheme}>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/dashboard/books" icon={HiBookOpen} label="3">
            Books
          </Sidebar.Item>
          <Sidebar.Item href="/dashboard/genres" icon={HiOutlineViewGridAdd} label="3">
            Genres
          </Sidebar.Item>
          <Sidebar.Item href="/dashboard/users" icon={HiUser} label="3" >
            Users
          </Sidebar.Item>

          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>

   
  )
}


export default SidebarComponent;