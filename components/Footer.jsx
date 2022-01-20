const Footer = () => {
	return (
		<div className="bg-gradient-to-b from-violet to-pink grid grid-flow-row gap-16 tablet:gap-20 laptop:gap-24 justify-center items-center py-20">
			<div className="flex flex-col gap-6 justify-center items-center text-center">
				<div className="flex flex-col gap-2 text-white px-4">
					<h1 className="text-lg tablet:text-xl laptop:text-2xl font-semibold tracking-wide">SHARE YOUR FEEDBACK TO US</h1>
					<p className="text-xs font-light px-6 tablet:text-md laptop:text-lg">If you have any concerns or recommendations to our system, reach us and let us know.</p>
				</div>

				<div>
					<button className="laptop:mt-4 bg-gradient-to-b from-violet to-pink py-3 px-16 tablet:px-24 text-white font-semibold text-md tracking-wide rounded-full shadow-lg hover:scale-105 transition-all duration-500">LOG IN</button>
				</div>
			</div>

			<div className="flex flex-col tablet:flex-row text-center justify-center items-center gap-6 tablet:text-left md:items-start tablet:gap-20 laptop:gap-28 text-white">
				<ul className="flex flex-col gap-2">
					<li><span className="font-semibold tracking-wide laptop:text-lg">Partnerships</span></li>
					<li className="text-sm font-light laptop:text-md">Websites</li>
					<li className="text-sm font-light laptop:text-md">Social Media</li>
					<li className="text-sm font-light laptop:text-md">Branding</li>
				</ul>

				<ul className="flex flex-col gap-2">
					<li><span className="font-semibold tracking-wide laptop:text-lg">About</span></li>
					<li className="text-sm font-light laptop:text-md">Our Work</li>
					<li className="text-sm font-light laptop:text-md">Careers</li>
				</ul>

				<ul className="flex flex-col gap-2">
					<li><span className="font-semibold tracking-wide laptop:text-lg">Support</span></li>
					<li className="text-sm font-light laptop:text-md">Support Request</li>
					<li className="text-sm font-light laptop:text-md">Contact</li>
				</ul>

				<div className="flex flex-col gap-2">
					<span className="font-semibold tracking-wide">Follow Us</span>
					<div className="flex gap-4 items-center justify-center">
						<img src="/facebook.png" alt="facebook" className="w-6 h-6" />
						<img src="/instagram.png" alt="instagram" className="w-6 h-6" />
						<img src="/twitter.png" alt="twitter" className="w-6 h-6" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
