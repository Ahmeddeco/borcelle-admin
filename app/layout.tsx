import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

const geistSans = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
})
const geistMono = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
})

export const metadata: Metadata = {
	title: 'Borcelle - Admin Dashboard',
	description: 'Admin dashboard for Borcelle data',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProvider
			appearance={{
				baseTheme: dark,
			}}
		>
			<html lang='en'>
				<body
					className={`${geistSans.className} ${geistMono.className} antialiased`}
				>
					{children}
				</body>
			</html>
		</ClerkProvider>
	)
}
