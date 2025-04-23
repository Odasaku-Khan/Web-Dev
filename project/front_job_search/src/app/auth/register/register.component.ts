import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormGroup,Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  error:string='';

  constructor(
    private fb:FormBuilder,
    private authservice:AuthService,
    private router:Router,
  ){
    this.registerForm=this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required],
      confirmPassword: ['',Validators.required]
    });
  }
  onSubmit(){
    if(this.registerForm.valid){
      const{username,password,confirmPassword}=this.registerForm.value;
      if(password!==confirmPassword){
        this.error='Password not identical'
        return;
      }

      this.authservice.register(username,password).subscribe({
        next:()=>this.router.navigate(['/login']),
        error:()=>(this.error='register problem')
      });
    }
  }
}

