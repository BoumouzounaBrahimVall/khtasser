This is a ```khtasser``` project overview 

## Getting Started
First, install all the dependencies:

```bash
npm install
```
Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## GitHub Repository Commands

This document provides a guide on essential Git commands for managing a GitHub repository.

### Cloning a GitHub Repository Locally

To clone a repository from GitHub to your local machine, use the following command:

```bash
git clone <repository_URL>
```

### create your branch locally 
```bash
git checkout -b <your_branch_name>
```
### Switching to a Branch
To switch to a specific branch within the repository, execute the following command:
```bash
git checkout <branch_name> 
```

### Pulling Changes
To fetch and merge the latest changes from the remote repository, use the following command:
```bash
git pull origin <branch_name>
```
### Pulling Latest Changes from Main Branch to Your Working Branch

While working on your branch and wanting to incorporate the latest changes from the main branch, follow these steps:

#### `1- Ensure you're on your working branch:`
```bash
git checkout <your_branch_name>
```

#### `2- Fetch the latest changes from the main branch:`
```bash
git fetch origin main
```
#### `3- Merge the changes into your working branch:`
```bash
git merge origin/main
```

### Pushing Changes to Your Branch Remotely
To push your local changes to a remote branch (assuming the branch has been set up on the remote repository), follow these steps:
#### `1- add all files added (you added):`
```bash
git add -A
```

#### `2- commit your changes locally:`
```bash
git commit -m  '<your_comment>'
```
#### `3- push your work to your branch on the remote repo`
```bash 
git push origin <your_branch_name>
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
