import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true
})
export class LoginComponent {
  loginForm:FormGroup;
  error:string='';

  constructor(
    private fb:FormBuilder,
    private authService: AuthService,
    private router: Router,
  ){
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required],
    });
  }

  OnSubmit(){
    if (this.loginForm.valid) {
      const{username,password}=this.loginForm.value;
      this.authService.login(username,password).subscribe({
        next:(res)=>{
          localStorage.setItem('access',res.access);
          localStorage.setItem('refresh',res.refresh);
          this.router.navigate(['/dashboard/profile'])
        },
        error:(err)=>{
          this.error='inavalid errors'
        }
      })
    }
  }
}
