import { LogoutIcon, UploadIcon } from '@heroicons/react/outline'
import Link from 'next/link';

const Header = ({ lastName, firstName, course, id }) => {
	return (
		<nav className="py-5 px-6">
			<div>
				<div className="flex justify-end">
					<Link href={'/'}><LogoutIcon className='w-6 h-6 hover:text-gray transition-all duration-700 cursor-pointer' /></Link>
				</div>
			</div>

			<div className="grid grid-cols-[1fr,auto] items-center mt-4">
				<div className="flex flex-col">
					<h1 className="text-xl font-semibold tracking-wide">{lastName}, {firstName}</h1>
					<div className="flex gap-4">
						<h1 className="text-sm tracking-wide">BS {course}</h1>
						<h1 className="text-sm tracking-wide">{id}</h1>
					</div>
				</div>

				<div>
					<input type="text" placeholder="Search..." className="outline-none border-[1px] border-gray-400 pl-2 py-2 rounded-md laptop:w-96" />
				</div>
			</div>
		</nav>

	)
};

export default Header;


