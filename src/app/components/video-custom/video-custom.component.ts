import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'video-component',
  templateUrl: './video-custom.component.html',
  styleUrls: ['./video-custom.component.scss'],
})
export class VideoCustomComponent {
  // Input properties
  @Input() data$: Observable<any> | null = null;

  inputData: any;
  name: string = '';

  actions: { saveData: (params?: any) => Observable<any> } | null = null;

  ngOnInit(): void {
    this.data$?.subscribe((data) => {
      console.log('received data in custom component', data);
      this.inputData = data.inputData;
      this.actions = data.actionsFn;
    });
  }

  saveData(): void {
    console.log('save data', this.name);
    this.actions?.saveData({ appData: { name: this.name } }).subscribe();
  }
}
