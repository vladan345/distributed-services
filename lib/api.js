export const sendContactForm = async (gReCaptchaToken, data) =>
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify({ data: data, gReCaptchaToken: gReCaptchaToken }),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
