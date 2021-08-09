(async function () {
  new MaskController().start()
})()

function MaskController() {

  this.start = () => {
    // this.cpfMask()
  }

  this.cpfMask = () => {
    const cpfMaskElements = document.querySelectorAll('.cpf_mask')

    Array.from(cpfMaskElements).forEach((el) => {
      $(el.value).mask("999.999.999-99")
    })
  }

  this.cepMask = () => {

  }

  this.phoneMask = () => {

  }

  this.phoneDddMask = () => {

  }

  this.celMask = () => {

  }

  this.celDddMask = () => {

  }

  this.characterLimiter = () => {

  }

}