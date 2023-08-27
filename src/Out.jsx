import React from "react";
import pic1 from "./assets/pic1.png";
import pic2 from "./assets/pic2.png";
import pic3 from "./assets/pic3.png";
import map from "./assets/map.png";

export default function Out() {
	return (
		<div className="mt-[100px] flex justify-cente flex-col ">
			<div className="text-center text-[40.45px] font-[400] text-[#43A047]">
				<h1>
					Our customer’s{" "}
					<span className="italic font-[500]">stories</span>
				</h1>
			</div>
			<div className="flex justify-center mt-[30px]">
				<div>
					<img src={pic1} />
				</div>
				<div>
					<img src={pic2} />
				</div>
				<div>
					<img src={pic3} />
				</div>
			</div>
			<div className="flex justify-around w-[100%]">
				<div className="w-[1194px] h-[473px] bg-[url('./assets/back.png')] bg-no-repeat bg-cover flex justify-around pt-[70px]">
					<div className=" text-[#ffff]">
						<h1 className="text-[49.24px] font-[700] leading-[55.76px]">
							Waste disposal
							<br />
							<span className="italic font-[400]">made easy</span>
						</h1>
						<p className="text-[20px] font-[400] mt-[20px]">
							Location is never a barrier
						</p>
						<button className="w-[252px] h-[50px] bg-[#ffff] text-[#005C30] text-[20px] rounded-[12px] mt-[20px]">
							contact us today
						</button>
					</div>
					<div>
						<img src={map} />
					</div>
				</div>
			</div>
		</div>
	);
}
