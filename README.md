# PR Text Generator

A streamlined web application for generating well-structured pull request descriptions for Thrive Themes products. Built with React and Vite, featuring auto-population, real-time preview, and a clean black & white interface.

## Features

### 🚀 Smart Auto-Population
- **Title**: Automatically generated from the first line of your summary (up to 60 characters)
- **Issue URL**: Auto-constructs GitHub issue links from issue ID
- **Release Notes**: Auto-populated with the title text
- **Manual Edit Tracking**: Once you edit a field, auto-population stops for that field, preserving your changes

### 📋 Comprehensive PR Template
- Product code selector for all Thrive products (TA, TQB, TL, TO, TC, TU, TOV, TAR, TTB, TD, CORE)
- Summary and implementation details
- Screenshot/recording URLs
- Test URLs for reviewers
- QA steps with clear instructions
- Release notes and dev notes
- Additional notes section

### 🎨 Clean UI Design
- **Black & white theme** with professional aesthetics
- **Compact layout** optimized for viewport height
- **5px border radius** throughout for consistency
- **Real-time preview** with syntax highlighting
- **Progress tracking** with visual checklist status
- **Custom scrollbars** for better UX

### ⚡ Quick Actions
- **One-click copy** to clipboard
- **Live PR title preview** updates as you type
- **Checklist progress bar** shows completion status

## Installation

```bash
# Clone the repository
git clone git@github.com:aslamdoctor/pr-generator.git
cd pr-generator

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## Usage

1. **Enter Issue ID** - The issue number from GitHub
2. **Select Product Code** - Choose from the dropdown (e.g., TQB, TA, TAR)
3. **Write Summary** - Describe what changed and why
4. **Fill Additional Fields** - Add implementation details, QA steps, etc.
5. **Review Preview** - Check the generated PR text in real-time
6. **Copy to Clipboard** - Click the copy button to use in your PR

### Auto-Population Behavior

- Fields auto-populate as you type in Issue ID and Summary
- Edit any auto-populated field to take manual control
- Manual edits are preserved even if you change the source fields

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript** - ES6+ features

## Project Structure

```
pr-text-generator/
├── src/
│   ├── components/
│   │   ├── PRForm.jsx          # Input form component
│   │   └── PROutput.jsx        # Preview and output component
│   ├── App.jsx                 # Main application component
│   ├── index.css               # Global styles and theme
│   └── main.jsx                # Application entry point
├── public/
├── pr-template.md              # PR template reference
└── package.json
```

## Development

```bash
# Start dev server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Customization

### Adding Product Codes
Edit the `productCodeOptions` array in `src/components/PRForm.jsx`:

```javascript
const productCodeOptions = [
  { value: 'NEW', label: 'NEW - New Product' },
  // ... add more
];
```

### Changing Issue URL Template
Modify the `issueUrl` generation in `src/App.jsx`:

```javascript
const generatedIssueUrl = `https://your-org.com/issues/${issueId}`;
```

### Customizing Theme
Update colors in `src/index.css` and component styles.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - feel free to use this project for your team!

## Acknowledgments

Built for the Thrive Themes development team to streamline the PR creation process.
