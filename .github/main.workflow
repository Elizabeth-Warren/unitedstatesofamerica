workflow "Audit npm packages" {
  on = "pull_request"
  resolves = ["npm audit"]
}

action "npm audit" {
  uses = "elizabeth-warren/npm-audit-action@master"
  secrets = ["GITHUB_TOKEN"]
}
