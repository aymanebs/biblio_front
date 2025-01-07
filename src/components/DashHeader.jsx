


export const DashHeader = ({title,header,btn_des,btnBool,onClick})=>{
    return(
    <header className="flex justify-between items-center px-3">
        <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-600">{header}</p>
        </div>
        {
            btnBool &&(
                <button
                onClick={onClick}
                type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                {btn_des}
                </button>
            )
           
        }
        
    </header>
    )
}