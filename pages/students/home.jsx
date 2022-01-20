import Header from "../../components/students/Header";
import Department from "../../components/students/Department";
import Instructor from "../../components/students/Instructor";

const Home = () => {
	return (
		<div className="h-screen grid grid-rows-[auto,1fr] gap-20">
			<Header
				lastName='Cruz'
				firstName='Jazztine'
				course='Computer Science'
				id='000005'
			/>

			<div className="px-4">
				<div className="max-w-4xl mx-auto grid gap-32">

					<div className="grid grid-rows-[auto,1fr] gap-20">
						<div className="flex flex-col">
							<h1 className="text-xl font-semibold tracking-wide">Instructors</h1>
							<div className="w-full h-[1px] bg-gray mt-2"></div>
						</div>

						<div className="flex flex-col gap-4">
							<Instructor
								lastName='Lorem'
								firstName='Ipsum'
								status='On Hold'
							/>

							<Instructor
								lastName='Lorem'
								firstName='Ipsum'
								status='On Hold'
							/>

							<Instructor
								lastName='Lorem'
								firstName='Ipsum'
								status='On Hold'
							/>

							<Instructor
								lastName='Lorem'
								firstName='Ipsum'
								status='On Hold'
							/>

							<Instructor
								lastName='Lorem'
								firstName='Ipsum'
								status='On Hold'
							/>
						</div>
					</div>

					<div className="grid grid-rows-[auto,1fr] gap-20">
						<div className="flex flex-col">
							<h1 className="text-xl font-semibold tracking-wide">Departments</h1>
							<div className="w-full h-[1px] bg-gray mt-2"></div>
						</div>

						<div className="flex flex-col gap-4">
							<Department
								title='Registrar'
								status='On Hold'
							/>

							<Department
								title='Accounting'
								status='On Hold'
							/>

							<Department
								title='Treasury'
								status='On Hold'
							/>

							<Department
								title='OSA'
								status='On Hold'
							/>

							<Department
								title='library'
								status='On Hold'
							/>
						</div>
					</div>

					<div className="flex gap-4 pb-10">
						<h1><span className="font-semibold">11</span> All</h1>
						<h1><span className="font-semibold">5</span> Cleared</h1>
						<h1><span className="font-semibold">9</span> On Hold</h1>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home;