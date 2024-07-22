import React, { useEffect } from "react"
import data from "../data.json"
import ListItem from "./components/ListItem"

export default function App() {
	return (
		<section className="min-h-screen p-4 ">
			<div
				role="list"
				className="flex flex-col gap-6 desktop-min:flex desktop-min:justify-center desktop-min:items-center h-full"
			>
				{data.map((item, index) => (
					<ListItem key={index} item={item} />
				))}
			</div>
		</section>
	)
}
