import { Component } from '@angular/core';
import { WidgetComponent } from "../../common-ui/widget/widget.component";
import { RouterModule } from '@angular/router';
import { MenuComponent } from '../../common-ui/menu/menu.component';

@Component({
  selector: 'app-main',
  imports: [WidgetComponent, RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
