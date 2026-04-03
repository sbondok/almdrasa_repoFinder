# Repo Finder

Repo Finder is a modern, responsive web application that interacts with the GitHub Search API to seamlessly find, list, and explore repositories for any given Github User or Organization entirely within the browser. 

This project was built as part of the **Almdrasa Frontend Diploma**.

## Features
- **Dual Query Modes**: Toggle to search exactly by either Username or Organization.
- **Modern User Interface**: Leverages completely bespoke CSS variables, Grid/Flexbox layouts, glassmorphism UI traits, and accessible visual borders.
- **Modern Asynchronous Javascript**: Implemented with ES Modules, Template Literals, Destructuring, and async/await syntax.
- **Responsive & Accessible**: Keyboard navigable configurations (for seamless Tabbing) and perfectly adjusts on any screen viewport size.
- **Parcel Supported Bundler**: Project supports out-of-the-box native bundling with zero configuration.

## Prerequisites
- Node.js installed on your machine.

## Getting Started
To get this application running locally:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies:**
   *(Note: For NPM JavaScript applications like this one, `package.json` serves the same purpose as Python's `requirements.txt`! Let NPM do the heavy lifting.)*
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm start
   ```

4. Open your browser and navigate to the port hosted by Parcel (default `http://localhost:1234`).

## Production Build
To create a production-ready package with minified and optimized assets:
```bash
npm run build
```
This drops the optimized deployment codebase directly into the `/dist` directory.

## Acknowledgments
- Project Developed by **sbondok**
- Architecture and lessons supplied via **Almdrasa**
