export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="h-screen flex flex-col justify-center items-center">
			{children}
		</div>
	);
}
