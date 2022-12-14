import { ReactNode, useContext } from "react";
import { X } from "react-feather";
import { UserDataInterface } from "../../../container/User/UserContainer";
import { StoreContext } from "../../../contexts/StoreContext";
import { RootStore } from "../../../stores/RootStore";
export interface CardInterface {
	id: number;
	cardTitle: ReactNode;
	cardBody: string;
	tags: string[];
	// setUserData: React.Dispatch<React.SetStateAction<UserDataInterface[]>>;
}
export default function Card({
	id,
	tags,
	cardBody,
	cardTitle,
	// setUserData,
}: CardInterface) {
	const { userStore } = useContext<RootStore>(StoreContext);

	// const onDeleteClick = (id: number) => {
	// 	setUserData(userData.filter((user) => user.id !== id));
	// };
	return (
		<>
			<div className="w-full overflow-hidden shadow-lg bg-white dark:bg-stone-600 rounded-lg relative">
				<button
					className="absolute right-2 top-2 text-gray-600 dark:text-gray-300"
					onClick={() => userStore.deleteUserData(id)}
				>
					<X />
				</button>
				<div className="px-6 py-4">
					<div className="font-bold text-xl mb-2">{cardTitle}</div>
					<p className="text-gray-700 text-base dark:text-gray-300">
						{cardBody}
					</p>
				</div>
				<div className="px-6 pt-4 pb-2">
					{tags.map((tag) => (
						<span
							className="inline-block bg-gray-200 dark:bg-stone-500 dark:text-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
							key={tag}
						>
							#{tag}
						</span>
					))}
				</div>
			</div>
		</>
	);
}
