# Atlaskit Blank Canvas

A minimal blank slate for building Atlassian Design System prototypes.

## Features

- 🚀 Vite for fast development
- 🎨 Minimal Atlaskit setup with design tokens
- 📱 Ready for responsive layouts
- 🔧 TypeScript for type safety

## Quick Start

```bash
# Install dependencies
yarn install

# Start development server
yarn dev
```

Visit `http://localhost:5173` to see your app.

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build locally

## Resources

- [Atlassian Design System](https://atlassian.design)
- [Atlaskit Component Library](https://atlassian.design/components)
- [Design Tokens Documentation](https://atlassian.design/foundations/design-tokens)

## Project Structure

```
src/
├── components/     # Reusable components
├── layouts/        # Layout components
├── pages/         # Page components
├── styles/        # Global styles
├── App.tsx        # Main App component
└── main.tsx       # Application entry point
```

## Pre-installed Atlaskit Components

This boilerplate comes with essential Atlaskit components:

- 🎨 Design Tokens & CSS Reset
- 📦 Primitives (Box, Stack, Inline)
- 🔘 Button
- 📝 Typography (Heading, Text)
- 🖼️ Logo
- And more...

## Adding More Components

To add more Atlaskit components, install them from npm:

```bash
yarn add @atlaskit/[component-name]
```

## Best Practices

1. Use Atlaskit primitives for layouts:
   - `Box` for containers
   - `Stack` for vertical layouts
   - `Inline` for horizontal layouts

2. Follow Atlaskit's design tokens for consistency:
   - Colors: `var(--ds-*)`
   - Spacing: `var(--ds-space-*)`
   - Typography: `var(--ds-font-*)`

3. Leverage Atlaskit's built-in responsive design capabilities

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this boilerplate for your projects.

---

## 🧰 Tech Stack

- [Vite](https://vitejs.dev/) — blazing-fast dev server
- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Atlassian Design System](https://atlassian.design/)
- [Atlaskit Components](https://atlaskit.atlassian.com/)
- [Cursor](https://cursor.sh/) + [Context7](https://context7.com/) integration

---

## 🚀 Getting Started

1. **Install dependencies** (make sure you're using React 18):

Using npm:
```bash
npm install --legacy-peer-deps
```

Or using yarn:
```bash
yarn install
```

2. **Start the local dev server**

Using npm:
```bash
npm run dev
```

Or using yarn:
```bash
yarn dev
```

3. Open your browser:
[http://localhost:3000](http://localhost:3000)

---

## 🧱 Project Structure

```
.
├── .cursor/
│   └── rules/
│       ├── always-on.mdc # Rules to prefer Atlaskit components
│       └── request.mdc   # Prompt-specific rules
│
├── src/
│   ├── App.tsx          # Sample UI with Atlaskit components
│   ├── main.tsx         # App entrypoint with CSS reset
│
├── public/              # Static assets
├── index.html          # Mounts the app to #root
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
├── package.json        # Dependencies and scripts
└── README.md
```

---

## 🤖 Cursor Tips

- Use the `request.mdc` rule to tell Cursor to always use AtlasKit components
- Your Context7 instance should be linked to this repo's markdown docs (if added)
- Prompt clearly with:
  > "Use Atlaskit Button, use `css`, wrap in components. use Context7"

---

## 📦 Install more components

You can add more UI kits as needed:

```bash
# Using npm
npm install --legacy-peer-deps @atlaskit/tag @atlaskit/modal-dialog @atlaskit/form

# Using yarn
yarn add @atlaskit/tag @atlaskit/modal-dialog @atlaskit/form
```

---

## ✅ Requirements

- Node.js 18+
- React 18 (❌ not React 19 yet)
- Cursor editor (optional but ideal)

---

## 🧪 Example UI Elements

```tsx
// Basic components
<Button appearance="primary">Save</Button>
<Heading level="h1">Welcome</Heading>

// Layout components
<Stack space="space.200">
  <Inline space="space.100">
    <Button>Cancel</Button>
    <Button appearance="primary">Submit</Button>
  </Inline>
</Stack>

// Tabs example
<Tabs>
  <TabList>
    <Tab>First Tab</Tab>
    <Tab>Second Tab</Tab>
  </TabList>
  <TabPanel>First panel content</TabPanel>
  <TabPanel>Second panel content</TabPanel>
</Tabs>
```

---

## 🧭 Roadmap / Ideas

- [ ] Add view templates
- [ ] Auto-import AtlasKit tokens
- [ ] Custom code snippets for Context7
- [ ] Add more component examples
- [ ] Add testing setup
- [ ] Add GitHub Actions workflow

---

## 🧡 Credits

Built by Jason Calleiro for Atlassian internal prototyping and Cursor-assisted exploration. Use it to test ideas fast, with real UI.

---
