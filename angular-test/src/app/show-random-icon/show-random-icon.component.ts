import { Component } from '@angular/core';
import { IconName, IconPrefix, findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition, faIcons } from '@fortawesome/free-solid-svg-icons';

interface CustomIconDefinition extends IconDefinition {
  prefix: IconPrefix;
  iconName: IconName;
  icon: [number, number, string[], string, string | string[]];
}

@Component({
  selector: 'app-show-random-icon',
  templateUrl: './show-random-icon.component.html',
  styleUrls: ['./show-random-icon.component.scss'],
})
export class ShowRandomIconComponent {
  faIcons: Record<string, CustomIconDefinition> = {};
  showIcon = false;
  randomIcon: CustomIconDefinition | undefined;

  constructor() {
    const iconNames = Object.keys(faIcons);
    for (const iconName of iconNames) {
      const definition = findIconDefinition({
        prefix: 'fas' as IconPrefix,
        iconName: iconName as IconName,
      });
      if (definition) {
        const [width, height, ligatures, unicode, svgPathData] = definition.icon;
        this.faIcons[iconName] = {
          prefix: 'fas',
          iconName: iconName as IconName,
          icon: [width, height, ligatures, unicode, svgPathData],
        };
      }
    }

    const iconValues = Object.values(this.faIcons);
    const randomIndex = Math.floor(Math.random() * iconValues.length);
    this.randomIcon = iconValues[randomIndex];
  }

  showRandomIcon() {
    this.showIcon = false;
    setTimeout(() => {
      const iconValues = Object.values(this.faIcons);
      const randomIndex = Math.floor(Math.random() * iconValues.length);
      this.randomIcon = iconValues[randomIndex];
      this.showIcon = true;
      console.log(this.randomIcon)
    }, 3000);
  }
}