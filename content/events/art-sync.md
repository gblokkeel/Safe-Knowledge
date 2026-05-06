# ART Sync (Scrum of Scrums & PO Sync)

## Overview

The **ART Sync** is a set of regular synchronization events that keep teams on the ART aligned between PI Planning events. It consists of two coordinated meetings:

1. **Scrum of Scrums (SoS)** — Cross-team coordination meeting for Scrum Masters and technical leads
2. **PO Sync** — Cross-team coordination meeting for Product Owners and Product Manager

Together, these events ensure that the ART operates as a cohesive unit, not a collection of independent teams.

## Why ART Sync?

After PI Planning, teams begin execution. But the plan only reflects what was known at planning time. During execution:
- Dependencies need to be tracked and resolved
- New dependencies emerge
- Risks materialize (or are averted)
- Plans need adjustment
- Cross-team blockers appear

The ART Sync creates a regular forum to address these issues without waiting until the next PI.

---

## Scrum of Scrums (SoS)

### Purpose
The SoS is a cross-team technical synchronization meeting. Its purpose is to identify and remove cross-team impediments, track dependency resolution, and coordinate technical work between teams.

### Participants
- **Scrum Masters** from all ART teams (primary attendees)
- **Technical leads or representatives** from each team
- **RTE** — Facilitates (or delegates facilitation to an SM)
- **System Architect** — Participates for technical issues

### Frequency and Duration
- **Frequency**: Weekly (minimum); twice weekly for high-dependency ARTs
- **Duration**: 15–30 minutes
- **Format**: Stand-up style; not a status meeting

### Standard Questions
Each team representative answers:
1. What has our team completed since the last sync?
2. What will our team complete before the next sync?
3. Are there any impediments or blockers — especially cross-team?
4. Are we at risk of not meeting our PI Objectives?

### SoS Outputs
- Updated Program Board (dependency tracking)
- Escalated impediments (for RTE to resolve)
- Action items with owners and due dates
- Risk register updates

---

## PO Sync

### Purpose
The PO Sync is a cross-team business synchronization meeting. Its purpose is to coordinate program-level priorities, align Product Owners across teams, and ensure the ART is delivering the right business value.

### Participants
- **Product Owners** from all ART teams
- **Product Manager** — Facilitates or leads
- **RTE** — Optional; may attend for program visibility
- **Business Owners** — Optional; helpful when business decisions are needed

### Frequency and Duration
- **Frequency**: Weekly (often aligned with SoS)
- **Duration**: 30–60 minutes

### PO Sync Agenda
1. Review progress against PI Objectives (business value perspective)
2. Review the Program Backlog — any reprioritization needed?
3. Identify cross-team story dependencies
4. Review any scope changes or new high-priority items
5. Identify items that need to be escalated to Business Owners

### PO Sync vs. Scrum of Scrums

| Aspect | Scrum of Scrums | PO Sync |
|--------|----------------|---------|
| **Focus** | Technical coordination | Business coordination |
| **Attendees** | SMs and tech leads | POs and PM |
| **Questions** | What's blocking delivery? | Are we building the right things? |
| **Escalates to** | RTE (for technical blockers) | Business Owners (for business decisions) |

---

## ART Sync Cadence

A typical weekly ART Sync cadence:

| Day | Event | Duration |
|-----|-------|----------|
| Monday | PO Sync | 30–45 min |
| Wednesday | Scrum of Scrums | 15–30 min |
| (Flexible) | Combined ART Sync (both groups) | 45–60 min |

Some ARTs run a combined ART Sync where both SMs and POs participate together, enabling both technical and business coordination in one meeting.

## Program Board Maintenance

Both ART Sync events should reference and update the **Program Board**:
- Mark completed features and milestones
- Update dependency status (resolved, at risk, blocked)
- Surface newly identified dependencies
- Flag risks that have materialized

## Common Anti-Patterns

| Anti-Pattern | Impact |
|-------------|--------|
| **ART Sync becomes a status meeting** | Wastes time; people attend but don't engage |
| **Only SMs attend SoS (not tech leads)** | Technical problems can't be solved without technical people |
| **Business Owners missing from PO Sync** | Business decisions get deferred |
| **Issues identified but not resolved** | ART Sync creates visibility but no action |
| **ART Sync cancelled when things are going well** | Regular cadence is important even when there are no crises |

---

*See also: PI Planning, Program Board, Release Train Engineer, Scrum Master, Product Owner*
