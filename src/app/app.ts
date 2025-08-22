import { Component } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { QuillModule } from 'ngx-quill';
import { TittlebarYoutube } from './tittlebar-youtube/tittlebar-youtube';
import { VideocardYoutube } from './videocard-youtube/videocard-youtube';

@Component({ 
  selector: 'app-root', 
  standalone: true, 
  templateUrl: './app.html', 
  styleUrls: ['./app.scss'], 
  imports: [ 
    CommonModule, 
    FormsModule,
    QuillModule,
    TittlebarYoutube,
    VideocardYoutube
  ] 
}) 
export class AppComponent { 
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

