const Input = ({ type, placeholder }) => {
	return (
		<div>
			<input type={type} placeholder={placeholder} className="outline-pink border-none bg-white py-3 pl-10 laptop:py-4 w-full md:w-96 lg:w-full placeholder:text-gray rounded-full placeholder:text-sm placeholder:tracking-wide" />
		</div>
	)
}

export default Input
