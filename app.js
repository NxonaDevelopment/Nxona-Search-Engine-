document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    const searchQuery = document.getElementById('search-query');
    const luckyButton = document.getElementById('lucky-button');
    
    // Sample search data (would normally come from an API)
    const sampleResults = [
        {
            title: "Nxona Search Engine Documentation",
            url: "https://github.com/yourusername/nxona-search",
            description: "Learn how to use and contribute to the Nxona search engine project."
        },
        {
            title: "How Search Engines Work",
            url: "https://en.wikipedia.org/wiki/Search_engine",
            description: "Wikipedia article explaining the fundamentals of web search engines."
        }
    ];
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const query = searchQuery.value.trim();
        if (query) {
            // Store query in session storage to use on results page
            sessionStorage.setItem('searchQuery', query);
            // Redirect to search results page
            window.location.href = 'search.html';
        }
    });
    
    luckyButton.addEventListener('click', function() {
        const query = searchQuery.value.trim();
        if (query) {
            // For demo purposes, redirects to Google's I'm Feeling Lucky
            // In a real implementation, you'd use your own algorithm
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}&btnI`;
        }
    });
});
