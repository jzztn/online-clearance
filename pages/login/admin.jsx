import Link from "next/link"
import Input from "../../components/login/Input"

const Admin = () => {
	return (
		<div className="h-screen bg-gradient-to-b from-pink to-violet">
			<div className="relative max-w-5xl mx-auto h-screen grid grid-rows-[auto,1fr,auto] gap-10 lg:grid-rows-[auto,1fr] lg:gap-0">
				<nav className="flex tablet:gap-5 justify-end p-4">
					<Link href={'/'}><h1 className="text-white text-sm laptop:text-md tracking-wider hover:bg-white hover:text-gray py-3 px-6 rounded-full cursor-pointer transition-all duration-700">HOME</h1></Link>
				</nav>

				<div className="grid items-center md:justify-center text-center px-4 lg:grid-cols-[1fr,1fr] lg:items-center lg:px-14">
					<img src="/phone.png" alt="login image" className="hidden laptop:block w-[300px] h-[600px]" />

					<div className="flex flex-col gap-4 ">
						<Input
							type="text"
							placeholder="Email Address"
						/>

						<Input
							type="password"
							placeholder="Password"
						/>

						<Link href={'/instructors/home'}><button className="bg-gradient-to-b from-pink to-violet py-3 w-full laptop:py-4 text-white tracking-wide font-semibold drop-shadow-lg rounded-full cursor-pointer tablet:mt-4 hover:scale-105 transition-all duration-500">LOG IN</button></Link>
						<Link href={'/login/student'}><span className="text-white text-md tracking-wide cursor-pointer">not an admin?</span></Link>
					</div>

				</div>

				<div className="tablet:h-[550px] laptop:hidden">
					<img src="/s-login.png" alt="login image" className="w-full h-full" />
				</div>
			</div>
		</div>
	)
}

export default Admin
