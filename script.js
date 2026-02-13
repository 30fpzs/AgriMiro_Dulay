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

        status.innerText - "Analysis complete!";

        let crop = input.includes("rice") ? "RICE" : input.includes("corn") ? "Corn" : "Other Harvest";
        
        const boardWidth = board.offsetWidth;

        createVisualPreview(crop, 10, 10, "#ffd966");
        createVisualPreview()
    });

});