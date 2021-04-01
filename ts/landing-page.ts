import * as Utils from "./utils";
import { SiteNavbar } from "./site-navbar";

class LandingPage {
  private siteNavbarElement: HTMLDivElement;
  private siteNavbar: SiteNavbar;

  constructor() {
    this.siteNavbarElement = document.querySelector('.site-navbar');
  }

  initialisePageElements(): void {
    this.initialiseNavbar();
  }

  private initialiseNavbar(): void {
    if (!Utils.isEmpty(this.siteNavbarElement)) {
      this.siteNavbar = new SiteNavbar(this.siteNavbarElement);
      this.siteNavbar.initialise();
    }
  }
}

export { LandingPage };