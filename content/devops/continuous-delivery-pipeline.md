# Continuous Delivery Pipeline

## Overview

The **Continuous Delivery Pipeline (CDP)** represents the workflows, activities, and automation needed to move new features from ideation to customer delivery. It is SAFe's primary mechanism for achieving DevOps and delivering value at the speed of business.

The CDP is not just a technical concept — it is an organizational and process capability that spans from product thinking through release.

## The Four Aspects of the CDP

The Continuous Delivery Pipeline has four aspects, which together form a continuous loop:

```
   ┌──────────────────────────────────────────────────────────┐
   │                                                          │
   ▼                                                          │
Continuous      →    Continuous     →    Continuous    →    Release
Exploration          Integration         Deployment         on Demand
                                                               │
Customer Feedback ◄──────────────────────────────────────────┘
```

### 1. Continuous Exploration (CE)
**What it is:** The ongoing process of researching and validating market and user needs, and defining the solutions that meet those needs.

**Key activities:**
- Customer research and interviews
- Market analysis
- Hypothesis formulation and validation
- Feature definition and prioritization
- Design thinking and UX research

**Key tools and practices:**
- Customer journey mapping
- Lean UX
- A/B testing concepts
- Jobs-to-be-done framework
- Lean Business Cases

**Outputs:**
- Validated Features in the Program Backlog
- Hypothesis-driven feature definitions
- Customer insights feeding the PM's prioritization

### 2. Continuous Integration (CI)
**What it is:** The practice of frequently merging code changes into a shared repository, followed by automated builds and tests.

**Key activities:**
- Developers commit code multiple times per day
- Automated builds triggered on every commit
- Automated test suites run on every build
- Fast feedback (build and test results in minutes)

**Key tools:**
- Version control: Git, GitHub, GitLab, Bitbucket
- CI servers: Jenkins, GitHub Actions, CircleCI, Azure DevOps, GitLab CI
- Test automation frameworks
- Code quality tools (SonarQube, etc.)

**Practices that enable CI:**
- **Test-Driven Development (TDD)** — Tests exist before code is merged
- **Trunk-based development** — Short-lived branches; frequent merges to main
- **Feature flags** — Merge incomplete features safely
- **Automated code quality gates** — Fail fast on quality issues

**Key metric:** Integration frequency — multiple times per day, not once per sprint.

### 3. Continuous Deployment (CD)
**What it is:** The automated deployment of every validated code change to a production-like environment (and ultimately to production).

**Stages in the deployment pipeline:**
```
Commit → Build → Unit Test → Integration Test → System Test → Performance Test → Staging → Production
```

**Key practices:**
- **Infrastructure as Code (IaC)** — Environments defined in code; reproducible
- **Automated deployment scripts** — No manual deployment steps
- **Blue/Green deployments** — Zero-downtime releases
- **Canary releases** — Gradual rollout to reduce risk
- **Automated rollback** — Instant revert if problems detected

**DORA Metrics** (measuring deployment capability):
- **Deployment frequency** — How often code is deployed to production
- **Lead time for changes** — Time from commit to production
- **Change failure rate** — % of deployments causing production issues
- **Time to restore service** — How quickly incidents are recovered from

Elite performers (DORA): Deploy multiple times per day, <1 hour lead time, <5% failure rate, <1 hour recovery time.

### 4. Release on Demand
**What it is:** The ability to release value to customers at any time — not just at the end of a sprint or PI.

**What it enables:**
- Release timing based on business need, not technical constraint
- Partial feature releases (dark launches, feature flags)
- Instant rollback when needed
- Geographic or segmented rollout

**Key practices:**
- **Feature toggles/flags** — Control feature visibility independently of deployment
- **Dark launches** — Code deployed but not visible to users until ready
- **Canary releases** — Release to a small % of users first
- **Continuous monitoring** — Real-time visibility into production behavior

**Release on Demand is the goal.** Most organizations start with monthly releases and work toward weekly, daily, and then on-demand releases.

## Building the CDP

Building a Continuous Delivery Pipeline requires investment in:

| Investment Area | Examples |
|----------------|---------|
| **Version control** | Git; trunk-based development practices |
| **CI infrastructure** | Jenkins, GitHub Actions, CircleCI |
| **Test automation** | Unit, integration, end-to-end, performance tests |
| **Deployment automation** | Terraform, Ansible, Kubernetes, Docker |
| **Monitoring** | Prometheus, Grafana, PagerDuty, Datadog |
| **Feature flags** | LaunchDarkly, Split.io, custom implementation |

## CDP and the ART

The CDP is not just a team concern — it operates at the ART level:
- **ART-wide CI** — All teams integrate into a shared system
- **System-level testing** — Tests that span multiple team components
- **Shared deployment pipeline** — Coordinated release across teams
- **ART-level monitoring** — Visibility into the entire system's health

## Common CDP Maturity Journey

| Maturity Level | Description |
|---------------|-------------|
| **Level 1** | Manual builds, manual testing, manual deployment |
| **Level 2** | Automated builds; some automated tests; manual deployment |
| **Level 3** | Full CI; substantial test automation; automated deployment to staging |
| **Level 4** | CI/CD to production; feature flags; monitoring |
| **Level 5** | Continuous deployment; canary releases; automated rollback; full observability |

---

*See also: DevOps, Built-in Quality, Release on Demand, DORA Metrics, Agile Product Delivery*
