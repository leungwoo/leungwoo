import { Component, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user = { name: '', password: '', remember: false };
  constructor(private dialog: MatDialogRef<LoginComponent>) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('user:', this.user);
    this.dialog.close();
  }
}
