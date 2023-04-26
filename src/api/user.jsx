import { getAuth, updateProfile } from 'firebase/auth';

export class User {
	getMyUserData () {
		return getAuth().currentUser;
	}

	async updateAvatarUser (url) {
		try {
			const auth = getAuth();
			await updateProfile(auth.currentUser, {
				photoURL: url,
			});
		} catch (error) {
			throw error;
		}
	}

	async updateDisplayName (displayName) {
		try {
			const auth = getAuth();
			await updateProfile(auth.currentUser, {
				displayName: displayName,
			});
		} catch (error) {
			throw error;
		}
	}
}