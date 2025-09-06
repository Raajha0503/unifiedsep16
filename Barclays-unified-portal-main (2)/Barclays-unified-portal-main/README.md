# Barclays Unified Portal

Welcome to the Barclays Operations Portal - a unified access point to all operational teams and services within Barclays.

## Overview

This portal provides seamless access to various operational teams including:

- Reference Data Management
- Network Management
- Middle Office Operations
- Confirmations Team
- Collateral Management
- Cost Management
- Settlements
- Regulatory Adherence

## Features

- **🌓 Dark/Light Theme Support** - Toggle between dark and light modes
- **🔍 Advanced Search** - Search teams by name, function, or service
- **🏷️ Category Filtering** - Filter teams by department (Operations, Risk, Technology, etc.)
- **📱 Responsive Design** - Optimized for desktop, tablet, and mobile
- **🔐 Authentication System** - Secure login with sample credentials
- **⚡ Performance Optimized** - Fast loading with CSS containment and optimized animations

## Getting Started

### Prerequisites

- Node.js (v16.0.0 or higher)
- npm (v8.0.0 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/barclays/unified-portal.git
   cd unified-portal
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   This will start a live server on `http://localhost:3000` with auto-reload functionality.

## Development

### Available Scripts

- `npm run dev` - Start development server with live reload
- `npm run start` - Start production server
- `npm run build` - Build the project for production
- `npm run build:css` - Build CSS with Tailwind (watch mode)
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier
- `npm run serve` - Serve built files

### Project Structure

```
barclays-unified-portal/
├── index.html                   # Main application file
├── package.json                 # Dependencies and scripts
├── .gitignore                  # Git ignore rules
├── README.md                   # This file
├── tailwind.config.js          # Tailwind CSS configuration
├── .eslintrc.js               # ESLint configuration
├── .prettierrc                # Prettier configuration
└── src/                       # Source files (if needed)
```

## Authentication

The portal includes a demo authentication system with the following test credentials:

- **Username:** `demo` / **Password:** `demo`
- **Username:** `admin` / **Password:** `barclays123`

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox
- **JavaScript (ES6+)** - Modern JavaScript features
- **Tailwind CSS** - Utility-first CSS framework
- **Live Server** - Development server with hot reload

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## Code Style

This project uses ESLint and Prettier for code formatting. Please ensure your code follows the established style guidelines:

```bash
npm run lint:fix
npm run format
```

## Security

This is a demo application. For production use:

- Implement proper authentication with secure backend services
- Use HTTPS in production
- Validate and sanitize all user inputs
- Implement proper session management

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions, please contact:

- IT Support: [it-support@barclays.com](mailto:it-support@barclays.com)
- Operations Team: [operations@barclays.com](mailto:operations@barclays.com)

## Changelog

### v1.0.0 (2024)

- Initial release
- Portal dashboard with team access
- Dark/Light theme support
- Advanced search and filtering
- Responsive design
- Authentication system
