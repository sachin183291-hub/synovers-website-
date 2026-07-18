import os

def create_svg(filename, title, subtitle, bg_color1, bg_color2, icon_text):
    svg = f"""<svg width="800" height="450" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="{bg_color1}" />
            <stop offset="100%" stop-color="{bg_color2}" />
        </linearGradient>
        
        <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
            <circle cx="40" cy="40" r="1.5" fill="rgba(255,255,255,0.15)"/>
        </pattern>

        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="30" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="80" />
        </filter>
    </defs>
    
    <!-- Base Background -->
    <rect width="800" height="450" fill="#0F172A" />
    
    <!-- Giant Glowing Orbs -->
    <circle cx="0" cy="0" r="300" fill="{bg_color1}" opacity="0.3" filter="url(#softGlow)" />
    <circle cx="800" cy="450" r="350" fill="{bg_color2}" opacity="0.4" filter="url(#softGlow)" />
    
    <!-- Grid Overlay -->
    <rect width="800" height="450" fill="url(#gridPattern)" />
    
    <!-- Giant Watermark Icon -->
    <text x="700" y="350" font-size="280" font-family="sans-serif" font-weight="900" fill="rgba(255,255,255,0.06)" text-anchor="middle" dominant-baseline="middle" style="transform: rotate(-15deg); transform-origin: 700px 350px;">{icon_text}</text>
    
    <!-- Decorative Lines -->
    <path d="M -100 350 L 300 -50" stroke="{bg_color1}" stroke-width="2" stroke-opacity="0.2" />
    <path d="M 500 500 L 900 100" stroke="{bg_color2}" stroke-width="2" stroke-opacity="0.3" />
    
    <!-- Content Card Area -->
    <g transform="translate(100, 100)">
        <!-- Top Tech Pill -->
        <rect x="0" y="0" width="130" height="32" rx="16" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" stroke-width="1" />
        <circle cx="16" cy="16" r="6" fill="{bg_color1}" />
        <text x="32" y="21" fill="#ffffff" font-size="14" font-family="Segoe UI, -apple-system, Roboto, sans-serif" font-weight="600" letter-spacing="1">MASTERCLASS</text>
        
        <!-- Main Title (Safely Centered/Padded to avoid crop) -->
        <text x="0" y="90" fill="#ffffff" font-size="48" font-family="Segoe UI, -apple-system, Roboto, sans-serif" font-weight="800" letter-spacing="-1">{title}</text>
        
        <!-- Subtitle -->
        <text x="0" y="140" fill="rgba(255,255,255,0.7)" font-size="24" font-family="Segoe UI, -apple-system, Roboto, sans-serif" font-weight="400">{subtitle}</text>
        
        <!-- Bottom UI elements -->
        <rect x="0" y="190" width="140" height="40" rx="8" fill="url(#bgGrad)" filter="url(#glow)" opacity="0.9" />
        <text x="70" y="216" fill="#ffffff" font-size="16" font-family="Segoe UI, -apple-system, Roboto, sans-serif" font-weight="700" text-anchor="middle">Enroll Now</text>
    </g>
</svg>"""
    
    filepath = os.path.join("C:\\Users\\sachi\\Desktop\\New folder (2)\\public", filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(svg)

courses = [
    ("course-ai-python-fullstack.svg", "AI + Python Fullstack", "React, Python &amp; LLM Integrations", "#4F46E5", "#A855F7", "🐍"),
    ("course-ai-python-web.svg", "Python Web Dev", "Django, FastApi &amp; React Apps", "#10B981", "#34D399", "🌐"),
    ("course-java-ai-fullstack.svg", "Java + AI Fullstack", "Spring Boot &amp; Enterprise AI", "#F97316", "#FCD34D", "☕"),
    ("course-java-ai-web.svg", "Java Web Dev", "Spring Boot Microservices", "#E11D48", "#FDA4AF", "⚡"),
    ("course-ai-data-analyst.svg", "Data Analyst", "Power BI, Excel &amp; AI Analytics", "#F59E0B", "#FDE68A", "📊"),
    ("course-ai-data-science.svg", "Data Science", "Machine Learning &amp; Algorithms", "#3B82F6", "#93C5FD", "🧠"),
    ("course-ui-ux-design.svg", "UI/UX Design", "Figma, Prototyping &amp; UX", "#EC4899", "#F9A8D4", "🎨"),
    ("course-software-testing-qa.svg", "Testing &amp; QA", "Selenium &amp; Automation Testing", "#059669", "#6EE7B7", "🐛"),
    
    # New courses
    ("course-ml-ai.svg", "Machine Learning", "Deep Learning &amp; MLOps", "#8B5CF6", "#C084FC", "🤖"),
    ("course-prompt-engineering.svg", "Generative AI", "Prompt Engineering Mastery", "#14B8A6", "#5EEAD4", "✨"),
    ("course-cloud-devops.svg", "Cloud &amp; DevOps", "AWS, Azure &amp; CI/CD Pipelines", "#0EA5E9", "#7DD3FC", "☁️"),
    ("course-cybersecurity.svg", "Cybersecurity", "Ethical Hacking &amp; Network Security", "#EF4444", "#FCA5A5", "🛡️"),
]

for c in courses:
    create_svg(*c)
    print(f"Created {c[0]}")
