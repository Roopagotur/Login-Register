import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone:true,
  imports:[FormsModule,CommonModule],
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  register() {
    if (this.username && this.password) {
      localStorage.setItem(this.username, this.password);
      alert('Registration successful!');
      this.router.navigate(['/login']);
    } else {
      alert('Please enter username and password.');
    }
  }
}
