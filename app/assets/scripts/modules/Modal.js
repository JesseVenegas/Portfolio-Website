class Modal {
   constructor() {
      this.injectHTML()
      this.Modal = document.querySelector(".modal")
      this.closeIcon = document.querySelector(".modal__close")
      this.events()
   }

   events() {
      // listen for closing click
      this.closeIcon.addEventListener("click", () => this.closeTheModal())
      // pushes any key
      document.addEventListener("keyup", e => this.keyPressHandler(e))
   }

   keyPressHandler(e) {
     if (e.keyCode == 27) {
      this.closeTheModal()
     }
   }

   openTheModal() {
    this.Modal.classList.add("modal--is-visible")
   }

   closeTheModal() {
    this.Modal.classList.remove("modal--is-visible")
   }

   injectHTML() {
      document.body.insertAdjacentHTML('beforeend', `
      <div class="modal">
    <div class="modal__inner">
      <h2 class="section-title section-title--blue section-title--less-margin"> Get in <strong>Touch</strong></h2>
      <div class="wrapper wrapper--narrow">
        <p class="modal__description">I'll have a contact form in place soon. Until then, connect with me on any of the platforms below!</p>
      </div>

      <div class="social-icons">
        <a href="#" class="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>
        <a href="#" class="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>
        <a href="#" class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>
        <a href="#" class="social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>
      </div>
    </div>
    <div class="modal__close">X</div>
  </div>
      `)
   }
}

export default Modal