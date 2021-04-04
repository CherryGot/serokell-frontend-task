import * as Utils from "./utils";
import { SiteNavbar } from "./site-navbar";
import { ContactForm } from './contact-form';

class LandingPage {
  private siteNavbarElement: HTMLDivElement;
  private siteNavbar: SiteNavbar;

  private contactFormElement: HTMLFormElement;
  private contactForm: ContactForm;

  constructor() {
    this.siteNavbarElement = document.querySelector('.site-navbar');
    this.contactFormElement = document.querySelector('.contact-form');
  }

  initialisePageElements(): void {
    this.initialiseNavbar();
    this.initialiseContactForm();
  }

  private initialiseNavbar(): void {
    if (!Utils.isEmpty(this.siteNavbarElement)) {
      this.siteNavbar = new SiteNavbar(this.siteNavbarElement);
      this.siteNavbar.initialise();
    }
  }

  private initialiseContactForm() {
    if (!Utils.isEmpty(this.contactFormElement)) {
      this.contactForm = new ContactForm(this.contactFormElement);
      this.contactForm.initialise();
    }
  }
}

export { LandingPage };