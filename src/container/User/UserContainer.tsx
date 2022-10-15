import React, { useState } from "react";
import PageLayout from "../../common/layout/PageLayout/PageLayout";
import NavBar from "../../common/components/NavBar/NavBar";
import Card from "../../common/components/Card/Card";
import Image from "next/image";

export interface UserDataInterface {
	id: number;
	name: string;
	desc: string;
	tags: string[];
}
const UserContainer = () => {
	const [userData, setUserData] = useState<UserDataInterface[]>([
		{
			id: 1,
			name: "arcade",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			tags: ["photography", "digital art", "ui/ux"],
		},
		{
			id: 2,
			name: "raijin",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			tags: ["photography", "marketing", "storytelling"],
		},
		{
			id: 3,
			name: "blueyies",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			tags: ["gaming", "storytelling"],
		},
	]);
	return (
		<PageLayout>
			<NavBar />
			<span className="mx-auto text-center w-1/3 text-gray-500 dark:text-gray-300 font-poppins font-light leading-7">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</span>
			<div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8 mx-12 mt-8">
				{userData.map((user) => (
					<Card
						id={user.id}
						cardTitle={user.name}
						cardBody={user.desc}
						tags={user.tags}
						userData={userData}
						setUserData={setUserData}
						key={user.id}
					/>
				))}
			</div>
			{userData.length === 0 && (
				<div className="h-96 flex flex-col items-center justify-center rounded-lg px-6 py-5 bg-white dark:bg-stone-600 shadow-md dark:shadow-zinc-900 mt-6 mx-12">
					<Image src="/assets/box.png" height={"128px"} alt="empty-box" />
					<div className="text-3xl font-light mt-4 ">No user found</div>
				</div>
			)}
		</PageLayout>
	);
};

export default UserContainer;
