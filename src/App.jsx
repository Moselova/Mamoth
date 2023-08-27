import React from "react"
import ringa from "./assets/ringa.png";



function App() {
 

  return (
		<div className="pt-[100px] bg-[#F1FFE5]">
			<div className="text-center text-[61px] font-[700] leading-[92.5px]">
				<h1 className="text-[#49CD88]">
					Your{" "}
					<span className="text-[#43A047] font-[400] italic">
						Sustainable
					</span>
				</h1>
				<h1 className="text-[#49CD88]">
					Waste Management{" "}
					<span className="text-[#43A047] font-[400] italic">Partner</span>
				</h1>
			</div>
			<div className="flex justify-center gap-10 mt-[20px]">
				<button className="bg-[#0C513F] w-[193.39px] h-[44.65px] rounded-md text-[11px] text-white">
					Download on Google play
				</button>
				<button className="bg-[#0C513F] w-[180px] h-[44.65px] rounded-md text-[11px] text-white">
					Download on Apps Store
				</button>
			</div>
			<div className="flex justify-center pt-[20px]">
				<img src={ringa} />
			</div>
		</div>
  );
}

export default App
