# Sprint Planning (Iteration Planning)

## Overview

**Sprint Planning** (also called **Iteration Planning** in SAFe) is the ceremony that opens each sprint. The team defines the **Sprint Goal** and selects the User Stories they commit to delivering by the end of the sprint.

Sprint Planning creates a shared plan and commitment for the entire team.

## Purpose

1. **Define the Sprint Goal** — A single statement of what the sprint will achieve
2. **Select and understand stories** — Choose stories from the top of the Team Backlog
3. **Estimate and plan tasks** — Break stories into tasks; estimate effort
4. **Create commitment** — The team commits to the sprint plan as a whole

## Participants

- **All Team Members** — Full attendance required
- **Product Owner** — Presents and clarifies the top-priority stories
- **Scrum Master** — Facilitates the ceremony
- **Subject Matter Experts** — Invited as needed to clarify requirements

## Inputs

| Input | Source |
|-------|--------|
| **Team Backlog** | Ordered and groomed stories, ready for planning |
| **Team Capacity** | Available person-days for the sprint |
| **PI Objectives** | The team's program-level commitments for the PI |
| **Definition of Done** | Shared understanding of what "done" means |
| **Velocity** | Historical average to guide capacity planning |

## Sprint Planning Structure

### Part 1: What Can We Do? (1–2 hours)
- Product Owner presents the top stories from the Team Backlog
- Team asks clarifying questions; PO provides answers
- Team reviews capacity (account for holidays, time off, planned meetings)
- Team selects stories that fit within capacity

### Part 2: How Will We Do It? (1–2 hours)
- Team breaks selected stories into tasks
- Team members self-select tasks
- Team identifies dependencies and risks
- Team refines story estimates if needed
- Team finalizes the Sprint Goal

## The Sprint Goal

The Sprint Goal is a single sentence that describes the team's primary objective for the sprint:
- **Good**: "Enable customers to check out using saved payment methods"
- **Bad**: "Complete stories X, Y, and Z"

The Sprint Goal:
- Provides focus when decisions need to be made during the sprint
- Allows the team to negotiate scope if unexpected complexity arises
- Creates a meaningful commitment (to an outcome, not a list of tasks)
- Connects to the team's PI Objectives

## Capacity Planning

Before selecting stories, the team calculates available capacity:

```
Available Hours = (Team Members × Sprint Working Days × Hours/Day)
                 - (Planned Events × Duration)
                 - (Planned Time Off)
                 - (Baseline Overhead: ~20% for meetings, coordination)
```

In practice, most teams use **velocity** (average story points per sprint) as the primary capacity proxy.

## Story Readiness (Definition of Ready)

Stories should be "ready" before Sprint Planning:
- Written with clear acceptance criteria
- Estimated by the team (during refinement)
- Dependencies identified
- Small enough to complete in one sprint

The **Definition of Ready** is the team's agreement on what "ready" means.

## Duration

Sprint Planning duration scales with sprint length:
- **1-week sprint**: ~2 hours
- **2-week sprint**: ~4 hours
- **3-week sprint**: ~6 hours

## Common Anti-Patterns

| Anti-Pattern | Impact |
|-------------|--------|
| **Team not present** | Stories selected without those who will do the work |
| **No Sprint Goal** | No focus; team can't make trade-off decisions mid-sprint |
| **Backlog not groomed** | Planning becomes a groomingsession; inefficient |
| **Manager selects stories** | Team ownership is undermined |
| **Over-committing** | Sprint ends with incomplete stories (bad for predictability) |
| **Under-committing** | Team sandbagging; business value left on the table |

## Sprint Planning in SAFe Context

Sprint Planning occurs within the broader PI context:
- Stories selected should advance PI Objectives
- Dependencies identified during PI Planning should be revisited
- Architectural Enablers from the architectural runway should be included
- IP Iteration planning is different — IP is for innovation, planning prep, and buffer

---

*See also: Sprint Goal, Team Backlog, Definition of Done, PI Objectives, Sprint Review*
