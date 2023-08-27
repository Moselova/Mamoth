import React from "react";
import dust from "./assets/dust.png";

export default function How() {
	return (
		<div className="mt-[50px]">
			<div className="text-center">
				<h1 className="text-[49.24px] font-[700] text-[#43A047]">
					How it <span className="italic font-[400]">works</span>
				</h1>
			</div>
			<div className="flex justify-around items-center">
				<div className="flex flex-col gap-[40px] mt-[50px]">
					<div>
						<h1 className="text-[32px] font-[600] text-[#626262]">
							<span className="italic text-[#43A047]">
								Efficient
							</span>{" "}
							Waste Collection
						</h1>
						<p>
							We provide convenient and reliable pickup services,
							<br />
							ensuring that all waste materials are gathered from
							<br />
							your premises on schedule.
						</p>
					</div>
					<div>
						<h1 className="text-[32px] font-[600] text-[#626262]">
							<span className="italic text-[#43A047]">
								Advanced 
							</span>
							Recycling
						</h1>
						<p>
							Our cutting-edge technology separates recyclable
							<br />
							materials, reducing environmental impact and
							<br />
							promoting a circular economy.
						</p>
					</div>
					<div>
						<h1 className="text-[32px] font-[600] text-[#626262]">
							<span className="italic text-[#43A047]">
								Responsible
							</span>{" "}
							Disposal
						</h1>
						<p>
							We prioritize eco-friendly solutions, such as
							waste-to-energy
							<br /> conversion, minimizing landfill usage, and
							contributing to a<br /> greener planet.
						</p>
					</div>
				</div>
				<div>
					<img src={dust} />
				</div>
			</div>
		</div>
	);
}
