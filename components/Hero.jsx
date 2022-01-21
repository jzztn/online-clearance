import Link from "next/link"

const Hero = () => {
	return (
		<div className="h-screen bg-gradient-to-b from-violet to-pink">
			<div className="relative max-w-7xl md:h-full lg:grid lg:mx-auto overflow-hidden lg:items-center">
				<div className="flex flex-col gap-4 mt-10 pl-6 md:mt-20 md:items-center lg:items-start lg:mt-0 lg:gap-6 lg:pl-6 lg:pt-0 z-50">
					<h1 className="text-2xl text-white md:text-3xl lg:text-6xl font-semibold tracking-wider">ONLINE CLEARANCE</h1>
					<div className="text-sm text-white tablet:text-md xl:text-lg leading-relaxed tracking-wide tablet:text-center laptop:text-left">
						<p>A good way to start a new innovation</p>
						<p>Have all that you need in one sitting</p>
						<p>A better way in obtaining results and processing events</p>
					</div>

					<div>
						<Link href={'/login/student'}><button className="md:mt-4 bg-gradient-to-b from-violet to-pink py-3 px-16 tablet:px-24 xl:py-4 xl:px-28 text-white font-semibold text-md tracking-wide rounded-full shadow-xl hover:scale-105 transition-all duration-500">LOG IN</button></Link>
					</div>
				</div>

				<div className="laptop:hidden">
					<img src="/s.png" alt="hero image" className="w-full h-full" />
				</div>


				<img src="/hero-desktop-img.png" alt="hero image" className="hidden lg:block w-[700px] h-[900px] absolute top-[-5px] right-[-15px]" />
			</div>
		</div>
	)
}

export default Hero
