import Link from "next/link"
import { useState } from "react"
import Input from "../../components/login/Input"

const Student = () => {
	const [status, setStatus] = useState(false)

	const handleStatus = () => {
		setStatus(!status)
	}


	return (
		<div className="h-screen relative bg-gradient-to-b from-pink to-violet grid grid-rows-[auto,1fr,auto] gap-10 laptop:overflow-hidden">
			<nav className="flex tablet:gap-5 justify-end p-4">
				<Link href={'/'}><h1 className="text-white text-sm laptop:text-md tracking-wider hover:bg-white hover:text-gray py-3 px-6 rounded-full cursor-pointer transition-all duration-700">HOME</h1></Link>
			</nav>

			<div className="grid items-center tablet:justify-center text-center px-4">
				<div className="flex flex-col gap-4 laptop:ml-[60%]">
					<Input
						type="text"
						placeholder="Email Address"
					/>

					<Input
						type="password"
						placeholder="Password"
					/>

					<Link href={'/students/home'}><button className="bg-gradient-to-b from-pink to-violet py-3 laptop:w-96 laptop:py-4 text-white tracking-wide font-semibold drop-shadow-lg rounded-full cursor-pointer tablet:mt-4 hover:scale-105 transition-all duration-500">LOG IN</button></Link>
					<Link href={'/login/admin'}><span className="text-white text-md tracking-wide cursor-pointer">Not a student?</span></Link>
				</div>
			</div>

			<div className="tablet:h-[550px] laptop:hidden">
				<img src="/s-login.png" alt="login image" className="w-full h-full" />
			</div>

			<div className="hidden laptop:block absolute w-[1000px] h-[1300px] top-[-230px] left-[-250px] laptop:w-[1300px] laptop:h-[1600px] laptop:top-[-280px] laptop:left-[-200px]">
				<img src="/login-img.png" alt="login image" />
			</div>
		</div>
	)
}

export default Student
