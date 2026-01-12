(async function () {
  const response = await fetch("/api/token");
  const { token } = await response.json();

  const styleSet = window.WebChat.createStyleSet({
    rootHeight: "100%",
    rootWidth: "100%",
    backgroundColor: "#f9f9f9",
    sendBoxBackground: "#ffffff",
    sendBoxHeight: 48
  });

  window.WebChat.renderWebChat(
    {
      directLine: window.WebChat.createDirectLine({ token }),
      styleSet,
      styleOptions: {
        hideUploadButton: true,
        sendBoxTextWrap: true
      }
    },
    document.getElementById("chat-container")
  );
})();