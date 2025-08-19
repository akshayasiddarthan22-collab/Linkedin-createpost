import { Component } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { QuillModule } from 'ngx-quill';
@Component({ 
selector: 'app-root', 
standalone: true, 
templateUrl: './app.html', 
styleUrls: ['./app.scss'], 
imports: [ 
CommonModule, 
FormsModule,
QuillModule
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

