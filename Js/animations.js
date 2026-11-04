(() => {
  const defaultAlertMessage = "Verifique os dados informados.";
  const defaultLoaderMessage = "Carregando demonstração…";

  function showAlert(message = defaultAlertMessage) {
    const alertBox = document.getElementById("alert-box");
    const alertMessage = document.getElementById("alert-message");
    if (!alertBox || !alertMessage) return;

    alertMessage.textContent =
      typeof message === "string" && message.trim() ? message : defaultAlertMessage;
    alertBox.hidden = false;
  }

  function hideAlert() {
    const alertBox = document.getElementById("alert-box");
    if (alertBox) alertBox.hidden = true;
  }

  function showLoader(message = defaultLoaderMessage) {
    const loader = document.getElementById("demo-loader");
    const loaderMessage = document.getElementById("loader-message");
    if (!loader) return;

    if (loaderMessage) {
      loaderMessage.textContent =
        typeof message === "string" && message.trim() ? message : defaultLoaderMessage;
    }
    loader.hidden = false;
  }

  function hideLoader() {
    const loader = document.getElementById("demo-loader");
    if (loader) loader.hidden = true;
  }

  window.ChatAnimations = { showAlert, hideAlert, showLoader, hideLoader };
})();
