# React + Vite

Debouncing
typing slow=200ms
typing fast=30ms

performance
-iphone pro max=14 letter*1000=14000
-with debouncing=3 API calls*1000=3000

Debouncing with 200ms
-if difference between 2 key strokes is <200ms - Decline API call>
-200ms make an API call

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
