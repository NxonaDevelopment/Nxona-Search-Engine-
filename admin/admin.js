document.addEventListener('DOMContentLoaded', function() {
    // Sample data for the admin panel
    const adminData = {
        totalWebsites: 1245,
        activeAds: 42,
        approvedSites: 1020,
        rejectedSites: 225,
        recentActivity: [
            {
                date: '2023-11-15 14:30',
                action: 'Added Website',
                user: 'admin1',
                details: 'example.com'
            },
            {
                date: '2023-11-15 13:45',
                action: 'Approved Ad',
                user: 'admin2',
                details: 'Promo Campaign #123'
            },
            {
                date: '2023-11-15 11:20',
                action: 'Rejected Website',
                user: 'admin1',
                details: 'spam-site.com'
            },
            {
                date: '2023-11-15 09:15',
                action: 'Removed Ad',
                user: 'admin3',
                details: 'Expired Campaign #456'
            }
        ]
    };
    
    // Update stats
    document.getElementById('total-websites').textContent = adminData.totalWebsites.toLocaleString();
    document.getElementById('active-ads').textContent = adminData.activeAds.toLocaleString();
    document.getElementById('approved-sites').textContent = adminData.approvedSites.toLocaleString();
    document.getElementById('rejected-sites').textContent = adminData.rejectedSites.toLocaleString();
    
    // Populate activity table
    const activityTable = document.getElementById('activity-table');
    adminData.recentActivity.forEach(activity => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${activity.date}</td>
            <td>${activity.action}</td>
            <td>${activity.user}</td>
            <td>${activity.details}</td>
        `;
        activityTable.appendChild(row);
    });
});
