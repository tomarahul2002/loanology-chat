(async function () {
  const response = await fetch("/api/token");
  const { token } = await response.json();

  window.WebChat.renderWebChat(
    {
      directLine: window.WebChat.createDirectLine({ token }),
      styleOptions: {
        hideUploadButton: true
      }
    },
    document.getElementById("chat-container")
  );
})();
