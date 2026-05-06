# Product Owner (PO)

## Overview

The **Product Owner (PO)** is the team member responsible for defining Stories and prioritizing the Team Backlog to streamline the execution of program priorities, while maintaining the conceptual and technical integrity of the Features or components for the team.

The PO is a member of the Agile Team and is responsible for the team's iteration-level work. They are the primary interface between the team and the Product Manager.

## Responsibilities

### Own the Team Backlog
- Define and prioritize **User Stories** in the Team Backlog
- Maintain the backlog in preparation for Sprint Planning
- Write clear acceptance criteria for each story
- Ensure the backlog reflects the team's capacity and constraints

### Accept Completed Work
- Accept or reject completed stories in Sprint Review
- Ensure acceptance criteria are met before accepting stories
- Maintain the Definition of Done with the team

### Participate in ART Events
- Attend **PI Planning** to represent the team's perspective
- Participate in **System Demos** to provide feedback
- Attend **ART Sync** (PO Sync) to coordinate with other Product Owners

### Collaborate with Product Manager
- Receive Feature context from the Product Manager
- Break Features into User Stories (story decomposition)
- Communicate team capacity and constraints to the PM
- Escalate unresolved dependencies and blockers

### Facilitate Story Decomposition
- Break down Features into implementable User Stories
- Ensure Stories are INVEST: Independent, Negotiable, Valuable, Estimable, Small, Testable
- Collaborate with the team on technical constraints

## Product Owner vs. Product Manager

| Aspect | Product Owner (PO) | Product Manager (PM) |
|--------|-------------------|---------------------|
| **Level** | Team level | Program level |
| **Backlog** | Team Backlog (Stories) | Program Backlog (Features) |
| **Work items** | User Stories, Tasks | Features, Enablers |
| **Sprint involvement** | Full sprint cycle | PI-level planning |
| **Primary relationship** | Development team | Business stakeholders |
| **Ceremonies** | All team ceremonies | PI Planning, System Demo |

## The INVEST Criteria for Stories

Stories in the Team Backlog should be:

| Letter | Criterion | Meaning |
|--------|-----------|---------|
| **I** | Independent | Can be developed independently of other stories |
| **N** | Negotiable | Scope is flexible within the overall intent |
| **V** | Valuable | Delivers value to the user or business |
| **E** | Estimable | Team can estimate the effort |
| **S** | Small | Can be completed in one sprint |
| **T** | Testable | Acceptance criteria can be written and tested |

## Acceptance Criteria

Well-written acceptance criteria:
- Define what "done" means for the story
- Are written before development begins (preferably)
- Are testable — automated or manual
- Describe behavior from the user's perspective
- Do not prescribe implementation

**Format examples:**
- Gherkin/BDD: `Given [context] When [action] Then [outcome]`
- Checklist format: explicit list of conditions
- Narrative format: detailed description of required behavior

## PO in Sprint Ceremonies

| Ceremony | PO's Role |
|---------|----------|
| **Sprint Planning** | Presents and clarifies top priority stories; negotiates sprint scope with team |
| **Daily Stand-up** | Optional; available to answer clarifying questions |
| **Sprint Review** | Accepts or rejects completed stories; provides business feedback |
| **Sprint Retrospective** | Full participant; represents business perspective on process |
| **Backlog Refinement** | Leads the session; breaks down and clarifies upcoming stories |

## Skills and Qualities

### Domain Knowledge
- Deep understanding of the problem domain
- Knowledge of user needs and behaviors
- Ability to write clear, concise acceptance criteria

### Communication
- Bridges between technical teams and business stakeholders
- Translates business needs into technical requirements
- Explains technical constraints to business stakeholders

### Decision-Making
- Makes timely prioritization decisions
- Empowered to accept/reject work without excessive escalation
- Balances scope, quality, and schedule trade-offs

### Collaboration
- Builds strong relationships with the development team
- Partners closely with Product Manager
- Works with Quality Engineers on acceptance criteria

## Anti-Patterns to Avoid

| Anti-Pattern | Impact |
|-------------|--------|
| **Proxy PO** — PO without authority | Cannot make real-time decisions; team blocks |
| **Absentee PO** — PO not available to team | Teams fill gaps with assumptions; wrong stories built |
| **Over-specification** — PO defines implementation | Undermines team autonomy; reduces engagement |
| **Backlog neglect** — Unprepared backlog | Sprint Planning is chaotic; team velocity suffers |
| **Feature factory** — PO focused on volume | Quantity over quality; value not measured |

## Relationship with the Development Team

The PO is a full member of the Agile Team:
- Sits with (or is virtually available to) the team
- Participates in team ceremonies
- Is a peer, not a manager
- Empowers the team to make implementation decisions
- Is empowered to make business decisions

---

*See also: Product Manager, Team Backlog, Sprint Planning, Sprint Review, User Stories*
