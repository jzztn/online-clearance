import FeatureBox from "./feature-box/FeatureBox"

const Features = () => {
	return (
		<div className="grid bg-gradient-to-b from-pink to-violet items-center justify-center px-6 md:pt-28 lg:px-20 lg:pt-0">
			<div className="max-w-7xl lg:mt-32 grid grid-flow-row gap-10 lg:gap-2">
				<div className=" hidden md:block">
					<FeatureBox
						paragraph="Online clearance is much convinient to do. Unlike any pther days students, parents would most likely to stay in a piled up line before getting wjat they want in the counter. But, with online clearance there is no need to do that, just at your homes, you will have what you need."
						img='/1.png'
					/>
				</div>

				<FeatureBox
					paragraph="Since it is online base, accuracy and speed in gathering information will be much easier. A need to input information would lead to what you are looking for."
					img='/2.png'
				/>

				<FeatureBox
					paragraph="To avoid using a lot of papers, Online Clearance is a huge help. All papers will be replace by using the online form. Signatures and remarks will be done by the Online Clearamce System."
					img='/3.png'
				/>

				<FeatureBox
					paragraph="You don't have to worry for having such vague information. People can have what they need in the online clearance system. All questions in mind regarding the requirements? Say no more, Online Clearance will list all the things you need"
					img='/4.png'
				/>
			</div>
		</div>
	)
}

export default Features
