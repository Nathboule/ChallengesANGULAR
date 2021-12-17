import { Component } from '@angular/core';
import { CreateOnomatopiaComponent } from './create-onomatopia/create-onomatopia.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ChallengesAngular';

  public onomatopeias: Array<string> = [];

  onReceiveNewOnomatopia(newOnompatopia: string) {
    this.onomatopeias.push(newOnompatopia);
  }
}
