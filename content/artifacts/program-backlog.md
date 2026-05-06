# Program Backlog

## Overview

The **Program Backlog** is the holding area for upcoming Features and Enablers planned for development by an Agile Release Train (ART). It is maintained by the Product Manager and represents the ART's near-term and medium-term work.

The Program Backlog is the primary source of content for PI Planning — the top items are selected for development in the upcoming PI.

## Contents

The Program Backlog contains two types of work items:

### Features
**Features** are services that fulfill stakeholder needs. They are:
- Described with a benefit hypothesis and acceptance criteria
- Large enough to span multiple sprints or the work of one or more teams
- Typically deliverable within a single PI
- Aligned to the ART's Vision and Roadmap

**Feature format:**
```
Name: [Short title]
Benefit Hypothesis: In order to [business outcome], [users] can [capability]
Acceptance Criteria:
  1. [Testable condition 1]
  2. [Testable condition 2]
  ...
```

### Enablers
**Enablers** are work items that support the architectural runway needed to implement future Features. They include:
- Infrastructure work (CI/CD pipelines, environments)
- Technical exploration (spikes)
- Compliance activities
- Architecture work (refactoring, creating frameworks)

Enablers are first-class backlog citizens — they must be prioritized alongside Features.

## Backlog Management

### Prioritization with WSJF

The Product Manager prioritizes the Program Backlog using **Weighted Shortest Job First (WSJF)**:

```
WSJF = Cost of Delay / Job Duration (proxy)

Cost of Delay = User/Business Value + Time Criticality + Risk Reduction/Opportunity Enablement
```

Features with the highest WSJF score should be sequenced first.

### Backlog Health

A healthy Program Backlog has:
- **Enough depth** for the next 1–2 PIs (not too deep — over-specification)
- **Prioritized order** — top 10 features are clear and ready for PI Planning
- **Well-described features** — benefit hypothesis and acceptance criteria written
- **Balanced mix** — business features AND enablers (typically 20–30% enablers)
- **Regular grooming** — reviewed and updated at least every 2 weeks

## Program Backlog vs. Team Backlog

| Aspect | Program Backlog | Team Backlog |
|--------|----------------|-------------|
| **Owner** | Product Manager | Product Owner |
| **Work items** | Features, Enablers | User Stories, Tasks |
| **Granularity** | Feature-level (days/weeks) | Story-level (hours/days) |
| **Prioritized by** | WSJF | Story priority within features |
| **Timeframe** | PI-horizon (8–12 weeks) | Sprint-horizon (2 weeks) |

## Program Backlog in PI Planning

The top features from the Program Backlog are the primary input to PI Planning:
1. Product Manager selects **top 10 features** for the upcoming PI
2. These are presented during PI Planning's Vision and Top Features session
3. Teams plan their sprints around delivering these features
4. Teams create Team PI Objectives mapped to program features

## Program Backlog vs. Portfolio Backlog

| Aspect | Portfolio Backlog | Program Backlog |
|--------|-----------------|----------------|
| **Owner** | LPM / Epic Owners | Product Manager |
| **Work items** | Epics, Enabler Epics | Features, Enablers |
| **Granularity** | Epic-level (months/quarters) | Feature-level (sprints/PI) |
| **Prioritized by** | Portfolio WSJF | Program WSJF |

## Feature Decomposition

Features are broken down into User Stories by Product Owners and teams:

```
Epic (Portfolio)
    ↓
Capability (Large Solution)
    ↓
Feature (ART/Program)
    ↓
User Story (Team)
    ↓
Task (Individual)
```

## Managing Technical Debt in the Program Backlog

Technical debt should be visible and managed through the backlog:
- Use Enabler stories for debt reduction work
- Allocate ~10–20% of capacity to technical debt reduction
- Include debt reduction in PI Planning
- Make debt visible to Business Owners so they understand its cost

## Common Pitfalls

| Pitfall | Impact |
|---------|--------|
| **Backlog is a requirements list** | Over-specified features; teams have no flexibility |
| **No enablers** | Technical debt accumulates; architectural runway falls behind |
| **Too deep** | Teams work on items that will change before they're reached |
| **Not prioritized** | PI Planning is chaotic; teams don't know what matters |
| **PM not engaged** | Backlog becomes stale and disconnected from business needs |

---

*See also: Features, Enablers, WSJF, PI Planning, Portfolio Backlog, Team Backlog*
