# ITP GUIDE 10.1

This repository contains setup guides and boilerplate code for different technologies used in the project. Each technology has its own dedicated branch with detailed setup instructions.

## Prerequisites

1. Install Git ([Download Here](https://git-scm.com/downloads))

   - Windows: Download and run the installer
   - macOS: Use Homebrew `brew install git` or download installer
   - Verify installation: `git --version`

2. Configure Git with your credentials
     ```bash
     git config --global user.name "Your Name"
     git config --global user.email "your.email@example.com"
     ```

## Getting Started

1. Clone the repository

   ```bash
   git clone https://github.com/sahanperera00/ITP-10.1.git
   cd ITP-10.1
   ```

2. Switch to your desired technology branch

   ```bash
   git checkout <branch-name>  # Example: git checkout BE/node
   ```

3. Follow the instructions in the README.md file of that branch

## Available Guides

### Backend

- **Node.js Backend**: Check out the `BE/node` branch
  ```bash
  git checkout BE/node
  ```
  Follow the README.md instructions in that branch for a complete Node.js backend setup guide.

### Frontend (Coming Soon)

- **React Frontend**: Will be available in the `FE/react` branch

## Branch Structure

- `main` - This branch (Overview of all guides)
- `BE/node` - Node.js backend setup and guide
- `FE/react` - React frontend setup and guide (Coming soon)

## Available Branches and Their Purpose

| Branch   | Purpose                                            | Status      |
| -------- | -------------------------------------------------- | ----------- |
| BE/node  | Basic Node.js backend setup with Express & MongoDB | Available   |
| FE/react | React frontend setup with best practices           | Coming Soon |


Feel free to explore each branch for detailed setup instructions and boilerplate code for your preferred technology stack.