import LeftSide from "./pages/LeftSide";
import RightSide from "./pages/RightSide";

function App() {
  return (
    <>
     <div className="flex h-screen justify-between">
      <div className="w-[20%] bg-gray-100">
        <LeftSide />
      </div>
      <div className="w-[80%] bg-blue-100">
        <RightSide />
      </div>
    </div>
   </>
  )
}

export default App;
