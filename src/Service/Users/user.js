import { LogOut } from "../../Store/mutation-types"
import store from "../../Store/store"

export const logout = () => {
	store.commit(LogOut)
}