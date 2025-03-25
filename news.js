const newsSection = document.getElementById('news-list');

async function fetchNews() {
    try {
        const response = await axios.get(' https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyAleKkrIDfnbnxOYTXd1oZGdvfbofh3w6g&part=snippet,contentDetails,statistics,status');
        const newsData = response.data.articles;

        newsSection.innerHTML = '';
        newsData.forEach(article => {
            const newsItem = document.createElement('li');
            newsItem.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.description}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            `;
            newsSection.appendChild(newsItem);
        });
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

// Call the fetchNews function initially and on page refresh
fetchNews();
window.addEventListener('load',fetchNews);