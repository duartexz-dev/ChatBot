function showAlert(aviso) {
    document.getElementById("alert-message").textContent = aviso;
    document.getElementById("alert-box").style.display = "flex";

} function CloseAlert() {
    document.getElementById("alert-box").style.display = "none";
}