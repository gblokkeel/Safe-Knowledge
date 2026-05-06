# Portfolio Backlog

## Overview

The **Portfolio Backlog** is the holding area for upcoming **Epics** and **Enabler Epics** that have passed through the Portfolio Kanban and are ready for implementation. It is prioritized by the LPM function using portfolio-level WSJF.

The Portfolio Backlog represents the largest items in the investment pipeline — work items that are too large for a single team or ART to deliver in a single PI.

## Contents

### Business Epics
Business Epics are large initiatives with significant business impact:
- Span multiple ARTs or multiple PIs
- Create new customer value
- Have a formal Lean Business Case
- Are managed by a Business Epic Owner

### Enabler Epics
Enabler Epics are large technical investments:
- Address technical debt, infrastructure, or architectural concerns
- Enable future business features
- Have a technical Lean Business Case
- Often managed by Enterprise Architects

## Portfolio Backlog vs. Other Backlogs

| Backlog | Owner | Work Items | Granularity |
|---------|-------|-----------|-------------|
| Portfolio Backlog | LPM | Epics, Enabler Epics | Months to quarters |
| Program Backlog | Product Manager | Features, Enablers | Sprints to PI |
| Team Backlog | Product Owner | User Stories, Tasks | Days to sprints |

## Epic to Feature Flow

Epics in the Portfolio Backlog are broken down into Features for the Program Backlog:

```
Portfolio Backlog (Epics)
         ↓
    Epic Analysis
         ↓
  Feature decomposition
         ↓
Program Backlog (Features)
         ↓
    PI Planning
         ↓
  Team Backlogs (Stories)
```

## Prioritizing the Portfolio Backlog

LPM uses **portfolio-level WSJF** to prioritize Epics:

**Cost of Delay components:**
- User and Business Value
- Time Criticality
- Risk Reduction/Opportunity Enablement

**Job Duration:**
- Estimated PI count for the Epic
- Complexity and uncertainty factors

## Entry Criteria for the Portfolio Backlog

An Epic enters the Portfolio Backlog when it has:
- [ ] Passed the Portfolio Kanban Analysis stage
- [ ] A completed Lean Business Case
- [ ] LPM approval to proceed
- [ ] An assigned Epic Owner
- [ ] A defined MVP hypothesis
- [ ] Initial feature decomposition (at least the first few features)

## Exit Criteria (Done)

An Epic is "Done" when:
- MVP has been delivered and evaluated
- LPM determines sufficient value has been delivered
- Business outcomes are measured against the Lean Business Case hypothesis
- Decision made: continue building, pivot, or stop

## Portfolio Backlog Governance

LPM governs the Portfolio Backlog through:
- **Portfolio Kanban review** — Regular LPM review of backlog state
- **Epic prioritization** — Applying WSJF across all epics
- **Budget allocation** — Ensuring funded ARTs have appropriate epics
- **Lean Business Case approval** — Gate for entering the implementation queue

## Common Pitfalls

| Pitfall | Impact |
|---------|--------|
| **Epics too large** | Never finish; lose relevance; consume budget indefinitely |
| **No Epic Owner** | Epics drift without accountability |
| **Poor Lean Business Case** | Investment without clear value hypothesis |
| **Backlog not prioritized** | ARTs build whatever they want vs. highest value |
| **LPM not engaged** | Portfolio drifts from strategic direction |

---

*See also: Portfolio Kanban, Lean Portfolio Management, Epic Owner, Program Backlog, Strategic Themes*
