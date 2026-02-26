document.addEventListener("DOMContentLoaded", function() {
    var faqItems = document.querySelectorAll('.faqs-item');

    faqItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // Collapse all FAQ items
            faqItems.forEach(function(faqItem) {
                if (faqItem !== item) {
                    var collapse = faqItem.querySelector('.collapse');
                    collapse.style.maxHeight = null;
                }
            });

            // Toggle the clicked FAQ item
            var collapse = item.querySelector('.collapse');
            if (collapse.style.maxHeight) {
                collapse.style.maxHeight = null;
            } else {
                collapse.style.maxHeight = collapse.scrollHeight + "px";
            }
        });
    });
});
