import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = ''
  password: string = ''
  constructor(public authService: AuthService, private router: Router ) { }

  ngOnInit(): void {
  }

  async handleLogin(){
    try {
      const result = await this.authService.signInWithEmailAndPassword(this.email, this.password)
      console.log(result)
      if(result){
        this.router.navigate([''])
      }
    } catch (err){
      console.log('Error Logging In')
    }

  }

}
