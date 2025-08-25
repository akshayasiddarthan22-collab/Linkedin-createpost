import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { QuillModule } from 'ngx-quill';
@Component({
  selector: 'app-linkedin-postbox',
  standalone:true,
  imports: [CommonModule,FormsModule,QuillModule ],
  templateUrl: './linkedin-postbox.html',
  styleUrl: './linkedin-postbox.scss'
})
export class LinkedinPostbox {
showPostBox = false; 
  showVisibilityMenu = false; 
  postContent = ''; 

  togglePostDialog() { 
    this.showPostBox = !this.showPostBox; 
  } 

  toggleVisibilityMenu() { 
    this.showVisibilityMenu = !this.showVisibilityMenu; 
  } 

  closeVisibilityMenu() { 
    this.showVisibilityMenu = false; 
  } 
}
