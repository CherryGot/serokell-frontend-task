class ContactForm {
  formElement: HTMLFormElement;

  constructor(contactFormElement: HTMLFormElement) {
    this.formElement = contactFormElement;
  }

  initialise(): void {
    this.registerSubmitEvent();
  }

  private registerSubmitEvent(): void {
    this.formElement.addEventListener('submit', (event: Event) => this.handleSubmission(event));
  }

  private handleSubmission(event: Event): void {
    event.preventDefault();
    this.printFormInputs();
  }

  private printFormInputs(): void {
    this.formElement.querySelectorAll('.contact-form__input')
      .forEach((input: HTMLInputElement) => {
        console.log(input.name + ": " + input.value);
      })
  }
}

export { ContactForm };