import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessComponent } from './process.component';
import { RouterModule, Routes } from '@angular/router';
import { FlxProcessModule } from '@flowx/ui-sdk';
import { LocalDataStoreService } from '../../services/local-data-store';
import { MyCustomComponent } from '../../components/my-custom-component/my-custom.component';
import { VideoCustomComponent } from 'src/app/components/video-custom/video-custom.component';
import { CustomCheckboxesComponent } from 'src/app/components/custom-checkboxes/custom-checkboxes.component';

const routes: Routes = [
  {
    path: '',
    component: ProcessComponent,
  },
];

@NgModule({
  declarations: [ProcessComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlxProcessModule.forRoot({
      components: {
        // MyCustomComponentIdentifier: VideoCustomComponent,
        videoCustomComponent: VideoCustomComponent,
        CustomCheckboxesComponent: CustomCheckboxesComponent,
      },
      services: {
        LocalDataStoreService,
      },
    }),
  ],
})
export class ProcessModule {}
