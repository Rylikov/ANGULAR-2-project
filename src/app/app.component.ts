import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';
//import {TranslateService} from '@ngx-translate/core';
import {Subscription } from 'rxjs';
import {Router, ActivatedRoute} from '@angular/router';
import {OnInit, OnDestroy} from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

  param = {value: 'world'};

  private subscription: Subscription;

  constructor(private translate: TranslateService, private activatedRoute: ActivatedRoute) {
        translate.addLangs(["en", "fr", "cn", "hi"]);
        translate.setDefaultLang('en');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr|cn|hi/) ? browserLang : 'en');
    }

    changeLanguage(lang){
        this.translate.use(lang);
    }

    ngOnInit() {
    // subscribe to router event
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
        let locale = param['locale'];
        if (locale !== undefined){
            this.translate.use(locale);
        }
      });
  }

  ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }

}