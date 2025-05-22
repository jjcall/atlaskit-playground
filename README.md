# Atlaskit Playground

A minimal boilerplate for building Atlassian Design System prototypes.

## 🚀 Features

- Fast development with Vite
- Preconfigured Atlassian design tokens and CSS reset
- Essential Atlaskit primitives for responsive layouts (Box, Stack, Inline)
- TypeScript for improved developer experience
- Cursor + Context7 integration for AI-assisted development

## 🧭 Getting Started

### Prerequisites

- Node.js 18+
- React 18

### Installation

```bash
# Using npm
npm install --legacy-peer-deps

# Using yarn
yarn install
```

### Development

```bash
# Start the development server
yarn dev
# or
npm run dev
```

Visit `http://localhost:3000` to see your app.

### Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build

## 📂 Project Structure

```
.
├── src/
│   ├── App.tsx          # Main App component with Atlaskit showcase
│   ├── main.tsx         # Application entry point with CSS reset
│   └── assets/          # Static assets used in the source code
│
├── public/
│   ├── images/          # Public image assets including favicons
│
├── .cursor/
│   └── rules/           # Cursor AI assistant rules
│       ├── always-on.mdc # Rules to prefer Atlaskit components
│       └── request.mdc   # Prompt-specific rules
│
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## 🎨 Atlaskit Components

This project comes with essential Atlaskit components pre-installed:

- Design Tokens & CSS Reset
- Layout Primitives (Box, Stack, Inline)
- Button
- Typography (Heading, Text)
- Logo
- And many more (see package.json for the full list)

### Adding More Components

```bash
# Using npm
npm install --legacy-peer-deps @atlaskit/[component-name]

# Using yarn
yarn add @atlaskit/[component-name]

# AI assited installation
# If using cursor / windsurf, it will attempt to install componented its identified in your prompt or design.
```

## 🤖 Cursor AI Tips

- Use the Cursor editor for AI-assisted development
- Install [Context7](https://github.com/upstash/context7): Direct access to AI friendly documentation. add `use Context7` to prompts
- Install [Figma MCP](https://github.com/GLips/Figma-Context-MCP): Processes figma destails and file design metadata
- Reference the `request.mdc` rule to ensure Cursor suggests Atlaskit components
- Try prompts like: "Use Atlaskit Button, use Context7."

## 📚 Resources

- [Atlassian Design System](https://atlassian.design)
- [Atlaskit Component Library](https://atlassian.design/components)
- [Design Tokens Documentation](https://atlassian.design/foundations/design-tokens)
- [Vite Documentation](https://vitejs.dev/)
- [Figma MCP](https://github.com/GLips/Figma-Context-MCP)
- [Context7](https://github.com/upstash/context7)
- [Cursor](https://cursor.sh/)
- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

## 🧡 Credits

Built by [Jason Calleiro](https://www.linkedin.com/in/jasoncalleiro/) for Atlassian internal prototyping and Cursor-assisted exploration.

## License

MIT License - feel free to use this boilerplate for your projects.
