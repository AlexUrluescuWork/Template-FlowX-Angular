import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

type TGoals = {
  title: string;
  subtitle: string;
};

@Component({
  selector: 'app-custom-checkboxes',
  templateUrl: './custom-checkboxes.component.html',
  styleUrl: './custom-checkboxes.component.scss',
})
export class CustomCheckboxesComponent {
  @Input() data$: Observable<any> | null = null;

  inputData: any;
  name: string = '';
  custom_data: TGoals[] = [];

  actions: { saveData: (params?: any) => Observable<any> } | null = null;

  ngOnInit(): void {
    this.data$?.subscribe((data) => {
      console.log('received data in checkboxes', data);
      this.custom_data = data.goals;
      // this.inputData = data.inputData;
      // this.actions = data.actionsFn;
    });
  }

  saveData(): void {
    console.log('save data', this.name);
    this.actions?.saveData({ appData: { name: this.name } }).subscribe();
  }
}
