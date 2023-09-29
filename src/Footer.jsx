import React from "react";
import youtube from "./assets/youtube.svg";
import facebook from "./assets/facebook.svg";
import ig from "./assets/ig.svg";
import link from "./assets/link.svg";

export default function Footer() {
	return (
		<div className="sm:h-[418px] h-[634px] block sm:flex sm:justify-around justify-around pl-[70px] pt-[100px] sm:pt[100px] bg-[#F1FFE5] mt-[100px]">
			<div className="mb-[30px] sm:mb-[0]">
				<h1 className="text-[36px] font-[700] text-[#2E845B]">
					MAMOTH
				</h1>
			</div>
			<div className="flex gap-[50px] sm:gap-[200px] text-[#005C30] font-[15px] font-[400]">
				<div className="mb-[50px] sm:mb-[0]">
					<h1 className="font-[700] font-[21px] mb-[12px]">Useful</h1>
					<p>Blog</p>
					<p>Outcomes</p>
					<p>Comparison</p>
					<p>FAQ</p>
				</div>
				<div>
					<h1 className="font-[700] font-[21px] mb-[12px]">
						Company
					</h1>
					<p>Careers</p>
					<p>Support</p>
					<p>Terms of Use</p>
					<p>Referral Program Policy</p>
					<p>Privacy Policy</p>
				</div>
			</div>
			<div className="pl-[40px] sm:pl[0] pt-[80px] sm:pt-[0px]">
				<div className="flex flex-col gap-[20px]">
					<button className="bg-[#0C513F] sm:w-[193.39px] w-[148px] sm:h-[44.65px] h-[34.17px] rounded-md text-[11px] text-white">
						Download on Google play
					</button>
					<button className="bg-[#0C513F] sm:w-[180px] sm:h-[44.65px] w-[138.48px] h-[34.17px] rounded-md text-[11px] text-white">
						Download on Apps Store
					</button>
				</div>
				<div className="flex gap-[15px] mt-[40px]">
					<img src={ig} />
					<img src={facebook} />
					<img src={link} />
					<img src={youtube} />
				</div>
			</div>
		</div>
	);
}
