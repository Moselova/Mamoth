import React from "react";

export default function Navbar() {
	return (
		<div className="flex justify-around bg-[#F1FFE5]">
			<div>
				<h1 className="text-[36px] font-[700] text-[#2E845B]">
					MAMOTH
				</h1>
			</div>
			<div className="flex gap-10 text-[#2E845B]">
				<p>Our services</p>
				<p>How it works</p>
				<p>Contact</p>
				<p> </p>
			</div>
		</div>
	);
}
