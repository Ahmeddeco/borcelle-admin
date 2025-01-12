'use client'

import { navLinks } from '@/lib/constants'
import { UserButton } from '@clerk/nextjs'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const TopBar = () => {
	const [dropDownMenu, setDropDownMenu] = useState(false)

	return (
		<header className='sticky h-20 top-0 z-20 w-full flex justify-between items-center px-8 py-4 bg-blue-2 shadow-xl lg:hidden'>
			<Image src='/logo.png' alt='Borcelle' width={150} height={70} />
			<div className=' flex gap-8 max-md:hidden'>
				{navLinks.map((link, index) => (
					<Link
						href={link.url}
						key={index}
						className=' flex gap-4 items-center text-body-medium'
					>
						<p>{link.label}</p>
					</Link>
				))}
			</div>
			<div className='relative flex gap-4 items-center'>
				<Menu
					className='cursor-pointer md:hidden'
					onClick={() => setDropDownMenu(!dropDownMenu)}
				/>
				{dropDownMenu && (
					<div className='flex flex-col gap-8 absolute right-6 top-10 p-5 bg-blue-2 shadow-xl rounded-lg'>
						{navLinks.map((link, index) => (
							<Link
								href={link.url}
								key={index}
								className='flex gap-4 items-center text-body-medium'
							>
								{link.icon}
								<p>{link.label}</p>
							</Link>
						))}
					</div>
				)}
				<UserButton />
			</div>
		</header>
	)
}

export default TopBar
