import * as Utils from './utils';

class SiteNavbar {
  private navbarElement: HTMLElement;
  private navigationToggler: HTMLButtonElement;
  private siteNavigationElement: HTMLElement;

  constructor(navbarElement: HTMLElement) {
    this.navbarElement = navbarElement;
    this.navigationToggler = this.navbarElement.querySelector('.site-navbar__navigation-toggler');

    if (!Utils.isEmpty(this.navigationToggler)) {
      let navigationElementId = this.navigationToggler.getAttribute('data-toggle');
      navigationElementId = navigationElementId || 'site-navigation';

      this.siteNavigationElement = document.getElementById(navigationElementId);
    }
  }

  initialise(): void {
    this.registerNavToggleEvents();
  }

  private registerNavToggleEvents(): void {
    if (!Utils.isEmpty(this.navigationToggler)) {
      this.navigationToggler.addEventListener('click', (_: Event) => this.toggleNavigation());
    }
  }

  private toggleNavigation(): void {
    if (this.isNavigationDrawerActive()) {
      this.hideSiteNavigation();
    } else {
      this.showSiteNavigation();
    }
  }

  private isNavigationDrawerActive(): boolean {
    return this.siteNavigationElement.classList.contains('site-navbar__navigation--active');
  }

  private hideSiteNavigation(): void {
    this.deactivateNavigationDrawer();
    this.activateHamburgerIcon();
  }

  private showSiteNavigation(): void {
    this.activateNavigationDrawer();
    this.deactivateHamburgerIcon();
  }

  private activateNavigationDrawer(): void {
    this.siteNavigationElement.classList.add('site-navbar__navigation--active');
  }

  private deactivateNavigationDrawer(): void {
    this.siteNavigationElement.classList.remove('site-navbar__navigation--active');
  }

  private activateHamburgerIcon(): void {
    this.navigationToggler.querySelector('.hamburger-icon').classList.remove('hamburger-icon--active');
  }

  private deactivateHamburgerIcon(): void {
    this.navigationToggler.querySelector('.hamburger-icon').classList.add('hamburger-icon--active');
  }
}

export { SiteNavbar };