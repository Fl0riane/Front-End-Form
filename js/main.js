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
      "https://github.com/Fl0riane/Back-End-Form/blob/00baf25651b837d1b838de5c4a6f738f8564c449/index.js/form",
      {
        firstname,
        lastname,
        email,
        message,
      }
    );
  });
});
