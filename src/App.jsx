import React from "react";
import ringa from "./assets/ringa.png";

function App() {
	return (
		<div className="pt-[50px] sm:pt-[50px] bg-[#F1FFE5]">
			<div className="text-center text-[32.89] sm:text-[61px] font-[700] leading-[38.82px] sm:leading-[92.5px]">
				<h1 className="text-[#49CD88] text-[32.89px] sm:text-[61.67px]">
					Your{" "}
					<span className="text-[#43A047] font-[400] italic">
						Sustainable
					</span>
				</h1>
				<h1 className="text-[#49CD88] text-[32.89px] sm:text-[61.67px]">
					Waste
					<br /> Management{" "}
					<span className="text-[#43A047] font-[400] italic">
						Partner
					</span>
				</h1>
			</div>
			<div className="flex justify-center gap-10 mt-[20px]">
				<button className="bg-[#0C513F] w-[116.03px] h-[26.79px] rounded-[3.3px] sm:text-[11px] text-[8px] text-white sm:w-[193.39px] sm:h-[44.65px] sm:rounded-md">
					Download on Google play
				</button>
				<button className="bg-[#0C513F] w-[116.03px] h-[26.79px] rounded-[3.3px] sm:text-[11px] text-[8px] text-white sm:w-[193.39px] sm:h-[44.65px] sm:rounded-md">
					Download on Apps Store
				</button>
			</div>
			<div className="flex justify-center pt-[20px] scale-[1.0] sm:scale-[1.0] ">
				<img src={ringa} />
			</div>
		</div>
	);
}

export default App;
