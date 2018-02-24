import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class AuthService {

  public user: Observable<firebase.User>;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.user = this.afAuth.authState;
  }

  /**
   * 
   */
  public logout() {
    this.afAuth.auth.signOut()
      .then(() => this.router.navigate(['/login']));
  }

  /**
   * 
   * @param provider 
   */
  public oAuthLogin(provider: any) {
    return this.afAuth.auth.signInWithPopup(provider);
  }

  /**
   * 
   */
  public googleLogin() {
    let provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

}
