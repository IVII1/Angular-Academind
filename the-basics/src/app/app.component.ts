import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practice-app';
  serverCreationStatus = 'No server!'
  serverName = ''
  userName = ''
  showParagraph = true
  log: any = []
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value
  }
  onCreateServer(){
    this.serverCreationStatus = 'Server Created, Name: '+ this.serverName;
  }
  resetUserName(){
    this.userName = ''
  }
toggleParagraph(){
  this.showParagraph = !this.showParagraph
 this.log.push(this.log.length + 1)
}
}
