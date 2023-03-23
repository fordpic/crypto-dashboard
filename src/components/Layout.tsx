type LayoutProps = {
	children: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
	return (
		<div className='min-h-screen mx-auto p-12 bg-gradient-to-r from-cyan-500 via-white to-blue-500'>
			{props.children}
		</div>
	);
}
