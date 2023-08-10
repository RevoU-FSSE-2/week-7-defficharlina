interface Financial {
    tipe: "cash in" | "cash out";
    nama: string;
    details: string;
    amount: number;
}

function getFinancialsFromStorage(): Financial[] {
    const financialsJSON = localStorage.getItem("financials");
    return financialsJSON ? JSON.parse(financialsJSON) : [];
}

function addFinancial(financial: Financial) {

}

document.addEventListener("DOMContentLoaded", () => {
    const myForm = document.getElementById("#myForm") as HTMLFormElement;
    let financialInfo = document.getElementById("financialInfo");
});


const myForm = document.getElementById("myForm") as HTMLFormElement;
myForm.addEventListener("submit", () => {


// ,myForm?.addEventListener("submit", (event: any) => {
//    event?.preventDefault(); 
    const tipeInput = document.getElementById("tipe") as HTMLSelectElement;
    const namaInput = document.getElementById("nama") as HTMLInputElement;
    const detailsInput = document.getElementById("details") as HTMLInputElement;
    const amountInput = document.getElementById("amount") as HTMLInputElement;

    const tipe = tipeInput.value as "cash in" | "cash out";
    const nama = namaInput.value;
    const details = detailsInput.value;
    const amount = parseFloat(amountInput.value);

    const financial: Financial = { tipe, nama, details, amount};
    addFinancialInfo(financial);

    tipeInput.value = "";
    namaInput.value = "";
    detailsInput.value = "";
    amountInput.value = "";

    saveFinancial(financial);

});

    function addFinancialInfo(financial: Financial) {
        const financialInfo = document.querySelector(".financial-info");
        const info = document.createElement("div");
        //info.classList.add(".financial-info");

        info.innerHTML = `
        <p>Tipe: ${financial.tipe === 'cash in' ? 'Cash In' : 'Cash Out' }</p>
        <p>Nama: ${financial.nama}</p>
        <p>Details: ${financial.details}</p>
        <p>Amount: Rp${financial.amount}</p>
        `;

        financialInfo?.appendChild(info);
    }

    function saveFinancial(financial: Financial) {
        const dataFinancials = getFinancialsFromStorage();
        dataFinancials.push(financial);
        localStorage.setItem("financials", JSON.stringify(dataFinancials));
    }

    const saveFinancials = getFinancialsFromStorage();
    saveFinancials.forEach(addFinancialInfo);

