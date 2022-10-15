import React, { ReactNode } from "react";

export interface PageLayoutInterface {
	children: ReactNode;
}
const PageLayout = ({ children }: PageLayoutInterface) => {
	return (
		<div className=" flex flex-col h-screen items-center flex-1 lg:px-5 py-8 px-2 bg-gray-200 dark:bg-stone-900">
			<div className="sm:w-full max-w-screen-2xl flex flex-col ">
				{children}
			</div>
		</div>
	);
};

export default PageLayout;
