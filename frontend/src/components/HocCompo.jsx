import React from 'react'
import Header from './Header'

const HocCompo = (Components) => {
    const MainFunc = ()=> {
        return (
            <>
                <Header/>
                <div className=' mx-auto '>
                  <div className="grid grid-cols-6  ">
              
                          <div className="h-[90vh] max-h-[87vh] overflow-auto text-white border-r-2 border-gray-800 me-3 mt-5" >
                              <div className='p-5 text-center'>
                              <ul>
                                <li className='mb-7  pb-3 pt-3 bg-gray-300 mx-auto text-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition duration-150 ease-out cursor-pointer '>DashBoard</li>
                                <li className='mb-7  pb-3 pt-3 bg-gray-300 mx-auto text-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition duration-150 ease-out cursor-pointer '>Home</li>
                                <li className='mb-7  pb-3 pt-3 bg-gray-300 mx-auto text-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition duration-150 ease-out cursor-pointer '>Product</li>
                                <li className='mb-7  pb-3 pt-3 bg-gray-300 mx-auto text-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition duration-150 ease-out cursor-pointer '>Cart</li>
                                <li className='mb-7  pb-3 pt-3 bg-gray-300 mx-auto text-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition duration-150 ease-out cursor-pointer '>Order</li>
                                {/* <li>one</li> */}
                                <li className='mb-7  pb-3 pt-3 bg-gray-300 mx-auto text-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition duration-150 ease-out cursor-pointer '>Profile</li>
                              </ul> 
                              </div>
                          </div>
                    
                      <div className="col-span-5 pt-5  max-h-[90vh]   overflow-auto  ">
                           <Components/>
        
                      </div>
                  </div>
                </div>
            </>
        )
    }
  return (
    MainFunc
  )
}

export default HocCompo