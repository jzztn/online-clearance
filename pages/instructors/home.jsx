import Link from "next/link";
import Header from "../../components/instructors/Header";
import Student from "../../components/instructors/Student";

const Home = () => {
	return (
		<div className="h-screen grid grid-rows-[auto,1fr] gap-20">
			<Header
				name='Adan, John Kristopher'
				position='Faculty Staff'
			/>

			<div className="px-4">
				<div className="max-w-4xl mx-auto h-full grid grid-rows-[1fr,auto]">
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
					</div>

					<div>
						<h1><span className="font-semibold pb-10">300</span> All</h1>
						<Link href={'/instructors/subject'}><h1>Subject</h1></Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home;