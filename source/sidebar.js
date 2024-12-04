const currentPage = window.location.pathname.split("/").pop();

        const menuLinks = document.querySelectorAll(".menubased");
        menuLinks.forEach(link => {
            if (link.getAttribute("href") === currentPage) {
                link.classList.add("active");
            } 
            else {
                link.classList.remove("active");

            }
        });
    
console.log(currentPage);
console.log(menuLinks);
