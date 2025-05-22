# Atlaskit Playground

A minimal local prototyping environment for building interfaces with the [Atlassian Design System](https://atlassian.design/) using **Vite**, **React**, and **Cursor**.

This project is optimized for:
- ⚡ Fast iteration with Hot Module Reloading (HMR)
- 🎨 Atlaskit components and design tokens
- 🤖 AI-assisted development with Cursor and Context7

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

```bash
npm install
```

2. **Start the local dev server**

```bash
npm run dev
```

3. Open your browser:
[http://localhost:5173](http://localhost:5173)

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
│   ├── App.tsx           # Sample UI with Atlaskit
│   ├── main.tsx          # App entrypoint
│
│
├── index.html            # Mounts the app to #root
├── vite.config.ts
├── package.json
└── README.md
```

---

## ✨ Styling with `xcss`

Use `xcss` from `@atlaskit/primitives` to apply design token-based styles:

```tsx
const card = xcss({
  padding: 'space.200',
  backgroundColor: 'elevation.surface',
  borderRadius: 'border.radius.200',
});
```

Apply to any primitive:

```tsx
<Box xcss={card}>Token-powered styling</Box>
```

---

## 🤖 Cursor Tips

- Use the `request.mdc` rule to tell Cursor to always use AtlasKit components
- Your Context7 instance should be linked to this repo’s markdown docs (if added)
- Prompt clearly with:
  > “Use Atlaskit Button, use `xcss`, wrap in `AppProvider`”

---

## 📦 Install more components

You can add more UI kits as needed:

```bash
npm install @atlaskit/tag @atlaskit/modal-dialog @atlaskit/form
```

---

## ✅ Requirements

- Node.js 18+
- React 18 (❌ not React 19 yet)
- Cursor editor (optional but ideal)

---

## 🧪 Example UI Elements

```tsx
<Button appearance="primary">Save</Button>
<Tag text="Beta" />
```

---

## 🧭 Roadmap / Ideas

- [ ] Add view templates
- [ ] Auto-import AtlasKit tokens
- [ ] Custom code snippets for Context7

---

## 🧡 Credits

Built Jason Calleiro for Atlassian internal prototyping and Cursor-assisted exploration. Use it to test ideas fast, with real UI.

---
