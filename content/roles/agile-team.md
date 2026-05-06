# Agile Team

## Overview

The **Agile Team** is the fundamental building block of SAFe. Every person who produces value — every developer, tester, designer, data scientist, business analyst — is a member of an Agile Team. Teams are the unit of execution in SAFe; they are where work actually gets done.

SAFe Agile Teams are **cross-functional, self-organizing, and long-lived** groups of 5–11 people who share responsibility for defining, building, testing, and delivering value every Sprint.

## Team Composition

A typical SAFe Agile Team includes:

| Role | Responsibility |
|------|---------------|
| **Product Owner** | Defines and prioritizes the Team Backlog |
| **Scrum Master** | Facilitates ceremonies; coaches the team; removes impediments |
| **Developers** | Design, build, and test the solution |
| **Testers / QA** | Ensure quality is built in; create and run tests |
| **(UX Designer)** | Design user experience (may be shared across teams) |

The recommended team size is **5–11 people** (including PO and SM):
- Fewer than 5: Not enough capacity to maintain flow
- More than 11: Communication overhead slows the team down

## Team Characteristics

### Cross-Functional
Agile Teams contain all the skills needed to define, build, test, and deliver working software:
- No handoffs to external testing teams
- No dependency on a separate UX team for every feature
- Infrastructure and operations knowledge within the team (DevOps model)

### Self-Organizing
Teams decide **how** to accomplish their sprint goals:
- Members self-select work items
- Team designs its own approach to implementation
- Process improvements come from within the team (retrospectives)
- No external task assignment

### Long-Lived and Stable
Teams stay together across PIs and years:
- Team dynamics improve over time (Tuckman: Forming → Storming → Norming → Performing)
- Context and codebase knowledge accumulates
- Trust and communication patterns deepen

### Co-located or Effectively Distributed
- Co-located teams work best, but distributed teams can be highly effective with the right tools
- Teams should have synchronous daily collaboration time
- Virtual teams need robust video/collaboration tools for ceremonies

## Types of Agile Teams

### Scrum Teams
Use the Scrum framework:
- Fixed-length sprints (typically 2 weeks)
- Sprint Planning, Daily Stand-up, Sprint Review, Sprint Retrospective
- Sprint Goal commitment
- Velocity-based capacity planning

### Kanban Teams
Use a flow-based approach:
- No fixed sprints; continuous flow
- WIP limits to manage capacity
- Pull-based work selection
- Cycle time and throughput metrics

### Mixed (Scrumban)
Many teams combine elements of both, using Scrum's structure with Kanban's flow principles.

## Team Events

| Event | Frequency | Duration | Purpose |
|-------|-----------|----------|---------|
| Sprint Planning | Every sprint | 4 hours (2-week sprint) | Plan the sprint |
| Daily Stand-up | Daily | 15 minutes | Synchronize and identify blockers |
| Sprint Review | Every sprint | 1–2 hours | Demonstrate and get feedback |
| Sprint Retrospective | Every sprint | 1–1.5 hours | Improve processes |
| Backlog Refinement | Weekly | 1 hour | Prepare upcoming stories |

## Team Metrics

| Metric | Description |
|--------|-------------|
| **Velocity** | Story points completed per sprint |
| **Sprint Goal Achievement** | % of sprint goals met |
| **Defect Rate** | Defects escaped from the team |
| **Team Health** | Engagement, trust, collaboration quality |
| **Lead Time** | Story cycle time from "In Progress" to "Done" |

## Built-in Quality Practices

SAFe Agile Teams are expected to practice:
- **Test-Driven Development (TDD)** — Write tests before code
- **Behavior-Driven Development (BDD)** — Acceptance tests as living documentation
- **Continuous Integration (CI)** — Merge and test multiple times per day
- **Refactoring** — Continuously improve code structure
- **Pair Programming** — Two developers work together (optional but effective)
- **Code Reviews** — Peer review of all code before merge

## Team Norms and Working Agreements

High-performing teams create explicit agreements about how they work:
- How decisions are made
- How conflicts are resolved
- Coding standards and review expectations
- Meeting attendance expectations
- How to escalate blockers
- Definition of Done (DoD)

## From Storming to High Performance

Teams evolve through stages (Tuckman model):

| Stage | Characteristics | SM's Role |
|-------|----------------|----------|
| **Forming** | Polite, uncertain, low performance | Clarify roles, set expectations |
| **Storming** | Conflict, frustration, personality clashes | Facilitate resolution, build trust |
| **Norming** | Clarity, cohesion, improving performance | Enable self-organization |
| **Performing** | High trust, high output, self-managing | Serve as needed; protect and develop |

## Team of Teams: The ART

Individual Agile Teams don't work in isolation. They work together as part of an **Agile Release Train (ART)** — a team of teams (50–125 people) that plans, executes, and continuously improves together on a PI cadence.

---

*See also: Scrum, Kanban, Built-in Quality, Sprint Planning, PI Planning, Agile Release Train*
