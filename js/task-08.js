const form = document.querySelector("form.login-form");

form.addEventListener("submit", (event) => {
      event.preventDefault();
      const { elements: { email, password } } = event.currentTarget;
      if (email.value.length === 0 || password.value.length === 0) 
      alert("Uzupełnij puste pola formularza!");
      if (email.value.length !== 0 || password.value.length !== 0) {
            console.log({ email: email.value, password: password.value })
      };
      event.currentTarget.reset();
})

// DONE