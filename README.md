# 🚀 Dev Stack

**Dev Stack** is a simple web app that helps developers discover, evaluate, and build their own technology stack. Users can browse a curated list of popular web technologies, see key details about each one, and add their favorites to a personal "stack" to plan out their next project.

## 🛠️ Built With

- **React 19** – for building the UI with components
- **TypeScript** – for type-safe code
- **Vite** – for fast development and bundling
- **Tailwind CSS** + **DaisyUI** – for styling and pre-built UI components
- **React Toastify** – for toast notifications

## ✨ Features

1. **Technology Explorer** – Browse a grid of technology cards (React, Next.js, etc.), each showing an icon, category, difficulty level, and rating, loaded dynamically from a JSON file.
2. **Personal Stack Builder** – Add any technology to your own "Stack" sidebar with a single click, remove individual items, or clear the whole stack at once.
3. **Live Toast Notifications** – Instant feedback (success, warning, info, error) pops up whenever you add, remove, or clear technologies from your stack.

---

## 🧠 React Concepts – Q&A

**1. What is JSX, and why is it used in React?**
JSX is a syntax that lets us write HTML-like code directly inside JavaScript. It's used in React because it makes describing what the UI should look like much easier to read and write, instead of building elements with plain JavaScript function calls.

**2. What is the difference between props and state?**
Props are data passed **into** a component from its parent, and the component receiving them cannot change them. State is data that lives **inside** a component and can change over time (usually through user interaction), causing the component to re-render.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a component remember a value between renders and update it when needed. In this project it's used in `App.tsx` to store the list of `technologies` fetched from the JSON file, the user's `stack` of selected items, and a `loading` flag while data is being fetched.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs a piece of code after the component renders, usually for things like fetching data, subscriptions, or timers. It was needed here because fetching the `technologies.json` file is a side effect — it shouldn't happen during rendering itself, so it's placed inside `useEffect` with an empty dependency array `[]` so it only runs once when the app first loads.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to keep track of which item is which between renders. Without a unique key, React can't tell items apart when the list changes (adding/removing items), which can cause bugs or unnecessary re-rendering. In this project, `key={tech.id}` and `key={item.id}` are used since each technology has a unique `id`.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on a condition, instead of always showing the same thing. For example, in `Slidbar.jsx`:
```jsx
{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  stack.map((item) => ( ... ))
)}
```
If the stack has no items, it shows an "empty stack" message; otherwise, it renders the list of added technologies.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down to a child through **props**. For example, `App.tsx` passes `tech`, `onAdd`, and `isAdded` to `TechCard`:
```jsx
<TechCard tech={tech} onAdd={handleAddToStack} isAdded={...} />
```
For a child to send something back up, the parent passes down a **function as a prop**, and the child calls that function (usually with some data) when something happens, like a button click:
```jsx
// Inside TechCard.jsx
<button onClick={() => onAdd(tech)}>Add to Stack</button>
```
This way, `TechCard` doesn't directly change the parent's state — it just calls `onAdd(tech)`, and `App.tsx` decides what to do with that data.
