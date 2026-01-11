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
- **Submit review comments** - leave detailed review comments on GitHub **only for problematic issues** (good changes
  should not receive comments)
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
   - Check if PR already exists for the current branch using `list_pull_requests`
   - **If PR exists:**
     - Re-analyze ALL changes (including new commits) between base and head branch
     - Generate updated PR title based on all commits/changes
     - Generate updated PR description reflecting all current changes
     - Update existing PR using `update_pull_request` with:
       - New title (if changed)
       - New description (reflecting all commits)
   - **If PR doesn't exist:**
     - Create new PR using GitHub MCP `create_pull_request`
   - Set base branch (default: `main`) and head branch (current branch)

4. **Perform AI Code Review**
   - **For new PRs or updated PRs:** Review ALL changes in the PR (including new commits)
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
   - **Note:** When updating an existing PR, review comments will focus on new changes, but the review summary will
     cover all changes

5. **Submit Review Comments**
   - **IMPORTANT: Only comment on problematic issues, not on good changes**
   - Create a pending review using `pull_request_review_write` with method `create`
   - Add line-specific review comments using `add_comment_to_pending_review` **only for**:
     - Bugs or errors
     - Security vulnerabilities
     - Performance issues
     - Code quality problems
     - Violations of project standards/rules
     - Missing error handling
     - Type safety issues
     - Suggestions for critical improvements
   - **Do NOT comment on:**
     - Good practices (no need to praise)
     - Well-written code
     - Proper implementations
     - Correct patterns
   - Submit the review using `pull_request_review_write` with method `submit_pending`
   - Use `COMMENT` event (can't approve own PR)
   - If no issues found, submit review with summary only (no line comments)

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
- **If PR exists:** Update title and description to reflect all commits (including new ones)
- **If PR doesn't exist:** Create PR with title like "feat: Add Cursor mastery blog post and update post rules"
- Generate comprehensive description covering all changes
- Perform code review on all changed files (including new commits)
- Add review comments on GitHub **only for problematic issues** (good code receives no comments)
- Return PR URL: `https://github.com/wghglory/my-website/pull/82`

**Example with updates:**

```
/pr  # First run - creates PR #82
# ... make more commits and push ...
/pr  # Second run - updates PR #82 with new title/description reflecting all commits
```

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
- **Re-running `/pr` on the same branch will update the existing PR** with:
  - Updated title (if commits suggest a different scope)
  - Updated description (reflecting all commits, not just new ones)
  - Fresh code review of all changes
- **Review comments focus only on issues** - good code receives no comments to keep reviews concise and actionable
- Review comments are submitted as `COMMENT` event (not approval) since you can't approve your own PR
- The PR description follows a standard template with sections for Summary, Changes, Breaking Changes, Testing
  Instructions, and Code Review Notes
- When updating an existing PR, the description will be regenerated to include all commits/changes, ensuring it stays
  current
