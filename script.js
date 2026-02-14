document.getElementById("processThruMiro").addEventListener("click", function()
{
    const input = document.getElementById("farmerInput").value;
    const board = document.getElementById("virtualPreviewBoard").value;
    const status = document.getElementById("statusMsg");

    if(!input)
    {
        return alert("Please enter harvest details.");
    }

    status.innerText = "Processing through Miro...";
    board.innerHTML = ""; // Clear previous content

    setTimeout(() => {
        status.innerText = "🧠 Analyzing Market & Logistics...";
        setTimeout(() => {

            status.innerText - "Analysis complete!";

            let crop = input.includes("rice") ? "RICE" : input.includes("corn") ? "Corn" : "Other Harvest";
        
            const boardWidth = board.offsetWidth;

            createVisualPreview(crop, 10, 10, "#ffd966");
            createVisualPreview("Best Market: Manila", (boardWidth > 300 ? 120 : 100), 100, "#91dfd2");
            createVirtualPreview("🚛 Route: NLEX Clear", 10, 190, "#a6ccf5");
            console.log("AgriMiro Log: Meta-tags synced.");
        }, 1200);
    }, 800);
});

function createVisualPreview(text, x, y, color) 
{
    const note = document.createElement("div");
    note.className="visual-note";
    note.style.left = x + "px";
    note.style.top = y + "px";
    note.style.backgroundColor = color;
    note.innerText = text;
    document.getElementById("virtualPreviewBoard").appendChild(note);
}