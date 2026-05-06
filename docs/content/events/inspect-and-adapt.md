# Inspect & Adapt (I&A)

## Overview

The **Inspect & Adapt (I&A)** workshop is the ART's primary systematic improvement event. Held at the end of each Program Increment, it is a significant event where the current state of the solution is demonstrated, and teams retrospect and identify improvements to be carried into the next PI.

I&A is SAFe's embodiment of the "Inspect and Adapt" principle from the Agile Manifesto — applied at scale.

## Purpose

1. **Objective evaluation** — How well did we execute the PI?
2. **Retrospection** — What should we start, stop, and continue?
3. **Problem-solving** — Identify root causes of systemic problems
4. **Improvement planning** — Create specific improvement items for the next PI
5. **Shared learning** — Build collective intelligence across the ART

## Timing and Duration

- **Timing**: Last day (or final half-day) of each PI, immediately following the System Demo
- **Duration**: 2–3 hours for a full I&A workshop
- **Participants**: The full ART — all teams, RTEs, PMs, architects, Business Owners

## The Three Parts of Inspect & Adapt

### Part 1: PI System Demo (preceding I&A)
The System Demo (described separately) occurs immediately before I&A and provides the objective evidence for the retrospective.

### Part 2: Quantitative Measurement

Before retrospecting on process, the ART examines objective metrics:

**PI Predictability:**
```
PI Predictability = Σ(Actual Business Value) / Σ(Planned Business Value) × 100%
Target: 80% or above
```

**Other metrics reviewed:**
- Team velocity vs. planned velocity
- Defect rates and quality metrics
- Feature cycle time
- Flow metrics (WIP, throughput, cycle time)

Metrics are presented without blame — the purpose is learning, not evaluation of individuals.

### Part 3: Retrospective and Problem-Solving Workshop

This is the core of the I&A event. It follows a structured process:

#### Step 1: Retrospect (What happened?)
Teams identify:
- What went well?
- What didn't go well?
- What was confusing or unclear?

Methods: Team-level sticky notes, dot voting, affinity mapping

#### Step 2: Problem-Solving Workshop (Why did it happen? What will we do?)

A structured problem-solving approach:
1. **Identify the problem** — From the retrospective output, select 1–3 top problems
2. **Root cause analysis** — Use "5 Whys" or fishbone diagrams to find root causes
3. **Identify improvements** — Brainstorm potential solutions
4. **Create improvement backlog items** — Specific, actionable items for the next PI

## Root Cause Analysis: The "5 Whys"

For each major problem, ask "Why?" five times to find the root cause:

**Example:**
- Problem: "We didn't meet 3 of our PI Objectives"
  - Why? Testing found critical defects in the last sprint
  - Why? Integration testing only happened at the end of the PI
  - Why? Teams didn't have a shared integration environment until sprint 3
  - Why? Infrastructure provisioning took 3 sprints
  - Why? Infrastructure requests weren't submitted until PI Planning
- **Root Cause**: Infrastructure needs are not identified and provisioned before PI Planning

**Improvement**: Create an Infrastructure Enabler story in PI Planning -1 sprint to provision environments.

## Improvement Stories

The output of I&A is a set of **Improvement Stories** — specific, actionable backlog items:
- Assigned to specific teams or the ART as a whole
- Placed in the next PI's Sprint 1 backlog
- Tracked to completion

> *Improvement is not just discussed — it is planned and tracked.*

## Typical I&A Workshop Agenda

| Time | Activity |
|------|---------|
| 0:00 | PI System Demo (may be separate preceding event) |
| 0:00 | I&A kickoff — PI metrics presentation (30 min) |
| 0:30 | Team retrospectives (30 min) |
| 1:00 | Affinity clustering — identify top themes (15 min) |
| 1:15 | Vote on top problems to solve (10 min) |
| 1:25 | Problem-solving workshops (45 min) |
| 2:10 | Teams present solutions (20 min) |
| 2:30 | Identify improvement backlog items (15 min) |
| 2:45 | Wrap up and celebrate (15 min) |

## Facilitation Tips

- **Start with celebration** — Acknowledge what the ART achieved this PI
- **Separate diagnosis from blame** — Systems thinking, not finger-pointing
- **Use structured methods** — 5 Whys, fishbone diagrams keep discussion focused
- **Prioritize ruthlessly** — Better to solve 1–2 problems fully than to list 20 things
- **Follow through** — Improvement stories must actually be worked next PI

## Common Challenges

| Challenge | Solution |
|----------|----------|
| Teams only talk about team-level issues | RTE steers to systemic, cross-team issues |
| No time allocated for I&A | Block the calendar — I&A is mandatory SAFe event |
| Improvement items never get done | Make them Sprint 1 stories, tracked by RTE |
| Same problems appear every I&A | Problems aren't being solved at root cause level |
| Business Owners don't attend | Escalate — they need to hear systemic issues |

## Scaling Retrospectives

For large ARTs (100+ people), I&A uses a tiered approach:
1. Team-level retrospectives (30 min) — identify team-level issues
2. Scrum of Scrums retrospective — elevate ART-level issues
3. I&A workshop — focus on systemic, cross-team issues

---

*See also: System Demo, PI Objectives, PI Planning, Continuous Improvement, Retrospective*
