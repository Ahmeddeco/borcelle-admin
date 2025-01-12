import LeftSideBar from '@/components/layout/LeftSideBar'
import TopBar from '@/components/layout/TopBar'

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='flex max-lg:flex-col text-grey-1'>
			<LeftSideBar />
			<TopBar />
			<main className='flex-1'>{children}</main>
		</div>
	)
}
