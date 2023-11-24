import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { KEYS } from '../_constants';

@Injectable({
    providedIn: 'root'
})
export class CommonService {
    public isShowSpinner = new BehaviorSubject({ is_hide_spinner: true });
    public isDisconnectWallet = new BehaviorSubject(false);

    constructor(
    ) { }

    /**
     * Emit value for spinner
     */
    emitValueForSpinner() {
        this.isShowSpinner.next({ is_hide_spinner: true });
    }

    /**
     * Go back to previous page
     */
    goBack() {
        history.back();
    }

    /**
     * Get user details from local storage
     */
    getUserDetails() {
        let userDetails: any;
        if (localStorage.getItem(KEYS.USER_INFO)) {
            userDetails = JSON.parse(localStorage.getItem(KEYS.USER_INFO) || '');
        }
        return userDetails;
    }
}