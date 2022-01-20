const StudentDetail = ({ lastName, firstName, status, requirement }) => {
	return (
		<div className="border-[1px] border-gray grid rounded-md">
			<div className="grid grid-cols-[1fr,auto] items-center px-5">
				<h1>{lastName}, {firstName}</h1>

				<div className="relative flex gap-3 items-center">
					<h1 className="border-l-gray border-t-0 border-r-0 border-b-0 border-[1px] py-3 pl-5">{status}</h1>

					<div className="group">
						<img src="/arrow.png" alt="down arrow" className="w-4 h-4 cursor-pointer " />
						<div className="hidden border-t-gray border-[1px] absolute bottom-[-50px] left-0 w-32 py-3 px-5 group-active:block">
							<h1>Cleared</h1>
						</div>
					</div>
				</div>
			</div>

			<div className="border-t-gray border-[1px] border-b-0 border-l-0 border-r-0 px-5 py-3 flex flex-col gap-2">
				<h1 className="tracking-wide">{requirement}</h1>
			</div>
		</div>
	)
};

export default StudentDetail;
