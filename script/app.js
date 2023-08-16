"use strict";
function getFinancialsFromStorage() {
    const financialsJSON = localStorage.getItem("financials");
    return financialsJSON ? JSON.parse(financialsJSON) : [];
}
function addFinancial(financial) {
}
document.addEventListener("DOMContentLoaded", () => {
    const myForm = document.getElementById("#myForm");
    let financialInfo = document.getElementById("financialInfo");
});
const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", () => {
    // ,myForm?.addEventListener("submit", (event: any) => {
    //    event?.preventDefault(); 
    const tipeInput = document.getElementById("tipe");
    const namaInput = document.getElementById("nama");
    const detailsInput = document.getElementById("details");
    const amountInput = document.getElementById("amount");
    const tipe = tipeInput.value;
    const nama = namaInput.value;
    const details = detailsInput.value;
    const amount = parseFloat(amountInput.value);
    const financial = { tipe, nama, details, amount };
    addFinancialInfo(financial);
    tipeInput.value = "";
    namaInput.value = "";
    detailsInput.value = "";
    amountInput.value = "";
    saveFinancial(financial);
});
function addFinancialInfo(financial) {
    const financialInfo = document.querySelector(".financial-info");
    const info = document.createElement("div");
    //info.classList.add(".financial-info");
    info.innerHTML = `
        <p>Tipe: ${financial.tipe === 'cash in' ? 'Cash In' : 'Cash Out'}</p>
        <p>Nama: ${financial.nama}</p>
        <p>Details: ${financial.details}</p>
        <p>Amount: Rp${financial.amount}</p>
        `;
    financialInfo === null || financialInfo === void 0 ? void 0 : financialInfo.appendChild(info);
}
function saveFinancial(financial) {
    const dataFinancials = getFinancialsFromStorage();
    dataFinancials.push(financial);
    localStorage.setItem("financials", JSON.stringify(dataFinancials));
}
const saveFinancials = getFinancialsFromStorage();
saveFinancials.forEach(addFinancialInfo);
