document.addEventListener("DOMContentLoaded" , function() {
    const search = document.getElementById("search");
    const search_btn = document.getElementById("search-btn");

    function search_web() {
        const userinput = search.value.trim()

        if (userinput === "") return;

        window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(userinput);

        search.value = "";
    }

    search_btn.addEventListener("click" , search_web);

    search.addEventListener("keydown" , function(event) {
        if (event.key === "Enter") {
            search_web();
        }
    });
});