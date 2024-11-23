document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.toggle-icon');
        
        question.addEventListener('click', () => {
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.toggle-icon').textContent = '+'; // Reset icon for other items
                }
            });
            
            // Toggle current item
            const isActive = item.classList.contains('active');
            item.classList.toggle('active', !isActive);
            icon.textContent = isActive ? '+' : '−'; // Change icon to minus when active
        });
    });
});
