const Input = ({ type, placeholder }) => {
	return (
		<div>
			<input type={type} placeholder={placeholder} className='laptop:py-4  w-full tablet:w-96 border-b-white border-t-0 border-l-0 border-r-0 border-[1px] outline-none bg-transparent pb-2 placeholder:text-white placeholder:text-sm lg:placeholder:text-md placeholder:tracking-wide focus:placeholder:text-transparent' />
		</div>
	)
}

export default Input
