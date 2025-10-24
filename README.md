# Spataro ONG - Sistema Web

Website institucional completo desenvolvido para uma ONG como projeto de extensão universitária, utilizando Django como framework principal.

🌐 **Deploy:** [spataro.ong](https://web-production-c304.up.railway.app/home)

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como parte de um trabalho de extensão universitária com o objetivo de criar um site 100% funcional para uma organização não governamental. A escolha do Django como framework Python se deu pela sua robustez, segurança e capacidade de desenvolver aplicações web completas rapidamente.

## 🎯 Objetivos do Projeto

- Desenvolver uma solução web completa e funcional para uma ONG real
- Aplicar conhecimentos de desenvolvimento web full-stack
- Criar uma interface intuitiva e acessível para o público-alvo
- Implementar boas práticas de desenvolvimento e segurança

## 🚀 Tecnologias Utilizadas

- **Django** - Framework web Python (Backend)
- **Python** - Linguagem principal
- **JavaScript** - Funcionalidades interativas (31.9%)
- **HTML5** - Estrutura das páginas (22.5%)
- **CSS3** - Estilização e layout responsivo (41.3%)
- **Vercel** - Plataforma de deploy

## 📁 Estrutura do Projeto

```
spataroONG/
├── static/              # Arquivos estáticos (CSS, JS, imagens)
├── templates/           # Templates HTML
├── apps/               # Aplicações Django
├── spataroONG/         # Configurações principais
├── manage.py           # Gerenciador Django
└── requirements.txt    # Dependências do projeto
```

## ⚙️ Funcionalidades

- 🏠 Página institucional com informações da ONG
- 📝 Sistema de gerenciamento de conteúdo
- 📱 Design responsivo para mobile e desktop
- 🔒 Sistema de autenticação e autorização
- 📊 Painel administrativo Django
- 🎨 Interface moderna e acessível

## 🔧 Como Executar Localmente

### Pré-requisitos

- Python 3.8+
- pip (gerenciador de pacotes Python)

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/eupedrx/spataroONG.git
cd spataroONG
```

2. Crie um ambiente virtual:
```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
# ou
venv\\Scripts\\activate  # Windows
```

3. Instale as dependências:
```bash
pip install -r requirements.txt
```

4. Execute as migrações:
```bash
python manage.py migrate
```

5. Crie um superusuário:
```bash
python manage.py createsuperuser
```

6. Inicie o servidor de desenvolvimento:
```bash
python manage.py runserver
```

7. Acesse o projeto em: `http://localhost:8000`

## 🌐 Deploy

O projeto está hospedado na Vercel e pode ser acessado em: [spataro-ong.vercel.app](https://spataro-ong.vercel.app)

## 📝 Conceitos e Práticas Aplicadas

- **Framework Django:** MVT (Model-View-Template)
- **Desenvolvimento Web Full-Stack**
- **Design Responsivo**
- **Boas práticas de segurança web**
- **Versionamento de código com Git**
- **Deploy e hospedagem de aplicações Python**
- **Responsabilidade social através da tecnologia**

## 🎓 Contexto Acadêmico

Este projeto foi desenvolvido como trabalho de extensão universitária, onde o requisito era criar um site 100% funcional para uma instituição real utilizando um framework Python. A escolha do Django permitiu desenvolver uma solução robusta e escalável que atende às necessidades da ONG.

## 👨‍💻 Autor

Pedro - [@eupedrx](https://github.com/eupedrx)

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos e de extensão universitária.
