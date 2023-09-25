import React from "react";
import alumi from "./assets/alumi.png";
import speaker from "./assets/speaker.png";
import stub from "./assets/stub.png";
import avant from "./assets/avant.png";
import hendrick from "./assets/hendrick.png";

export default function Trusted () {
    return (
		<div className="h-[336px] bg-[#D9FFDA] text-center">
			<h1 className="text-[14px] font-[700] pt-[40px] text-[#005C30]">
				Trusted By Top Companies
			</h1>
			<div className="block sm:flex justify-center gap-[200px] pt-[80px]">
				<div className="sm:flex flex sm:align-middle align-middle justify-end sm:gap-[70px] gap-[70px] mb-[20px]">
					<img src={alumi} />
					<img src={speaker} />
				</div>
				<div className="sm:flex flex sm:align-middle align-middle sm:gap-[100px] gap-9 justify-center mb-[20px]">
					<img src={stub} />
					<img src={avant} />
				</div>
				<div className="flex justify-center">
					<img src={hendrick} />
				</div>
			</div>
		</div>
	);
}