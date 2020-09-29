import { DatePipe } from '@angular/common';

export interface User {
    uid: string;
    email?: string;
    displayName?: string;
    photoURL?: string;
    emailVerified?: boolean;
    type?:string;
    validated?:boolean;
    creationTime?:DatePipe;
    lastSignInTime?:DatePipe;
    typeAuth?:string;
 }