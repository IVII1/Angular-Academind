import { Component } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class SuccessComponent {
serverStatus: string = 'offline'
serverId: number = 140282
allowNewServer = false
constructor(){
  setTimeout(() => {
   this.allowNewServer = true
  }, 2000);
}
}
