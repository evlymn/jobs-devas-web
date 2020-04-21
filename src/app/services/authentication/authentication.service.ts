import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService {
  constructor(private angularFireAuth: AngularFireAuth) {}

  createUserWithEmailAndPassword(email: string, senha: string) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, senha);
  }

  signInWithEmailAndPassword(email: string, senha: string) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, senha);
  }

  signInWithGithubAuthProvider() {
    return this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }

  signInWithGoogleAuthProvider() {
    return this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  signInWithFacebookAuthProvider() {
    return this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  signInWithTwitterAuthProvider() {
    return this.angularFireAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
  }

  sendPasswordResetEmail(email: string) {
    return this.angularFireAuth.auth.sendPasswordResetEmail(email);
  }
}
