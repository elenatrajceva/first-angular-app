import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication,provideProtractorTestingSupport } from '@angular/platform-browser';

import { AppComponent } from '../src/app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';

import { AppModule } from './app/app.module';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
  
bootstrapApplication(AppComponent,
  {
    providers: [
      provideProtractorTestingSupport(),
      provideRouter(routeConfig)
    ]
  }
).catch(err => console.error(err));