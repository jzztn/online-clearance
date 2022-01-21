import { LogoutIcon, UploadIcon } from '@heroicons/react/outline'
import Link from 'next/link';
import { useState } from 'react';

const Header = ({ name, position }) => {

	const [upload, setUpload] = useState(false)

	const handleUpload = () => {
		setUpload(!upload)
	}

	return (
		<nav className="relative py-5 px-6">
			<div>
				<div className="flex gap-6 justify-end">

					<div className='group'>
						<Link href={'/instructors/home'}><h1 className='cursor-pointer'>Home</h1></Link>
						<div className='bg-gradient-to-b from-pink to-violet w-0 h-1 rounded-md group-hover:w-full transition-all duration-500'></div>
					</div>

					<div>
						<UploadIcon className='w-6 h-6 hover:text-gray transition-all duration-700 cursor-pointer' onClick={handleUpload} />
						<div className={`absolute top-15 right-5 w-96 bg-white border-[1px] border-gray py-4 px-6 grid gap-8 rounded-md ${upload ? 'hidden' : 'block'}`}>
							<div className="w-ful border-[1px] border-gray-300 py-3 pl-4 tracking-wide rounded-md">Choose a File</div>
							<div>
								<button className='bg-gradient-to-b from-violet to-pink py-3 px-10 text-white rounded-md'>Upload</button>
							</div>
						</div>
					</div>
					<Link href={'/'}><LogoutIcon className='w-6 h-6 hover:text-gray transition-all duration-700 cursor-pointer' /></Link>
				</div>
			</div>

			<div className="grid gap-4 tablet:grid-cols-[1fr,auto] tablet:gap-0 items-center mt-4">
				<div className="flex flex-col">
					<h1 className="text-xl font-semibold tracking-wide">{name}</h1>
					<h1 className="text-sm tracking-wide">{position}</h1>
				</div>

				<div>
					<input type="text" placeholder="Search..." className="outline-none border-[1px] border-gray-400 pl-2 py-2 rounded-md w-full laptop:w-96" />
				</div>
			</div>
		</nav>

	)
};

export default Header;


