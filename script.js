const typedText = document.querySelector('#typed-text');
const aboutText = document.querySelector('#typed-about');
const textToType = "Edson da Silva Leandro";
const aboutTextContent = "Meu nome é Edson da Silva Leandro. Sou desenvolvedor com experiência em criação de aplicações web. Estou sempre em busca de novos desafios e oportunidades para aprimorar minhas habilidades. Meu foco principal é o desenvolvimento de software utilizando tecnologias como:";
let index = 0;
let aboutIndex = 0;

function typeText() {
    if (index < textToType.length) {
        typedText.textContent += textToType.charAt(index);
        index++;
        setTimeout(typeText, 150); // Ajusta a velocidade da digitação
    } else {
        typeAboutText(); // Inicia a digitação na seção 'Sobre Mim' depois de terminar o título
    }
}

function typeAboutText() {
    if (aboutIndex < aboutTextContent.length) {
        aboutText.textContent += aboutTextContent.charAt(aboutIndex);
        aboutIndex++;
        setTimeout(typeAboutText, 100); // Velocidade ajustada para o texto de "Sobre Mim"
    }
}

document.addEventListener("DOMContentLoaded", function() {
    typeText();
});

document.addEventListener("DOMContentLoaded", function() {
    typeText(); // Inicia a digitação automática do nome

    // Adiciona evento para o envio do formulário de contato
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert(`Obrigado pela mensagem, ${name}! Entraremos em contato em breve.`);
            // Limpar campos após envio
            contactForm.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
const languageData = {
    "pt": {
        "about": "Sobre Mim",
        "projects": "Projetos",
        "contact": "Contato",
        "header": "Desenvolvedor Full-Stack | Apaixonado por Tecnologia",
        "aboutMeContent": "Meu nome é Edson da Silva Leandro. Sou desenvolvedor com experiência em criação de aplicações web. Estou sempre em busca de novos desafios e oportunidades para aprimorar minhas habilidades. Meu foco principal é o desenvolvimento de software utilizando tecnologias como:",
        "project1": "Gerenciador de tarefas com a funcionalidade de adicionar e excluir tarefas. Feito com JavaScript.",
        "project2": "Um blog pessoal para compartilhar experiências e aprendizados. Criado com HTML, CSS e JavaScript.",
        "project3": "API que fornece informações climáticas em tempo real usando OpenWeather API. Desenvolvido com JavaScript e Fetch API.",
        "contactForm": {
            "name": "Nome:",
            "email": "Email:",
            "message": "Mensagem:",
            "button": "Enviar Mensagem"
        },
        "footer": "&copy; 2024 - Desenvolvido por Edson da Silva Leandro"
    },
    "en": {
        "about": "About Me",
        "projects": "Projects",
        "contact": "Contact",
        "header" : "Full-Stack Developer | Passionate about Technology",
        "aboutMeContent": "My name is Edson da Silva Leandro. I am a developer with experience in building web applications. I am always looking for new challenges and opportunities to improve my skills. My main focus is software development using technologies such as:",
        "project1": "Task manager with the functionality to add and delete tasks. Made with JavaScript.",
        "project2": "A personal blog to share experiences and learnings. Created with HTML, CSS, and JavaScript.",
        "project3": "API that provides real-time weather information using the OpenWeather API. Developed with JavaScript and Fetch API.",
        "contactForm": {
            "name": "Name:",
            "email": "Email:",
            "message": "Message:",
            "button": "Send Message"
        },
        "footer": "&copy; 2024 - Developed by Edson da Silva Leandro"
    },
    "es": {
        "about": "Sobre Mí",
        "projects": "Proyectos",
        "contact": "Contacto",
        "header": "Desarrollador Full-Stack | Apasionado por la tecnología",
        "aboutMeContent": "Mi nombre es Edson da Silva Leandro. Soy desarrollador con experiencia en la creación de aplicaciones web. Siempre estoy buscando nuevos desafíos y oportunidades para mejorar mis habilidades. Mi enfoque principal es el desarrollo de software utilizando tecnologías como:",
        "project1": "Gestor de tareas con la funcionalidad de agregar y eliminar tareas. Hecho con JavaScript.",
        "project2": "Un blog personal para compartir experiencias y aprendizajes. Creado con HTML, CSS y JavaScript.",
        "project3": "API que proporciona información meteorológica en tiempo real usando la API de OpenWeather. Desarrollado con JavaScript y Fetch API.",
        "contactForm": {
            "name": "Nombre:",
            "email": "Correo Electrónico:",
            "message": "Mensaje:",
            "button": "Enviar Mensaje"
        },
        "footer": "&copy; 2024 - Desarrollado por Edson da Silva Leandro"
    }
};

function changeLanguage() {
    const selectedLanguage = document.getElementById('language-select').value;

    document.querySelector('#about h2').textContent = languageData[selectedLanguage].about;
    document.querySelector('#projects h2').textContent = languageData[selectedLanguage].projects;
    document.querySelector('#contact h2').textContent = languageData[selectedLanguage].contact;
    document.querySelector('header h1').textContent = languageData[selectedLanguage].header;

    // Atualizar conteúdo da seção "Sobre Mim"
    document.getElementById('typed-about').textContent = languageData[selectedLanguage].aboutMeContent;

    // Atualizar descrição dos projetos
    const projectDescriptions = document.querySelectorAll('.project-item p');
    projectDescriptions[0].textContent = languageData[selectedLanguage].project1;
    projectDescriptions[1].textContent = languageData[selectedLanguage].project2;
    projectDescriptions[2].textContent = languageData[selectedLanguage].project3;

    // Atualizar formulário de contato
    document.querySelector('label[for="name"]').textContent = languageData[selectedLanguage].contactForm.name;
    document.querySelector('label[for="email"]').textContent = languageData[selectedLanguage].contactForm.email;
    document.querySelector('label[for="message"]').textContent = languageData[selectedLanguage].contactForm.message;
    document.querySelector('#contactForm button').textContent = languageData[selectedLanguage].contactForm.button;

    // Atualizar rodapé
    document.querySelector('footer .contact-info p:last-child').innerHTML = languageData[selectedLanguage].footer;
}

