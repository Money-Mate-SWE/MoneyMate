# MoneyMate

# How to Work on a GitHub Repository

## First-Time Setup

### Clone the Repository
1. Open your terminal or command prompt.
2. Clone the repository using the following command:
    ```bash
    git clone https://github.com/.../... (link to the repo)
    ```

### Open in Your IDE
- Open your favorite IDE (Integrated Development Environment).
- Load the cloned repository into your IDE.

### Make Sure You Are in the `master` Branch
1. Ensure you are in the `master` branch by running:
    ```bash
    git checkout master
    ```
2. Pull the latest changes:
    ```bash
    git pull origin master
    ```

## Adding New Features or Making Changes

### Create a New Branch from `master`
1. Create a new branch named `feature/feature-name`:
    ```bash
    git checkout -b feature/feature-name
    ```

### Add Your Code/Changes in That Branch
- Make the necessary changes or add your code to the repository files in your new branch.

### Commit and Push Your Code
1. Stage all your changes:
    ```bash
    git add .
    ```
2. Commit your changes with an appropriate message:
    ```bash
    git commit -m "Your descriptive commit message"
    ```
3. Push your changes to the new branch:
    ```bash
    git push origin feature/feature-name
    ```

### Start a Pull Request
1. Navigate to the original repository on GitHub.
2. Click on the "Pull requests" tab.
3. Click the "New pull request" button.
4. Select your `feature/feature-name` branch from the "compare" dropdown.
5. Review your changes and create the pull request by clicking the "Create pull request" button.

Congratulations! You have now successfully submitted a pull request to merge your changes into the `main` branch.

## Continuing to Work on the Repository

### Fetch Changes from Upstream
1. Ensure you are in the `master` branch:
    ```bash
    git checkout master
    ```
2. Pull the latest changes:
    ```bash
    git pull origin master
    ```

### Create a New Branch
- Follow the steps mentioned in the section [Create a New Branch from `master`](#create-a-new-branch-from-master) to start new work.

### Make Changes, Commit, and Push
- Follow the steps mentioned in the section [Add Your Code/Changes in That Branch](#add-your-codechanges-in-that-branch) to make changes.
- Follow the steps mentioned in the section [Commit and Push Your Code](#commit-and-push-your-code) to commit and push your code.

### Start a New Pull Request
- Follow the steps mentioned in the section [Start a Pull Request](#start-a-pull-request) to start a new pull request.

By following these steps, you can continue to contribute to the repository effectively.
