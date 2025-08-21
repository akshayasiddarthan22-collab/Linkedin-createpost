import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-component-name',
  imports: [ 
CommonModule, 
FormsModule
] ,
  templateUrl: './component-name.html',
  styleUrl: './component-name.scss'
})
export class App{
  showNotifications = false;

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }
}