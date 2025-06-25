document.addEventListener('DOMContentLoaded', function() {
    // Efeito de digitação para o título
    const title = document.querySelector('header h1');
    const originalTitle = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typingEffect = setInterval(() => {
        if (i < originalTitle.length) {
            title.textContent += originalTitle.charAt(i);
            i++;
        } else {
            clearInterval(typingEffect);
            title.classList.add('pulse');
        }
    }, 100);

    // Scroll suave para links de navegação
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efeito hover para containers
    document.querySelectorAll('.container').forEach(container => {
        container.addEventListener('mouseenter', () => {
            container.style.transform = 'translateX(5px)';
        });
        container.addEventListener('mouseleave', () => {
            container.style.transform = 'translateX(0)';
        });
    });

    // Formulário de newsletter
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert(`Obrigado por assinar nossa newsletter! Um e-mail foi enviado para ${email}`);
            this.reset();
        });
    }

    // Carregar dados dinâmicos
    setTimeout(() => {
        const features = [
            "Sistema de Combate Tático",
            "Geração Procedural de Mapas",
            "Múltiplos Modelos de Mechas",
            "Sistema de Evolução de Cartas",
            "Eventos Narrativos Ramificados"
        ];
        
        const featuresList = document.createElement('ul');
        featuresList.className = 'features-list';
        featuresList.style.margin = '2rem 0';
        featuresList.style.paddingLeft = '2rem';
        
        features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = `⚡ ${feature}`;
            li.style.marginBottom = '0.8rem';
            li.style.color = 'var(--color-highlight)';
            li.style.fontFamily = 'var(--font-main)';
            featuresList.appendChild(li);
        });
        
        const systemSection = document.querySelector('#gameplay h2');
        if (systemSection) {
            systemSection.insertAdjacentElement('afterend', featuresList);
        }
    }, 1500);
});

