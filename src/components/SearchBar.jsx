


export const SearchBar =()=>{
       <div className="relative w-full max-w-2xl group">
       <input
         type="text"
         placeholder="Search for books, authors, or genres..."
         className="w-full px-8 py-5 rounded-full bg-white/95 backdrop-blur-sm 
                  text-gray-800 placeholder-gray-500 shadow-xl
                  focus:outline-none focus:ring-2 focus:ring-white/50 
                  transition-all duration-300 text-lg"
       />
       <button className="absolute right-3 top-1/2 transform -translate-y-1/2 
                        bg-gradient-to-r from-amber-500 to-rose-500 
                        text-white p-3 rounded-full shadow-lg
                        hover:shadow-xl transition-all duration-300
                        hover:scale-105">
         <Search className="w-5 h-5" />
       </button>
     </div>
} 