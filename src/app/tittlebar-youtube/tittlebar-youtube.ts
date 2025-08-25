import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-tittlebar-youtube',
  standalone:true,
  imports: [CommonModule,FormsModule ],
  templateUrl: './tittlebar-youtube.html',
  styleUrls: ['./tittlebar-youtube.scss']
})
export class TittlebarYoutube {
  showNotifications = false;

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }
  closeNotifications() {
    this.showNotifications = false;
  } 
}
