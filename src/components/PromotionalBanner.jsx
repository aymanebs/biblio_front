

const PromotionalBanner = ()=>{
    return(
        <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center">
        <div className="sm:w-1/2 mr-0 sm:mr-8">
          <img src="imgs/reading.jpg" alt="Book stack" className="mx-auto" />
        </div>
        <div className="sm:w-1/2 text-center sm:text-left">
          <h1 className="text-4xl font-extrabold text-red-500 mb-4">The More You Read The Less You Pay</h1>
          <p className="text-gray-700 mb-8">Explore our flexible reading plans and see what suits you</p>
          <div className="flex justify-center sm:justify-start">
            <a href="#" className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded-md">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default PromotionalBanner;