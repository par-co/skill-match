import { redirect } from "react-router-dom";

export const contactAction = async ({ request }) => {
  const data = await request.formData();

  const email = data.get("email")?.trim();
  const message = data.get("message")?.trim();

  const emptyOrInvalid = {};

  //validate email
  const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    emptyOrInvalid.email = "Email is required.";
  } else if (!emailRegExp.test(email)) {
    emptyOrInvalid.email = "Please provide a valid email.";
  }

  //validate message
  if (!message) {
    emptyOrInvalid.message = "Message is required.";
  }

  //return emptyOrInvalid to inform the user
  if (emptyOrInvalid.email || emptyOrInvalid.message) {
    return emptyOrInvalid;
  }

  //submit the form if the email and message are valid
  const submission = { email: email, message: message };

  // using json-server
  // json-server -p 8000 -w ./data/db.json
  const url = "http://localhost:8000";

  // using mockapi
  // const url = import.meta.env.VITE_API_BASE_URL;

  const response = await fetch(`${url}/contacts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(submission),
  });

  if (!response.ok) {
    throw Error("Failed to submit the form.");
  }

  return redirect("/contact/confirmation");
};
