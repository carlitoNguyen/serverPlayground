import { RESET_STATE, UPDATE_SERVERS_STATE, UPDATE_DISKS_STATE} from './../constant/constant';

const initialState = {
	servers: [],
	currentServer: {}
};

export default function counter(state = initialState, action) {
	switch (action.type) {
	case RESET_STATE:
		return {
			...state,
			servers: [],
			currentServer: {},
		};
	case UPDATE_SERVERS_STATE:
		return {
			...state,
			servers: [...action.data['_items']],
		};
	case UPDATE_DISKS_STATE:
		return {
			...state,
			currentServer: {...action.data['_items'][0]},
		};
	default:
		return state;
	}
}
