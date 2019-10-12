var mcuForm = document.getElementById('mcuForm')
var mcuFormSubmitConfirmation = document.getElementById(
  'mcuFormSubmitConfirmation'
)

mcuForm.addEventListener('submit', processMcuForm)

function processMcuForm(e) {
  e.preventDefault()
  var inputs = mcuForm.elements
  var formBody = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    ziptown: '',
    family: 'Are you a family (group of 2 or more) or single?',
    physicianPhone:
      'Did you ever speak to a physician over the phone before seeing a doctor?',
    medi24: 'Have you ever heard of Medi24 or MedGate?',
    insuranceReduce:
      'Did you know that using a physician over the phone can reduce your health insurance premiums up to 15%?',
    disturbPhone:
      'Would it disturb you to a physician over the phone before seeing a traditional doctor?'
  }

  for (i = 0; i < inputs.length; i++) {
    if (inputs[i].type !== 'radio') {
      formBody[inputs[i].id] = inputs[i].value.toString()
    } else if (inputs[i].checked) {
      formBody[inputs[i].name] =
        formBody[inputs[i].name] + ' >> ' + inputs[i].value.toString()
    }
  }

  sendToPHPMailer(formBody)
}

function sendToPHPMailer(formBody) {
  var xmlhttp = new XMLHttpRequest()
  var url = 'http://www.singyourcreativity.com/TEMP/server/php/mailer.php'
  var params =
    'first_name=' +
    formBody.first_name +
    '&last_name=' +
    formBody.last_name +
    '&email=' +
    formBody.email +
    '&phone=' +
    formBody.phone +
    '&ziptown=' +
    formBody.ziptown +
    '&family=' +
    formBody.family +
    '&physicianPhone=' +
    formBody.physicianPhone +
    '&medi24=' +
    formBody.medi24 +
    '&insuranceReduce=' +
    formBody.insuranceReduce +
    '&disturbPhone=' +
    formBody.disturbPhone

  xmlhttp.open('POST', url, true)
  xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      mcuForm.reset()
      mcuFormSubmitConfirmation.removeAttribute('hidden')
    }
  }
  xmlhttp.send(params)
}
