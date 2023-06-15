import { Component } from '@angular/core';

@Component({
  selector: 'app-flex1',
  templateUrl: './flex1.component.html',
  styleUrls: ['./flex1.component.css']
})
export class Flex1Component {
  title = 'Card View Demo';

  gridColumns = 3;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

}
