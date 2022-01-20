
const AddRequirement = () => {
	return (
		<div className="grid grid-rows-[1fr,auto] gap-20 py-10 px-6 border-gray border-[1px] rounded-md">
			<div className="flex flex-col gap-6">
				<div className="grid grid-cols-[1fr,1fr] items-center">
					<h1>Title</h1>
					<input className="w-full border-gray border-[1px] outline-none py-2 pl-4 rounded-md" />
				</div>

				<div className="grid grid-cols-[1fr,1fr]">
					<h1>Requirement</h1>
					<input className="w-full border-gray border-[1px] outline-none py-2 pl-4 rounded-md" />
				</div>
			</div>

			<div className="flex gap-4">
				<button className="bg-gradient-to-b from-violet to-pink py-3 px-10 text-white tracking-wide rounded-md hover:scale-105 transition-all duration-500">Create</button>
				<button className="bg-gradient-to-b from-violet to-pink py-3 px-10 text-white tracking-wide rounded-md hover:scale-105 transition-all duration-500">Add Another Requirement</button>
			</div>
		</div>
	)
};

export default AddRequirement;
