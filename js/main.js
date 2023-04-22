document.addEventListener("DOMContentLoaded", () => {
  console.log("document loaded");

  document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();

    console.log("submit", event);
    const firstname = document.querySelector("#firstname").value;
    const lastname = document.querySelector("#lastname").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    console.log({
      firstname,
      lastname,
      email,
      message,
    });

    const response = await axios.post(
      "https://site--back-end-formulaire--p2d7k4xwpzzq.code.run/form",
      {
        firstname,
        lastname,
        email,
        message,
      }
    );
  });
});
