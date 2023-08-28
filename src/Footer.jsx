import React from "react";
import youtube from "./assets/youtube.svg";
import facebook from "./assets/facebook.svg";
import ig from "./assets/ig.svg";
import link from "./assets/link.svg";

export default function Footer () {
    return (
		<div className="h-[418px] flex justify-around pt-[100px] bg-[#F1FFE5]">
			<div>
				<h1 className="text-[36px] font-[700] text-[#2E845B]">
					MAMOTH
				</h1>
			</div>
			<div className="flex gap-[200px]">
				<div>
					<h1>Useful</h1>
					<p>Blog</p>
					<p>Blog</p>
					<p>Blog</p>
					<p>Blog</p>
				</div>
				<div>
					<h1>Useful</h1>
					<p>Blog</p>
					<p>Blog</p>
					<p>Blog</p>
					<p>Blog</p>
				</div>
			</div>
			<div>
				<div className="flex flex-col gap-[20px]">
					<button className="bg-[#0C513F] w-[193.39px] h-[44.65px] rounded-md text-[11px] text-white">
						Download on Google play
					</button>
					<button className="bg-[#0C513F] w-[180px] h-[44.65px] rounded-md text-[11px] text-white">
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