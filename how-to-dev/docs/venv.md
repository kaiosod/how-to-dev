# How to Create and Use a Python Virtual Environment (venv)

---

## 1. Check if Python is Installed

```bash
python3 --version
```

If Python is not installed, download it from:

---

## 2. Create the Virtual Environment

In your project folder, run:

```bash
python3 -m venv venv
```

This will create a folder called `venv/` containing your isolated Python environment.

---

## 3. Activate the Environment

### On macOS / Linux:

```bash
source venv/bin/activate
```

### On Windows (CMD):

```cmd
venv\\Scripts\\activate
```

### On Windows (PowerShell):

```powershell
.\\venv\\Scripts\\Activate.ps1
```

After activation, you should see `(venv)` at the beginning of your terminal prompt.

---

## 4. Install Your Packages

With the environment active:

```bash
pip install requests flask
```

These packages are installed only inside `venv/`.

---

## 5. Deactivate the Environment

To exit the virtual environment:

```bash
deactivate
```

---

## 6. Add `venv/` to `.gitignore`

If you're using Git, make sure to ignore the virtual environment:

```bash
echo "venv/" >> .gitignore
```

---

## Bonus: Recreate Environment from `requirements.txt`

To save your current packages:

```bash
pip freeze > requirements.txt
```

To recreate the same environment later:

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```
