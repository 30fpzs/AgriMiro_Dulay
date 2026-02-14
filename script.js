//mock up data set since I do not have access to a wider and actual database

const DATABASE = 
[
    { location: "Malolos Market", province: "bulacan", price: "20-25", unit: " Php per kilogram", dist: "2 Km", keywords: ["rice", "palay", "corn", "mais"] },
    { location: "Meycauayan Hub", province: "bulacan", price: "18-20", unit: " Php per kilogram", dist: "3.6 Km", keywords: ["rice", "palay", "corn", "mais"] },
    { location: "Manila Port", province: "manila", price: "28-30", unit: "Php per kilogram", dist: "15 Km", keywords: ["rice", "palay", "corn", "mais"] },
    { location: "Isabela Grain Ctr", province: "isabela", price: "15-18", unit: "Php per kilogram", dist: "120 Km", keywords: ["rice", "palay", "corn", "mais"] },
    { location: "Farm to Table PH HQ", province: "manila", price: "28-30", unit: " Php per kilogram", dist: "Contact: 0917 515 5117", keywords: ["rice", "palay", "corn", "mais"] }
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

            const matches = DATABASE.filter(item => 
            {
                const locationMatch = input.includes(item.province);
                const cropMatch = item.keywords.some(k => input.includes(k));

                return locationMatch && cropMatch;
            });

            tableBody.innerHTML ="";

            if(matches.length > 0)
            {
                status.innerText = "Mga nahanap na resulta sa " + input.toUpperCase() + "!";
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
});

