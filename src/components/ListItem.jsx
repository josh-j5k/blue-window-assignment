import React, { useEffect, useState } from "react"
import StarFilled from "./StarFilled"
import Button from "./Button"
import StarEmpty from "./StarEmpty"

export default function ListItem({ item }) {
	return (
		<div className="w-clamp shadow-round mx-auto p-4">
			<div className="grid desktop-min:grid-cols-4 -lg:grid-cols-2 -md:grid-cols-1 desktop-min:gap-8  gap-4">
				{/* image container */}
				<div
					className="-lg:row-start-1 -lg:row-end-3 -md:row-start-1 -md:row-end-2 -lg:col-start-1 -lg:col-end-2 flex justify-center"
					style={{ backgroundColor: item.color }}
				>
					<img src={item.logo} alt="logo" />
				</div>
				{/* stars and casino name container */}
				<div className="flex -lg:row-start-1 -lg:row-end-2 -lg:col-start-2 -lg:col-end-3 -md:col-start-1 -md:col-end-2 -md:row-start-2 -md:row-end-3 flex-col gap-2 desktop-min:justify-center desktop-min:items-center -md:justify-center -md:items-center">
					<span className="capitalize underline pl-2">{item.casino}</span>
					{/* stars filled */}
					<span className="desktop-min:flex hidden">
						<span className="flex">
							{Array.from(Array(item.reviews.desktop)).map((_, index) => (
								<span key={index}>
									<StarFilled width="31" height="31" />
								</span>
							))}
						</span>
						<span className="flex">
							{Array.from(Array(5 - item.reviews.desktop)).map((_, index) => (
								<span key={index}>
									<StarEmpty width="31" height="31" />
								</span>
							))}
						</span>
					</span>
					<span className="-lg:flex -md:hidden hidden">
						<span className="flex">
							{Array.from(Array(item.reviews.tablet)).map((_, index) => (
								<span key={index}>
									<StarFilled width="31" height="31" />
								</span>
							))}
						</span>
						<span className="flex">
							{Array.from(Array(5 - item.reviews.tablet)).map((_, index) => (
								<span key={index}>
									<StarEmpty width="31" height="31" />
								</span>
							))}
						</span>
					</span>
					<span className="-md:flex -sm:hidden hidden">
						<span className="flex">
							{Array.from(Array(item.reviews.mobile)).map((_, index) => (
								<span key={index}>
									<StarFilled width="31" height="31" />
								</span>
							))}
						</span>
						<span className="flex">
							{Array.from(Array(5 - item.reviews.mobile)).map((_, index) => (
								<span key={index}>
									<StarEmpty width="31" height="31" />
								</span>
							))}
						</span>
					</span>
					<span className="-sm:flex hidden">
						<span className="flex">
							{Array.from(Array(item.reviews.mobile_min)).map((_, index) => (
								<span key={index}>
									<StarFilled width="31" height="31" />
								</span>
							))}
						</span>
						<span className="flex">
							{Array.from(Array(5 - item.reviews.mobile_min)).map(
								(_, index) => (
									<span key={index}>
										<StarEmpty width="31" height="31" />
									</span>
								)
							)}
						</span>
					</span>
				</div>
				<div className="flex flex-col gap-0.5 justify-center -lg:row-start-2 -lg:row-end-3 -lg:col-start-2 -lg:col-end-3 -md:col-start-1 -md:col-end-2 -md:row-start-3 -md:row-end-4 ">
					<p className="font-semibold flex -md:justify-center desktop-min:justify-center desktop-min:items-center">
						Bonus
					</p>
					<div className="text-xl flex gap-x-2 -md:px-2 -md:justify-center flex-wrap -sm:grid -sm:grid-cols-1 desktop-min:justify-center desktop-min:items-center">
						<p className="-sm:row-start-1 -sm:row-end-2 -sm:justify-self-center ">
							Bet{" "}
							<span>
								{item.bet.toLocaleString("en-UK", {
									style: "currency",
									currency: "GBP",
								})}
							</span>
						</p>

						<p className="-sm:row-start-2 -sm:row-end-3 -sm:justify-self-center">
							Get{" "}
							<span>
								{item.get.toLocaleString("en-UK", {
									style: "currency",
									currency: "GBP",
								})}
							</span>
						</p>
					</div>
				</div>
				<div className="flex flex-col justify-center -lg:row-start-3 -lg:row-end-4 -lg:col-start-1 -lg:col-end-3 -md:col-start-1 -md:col-end-2 -md:row-start-4 -md:row-end-5 items-center">
					<Button
						className="w-full"
						title="bet now"
						htmlType="button"
						type="cta"
					/>
				</div>
			</div>
		</div>
	)
}
