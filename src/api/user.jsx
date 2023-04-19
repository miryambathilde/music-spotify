import { getAuth } from 'firebase/auth';

export class User {
	getMyUserData () {
		return getAuth().currentUser;
	}
}