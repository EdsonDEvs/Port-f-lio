// Dados para internacionalização
const languageData = {
    "pt": {
        "about": "Sobre Mim",
        "projects": "Projetos",
        "contact": "Contato",
        "header": "Desenvolvedor Full-Stack | Apaixonado por Tecnologia",
        "aboutMeContent": "Meu nome é Edson da Silva Leandro. Sou desenvolvedor com experiência em criação de aplicações web. Estou sempre em busca de novos desafios e oportunidades para aprimorar minhas habilidades. Meu foco principal é o desenvolvimento de software utilizando tecnologias como:",
        "project1": "Sistema completo para gestão de assistência técnica de informática com CRUD de serviços, ordens de serviço, controle financeiro, chamados/tickets e geração automática de PDFs. Desenvolvido com Node.js, React, SQLite e Firebase.",
        "project2": "Sistema financeiro completo com dashboard interativo, controle de receitas/despesas, categorização automática, relatórios detalhados e autenticação segura. Desenvolvido com TypeScript, React, Node.js e PostgreSQL.",
        "project3": "Pokedex interativa e responsiva consumindo a PokeAPI para exibir informações detalhadas dos Pokémon. Inclui sistema de busca avançada, filtros por tipo, geração e estatísticas, com design moderno inspirado no anime.",
        "contactForm": {
            "name": "Nome completo:",
            "email": "Email:",
            "message": "Mensagem:",
            "button": "Enviar Mensagem",
            "success": "Mensagem enviada com sucesso!",
            "error": "Erro ao enviar mensagem. Tente novamente."
        },
        "downloadCV": "Baixar Currículo",
        "footer": "Desenvolvido por Edson da Silva Leandro",
        "navButtons": {
            "about": "Sobre_Mim",
            "projects": "Projetos", 
            "contact": "Contato"
        },
        "buttons": {
            "viewCode": "Ver Código",
            "viewDemo": "Ver Demo"
        }
    },
    "en": {
        "about": "About Me",
        "projects": "Projects",
        "contact": "Contact",
        "header": "Full-Stack Developer | Passionate about Technology",
        "aboutMeContent": "My name is Edson da Silva Leandro. I am a developer with experience in building web applications. I am always looking for new challenges and opportunities to improve my skills. My main focus is software development using technologies such as:",
        "project1": "Complete IT technical support management system with CRUD services, work orders, financial control, tickets/support calls and automatic PDF generation. Developed with Node.js, React, SQLite and Firebase.",
        "project2": "Complete financial system with interactive dashboard, revenue/expense control, automatic categorization, detailed reports and secure authentication. Developed with TypeScript, React, Node.js and PostgreSQL.",
        "project3": "Interactive and responsive Pokedex consuming PokeAPI to display detailed Pokémon information. Includes advanced search system, filters by type, generation and statistics, with modern anime-inspired design.",
        "contactForm": {
            "name": "Name:",
            "email": "Email:",
            "message": "Message:",
            "button": "Send Message",
            "success": "Message sent successfully!",
            "error": "Error sending message. Please try again."
        },
        "downloadCV": "Download CV",
        "footer": "Developed by Edson da Silva Leandro",
        "navButtons": {
            "about": "About_Me",
            "projects": "Projects",
            "contact": "Contact"
        },
        "buttons": {
            "viewCode": "View Code",
            "viewDemo": "View Demo"
        }
    },
    "es": {
        "about": "Sobre Mí",
        "projects": "Proyectos",
        "contact": "Contacto",
        "header": "Desarrollador Full-Stack | Apasionado por la tecnología",
        "aboutMeContent": "Mi nombre es Edson da Silva Leandro. Soy desarrollador con experiencia en la creación de aplicaciones web. Siempre estoy buscando nuevos desafíos y oportunidades para mejorar mis habilidades. Mi enfoque principal es el desarrollo de software utilizando tecnologías como:",
        "project1": "Sistema completo para gestión de asistencia técnica informática con CRUD de servicios, órdenes de trabajo, control financiero, tickets/llamadas de soporte y generación automática de PDFs. Desarrollado con Node.js, React, SQLite y Firebase.",
        "project2": "Sistema financiero completo con dashboard interactivo, control de ingresos/gastos, categorización automática, informes detallados y autenticación segura. Desarrollado con TypeScript, React, Node.js y PostgreSQL.",
        "project3": "Pokedex interactiva y responsiva consumiendo PokeAPI para mostrar información detallada de Pokémon. Incluye sistema de búsqueda avanzada, filtros por tipo, generación y estadísticas, con diseño moderno inspirado en el anime.",
        "contactForm": {
            "name": "Nombre:",
            "email": "Correo Electrónico:",
            "message": "Mensaje:",
            "button": "Enviar Mensaje",
            "success": "¡Mensaje enviado con éxito!",
            "error": "Error al enviar el mensaje. Por favor, inténtalo de nuevo."
        },
        "downloadCV": "Descargar CV",
        "footer": "Desarrollado por Edson da Silva Leandro",
        "navButtons": {
            "about": "Sobre_Mí",
            "projects": "Proyectos",
            "contact": "Contacto"
        },
        "buttons": {
            "viewCode": "Ver Código",
            "viewDemo": "Ver Demo"
        }
    }
};

// Elementos DOM
const typedText = document.querySelector('#typed-text');
const aboutText = document.querySelector('#typed-about');
const currentYear = document.getElementById('current-year');
const downloadButton = document.querySelector('a[download]');
const contactForm = document.getElementById('contactForm');

