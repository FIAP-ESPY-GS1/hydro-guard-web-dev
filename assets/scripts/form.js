const form = document.getElementById("contact-form");

const formSubmit = (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  console.log("Nome:", name);
  console.log("Email:", email);
  console.log("Mensagem:", message);

  alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);

  event.target.reset();
};

form.addEventListener("submit", formSubmit);
