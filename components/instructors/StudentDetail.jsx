import { useState } from "react";

const StudentDetail = ({ lastName, firstName, status }) => {

	const [clickArrow, setClickArrow] = useState(false)

	const handleClickArrow = () => {
		setClickArrow(!clickArrow)
	}

	return (
		<div className="border-[1px] grid grid-cols-[1fr,auto] items-center px-5 rounded-md">
			<h1>{lastName}, {firstName}</h1>

			<div className="relative flex gap-3 items-center">
				<h1 className="border-l-gray border-t-0 border-r-0 border-b-0 border-[1px] py-3 pl-5">{status}</h1>

				<div className="group">
					<button className="cursor-pointer" onClick={handleClickArrow}>▼</button>
					<div className={`bg-gradient-to-b from-violet to-pink text-white grid text-center absolute bottom-[-46px] left-0 w-[125px] laptop:w-32 py-3 px-5 rounded-bl-md rounded-br-md rounded-tr-md ${clickArrow ? 'block' : 'hidden'}`}>
						<h1>Cleared</h1>
					</div>
				</div>
			</div>
		</div>
	)
};

export default StudentDetail;
