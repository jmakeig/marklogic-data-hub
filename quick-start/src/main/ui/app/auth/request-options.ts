import { Injectable } from '@angular/core';
import { RequestOptions, RequestOptionsArgs } from '@angular/http';

interface CustomWindow {
  BASE_URL: string;
}
declare var window: CustomWindow;

@Injectable()
class HubRequestOptions extends RequestOptions {

  merge(options?: RequestOptionsArgs): RequestOptions {
    let result = new HubRequestOptions(super.merge(options));
    result.url = window.BASE_URL + result.url;
    return result;
  }
}

export const REQUEST_PROVIDER = {
  provide: RequestOptions,
  useClass: HubRequestOptions
};
