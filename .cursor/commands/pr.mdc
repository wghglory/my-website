---
description: Analyze code changes and create a pull request with AI-powered code review
---

# /pr Command

Analyze code changes using MCP server and create a pull request with a well-formatted title and description. The AI will
automatically:

- Analyze your code changes
- Generate PR title and description
- Create or update the PR on GitHub using MCP server
- **Perform AI code review** - analyze the PR code changes against all tech standards
- **Submit review comments** - leave detailed review comments on GitHub with line-specific feedback
- Provide you with the PR URL

## Usage

```
/pr
```

Or with optional base branch:

```
/pr <base-branch>
```

## Parameters

- `base-branch` (optional): The base branch to compare against (defaults to `main`)

## Workflow

1. **Analyze Code Changes**
   - Check current git status and branch
   - Get diff between current branch and base branch
   - Identify changed files, additions, deletions
   - Analyze commit history

2. **Generate PR Metadata**
   - Create a descriptive PR title following conventional commits format
   - Generate comprehensive PR description including:
     - Summary of changes
     - Files changed
     - Breaking changes (if any)
     - Testing instructions
     - Code review notes

3. **Create or Update PR**
   - Check if PR already exists for the current branch
   - If exists, update it with new description
   - If not, create new PR using GitHub MCP `create_pull_request`
   - Set base branch (default: `main`) and head branch (current branch)

4. **Perform AI Code Review**
   - Analyze each changed file for:
     - Code quality and best practices
     - Adherence to project standards and rules
     - Potential bugs or issues
     - Performance considerations
     - Security concerns
     - Consistency with codebase patterns
   - Check for:
     - Linter errors
     - Type safety issues
     - Missing error handling
     - Console.logs or debug code
     - Memory leaks
     - Adherence to project-specific rules

5. **Submit Review Comments**
   - Create a pending review using `pull_request_review_write` with method `create`
   - Add line-specific review comments using `add_comment_to_pending_review`:
     - Positive feedback for good practices
     - Suggestions for improvements
     - Warnings for potential issues
     - Questions for clarification
   - Submit the review using `pull_request_review_write` with method `submit_pending`
   - Use `COMMENT` event (can't approve own PR)

6. **Provide Results**
   - Return PR URL
   - Summarize review findings
   - List any issues found

## Example

```
/pr
```

This will:

- Analyze changes in current branch vs `main`
- Create PR with title like "feat: Add Cursor mastery blog post and update post rules"
- Generate comprehensive description
- Perform code review on all changed files
- Add review comments on GitHub
- Return PR URL: `https://github.com/wghglory/my-website/pull/82`

## Code Review Standards

The AI will review against:

- **Project Rules**: Check `.cursor/rules/` for project-specific standards
- **Code Quality**: Best practices, patterns, consistency
- **Type Safety**: TypeScript/type checking issues
- **Performance**: Potential performance issues
- **Security**: Security vulnerabilities
- **Testing**: Missing tests or test coverage
- **Documentation**: Missing or unclear documentation
- **Linting**: Linter errors and warnings

## Error Handling

- If no changes detected, inform the user
- If branch doesn't exist on remote, provide instructions to push
- If GitHub MCP server is not connected, show clear error message
- If PR creation fails, show error details
- If review submission fails, show partial results if available

## Notes

- The command works best when changes are already committed and pushed
- For uncommitted changes, the command will analyze staged/unstaged changes
- Review comments are submitted as `COMMENT` event (not approval) since you can't approve your own PR
- The PR description follows a standard template with sections for Summary, Changes, Breaking Changes, Testing
  Instructions, and Code Review Notes
