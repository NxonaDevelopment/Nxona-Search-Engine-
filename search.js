document.addEventListener('DOMContentLoaded', function() {
    const searchQuery = document.getElementById('search-query');
    const searchForm = document.getElementById('search-form');
    const resultsContainer = document.getElementById('search-results');
    
    // Get the search query from session storage
    const query = sessionStorage.getItem('searchQuery') || '';
    searchQuery.value = query;
    
    // Sample search results (in a real app, this would come from an API)
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
        },
        {
            title: "Building a Search Engine - A Comprehensive Guide",
            url: "https://example.com/search-engine-guide",
            description: "Step-by-step tutorial on building your own search engine from scratch."
        },
        {
            title: "Web Crawling Techniques",
            url: "https://example.com/web-crawling",
            description: "Advanced techniques for efficient web crawling and data collection."
        }
    ];
    
    // Display results
    if (query) {
        const filteredResults = sampleResults.filter(result => 
            result.title.toLowerCase().includes(query.toLowerCase()) || 
            result.description.toLowerCase().includes(query.toLowerCase())
        );
        
        if (filteredResults.length > 0) {
            filteredResults.forEach(result => {
                const resultElement = document.createElement('div');
                resultElement.className = 'result';
                resultElement.innerHTML = `
                    <a href="${result.url}" class="result-title">${result.title}</a>
                    <div class="result-url">${result.url}</div>
                    <div class="result-description">${result.description}</div>
                `;
                resultsContainer.appendChild(resultElement);
            });
        } else {
            resultsContainer.innerHTML = '<p>No results found for your search.</p>';
        }
    } else {
        resultsContainer.innerHTML = '<p>Please enter a search query.</p>';
    }
    
    // Handle new searches
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const newQuery = searchQuery.value.trim();
        if (newQuery) {
            sessionStorage.setItem('searchQuery', newQuery);
            // Refresh the page to show new results
            window.location.reload();
        }
    });
});
