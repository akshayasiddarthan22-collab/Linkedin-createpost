import { Component } from '@angular/core'; 
import { TittlebarYoutube } from './tittlebar-youtube/tittlebar-youtube';
import { VideocardYoutube } from './videocard-youtube/videocard-youtube';
import { LinkedinTitlebar } from './linkedin-titlebar/linkedin-titlebar';
import { LinkedinPostbox } from './linkedin-postbox/linkedin-postbox';

@Component({ 
  selector: 'app-root', 
  standalone: true, 
  templateUrl: './app.html', 
  styleUrls: ['./app.scss'], 
  imports: [ 
    TittlebarYoutube,
    VideocardYoutube,
    LinkedinTitlebar,
    LinkedinPostbox
  ] 
}) 
export class AppComponent { 
  
}

