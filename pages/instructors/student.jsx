import Header from "../../components/instructors/Header";
import StudentDetail from "../../components/instructors/StudentDetail";

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
						<StudentDetail
							lastName='Lorem'
							firstName='Ipusm'
							status='On Hold'
							requirement='Website Defense'
						/>
					</div>

					<div>
						<button className="bg-gradient-to-b from-violet to-pink py-3 px-10 text-white tracking-wide rounded-md hover:scale-105 transition-all duration-500 mb-10">Add Requirement</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home;