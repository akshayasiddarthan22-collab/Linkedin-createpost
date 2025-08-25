import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-linkedin-titlebar',
  standalone:true,
  imports: [CommonModule, 
    FormsModule],
  templateUrl: './linkedin-titlebar.html',
  styleUrl: './linkedin-titlebar.scss'
})
export class LinkedinTitlebar {

}
