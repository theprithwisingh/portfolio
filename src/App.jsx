import React from 'react'
import LeftSide from "./pages/LeftSide";
import RightSide from "./pages/RightSide";

function App() {
  return (
    <>
     <div className="flex h-screen">
      <div className="w-[20%] bg-gray-100 sticky top-0 h-screen">
        <LeftSide />
      </div>
      <div className="w-[80%] bg-white overflow-y-auto">
        <RightSide />
      </div>
    </div>
   </>
  )
}

export default App;


{/* <div className="flex h-screen">
<div className="w-[20%] fixed  bg-gray-100">
  <LeftSide />
</div>
<div className="w-[80%]  bg-blue-100">
  <RightSide />
</div>
</div> */}