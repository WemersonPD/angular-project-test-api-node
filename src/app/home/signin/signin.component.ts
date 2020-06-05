import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  // Quem vai controlar meu formulário.
  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ){}

  ngOnInit(): void {
    // LoginForm vai receber seu controlador/verificação.
    this.loginForm = this.formBuilder.group({
      // Cada elemento que entra aqui, é um formControl, para usar no form.
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })

  }

  login(){
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService
      .authenticate(userName, password)
      .subscribe(
        () => this.router.navigate(['user', userName, 'products']),
        (err) => {
          alert('Tente novamente');
          // Limpa o form
          this.loginForm.reset();
        }

      )
  }



}
