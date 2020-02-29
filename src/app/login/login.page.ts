import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user:User = new User();
  errorMessage: string;
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}
  
  response(response): void{
    if(response.success===false){
      this.errorMessage = 'Invalid Credentials';
    }

    console.log(response);
    if(response.success===true){
      this.router.navigate(['/users']);
    }

  }

    public onSubmit(): void{
    this.authService.logIn(this.user).subscribe(
      (response:any) => {
       this.response(response);
      }
    );
    this.authService.logOut().subscribe(
      (response:any) => {
       console.log(response);
      }
    );

    this.authService.register(this.user).subscribe(
      (response:any) => {
       console.log(response);
      }
    );

  }
} 


