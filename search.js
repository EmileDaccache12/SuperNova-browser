document.addEventListener("DOMContentLoaded", function() {
    const search = document.getElementById("search");
    const search_btn = document.getElementById("search-btn");

    // Start disabled if input is empty
    search_btn.disabled = true;
    search_btn.style.cursor = "not-allowed";

    function search_web(event) {
        if (event) event.preventDefault(); // avoid any default navigation
        const userinput = search.value.trim();
        if (userinput === "") return;
        const url = "https://www.google.com/search?q=" + encodeURIComponent(userinput);
        // open in new tab safely
        window.open(url, "_blank", "noopener,noreferrer");
        search.value = "";
        search_btn.disabled = true;
        search_btn.style.cursor = "not-allowed";
    }

    search_btn.addEventListener("click", search_web);

    search.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            search_web(event);
        }
    });

    search.addEventListener("input", function() {
        if (search.value.trim() !== "") {
            search_btn.style.cursor = "pointer";
            search_btn.disabled = false;
        } else {
            search_btn.style.cursor = "not-allowed";
            search_btn.disabled = true;
        }
    });
});
