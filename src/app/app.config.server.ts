import { provideServerRendering } from '@angular/ssr';
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { appConfig } from './app.config';
import { IconService } from './services/icon.service';
import { provideHttpClient, withFetch } from '@angular/common/http';

// TODO: read this
// https://angular.io/api/common/http/provideHttpClient
const serverConfig: ApplicationConfig = {
  providers: [provideHttpClient(withFetch()), provideServerRendering()],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
