'use strict'

const Mail = use('Mail')

class SendNewFormMail {
  // If this getter isn't provided, it will default to 1.
  // Increase this number to increase processing concurrency.
  static get concurrency() {
    return 1
  }

  // This is required. This is a unique key used to identify this job.
  static get key() {
    return 'SendNewFormMail-job'
  }

  // This is where the work is done.
  async handle({ email, name }) {
    console.log(`Job: ${SendNewFormMail.key}`)

    await Mail.send(['emails.confirmationSendForm'], { name }, message => {
      message
        .to(email)
        .from('fernando@zinformatica.com.br', 'Transforma Sebrae')
        .subject('Recebemos seu formulário')
    })
  }
}

module.exports = SendNewFormMail
