# Program Board

## Overview

The **Program Board** (also called the **PI Planning Board**) is a visual display that shows the features planned for each sprint across all teams in the ART, along with their dependencies and milestones. It is created during PI Planning and serves as the ART's shared execution plan throughout the PI.

The Program Board makes the integrated ART plan visible and enables cross-team coordination.

## Structure

The Program Board is typically a large physical board (or virtual equivalent) structured as a grid:

```
                    Sprint 1  |  Sprint 2  |  Sprint 3  |  Sprint 4  |  IP Iter
Team 1 (Dragons)   [Feature A] [Feature B]              [Feature C]
Team 2 (Phoenix)              [Feature D] [Feature E]   [Feature F]
Team 3 (Falcon)    [Feature G]             [Feature H]  [Feature I]
...
Milestones                    [Release 1]                            [Release 2]
```

### Columns
- One column per sprint in the PI (typically 4–6 sprints)
- Final column for the IP (Innovation and Planning) Iteration

### Rows
- One row per Agile Team
- Additional rows for milestones, external dependencies, or shared services

### Feature Cards
Each Feature card shows:
- Feature name
- Owning team
- Dependencies (strings connecting to dependent cards)
- Risk level (ROAM status)

## Dependencies

Dependencies are the most critical information on the Program Board. They show which teams need work from other teams to proceed.

### Visualizing Dependencies
On a physical board: **colored string or yarn** connects dependent items
On a virtual board: **arrows or links** connect items

### Dependency Types
- **Team-to-team**: Team A needs something from Team B
- **Team-to-external**: Team needs something from outside the ART
- **Milestone-to-feature**: Feature must be done before a milestone
- **Feature sequencing**: Feature B can only start after Feature A

### Managing Dependencies
Dependencies should be:
1. **Identified** during PI Planning team breakouts
2. **Negotiated** between dependent teams during planning
3. **Tracked** at ART Sync (Scrum of Scrums) throughout the PI
4. **Resolved** before the dependent work needs to start

## Milestones on the Program Board

**Fixed-date milestones** are shown on the Program Board:
- Regulatory deadlines
- External product launches
- Customer demonstrations
- Contractual delivery dates

Teams plan their features in the sprints that precede these milestones.

## Program Board in PI Planning

Creating the Program Board is a core output of PI Planning:

1. **Teams plan sprint-by-sprint** — Each team places feature cards in the sprints where they plan to deliver
2. **Dependencies identified** — Teams add strings/arrows showing dependencies
3. **Milestones marked** — PM/RTE adds fixed-date milestones
4. **Program Board reviewed** — All teams see the full board; obvious problems addressed
5. **Risks identified** — High-risk dependencies flagged and ROAM'd

## Program Board in ART Sync

Throughout the PI, the Program Board is updated at ART Sync:
- Features completed → marked done
- Dependencies resolved → strings removed
- Newly discovered dependencies → added
- At-risk features → flagged

## Virtual Program Boards

For distributed teams, virtual Program Boards use:
- **Miro** — Most common virtual whiteboard
- **MURAL** — Similar to Miro
- **Jira** — Story-level Program Board view
- **Azure DevOps** — Delivery plan feature
- **Targetprocess** — SAFe-specific tooling
- **Planview** — Enterprise portfolio tooling

Virtual boards should maintain the same visual structure as physical boards, making it easy for all participants to see the plan and dependencies.

## Reading the Program Board

Key things to look for on the Program Board:
- **Clusters of dependencies** — A team with many dependencies is a potential bottleneck
- **Late-sprint features with early-sprint dependencies** — Risk of blocking
- **Milestones with many preceding features** — Risk of overload in preceding sprints
- **Empty cells** — Team capacity not planned; may indicate over-capacity or missed planning
- **Red/at-risk markers** — Features that need attention

## Metrics from the Program Board

| Metric | What It Shows |
|--------|-------------|
| **Dependency count** | Coordination complexity |
| **Risk count** | Risk exposure at PI start |
| **Feature distribution** | Load balance across sprints |
| **Cross-team dependency ratio** | How tightly coupled teams are |

---

*See also: PI Planning, ART Sync, Program Increment, Dependencies, PI Objectives*
