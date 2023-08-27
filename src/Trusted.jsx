import React from "react";
import alumi from "./assets/alumi.png";
import speaker from "./assets/speaker.png";
import stub from "./assets/stub.png";
import avant from "./assets/avant.png";
import hendrick from "./assets/hendrick.png";

export default function Trusted () {
    return (
		<div
			className="h-[336px] bg-[#D9FFDA] text-center"
		>
			<h1 className="text-[14px] font-[700] pt-[40px]">Trusted By Top Companies</h1>
			<div className="flex justify-center gap-[200px] pt-[80px]">
				<div className="flex align-middle gap-[70px]">
					<img src={alumi} />
					<img src={speaker} />
				</div>
				<div className="flex align-middle gap-[100px]">
					<img src={stub} />
					<img src={avant} />
				</div>
				<div>
					<img src={hendrick} />
				</div>
			</div>
		</div>
	);
}