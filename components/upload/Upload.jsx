const Upload = ({ clickUpload }) => {
	return (
		<div className="bg-white border-[1px] border-gray py-4 px-6 grid gap-8 rounded-md">
			<div className="w-ful border-[1px] border-gray-300 py-3 pl-4 tracking-wide rounded-md">Choose a File</div>
			<div>
				<button className={`bg-gradient-to-b from-violet to-pink py-3 px-10Name ${clickUpload ? 'hidden ' : 'block'}`}>Upload</button>
			</div>
		</div>
	)
};

export default Upload;
