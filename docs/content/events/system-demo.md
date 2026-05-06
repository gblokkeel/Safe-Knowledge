# System Demo

## Overview

The **System Demo** is the event where the ART demonstrates the full system's current state — the integrated work of all teams — to Business Owners, stakeholders, and customers. It is the primary mechanism by which the ART objectively evaluates its progress against PI Objectives.

System Demos occur at the end of each sprint (every 2 weeks) and are particularly important at the end of each PI.

## Purpose

1. **Objective evaluation** — Demonstrate real, working software (not slides or demos of individual team work)
2. **Business feedback** — Stakeholders and customers provide immediate feedback
3. **Identification of misalignment** — Surface gaps between what was planned and what was built
4. **Celebration** — Acknowledge the team's work publicly
5. **Learning** — Inform the next PI's planning priorities

## Who Attends

| Role | Participation |
|------|-------------|
| **Business Owners** | Required — provide feedback and value assessment |
| **Product Manager** | Required — facilitates or coordinates the demo |
| **All Agile Teams** | Participate in demonstrating their work |
| **System Architect** | Provides technical context |
| **RTE** | Facilitates or ensures facilitation |
| **Customers** | Strongly encouraged |
| **Stakeholders** | Open to all interested parties |

## Frequency

- **Sprint System Demo** — Every sprint (typically every 2 weeks)
  - Shows integrated increment for that sprint
  - Held in addition to team Sprint Reviews
  - Typically shorter (30–60 minutes)

- **End-of-PI System Demo** — Last sprint of each PI (before Inspect & Adapt)
  - Shows the full PI's integrated system increment
  - More comprehensive (1–2 hours)
  - Directly precedes the Inspect & Adapt workshop

## What Gets Demonstrated

The System Demo shows the **integrated system** — not individual team demos:
- All teams' work integrated together
- Working in an environment similar to production (staging/pre-prod)
- Demonstrates actual user scenarios, not just feature lists
- Should include end-to-end flows when possible

**Key distinction:** System Demo ≠ Team Sprint Review
- Sprint Review: Each team demonstrates their specific team's work
- System Demo: All teams' work demonstrated together as an integrated system

## Preparation

Preparation for the System Demo requires:
- **Continuous Integration** — All teams' code must be integrated before the demo
- **Environment readiness** — Stable demo environment with realistic data
- **Demo script** — Planned scenarios that showcase the increment meaningfully
- **Business context** — Connect demonstrated features to PI Objectives

The RTE and Product Manager typically coordinate System Demo preparation.

## Structure of the System Demo (End-of-PI)

1. **Opening** (10 min) — Product Manager reviews PI Objectives and context
2. **System demonstration** (30–60 min) — Teams demonstrate integrated features in user scenario context
3. **Business feedback** (15–20 min) — Business Owners and stakeholders provide feedback
4. **PI Objective assessment** — Business Owners score achieved vs. planned objectives
5. **Closing** — Summary of key learnings and transition to Inspect & Adapt

## Metrics from System Demo

| Metric | How Measured |
|--------|-------------|
| **PI Objectives achieved** | % of committed objectives rated "met" by Business Owners |
| **Business value delivered** | Sum of BO scores for achieved objectives |
| **PI Predictability** | Actual business value / Planned business value × 100% |

## Common Issues

| Issue | Solution |
|-------|----------|
| Integration problems prevent demo | Invest more in CI/CD; make integration failures visible |
| Teams demo their own work separately | RTE enforces integrated demo across teams |
| No Business Owners attend | Escalate to leadership; this is a cultural issue |
| Demo environment is unstable | Invest in dedicated demo environment; use feature flags |
| Demo is a slideshow, not working software | RTE and PM enforce the "working software" standard |

## Relationship to Inspect & Adapt

The **System Demo directly precedes Inspect & Adapt**. The demo provides the objective evidence that feeds the I&A discussion:
- What did we plan to deliver?
- What did we actually deliver?
- What can we learn from the gap?
- What systemic changes will improve our next PI?

---

*See also: Inspect & Adapt, PI Objectives, Sprint Review, System Architect, Built-in Quality*
