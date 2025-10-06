// Personal Portfolio Chatbot for Luis Martinez Ferraez
// Knowledge base and chatbot functionality

class PortfolioChatbot {
    constructor() {
        this.currentLanguage = 'en';
        this.chatHistory = [];
        this.isOpen = false;
        
        // Knowledge base with Luis's information
        this.knowledgeBase = {
            personal: {
                name: "Luis Martinez Ferraez",
                email: "lemartinezfrz@gmail.com",
                phone: "+1 (301) 337-9242",
                location: "Rockville, MD",
                linkedin: "https://www.linkedin.com/in/luis-martinez-ferr/",
                github: "https://github.com/Stevey150",
                instagram: "https://www.instagram.com/luisest_ban/"
            },
            education: {
                degree: "Bachelor's Degree in Information Science",
                university: "University of Maryland",
                period: "2021 - 2025",
                minor: "Technology Entrepreneurship",
                highSchool: "Walter Johnson High School (2017-2021)"
            },
            experience: [
                {
                    title: "Jr Project Manager Volunteer",
                    company: "The Living Stones Foundation",
                    period: "Jun 2025 - Present",
                    description: "Collaborate with development, UX/UI, and data/AI teams to build a platform connecting Latin American truck drivers with customers needing moving services."
                },
                {
                    title: "Undergraduate Teaching Assistant",
                    company: "University of Maryland",
                    period: "Aug 2024 - May 2025",
                    description: "Provided individualized support to around 80 students in an introductory Python course."
                },
                {
                    title: "Commercial IT Intern",
                    company: "AstraZeneca",
                    period: "May 2024 - Aug 2025",
                    description: "Collaborated with Business Analysts to develop a Salesforce-based patient experience platform for rare disease patients in Colombia and Brazil."
                },
                {
                    title: "Design Engineering Undergraduate Research Intern",
                    company: "First Year Innovation and Research Experience (FIRE)",
                    period: "May 2023 - Jul 2023",
                    description: "Collaborated on high-fidelity mechanized aquatic organism project, utilizing CAD for prototype design and Matlab for kinematics research."
                },
                {
                    title: "Cashier and Food Runner",
                    company: "Fish Taco",
                    period: "May 2022 - Aug 2023",
                    description: "Took customer orders, delivered meals, and coordinated with kitchen staff in Spanish."
                }
            ],
            skills: [
                "Data Analysis", "Python", "Tableau", "Salesforce", "CAD", "Matlab", 
                "Web Development", "Project Management", "Bilingual Communication", 
                "Technical Problem-solving", "User-centered Design"
            ],
            languages: [
                { name: "English", level: "Native/Fluent" },
                { name: "Spanish", level: "Native/Fluent" },
                { name: "French", level: "Fluent" }
            ],
            organizations: [
                "Phi Sigma Kappa Fraternity (Public Relations, Rush Committee)",
                "Society of Hispanic Professional Engineers (Member)"
            ]
        };

        // Bilingual responses
        this.responses = {
            en: {
                greeting: "Hi! I'm Luis's portfolio assistant. I can answer questions about his experience, education, skills, and background. How can I help you?",
                unknown: "I'm not sure about that. You can ask me about Luis's education, work experience, skills, languages, or contact information.",
                help: "I can help you learn about:\n• Luis's education and background\n• Work experience and internships\n• Technical skills and projects\n• Languages and contact information\n\nJust ask me anything!",
                contact: "You can reach Luis at:\n📧 lemartinezfrz@gmail.com\n📱 +1 (301) 337-9242\n📍 Rockville, MD",
                goodbye: "Thanks for your interest in Luis's portfolio! Feel free to reach out directly for opportunities."
            },
            es: {
                greeting: "¡Hola! Soy el asistente del portafolio de Luis. Puedo responder preguntas sobre su experiencia, educación, habilidades y antecedentes. ¿Cómo puedo ayudarte?",
                unknown: "No estoy seguro sobre eso. Puedes preguntarme sobre la educación de Luis, experiencia laboral, habilidades, idiomas o información de contacto.",
                help: "Puedo ayudarte a conocer sobre:\n• Educación y antecedentes de Luis\n• Experiencia laboral y pasantías\n• Habilidades técnicas y proyectos\n• Idiomas e información de contacto\n\n¡Solo pregúntame!",
                contact: "Puedes contactar a Luis en:\n📧 lemartinezfrz@gmail.com\n📱 +1 (301) 337-9242\n📍 Rockville, MD",
                goodbye: "¡Gracias por tu interés en el portafolio de Luis! No dudes en contactarlo directamente para oportunidades."
            }
        };

        // Question patterns for intelligent matching (order matters - more specific first)
        this.patterns = {
            greeting: /\b(hello|hi|hey|hola|buenos días|buenas tardes|good morning|good afternoon)\b/i,
            education: /\b(education|school|university|degree|study|estudios|universidad|grado|educación)\b/i,
            experience: /\b(experience|work|job|internship|employment|experiencia|trabajo|empleo|pasantía)\b/i,
            skills: /\b(skills|abilities|programming|tech|habilidades|programación|tecnología|python|tableau|salesforce|matlab|cad)\b/i,
            contact: /\b(contact|email|phone|reach|contacto|teléfono|correo|comunicar)\b/i,
            languages: /\b(languages|speak|bilingual|idiomas|hablar|bilingüe|english|spanish|french|inglés|español|francés)\b/i,
            projects: /\b(projects|portfolio|proyectos|portafolio)\b/i,
            goodbye: /\b(bye|goodbye|thanks|thank you|adiós|gracias|hasta luego)\b/i,
            help: /\b(help|what.*can.*you|ayuda|qué.*puedes)\b/i
        };
    }

