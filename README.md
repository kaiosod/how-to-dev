## 📦 Project Setup & Deployment with MkDocs + GitHub Pages

This guide explains how to install MkDocs, create your documentation project, and deploy it to GitHub Pages.

---

### ✅ 1. Install MkDocs

Make sure you have Python and pip installed. Then run:

```bash
pip3 install mkdocs
```
Check if MkDocs is working:

```bash
python3 -m mkdocs --version
```

---

📁 2. Create the Project Structure

Generate a new MkDocs project:

```bash
python3 -m mkdocs new how-to-dev
cd how-to-dev
```

This will create:
	•	mkdocs.yml: the configuration file
	•	docs/: the folder where your Markdown files live

---

📝 3. Add Your Tutorials

Inside the docs/ folder, create your tutorial files:

```bash
cd docs
touch venv.md git-comandos.md
````

Edit them using Markdown syntax.

Example: git-comandos.md

# Git Commands

```bash
git status
git commit -m "message"
```
---

### ⚙️ 4. Configure Navigation

Edit `mkdocs.yml` to set up your navigation menu:

```yaml
site_name: How to Dev

nav:
  - Home: index.md
  - Git Commands: git-comandos.md
  - Virtual Env: venv.md
```

---

🚀 5. Run Locally

To preview your documentation locally:
```bash
python3 -m mkdocs serve
```

Then open your browser at http://127.0.0.1:8000


---

☁️ 6. Deploy to GitHub Pages

Make sure your repo is initialized and linked to GitHub:

```bash
git init
git remote add origin https://github.com/your-username/how-to-dev.git
git add .
git commit -m "Initial commit"
git push -u origin main
````

Now deploy:

```bash
mkdocs gh-deploy
````

This command:
	•	Builds your documentation into the site/ folder
	•	Pushes it to a new branch: gh-pages

After that, your docs will be live at:

https://your-username.github.io/how-to-dev/


⸻

🧠 Tips
	•	If you get fatal: remote origin already exists, ignore it — your remote is already configured.
	•	You can customize the look using themes like Material for MkDocs
