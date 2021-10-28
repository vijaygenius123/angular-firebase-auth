import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Observable} from "rxjs";
import {GoogleAuthProvider} from "firebase/auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>
  constructor(private aFAuth: AngularFireAuth, private router: Router) {
    this.user$ = this.aFAuth.authState
  }

  signOut(){
    this.router.navigate(['login'])
    return this.aFAuth.signOut()
  }

  async signInWithEmailAndPassword(email: string, password: string){
    return await this.aFAuth.signInWithEmailAndPassword(email, password)
  }

  async signInWithGoogle(){
    const provider = new GoogleAuthProvider();
    return await this.signInWithProvider(provider)
  }

  async signInWithProvider(provider: any){
    const credential = await this.aFAuth.signInWithPopup(provider)
    return credential.user
  }

}
