import { Component } from '@angular/core';
import{ AngularFireAuth }from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import {auth}from 'firebase/app'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username:string=""
  password:string=""
  cPassword:string=""
  constructor(public afAuth:AngularFireAuth,public navCtrl: NavController) { }
  async  signup(){
 const{ username,password,cPassword}=this
 console.log(password);
 console.log(cPassword);

if(password != cPassword)
{
alert("password and Cofirm Password Is Not Match")
} 
try{
const res =await this.afAuth.auth.createUserWithEmailAndPassword(username,password)
alert("Signup Successfully")
this.navCtrl.navigateForward("login");
}
catch(error){
  console.dir(error)
}
}


}
