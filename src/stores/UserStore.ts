import { action, computed, makeObservable, observable } from "mobx";
import { USER_DATA } from "../common/constants/constant";
import { UserDataInterface } from "../container/User/UserContainer";
import { RootStore } from "./RootStore";

export class UserStore {
	private root: RootStore;
	@observable userData: UserDataInterface[] = USER_DATA;
	@observable filteredUserData: UserDataInterface[] = [];
	@observable searchQuery: string = "";

	constructor(root: RootStore) {
		this.root = root;
		makeObservable(this);
	}

	@action
	deleteUserData(id: number) {
		if (this.searchQuery !== "") {
			this.filteredUserData = this.userData
				.filter((user) => {
					return user.name
						.toLowerCase()
						.includes(this.searchQuery.toLowerCase());
				})
				.filter((user) => user.id !== id);
		} else
      this.filteredUserData = this.userData.filter((user) => user.id !== id);
    
    this.userData = this.userData.filter((user) => user.id !== id);
	}

	@action
	searchUser(query: string) {
		this.searchQuery = query;
	}

	@action
	search() {
		this.filteredUserData = this.userData.filter((user) => {
			return user.name.toLowerCase().includes(this.searchQuery.toLowerCase());
		});
	}
}
