# React Learning

## How to create react application

There are two way to create react application

> [!IMPORTANT]
> Way 1 <br/>
> npm create-react-app firstReactApplication <br/>
> Run solution on local to use - npm run start 

> [!IMPORTANT]
> Way 2 <br/>
> npm create vite@latest <br/>
> Run solution on local to use - npm run dev

---

### What is React.Script
Ans - React.Script is a library that is included when creating a React application using the traditional method **npm create-react-app applicationName**. However, it is not included when using the **Vite library** for creating solutions. You can verify whether **React.Script** is present in your solution by checking the dependencies object in the **package.json** file.

This library helps in injecting the necessary script tags during the compilation or build process of the application. <br/>

**Why doesn't React.Script come with vite library ?** <br/>
Ans - React.Script doesn't come with the Vite Library because the Vite library directly includes script in **index.html** file. 

---

### What is React.StrickMode ? 
Ans - **StrictMode** is a tool for highlighting potential problems in an application. When you wrap your components with StrictMode, React will perform additional checks and warnings about potential issues in your code. <br/>

1. **When to Use:**
  - **During development**: StrictMode is primarily intended for development mode. It helps you catch potential problems early and enforce best practices.
  - **When identifying legacy code or potential issues early**: If you're working on a large codebase or a project that has been around for a while, StrictMode can help identify components or patterns that might be deprecated or problematic.

2. **What it Does:**
  - **Detects components with unsafe lifecycle**: It detects components with unsafe lifecycle, like using deprecated lifecycle methods (componentWillMount, componentWillUpdate, componentWillReceiveProps). This is important because these methods are being phased out in favor of safer alternatives.
  - **Warns about legacy Context API usage**: It warns about the legacy Context API usage. If you're using the old context API, it's a good indication that you should migrate to the new Context API introduced in React latest version.
  - **Identifies components causing side effects during rendering**: It helps identify components that are causing side effects during the render phase, which can lead to unexpected behavior and performance issues.

3. **When Not to Use:**
  - **In production**: StrictMode is not meant for production use. It introduces overhead due to additional checks and warnings, which can impact performance.
  - **With third-party libraries that may not be compatible**: Some third-party libraries might not be compatible with StrictMode and could throw warnings or errors when used together. If you encounter issues with third-party libraries, you might need to exclude them from StrictMode.

4. **Why Use:**
  - **Early detection of issues**: By using StrictMode during development, you can catch potential problems early in the development process, which can save time and effort in debugging later on.
  - **Encourages best practices**: StrictMode encourages best practices in React development by highlighting deprecated features and patterns, promoting the adoption of safer alternatives.
  - **Smooth migration when upgrading or refactoring React applications**: If you're planning to upgrade React versions or refactor your codebase, using StrictMode can help identify areas that need attention or refactoring to ensure compatibility with newer versions of React.

**In summary, use StrictMode during development to catch potential issues early, but avoid using it in production due to performance overhead. It's a valuable tool for enforcing best practices and identifying areas of improvement in your React applications.**

---

### What is babel ?
Ans - Babel is a JavaScript compiler that transforms modern JavaScript code (ES6/ES7 and beyond) into a backwards-compatible version of JavaScript that can be executed in older browsers or environments that do not support the latest language features.

In summary, Babel plays a crucial role in React development by enabling developers to write code using modern JavaScript features and JSX syntax while ensuring compatibility with a wide range of browsers and environments.

---

### What is virtual dom, reconciliation and fiber ?  
Ans -
1. **Virtual DOM**: React DOM has created own dom is called virtual dom & It's compare with real dom.
  - The Virtual DOM is a lightweight copy of the actual DOM (Document Object Model) tree maintained by React.
  - React uses the Virtual DOM to efficiently update the actual DOM by calculating the minimal set of changes needed to reflect the new state of the application.
  - When there's a change in the state of a React component, React first updates the Virtual DOM rather than directly manipulating the actual DOM.
  - By comparing the previous Virtual DOM with the new one, React determines the most efficient way to update the actual DOM, reducing the number of expensive DOM operations and improving performance.

2. **Reconciliation**: Compare with virtual dom to real dom
  - Reconciliation is the process of updating the Virtual DOM to reflect changes in the state or props of React components.
  - It has been a core part of React since its inception and is responsible for efficiently updating the UI in response to changes.
  - React's original reconciliation algorithm works by recursively traversing the component tree, comparing the old and new trees, and determining the minimal set of changes needed to update the actual DOM.

3. **Fiber**: Fiber algorithm helps to update virtual dom
  - Fiber is a reimplementation of React's reconciliation algorithm introduced in React 16.
  - It represents a major update and enhancement to the reconciliation process rather than a completely new algorithm.
  - Fiber introduces a new internal data structure (the fiber tree) and a set of priority levels, allowing React to perform work in incremental steps and prioritize rendering tasks more efficiently.
  - With Fiber, React can pause, abort, or reschedule rendering tasks, enabling features like async rendering, suspense, and improved error handling.
Fiber is designed to be more flexible, responsive, and extensible than the original reconciliation algorithm, enabling React to better handle complex UI interactions and improve overall performance.


**In summary, Fiber is an updated and enhanced version of React's reconciliation algorithm introduced in React 16. While reconciliation remains a fundamental concept in React, Fiber represents a significant improvement that enables React to better manage rendering tasks, prioritize updates, and provide a more responsive and efficient user experience.**

---





