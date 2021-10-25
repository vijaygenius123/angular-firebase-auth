import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Observable} from "rxjs";
import {GoogleAuthProvider} from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>
  constructor(private aFAuth: AngularFireAuth) {
    this.user$ = this.aFAuth.authState
  }

  signOut(){
    this.aFAuth.signOut()
  }

  async signInWithGoogle(){
    const provider = new GoogleAuthProvider();
    const credential = await this.aFAuth.signInWithPopup(provider)
    return credential.user
  }

}
