import Link from "next/link"
import Input from "../components/signup/Input"

const Signup = () => {
	return (
		<div className="h-screen relative bg-gradient-to-b from-pink to-violet grid grid-rows-[auto,1fr,auto] gap-10 laptop:overflow-hidden">
			<nav className="flex tablet:gap-5 justify-end p-4">
				<Link href={'/'}><h1 className="text-white text-sm laptop:text-md tracking-wider hover:bg-white hover:text-gray py-3 px-6 rounded-full cursor-pointer transition-all duration-700">HOME</h1></Link>
				<Link href={'/login'}><h1 className="text-white text-sm laptop:text-md tracking-wider hover:bg-white hover:text-gray py-3 px-6 rounded-full cursor-pointer transition-all duration-700">LOG IN</h1></Link>
			</nav>

			<div className="grid items-center tablet:justify-center mx-20">
				<div className="flex flex-col gap-6 laptop:ml-[60%]">
					<Input
						type="text"
						placeholder="Last Name"
					/>

					<Input
						type="text"
						placeholder="First Name"
					/>

					<Input
						type="text"
						placeholder="Email Address"
					/>

					<Input
						type="password"
						placeholder="Password"
					/>
					<button className="mt-10 bg-gradient-to-b from-pink to-violet py-4 laptop:w-96 laptop:py-4 text-white tracking-wide font-semibold drop-shadow-lg rounded-full cursor-pointer tablet:mt-4 hover:scale-105 transition-all duration-500">SIGN UP</button>
				</div>
			</div>

			<div className="tablet:h-[550px] laptop:hidden">
				<img src="/s-login.png" alt="login image" className="w-full h-full" />
			</div>

			<div className="hidden laptop:block absolute w-[1000px] h-[1300px] top-[-230px] left-[-250px] laptop:w-[1300px] laptop:h-[1600px] laptop:top-[-280px] laptop:left-[-200px]">
				<img src="login-img.png" alt="login image" />
			</div>
		</div>
	)
}

export default Signup
