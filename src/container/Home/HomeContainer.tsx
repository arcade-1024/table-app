import React, { useEffect, useState } from "react";
import NavBar from "../../common/components/NavBar/NavBar";
import PageLayout from "../../common/layout/PageLayout/PageLayout";
import axios from "axios";
import { FixedTable } from "../../common/components/FixedTable/FixedTable";
import TableRow from "./components/TableRow/TableRow";
import Image from "next/image";

export interface TableDataInterface {
	API: string;
	Description: string;
	Auth: string;
	HTTPS: boolean;
	Cors: string;
	Link: string;
	Category: string;
}

export interface HomeContainerInterface {
	data: TableDataInterface[];
}
const HomeContainer = ({ data }: HomeContainerInterface) => {
	console.log(data);

	const header = [
		<div className="w-full pl-6 py-3" key={"header-1"}>
			API
		</div>,
		<div className="w-full py-3" key={"header-2"}>
			Description
		</div>,
		// <div className="w-full py-3" key={"header-3"}>
		// 	Auth
		// </div>,
		// <div className="w-full py-3" key={"header-4"}>
		// 	HTTPS
		// </div>,
		// <div className="w-full py-3" key={"header-5"}>
		// 	Cors
		// </div>,
		<div className="w-full py-3" key={"header-6"}>
			Link
		</div>,
		<div className="w-full py-3" key={"header-7"}>
			Category
		</div>,
	];
	const [tableData, setTableData] = useState<TableDataInterface[]>();
	const [isFetching, setFetching] = useState(true);
	useEffect(() => {
		const fetchFeeds = async () => {};
		fetchFeeds();
	}, []);

	return (
		<PageLayout>
			<NavBar />
			<span className="mx-auto text-center w-1/3 text-gray-500 dark:text-gray-300 font-poppins font-light leading-7">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor.
			</span>
			<div className="flex flex-col rounded-lg  pt-5 bg-white dark:bg-stone-600 shadow-md dark:shadow-zinc-900 mt-6 mx-12">
				<div className="flex flex-col flex-1 px-6 mb-4  justify-center">
					<div className="text-xl font-semibold text-gray-800 dark:text-gray-50">
						Table
					</div>
					<div className="text-sm font-medium text-gray-600 dark:text-gray-300">
						You can see all table data.
					</div>
				</div>
				{data.length !== 0 && (
					<FixedTable
						headers={header}
						className={`min-h-[450px] max-h-[550px]`}
					>
						{data.map((data) => (
							<TableRow
								API={data.API}
								Auth={data.Auth}
								Category={data.Category}
								Cors={data.Cors}
								Description={data.Description}
								HTTPS={data.HTTPS}
								Link={data.Link}
								key={`${data.API}-${data.Description}-${data.Category}`}
							/>
						))}
					</FixedTable>
				)}
				{data.length === 0 && (
					<div className="h-96 flex flex-col items-center justify-center rounded-lg px-6 py-5 bg-white dark:bg-stone-600 shadow-md dark:shadow-zinc-900 mt-6 mx-12">
						<Image src="/assets/box.png" className="h-32" alt="empty-box" />
						<div className="text-3xl font-light mt-4 ">No user found</div>
					</div>
				)}
			</div>
		</PageLayout>
	);
};

export default HomeContainer;
