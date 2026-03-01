# Contributing to NexGuard-AI

First off, thank you for considering contributing to NexGuard-AI! It's people like you that make NexGuard-AI such a great tool for the cybersecurity community.

## 🌟 We Welcome All Contributions

Whether you're a seasoned developer or just getting started, we value your contributions. This includes:

- 🐛 Bug reports
- ✨ Feature requests
- 💻 Code contributions
- 📝 Documentation improvements
- 🌍 Translations
- 🧪 Testing and feedback

## 📋 Code of Conduct

By participating in this project, you agree to abide by our code of conduct:

- **Be respectful**: Treat everyone with respect and kindness
- **Be collaborative**: Work together and share knowledge
- **Be inclusive**: Welcome newcomers and different perspectives
- **Be constructive**: Provide helpful feedback and criticism

## 🚀 Getting Started

### Prerequisites

- Python 3.8 or higher
- Git
- Basic understanding of AI/ML and cybersecurity concepts (helpful but not required)

### Setting Up Your Development Environment

1. **Fork the repository**
   
   Click the "Fork" button at the top of the repository page.

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/NexGuard-AI.git
   cd NexGuard-AI
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/mrigeshkoyande/NexGuard-AI.git
   ```

4. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

5. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 💻 Making Changes

### Branch Naming Convention

- `feature/` - New features (e.g., `feature/add-agent-memory`)
- `fix/` - Bug fixes (e.g., `fix/detection-agent-crash`)
- `docs/` - Documentation updates (e.g., `docs/update-readme`)
- `refactor/` - Code refactoring (e.g., `refactor/agent-architecture`)
- `test/` - Adding tests (e.g., `test/add-integration-tests`)

### Coding Standards

#### Python Code Style

- Follow [PEP 8](https://www.python.org/dev/peps/pep-0008/) style guide
- Use meaningful variable and function names
- Add docstrings to classes and functions
- Keep functions focused and small
- Use type hints where appropriate

Example:
```python
def detect_threat(log_entry: dict, threshold: float = 0.7) -> bool:
    """
    Detect if a log entry represents a potential threat.
    
    Args:
        log_entry: Dictionary containing log information
        threshold: Confidence threshold for threat detection (0.0-1.0)
        
    Returns:
        True if threat detected, False otherwise
    """
    # Implementation here
    pass
```

#### JavaScript Code Style

- Use ES6+ features
- Prefer `const` over `let`, avoid `var`
- Use meaningful variable names
- Add comments for complex logic
- Follow consistent indentation (2 spaces)

### Commit Messages

Write clear, descriptive commit messages:

- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit first line to 72 characters
- Reference issues and pull requests when relevant

Examples:
```
Add threat intelligence API integration

Fix detection agent memory leak issue #123

Update dashboard styling for better contrast
```

### Testing Your Changes

1. **Run the main system**
   ```bash
   python main.py
   ```

2. **Test the dashboard**
   - Open `dashboard.html` in a browser
   - Verify all features work correctly

3. **Run simulations**
   ```bash
   python simulator/log_generator.py
   ```

4. **Check for errors**
   - Monitor console output
   - Test edge cases
   - Verify no breaking changes

## 🔍 Pull Request Process

### Before Submitting

- [ ] Code follows project style guidelines
- [ ] Comments added for complex logic
- [ ] Documentation updated (if needed)
- [ ] All tests pass
- [ ] No console errors
- [ ] Commit messages are clear

### Submitting a Pull Request

1. **Update your fork**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Fill out the PR template

### Pull Request Description Template

```markdown
## Description
Brief description of what this PR does

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Code refactoring
- [ ] Performance improvement

## Changes Made
- Change 1
- Change 2
- Change 3

## Testing
How has this been tested?

## Screenshots (if applicable)
Add screenshots for UI changes

## Related Issues
Fixes #(issue number)
```

## 🎯 Areas We Need Help With

### High Priority

- **Agent Enhancements**
  - Improve detection accuracy
  - Add more threat intelligence sources
  - Enhance response automation

- **Dashboard Improvements**
  - Mobile responsiveness
  - Additional visualizations
  - Custom themes

- **Integrations**
  - SIEM platforms (Splunk, ELK)
  - Cloud platforms (AWS, Azure, GCP)
  - Security tools (EDR, firewall APIs)

### Medium Priority

- **Documentation**
  - Tutorial videos
  - API documentation
  - Best practices guide

- **Testing**
  - Unit tests
  - Integration tests
  - Performance tests

### Good First Issues

Looking for your first contribution? Look for issues labeled:
- `good first issue` - Easy to tackle for beginners
- `help wanted` - We especially need help here
- `documentation` - Documentation improvements

## 🐛 Reporting Bugs

### Before Submitting a Bug Report

- Check existing issues to avoid duplicates
- Collect relevant information
- Try to reproduce the bug

### Bug Report Template

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
 - OS: [e.g., Windows 10, Ubuntu 20.04]
 - Python Version: [e.g., 3.9.7]
 - Browser: [e.g., Chrome 96]

**Additional context**
Any other relevant information.
```

## 💡 Suggesting Features

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
A clear description of the problem.

**Describe the solution you'd like**
Clear description of what you want to happen.

**Describe alternatives you've considered**
Other solutions you've thought about.

**Additional context**
Any other context or screenshots.
```

## 📖 Documentation Contributions

Documentation is just as important as code! You can help by:

- Fixing typos and grammatical errors
- Adding examples and tutorials
- Improving clarity and organization
- Translating documentation
- Creating video tutorials

## 🌍 Translation

We welcome translations of:
- README.md
- Dashboard UI
- Documentation
- Error messages

Contact us if you'd like to help translate NexGuard-AI!

## 💬 Communication

- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: Questions and general discussion
- **Email**: [mrigeshkoyande@gmail.com](mailto:mrigeshkoyande@gmail.com)

## 📜 License

By contributing to NexGuard-AI, you agree that your contributions will be licensed under the MIT License.

## 🙏 Recognition

All contributors will be:
- Listed in our CONTRIBUTORS.md file
- Mentioned in release notes for their contributions
- Given credit in any related publications

## ❓ Questions?

Don't hesitate to ask! Create an issue with the `question` label or reach out via email.

---

Thank you for contributing to NexGuard-AI! Together, we're building the future of AI-driven cybersecurity. 🛡️🤖