    // Initialize the chatbot
    init() {
        this.createChatWidget();
        this.bindEvents();
        
        // Listen for language changes
        const languageToggle = document.getElementById('languageToggle');
        if (languageToggle) {
            languageToggle.addEventListener('change', () => {
                this.currentLanguage = languageToggle.checked ? 'es' : 'en';
            });
        }
    }

    // Create the chat widget HTML
    createChatWidget() {
        const chatWidget = document.createElement('div');
        chatWidget.className = 'chat-widget';
        chatWidget.innerHTML = `
            <div class="chat-button" id="chatButton">
                <i class="fas fa-comments"></i>
                <span class="chat-notification" id="chatNotification">1</span>
            </div>
            <div class="chat-container" id="chatContainer">
                <div class="chat-header">
                    <div class="chat-header-info">
                        <img src="Luis.jpg" alt="Luis" class="chat-avatar">
                        <div>
                            <h4>Luis's Assistant</h4>
                            <span class="chat-status">Online</span>
                        </div>
                    </div>
                    <button class="chat-close" id="chatClose">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="chat-messages" id="chatMessages">
                    <div class="chat-message bot-message">
                        <div class="message-content">
                            ${this.responses[this.currentLanguage].greeting}
                        </div>
                        <div class="message-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                    </div>
                </div>
                <div class="chat-input-container">
                    <input type="text" class="chat-input" id="chatInput" placeholder="${this.currentLanguage === 'en' ? 'Ask me about Luis...' : 'Pregúntame sobre Luis...'}">
                    <button class="chat-send" id="chatSend">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(chatWidget);
    }

    // Bind event listeners
    bindEvents() {
        const chatButton = document.getElementById('chatButton');
        const chatClose = document.getElementById('chatClose');
        const chatSend = document.getElementById('chatSend');
        const chatInput = document.getElementById('chatInput');

        chatButton.addEventListener('click', () => this.toggleChat());
        chatClose.addEventListener('click', () => this.closeChat());
        chatSend.addEventListener('click', () => this.sendMessage());
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
    }

    // Toggle chat open/close
    toggleChat() {
        const container = document.getElementById('chatContainer');
        const notification = document.getElementById('chatNotification');
        
        this.isOpen = !this.isOpen;
        container.classList.toggle('open', this.isOpen);
        
        if (this.isOpen) {
            notification.style.display = 'none';
            document.getElementById('chatInput').focus();
        }
    }

    // Close chat
    closeChat() {
        this.isOpen = false;
        document.getElementById('chatContainer').classList.remove('open');
    }

    // Send user message
    sendMessage() {
        const input = document.getElementById('chatInput');
        const message = input.value.trim();
        
        if (!message) return;

        this.addMessage(message, 'user');
        input.value = '';

        // Process and respond
        setTimeout(() => {
            const response = this.processMessage(message);
            this.addMessage(response, 'bot');
        }, 500);
    }

    // Add message to chat
    addMessage(content, sender) {
        const messagesContainer = document.getElementById('chatMessages');
        const messageDiv = document.createElement('div');
        const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        messageDiv.className = `chat-message ${sender}-message`;
        messageDiv.innerHTML = `
            <div class="message-content">${content}</div>
            <div class="message-time">${time}</div>
        `;
        
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Process user message and generate response
    processMessage(message) {
        const lowerMessage = message.toLowerCase();

        // Check patterns in order of priority (most specific first)
        
        // Check for greeting
        if (this.patterns.greeting.test(lowerMessage)) {
            return this.responses[this.currentLanguage].greeting;
        }

        // Check for goodbye
        if (this.patterns.goodbye.test(lowerMessage)) {
            return this.responses[this.currentLanguage].goodbye;
        }

        // Check for contact information
        if (this.patterns.contact.test(lowerMessage)) {
            return this.responses[this.currentLanguage].contact;
        }

        // Check for education
        if (this.patterns.education.test(lowerMessage)) {
            return this.getEducationInfo();
        }

        // Check for experience
        if (this.patterns.experience.test(lowerMessage)) {
            return this.getExperienceInfo();
        }

        // Check for skills (before help to catch specific skill questions)
        if (this.patterns.skills.test(lowerMessage)) {
            return this.getSkillsInfo();
        }

        // Check for languages
        if (this.patterns.languages.test(lowerMessage)) {
            return this.getLanguagesInfo();
        }

        // Check for projects
        if (this.patterns.projects.test(lowerMessage)) {
            return this.getProjectsInfo();
        }

        // Check for help (more general, so comes later)
        if (this.patterns.help.test(lowerMessage)) {
            return this.responses[this.currentLanguage].help;
        }

        // Default response
        return this.responses[this.currentLanguage].unknown;
    }

    // Get education information
    getEducationInfo() {
        const edu = this.knowledgeBase.education;
        if (this.currentLanguage === 'es') {
            return `Luis está estudiando ${edu.degree} en ${edu.university} (${edu.period}) con especialización menor en ${edu.minor}. También se graduó de ${edu.highSchool}.`;
        }
        return `Luis is studying ${edu.degree} at ${edu.university} (${edu.period}) with a minor in ${edu.minor}. He also graduated from ${edu.highSchool}.`;
    }

    // Get experience information
    getExperienceInfo() {
        const experiences = this.knowledgeBase.experience.slice(0, 3); // Show top 3
        let response = this.currentLanguage === 'es' ? 
            "Luis tiene experiencia en:\n\n" : 
            "Luis has experience in:\n\n";
        
        experiences.forEach(exp => {
            response += `• ${exp.title} at ${exp.company} (${exp.period})\n`;
        });

        if (this.currentLanguage === 'es') {
            response += "\n¿Te gustaría saber más sobre alguna experiencia específica?";
        } else {
            response += "\nWould you like to know more about any specific experience?";
        }
        
        return response;
    }

    // Get skills information
    getSkillsInfo() {
        const skills = this.knowledgeBase.skills;
        const response = this.currentLanguage === 'es' ? 
            "Luis tiene experiencia en: " : 
            "Luis has expertise in: ";
        
        return response + skills.join(", ") + ".";
    }

    // Get languages information
    getLanguagesInfo() {
        const langs = this.knowledgeBase.languages;
        let response = this.currentLanguage === 'es' ? 
            "Luis habla:\n" : 
            "Luis speaks:\n";
        
        langs.forEach(lang => {
            response += `• ${lang.name} (${lang.level})\n`;
        });
        
        return response;
    }

    // Get projects information
    getProjectsInfo() {
        if (this.currentLanguage === 'es') {
            return "Luis ha trabajado en varios proyectos incluyendo desarrollo de plataformas Salesforce, herramientas de navegación con Python, y investigación en ingeniería de diseño. Puedes ver más detalles en la sección de proyectos de su portafolio.";
        }
        return "Luis has worked on various projects including Salesforce platform development, Python navigation tools, and design engineering research. You can see more details in the projects section of his portfolio.";
    }
}

// Initialize the chatbot when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const chatbot = new PortfolioChatbot();
    chatbot.init();
});