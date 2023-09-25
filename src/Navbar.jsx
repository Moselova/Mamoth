import React from "react";

export default function Navbar() {
	return (
		<div className="xl:flex xl:justify-evenly bg-[#F1FFE5] xl:items-center xl:gap-[400px] xl:pt-[20px]">
			<div>
				<h1 className="text-[36px] font-[700] text-[#2E845B]">
					MAMOTH
				</h1>
			</div>
			<div className="hidden sm:flex gap-10 text-[#43A047] text-[16px] font-[400] leading-[24px]">
				<p>Our services</p>
				<p>How it works</p>
				<p>Contact</p>
			</div>
		</div>
	);
}
