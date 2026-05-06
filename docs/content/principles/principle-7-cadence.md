# Principle #7 – Apply Cadence, Synchronize with Cross-Domain Planning

## Statement

> *"Apply cadence, synchronize with cross-domain planning"*

Cadence (regular rhythm) and synchronization (coordinated planning across teams) are two powerful mechanisms for managing the uncertainty and complexity of large-scale product development. Cadence makes the irregular regular; synchronization converts multiple local views into one global view.

## Cadence

**Cadence** is a regular, predictable rhythm of development and delivery. Like a heartbeat, it provides a consistent, reliable pulse that the entire organization can synchronize to.

### Why Cadence Works

Without cadence:
- Planning is irregular and ad hoc
- Stakeholders don't know when to engage
- Teams can't coordinate effectively
- Integration happens at unpredictable times

With cadence:
- Everyone knows when to plan, integrate, and deliver
- Stakeholders know when to expect demos and decisions
- Teams can coordinate around shared rhythms
- Feedback is predictable and actionable

### SAFe Cadences

SAFe uses nested cadences:

| Cadence | Duration | Mechanism |
|---------|----------|-----------|
| Daily | 1 day | Daily Stand-up |
| Sprint/Iteration | 2 weeks | Sprint Planning → Review → Retrospective |
| Program Increment (PI) | 8–12 weeks | PI Planning → Sprints → System Demo → I&A |
| Portfolio | Annually/Quarterly | Portfolio Sync, Strategic Planning |

### Fixed Cadence Benefits

1. **Predictability** — Stakeholders always know when to engage
2. **Reduced transaction costs** — Recurring events amortize overhead
3. **Forces regular inspection** — You can't postpone the PI end
4. **Creates forcing functions** — Teams prioritize against the cadence, not "someday"
5. **Enables coordination** — Multiple teams can synchronize to the same beat

## Synchronization

**Synchronization** is the process of aligning multiple teams, domains, and functions so they work toward a common goal at the same time.

### Why Synchronization Matters

In large-scale development, multiple teams work on interdependent components simultaneously. Without synchronization:
- Integration problems emerge late (expensive)
- Teams make conflicting architectural decisions
- Dependencies go unresolved until deadline pressure forces resolution (badly)
- Business stakeholders get inconsistent information

### Cross-Domain Planning

The primary synchronization mechanism in SAFe is **PI Planning** — a face-to-face (or virtual) planning event where all teams in the ART plan together for the next Program Increment.

Cross-domain planning means:
- **All teams plan together** (not separately)
- **All domains are represented** — development, architecture, business, ops, security
- **Dependencies are surfaced and planned** — not discovered during execution
- **Risks are identified** — "Roam, own, or mitigate"

### What Gets Synchronized in PI Planning

| Domain | What They Contribute |
|--------|---------------------|
| Product Management | Feature priorities and vision |
| Architecture | Enablers and technical direction |
| Business Owners | Business context and priorities |
| Dev Teams | Capacity and technical constraints |
| Operations | Deployment and infrastructure constraints |
| Security | Security requirements |

## Cadence + Synchronization = Predictability at Scale

Cadence alone ensures regular rhythms. Synchronization alone ensures alignment. Together, they provide **predictable delivery at scale**:

```
All teams synchronized to PI cadence
         ↓
Teams plan together at PI Planning
         ↓
Teams execute in parallel on synchronized sprint cadences
         ↓
Integration happens continuously (CI) and at System Demos
         ↓
All teams inspect and adapt together at I&A
         ↓
Cycle repeats with improved performance
```

## The Innovation and Planning (IP) Iteration

The last sprint of each PI is the **IP Iteration** — a built-in buffer that serves multiple purposes:
- Absorbs variability from the previous sprints
- Provides time for innovation (hackathons, experiments)
- Supports PI Planning preparation and execution
- Allows for hardening activities if needed

The IP Iteration prevents the PI cadence from being derailed by end-of-PI crunch.

## Cadence vs. Flow

Cadence and flow are complementary:
- **Cadence** governs planning, synchronization, and learning events
- **Flow** governs the continuous work between events

The PI cadence doesn't mean work is "batch released" at the end of each PI. Continuous delivery continues throughout the PI; the cadence governs the planning and learning rhythm.

## Common Anti-Patterns

- **Variable sprint lengths** — Breaks synchronization rhythm
- **Skipping PI Planning** — Loses cross-domain synchronization
- **"We'll sync at the end"** — Defers integration and creates big-bang risk
- **Asynchronous planning** — Teams plan independently, discovering conflicts during execution

---

*See also: PI Planning, Program Increment, Sprints, Innovation & Planning Iteration, System Demo*
