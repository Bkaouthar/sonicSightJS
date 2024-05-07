contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  let name = contactName.value;
  let email = contactEmail.value;
  let phone = contactPhone.value;
  let message = contactMsg.value;

  if (!name) {
    alert('Veuillez entrer votre nom.');
    return;
  }

  if (!email) {
    alert('Veuillez entrer votre email.');
    return;
  }

  if (!phone) {
    alert('Veuillez entrer votre numéro de téléphone.');
    return;
  }

  console.log(message);
  if (!message) {
    alert('Veuillez entrer votre message.');
    return;
  }

  alert("Votre formulaire a été soumis avec succès !");

});