type LayoutProps = {
	children: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
	return (
		<div className='min-h-screen mx-auto border-2 border-red-500 p-12'>
			{props.children}
		</div>
	);
}
