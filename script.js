//mock up data set since I do not have access to a wider and actual database

const DATABASE = 
[
    { location: "Malolos Market", price: "20-25", unit: "Pesos per kilogram", dist: "2 Km", keywords: ["bulacan", "rice"] },
    { location: "Meycauayan Hub", price: "18-20", unit: "Pesos per kilogram", dist: "3.6 Km", keywords: ["bulacan", "rice"] },
    { location: "Manila Port", price: "28-30", unit: "Pesos per kilogram", dist: "15 Km", keywords: ["manila", "rice"] },
    { location: "Isabela Grain Ctr", price: "15-18", unit: "Pesos per kilogram", dist: "120 Km", keywords: ["isabela", "corn"] },
    { location: "Farm to Table PH HQ", price: "28-30", unit: "Pesos per kilogram", dist: "Contact: 0917 515 5117", keywords: ["manila", "rice"] }
];

document.getElementById("searchBtn").addEventListener("click", function() {

    const input = document.getElementById("searchInput").value.toLowerCase();
    const status = document.getElementById("miroStatus");
    const resultSection = document.getElementById("resultsSection");
    const tableBody = document.getElementById("tableBody");

    if(!input) return alert("Mag lagay ng produkto at lugar");

    status.innerText = "Input received..";
    resultSection.classList.add("hidden");

    setTimeout(() => {
        status.innerText = "Naghahanap sa internet...";

        setTimeout(() => {
            status.innerText = "Naghahanap sa mga lokal na supplier...";

            setTimeout(() => {
                status.innerText = "Nakahanap ng mga resulta!";

                const matches = DATABASE.filter(item =>
                    input.includes(item.keywords[0]) && input.includes(item.keywords[1])
                );

                tableBody.innerHTML ="";

                if(matches.length > 0)
                {
                    matches.forEach(match => {
                        let row = `<tr>
                            <td>${match.location}</td>
                            <td>${match.price}<br><small>${match.unit}</small></td>
                            <td>${match.dist}</td>
                            </tr>`;
                        tableBody.innerHTML += row;
                    });
                    resultSection.classList.remove("hidden");
                }

                else
                {
                    status.innerText = "Walang nahanap na merkado na malapit.";
                }
            }, 800);
        }, 800);
    }, 800);
});
