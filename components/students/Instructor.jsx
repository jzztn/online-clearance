const Instructor = ({ lastName, firstName, status }) => {
	return (
		<div className="border-gray border-[1px] grid grid-cols-[1fr,auto] items-center rounded-md hover:border-none hover:bg-gradient-to-b hover:from-pink hover:to-violet hover:text-white cursor-pointer">
			<h1 className="pl-5 tracking-wide">{lastName}, {firstName}</h1>
			<h1 className="border-l-gray border-t-0 border-r-0 border-b-0 border-[1px] py-3 px-5 tracking-wide font-semibold">{status}</h1>
		</div>
	)
}

export default Instructor;
