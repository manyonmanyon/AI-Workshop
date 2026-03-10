class CourseCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    display: block; /* Important for layout */
                }
                .card {
                    background: var(--light-color, #ffffff);
                    border-radius: 15px;
                    padding: 2.5rem;
                    box-shadow: 0 10px 25px -10px var(--shadow-color, rgba(0, 0, 0, 0.1)), 0 20px 40px -20px var(--shadow-color, rgba(0, 0, 0, 0.1));
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    height: 100%; /* Make card fill the grid area */
                    box-sizing: border-box; /* Include padding and border in the element's total width and height */
                    display: flex;
                    flex-direction: column;
                }
                .card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.15), 0 30px 60px -20px rgba(0, 0, 0, 0.2);
                }
                .card-content {
                    flex-grow: 1;
                }
                .icon-container {
                    text-align: right;
                }
                .icon-container .material-icons {
                    font-size: 3rem;
                    color: var(--primary-color, #3d5afe);
                    opacity: 0.7;
                }
                h3 {
                    font-family: var(--font-heading, 'Noto Sans JP', sans-serif);
                    color: var(--primary-color, #3d5afe);
                    margin-top: 0;
                    font-size: 1.5rem;
                }
                p {
                    font-family: var(--font-body, 'Roboto', sans-serif);
                    color: var(--dark-color, #212121);
                }
            </style>
            <div class="card">
                <div class="card-content">
                    <h3>${this.getAttribute('title')}</h3>
                    <p>${this.getAttribute('description')}</p>
                </div>
                <div class="icon-container">
                     <span class="material-icons">${this.getAttribute('icon')}</span>
                </div>
            </div>
        `;

        shadow.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('course-card', CourseCard);

// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            // Toggle current item
            item.classList.toggle('active');
        });
    });
});
