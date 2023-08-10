function getFinancialsFromStorage() {
    var financialsJSON = localStorage.getItem("financials");
    return financialsJSON ? JSON.parse(financialsJSON) : [];
}
function addFinancial(financial) {
}
document.addEventListener("DOMContentLoaded", function () {
    var myForm = document.getElementById("#myForm");
    var financialInfo = document.getElementById("financialInfo");
});
var myForm = document.getElementById("#myForm");
myForm.addEventListener("submit", function () {
    // ,myForm?.addEventListener("submit", (event: any) => {
    //    event?.preventDefault(); 
    var tipeInput = document.getElementById("tipe");
    var namaInput = document.getElementById("nama");
    var detailsInput = document.getElementById("details");
    var amountInput = document.getElementById("amount");
    var tipe = tipeInput.value;
    var nama = namaInput.value;
    var details = detailsInput.value;
    var amount = parseFloat(amountInput.value);
    var financial = { tipe: tipe, nama: nama, details: details, amount: amount };
    addFinancialInfo(financial);
    tipeInput.value = "";
    namaInput.value = "";
    detailsInput.value = "";
    amountInput.value = "";
    saveFinancial(financial);
});
function addFinancialInfo(financial) {
    var financialInfo = document.querySelector(".financial-info");
    var info = document.createElement("div");
    //info.classList.add(".financial-info");
    info.innerHTML = "\n        <p>Tipe: ".concat(financial.tipe === 'cash in' ? 'Cash In' : 'Cash Out', "</p>\n        <p>Nama: ").concat(financial.nama, "</p>\n        <p>Details: ").concat(financial.details, "</p>\n        <p>Amount: Rp").concat(financial.amount, "</p>\n        ");
    financialInfo === null || financialInfo === void 0 ? void 0 : financialInfo.appendChild(info);
}
function saveFinancial(financial) {
    var dataFinancials = getFinancialsFromStorage();
    dataFinancials.push(financial);
    localStorage.setItem("financials", JSON.stringify(dataFinancials));
}
var saveFinancials = getFinancialsFromStorage();
saveFinancials.forEach(addFinancialInfo);
