## 1. Initialize a Git Repository

```bash
git init
```

This creates a `.git/` folder in your project, enabling version control.

---

## 2. Clone a Repository

```bash
git clone https://github.com/user/repo.git
```

Clones a remote repository to your local machine.

---

## 3. Check Repository Status

```bash
git status
```

Shows changes, staged files, and the current branch.

---

## 4. Add Files to Staging Area

```bash
git add filename.txt
# or add all changes
git add .
```

Adds files to be included in the next commit.

---

## 5. Commit Changes

```bash
git commit -m "Describe what you changed"
```

Saves the staged changes with a message.

---

## 6. View Commit History

```bash
git log
```

Displays the list of commits with hash, author, and message.

---

## 7. Create a New Branch

```bash
git checkout -b feature-branch
```

Creates and switches to a new branch.

---

## 8. Switch Branch

```bash
git checkout main
```

Changes to the specified branch.

---

## 9. Merge a Branch

```bash
git checkout main
git merge feature-branch
```

Merges the `feature-branch` into `main`.

---

## 10. Push to Remote Repository

```bash
git push origin main
```

Pushes your local commits to the remote GitHub repository.

---

## 11. Pull Latest Changes

```bash
git pull origin main
```

Fetches and merges changes from the remote repo.

---

## 12. Set Remote URL

```bash
git remote add origin https://github.com/user/repo.git
```

Links your local repo to a remote one.

---

## 13. View Configurations

```bash
git config --list
```

Shows your Git configuration (user, email, etc.)

---

## 14. Undo Last Commit (but keep changes)

```bash
git reset --soft HEAD~1
```

Moves the last commit back to staged area.

---

## 15. Remove a File from Git (but keep it locally)

```bash
git rm --cached filename.txt
```
