import Header from "../../components/instructors/Header";
import Student from "../../components/instructors/Student";

const Subject = () => {
	return (
		<div className="h-screen grid grid-rows-[auto,1fr] gap-20">
			<Header
				name='Adan, John Kristopher'
				position='Faculty Staff'
			/>

			<div className="px-4">
				<div className="max-w-4xl mx-auto h-full grid grid-rows-[auto,1fr] gap-20">
					<div className="flex flex-col gap-10">
						<div className="flex gap-4">
							<input placeholder="type here.." className="border-gray border-[1px] outline-none py-3 rounded-md pl-4" />
							<button className="bg-gradient-to-b from-violet to-pink py-3 px-10 text-white font-semibold text-md tracking-wide rounded-md hover:scale-105 transition-all duration-500">Add</button>
						</div>

						<div className="border-gray border-[1px] px-4  py-6 rounded-md flex flex-col gap-3">
							<h1>Lorem Ipsum</h1>
							<h1>Lorem Ipsum</h1>
							<h1>Lorem Ipsum</h1>
							<h1>Lorem Ipsum</h1>
							<h1>Lorem Ipsum</h1>
							<h1>Lorem Ipsum</h1>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<Student
							lastName='Lorem'
							firstName='Ipsum'
							id='000045'
						/>

						<Student
							lastName='Lorem'
							firstName='Ipsum'
							id='000045'
						/>

						<Student
							lastName='Lorem'
							firstName='Ipsum'
							id='000045'
						/>

						<Student
							lastName='Lorem'
							firstName='Ipsum'
							id='000045'
						/>

						<Student
							lastName='Lorem'
							firstName='Ipsum'
							id='000045'
						/>
					</div>

					<div className="flex gap-4 pb-8">
						<button className="bg-gradient-to-b from-violet to-pink py-3 px-8 text-white font-semibold text-md tracking-wide rounded-md hover:scale-105 transition-all duration-500">Set Clear</button>
						<button className="bg-gradient-to-b from-violet to-pink py-3 px-8 text-white font-semibold text-md tracking-wide rounded-md hover:scale-105 transition-all duration-500">Set On Hold</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Subject;