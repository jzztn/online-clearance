const FeatureBox = ({ paragraph, img }) => {
	return (
		<div className="grid grid-rows-[1fr,auto] laptop:grid-cols-[auto,1fr] laptop:flex laptop:even:flex-row-reverse">
			<div className="flex items-center justify-center laptop:justify-start">
				<div className="tablet:w-[400px] laptop:w-auto text-center laptop:text-left">
					<p className="text-sm tablet:text-md laptop:text-lg text-white tracking-wide leading-relaxed">{paragraph}</p>
				</div>
			</div>

			<img src={img} alt="image" className="mx-auto" />
		</div>
	)
}

export default FeatureBox
