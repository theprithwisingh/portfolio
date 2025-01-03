import React from 'react'
import LeftSide from "./pages/LeftSide";
import RightSide from "./pages/RightSide";

function App() {
  return (
    <>
     <div className="flex h-screen max-sm:flex-col">
      <div className="w-[20%] bg-[#e6e7eb] sticky top-0 h-screen  max-sm:w-[100%] max-sm:h-[170px] max-lg:w-[35%]"> {/* //max-sm:hidden */}
        <LeftSide />
      </div>
      <div className="w-[80%] bg-white overflow-y-auto max-sm:w-[100%]">
        <RightSide />
      </div>
    </div>
   </>
  )
}

export default App;
