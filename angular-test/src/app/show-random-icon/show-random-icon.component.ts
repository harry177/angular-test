import { Component } from '@angular/core';
import { IconPack, IconProp } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-show-random-icon',
  templateUrl: './show-random-icon.component.html',
  styleUrls: ['./show-random-icon.component.scss'],
})
export class ShowRandomIconComponent {
  icons: IconPack = fas;
  showIcon: boolean = false;
  randomIcon: IconProp;

  constructor() {
    const iconKeys = Object.keys(this.icons);
    const randomIndex = Math.floor(Math.random() * iconKeys.length);
    this.randomIcon = this.icons[randomIndex];
  }

  showRandomIcon() {
    this.showIcon = false;
    setTimeout(() => {
      const iconKeys = Object.keys(this.icons);
      const randomIndex = Math.floor(Math.random() * iconKeys.length);
      this.randomIcon = this.icons[iconKeys[randomIndex]];
      this.showIcon = true;
      console.log(this.icons[iconKeys[randomIndex]]);
    }, 3000);
  }
}