// Configuração inicial
let currentLanguage = 'pt';
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = this;
    const feedback = document.createElement('div');
    feedback.id = 'formFeedback';
    form.appendChild(feedback);
    
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form)
    })
    .then(response => {
        feedback.textContent = 'Mensagem enviada com sucesso!';
        feedback.classList.add('success');
        feedback.style.display = 'block';
        form.reset();
    })
    .catch(error => {
        feedback.textContent = 'Erro ao enviar. Tente novamente.';
        feedback.style.display = 'block';
    });
});
// Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    // Atualiza o ano no footer
    currentYear.textContent = new Date().getFullYear();
    
    // Inicia animações
    initAnimations();
    
    // Configura o formulário
    setupContactForm();
    
    // Configura rolagem suave
    setupSmoothScrolling();
    
    // Configura o seletor de idioma
    document.getElementById('language-select').addEventListener('change', changeLanguage);
    
    // Configura o idioma inicial
    changeLanguage();
    
    // Esconde o loader quando a página carregar
    handlePageLoad();
});

// Animação de digitação com cursor
function typeWithCursor(element, text, speed, callback) {
    let i = 0;
    element.textContent = '';
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    cursor.textContent = '|';
    element.appendChild(cursor);
    
    const typing = setInterval(() => {
        if (i < text.length) {
            element.insertBefore(document.createTextNode(text.charAt(i)), cursor);
            i++;
        } else {
            clearInterval(typing);
            cursor.style.display = 'none';
            if (callback) callback();
        }
    }, speed);
}

// Inicia animações
function initAnimations() {
    typeWithCursor(typedText, textToType, 150, () => {
        typeWithCursor(aboutText, languageData[currentLanguage].aboutMeContent, 50);
    });
}

// Mudança de idioma
function changeLanguage() {
    currentLanguage = document.getElementById('language-select').value;
    const langData = languageData[currentLanguage];

    // Atualiza textos estáticos
    document.querySelector('#about h2').textContent = langData.about;
    document.querySelector('#projects h2').textContent = langData.projects;
    document.querySelector('#contact h2').textContent = langData.contact;
    document.querySelector('header p .terminal-text').textContent = langData.header;
    if (downloadButton) downloadButton.textContent = langData.downloadCV;

    // Atualiza conteúdo dinâmico
    aboutText.textContent = '';
    typeWithCursor(aboutText, langData.aboutMeContent, 50);

    // Atualiza projetos
    const projectDescriptions = document.querySelectorAll('.project-item p');
    if (projectDescriptions.length >= 3) {
        projectDescriptions[0].textContent = langData.project1;
        projectDescriptions[1].textContent = langData.project2;
        projectDescriptions[2].textContent = langData.project3;
    }

    // Atualiza botões de navegação
    const navButtons = document.querySelectorAll('.digital-button');
    if (navButtons.length >= 3) {
        navButtons[0].textContent = langData.navButtons.about;
        navButtons[1].textContent = langData.navButtons.projects;
        navButtons[2].textContent = langData.navButtons.contact;
    }

    // Atualiza botões dos projetos
    const projectButtons = document.querySelectorAll('.project-links .button');
    projectButtons.forEach((button, index) => {
        if (button.textContent.includes('Código') || button.textContent.includes('Code')) {
            button.textContent = langData.buttons.viewCode;
        } else if (button.textContent.includes('Demo')) {
            button.textContent = langData.buttons.viewDemo;
        }
    });

    // Atualiza formulário
    if (contactForm) {
        document.querySelector('label[for="name"]').textContent = langData.contactForm.name;
        document.querySelector('label[for="email"]').textContent = langData.contactForm.email;
        document.querySelector('label[for="message"]').textContent = langData.contactForm.message;
        document.querySelector('#contactForm button').textContent = langData.contactForm.button;
    }

    // Atualiza footer
    document.querySelector('.copyright p').innerHTML = `&copy; ${new Date().getFullYear()} - ${langData.footer}`;
}

// Configura o formulário de contato
function setupContactForm() {
    if (!contactForm) return;
    
    // Verifica parâmetros da URL para mensagens de sucesso/erro
    const urlParams = new URLSearchParams(window.location.search);
    const success = urlParams.get('success');
    
    if (success === 'true') {
        showMessage('success', languageData[currentLanguage].contactForm.success);
    } else if (success === 'false') {
        showMessage('error', languageData[currentLanguage].contactForm.error);
    }
}

// Mostra mensagens de sucesso/erro
function showMessage(type, text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `${type}-message`;
    messageDiv.textContent = text;
    
    contactForm.insertBefore(messageDiv, contactForm.firstChild);
    
    // Remove a mensagem após 5 segundos
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        setTimeout(() => {
            messageDiv.remove();
        }, 500);
    }, 5000);
}

// Configura rolagem suave
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Atualiza a URL sem recarregar a página
                if (history.pushState) {
                    history.pushState(null, null, targetId);
                } else {
                    window.location.hash = targetId;
                }
            }
        });
    });
}

// Esconde o loader quando a página carrega
function handlePageLoad() {
    window.addEventListener('load', function() {
        setTimeout(() => {
            document.querySelector('.loading').style.opacity = '0';
            setTimeout(() => {
                document.querySelector('.loading').style.display = 'none';
            }, 500);
        }, 800);
    });
}

// Variável global para o texto a ser digitado
const textToType = "Edson da Silva Leandro";