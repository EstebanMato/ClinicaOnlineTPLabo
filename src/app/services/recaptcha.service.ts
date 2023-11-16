import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecaptchaService {

  private siteKey: string = '6LeW1xApAAAAAGDGv7h2Xpbr6_V6O8bbD1XfcMCO';

  constructor() { }


  getSiteKey(): string {
    return this.siteKey;
  }
}
