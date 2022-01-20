import Link from "next/link"

const Hero = () => {
	return (
		<div className="relative laptop:h-screen bg-gradient-to-b from-violet to-pink laptop:grid laptop:grid-cols-[auto,1fr] laptop:overflow-hidden">
			<div className="flex flex-col gap-4 laptop:gap-6 text-white pl-6 pt-10 tablet:pt-24 tablet:pl-0 laptop:pl-20 tablet:justify-center tablet:items-center laptop:items-start">
				<h1 className="text-2xl md:text-3xl laptop:text-6xl font-semibold tracking-wider">ONLINE CLEARANCE</h1>

				<div className="text-sm tablet:text-md xl:text-lg leading-relaxed tracking-wide tablet:text-center laptop:text-left">
					<p>A good way to start a new innovation</p>
					<p>Have all that you need in one sitting</p>
					<p>A better way in obtaining results and processing events</p>
				</div>

				<div>
					<Link href={'/login'}><button className="md:mt-4 bg-gradient-to-b from-violet to-pink py-3 px-16 tablet:px-24 xl:py-4 xl:px-28 text-white font-semibold text-md tracking-wide rounded-full shadow-xl hover:scale-105 transition-all duration-500">LOG IN</button></Link>
				</div>
			</div>

			<div className="laptop:hidden">
				<img src="/s.png" alt="hero image" className="w-full h-full" />
			</div>

			<div className="hidden relative laptop:block">
				<img src="/hero-desktop-img.png" alt="hero image" className="absolute top-[-530px] right-[-50px]" />
			</div>

		</div>
	)
}

export default Hero
