const FeatureBox = ({ paragraph, img }) => {
	return (
		<div className="grid grid-rows-[1fr,auto] laptop:grid-cols-[1fr,1fr] laptop:flex laptop:even:flex-row-reverse">
			<div className="flex items-center justify-center laptop:justify-start">
				<div className="tablet:w-[400px] laptop:w-auto text-center laptop:text-left">
					<p className="text-sm tablet:text-md text-white tracking-wide leading-relaxed">{paragraph}</p>
				</div>
			</div>

			<img src={img} alt="image" className="md:w-[450px] md:h-[330px] lg:w-[600px] lg:h-[400px] mx-auto" />
		</div>
	)
}

export default FeatureBox
