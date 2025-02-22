import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { LocalizationService } from '../../services/localization.service';

@Component({
  selector: 'app-modules',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss'],
})
export class ProcessComponent implements OnInit, OnDestroy {
  public apiUrl = this.baseApiUrl;
  public staticUrl = this.staticAssetsUrl;
  public processPath = this.processApiPath;

  public processStartData = {};
  public processName = 'MainProcess';
  public themeId = '1f9a7be5-4892-4401-8c13-f1c5e188ce3c';
  public appInfo = { appId: 'c4d2d62c-2f9b-494a-a71c-91def6b78821' };
  public language = 'LANGUAGE';
  public locale = 'LOCALE';

  accessToken = localStorage.getItem('access_token') || '';

  subscription: Subscription = new Subscription();

  constructor(
    @Inject('BASE_URL') private baseApiUrl: string,
    @Inject('STATIC_ASSETS_URL') private staticAssetsUrl: string,
    @Inject('PROCESS_API_PATH') private processApiPath: string,
    private route: ActivatedRoute,
    private localizationService: LocalizationService
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.route.paramMap
        .pipe(map(() => window.history.state))
        .subscribe((state) => {
          this.processName = state.processName?.label || state.processName;
          this.processStartData = {
            ...state.processStartData,
          };
          this.language = this.localizationService.getSelectedLanguage().value;
        })
    );
  }

  ngOnDestroy(): void {}
}
