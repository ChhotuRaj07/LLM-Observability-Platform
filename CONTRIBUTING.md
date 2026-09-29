# Contributing to LLM Observability Platform

Thanks for your interest in contributing to this project.

This repository is a full-stack application for evaluating and comparing LLM outputs across providers.

---

## Ways to Contribute

You can help by:
- fixing bugs
- improving documentation
- writing tests
- building new features
- improving UI/UX
- improving backend API performance
- adding model evaluation features

---

## Before You Start

1. Fork the repository
2. Clone your fork
3. Create a feature branch
4. Make your changes
5. Run tests locally
6. Open a pull request

Example:

```bash
git checkout -b fix/issue-description
```

---

## Local Development Setup

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
python manage.py migrate
python manage.py runserver
```

### Frontend

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

---

## Coding Guidelines

- Write clear and readable code
- Keep functions small and focused
- Prefer meaningful variable names
- Add comments only where necessary
- Follow existing project patterns
- Add tests for bug fixes and new features

---

## Pull Request Guidelines

When opening a PR:
- provide a clear title
- describe the problem and solution
- include screenshots for UI changes if needed
- mention testing performed
- keep changes focused

Example PR description:

```md
## Summary
Fixes issue with model comparison table not loading for empty results.

## Changes
- handle empty API response safely
- display empty state UI
- added regression test

## Testing
- backend unit tests
- frontend build check
```

---

## Good First Issues

Good starting tasks include:
- fixing typos in docs
- improving setup instructions
- adding missing tests
- handling empty states
- cleaning up UI labels
- improving error messages

---

## Community Guidelines

- Be respectful and constructive
- Ask questions clearly
- Keep discussions focused on project goals
- Help others when possible

---

## Need Help?

Open an issue or ask in the discussion section if you are unsure where to start.

Thank you for contributing.
