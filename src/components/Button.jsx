import React, { useEffect, useState } from "react"
const buttonType = {
	primary: "bg-blue-600 hover:bg-blue-400 text-white",
	cta: "bg-cta hover:bg-cta-hover text-white rounded-md capitalize font-semibold",
	secondary: "bg-transparent border border-blue-500 text-white",
}
export default function Button({ title, htmlType, type, className, onClick }) {
	const [buttonTypeCls, setButtonTypeCls] = useState(buttonType.primary)
	useEffect(() => {
		type === "cta"
			? setButtonTypeCls(buttonType.cta)
			: type === "primary"
			? setButtonTypeCls(buttonType.primary)
			: type === "secondary"
			? setButtonTypeCls(buttonType.secondary)
			: setButtonTypeCls(buttonType.primary)
	}, [type])
	return (
		<button
			onClick={onClick}
			className={`px-8 py-2 font-primary ${buttonTypeCls} ${className ?? ""}`}
			type={htmlType}
		>
			{title}
		</button>
	)
}
