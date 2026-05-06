# Principle #5 – Base Milestones on Objective Evaluation of Working Systems

## Statement

> *"Base milestones on objective evaluation of working systems"*

Traditional milestones are based on completing documents, passing review gates, or hitting schedule dates. These are not objective measures of progress — they measure activity, not outcomes. SAFe bases milestones on the only truly objective measure: **working software that has been evaluated against real business needs**.

## The Problem with Traditional Milestones

In traditional development, milestones often measure:
- "Requirements document signed off" — But does it capture the right requirements?
- "Design review passed" — But does the design solve the real problem?
- "Code complete" — But does it actually work?
- "On schedule for delivery date" — But will what's delivered have value?

These gates create **illusions of progress**. Projects can pass every gate and still fail to deliver value.

### The Confirmation Bias Problem
Teams and managers are under pressure to pass gates. This creates:
- Optimistic status reports
- Problems discovered too late to fix
- "Pass the gate" behavior that doesn't reflect true readiness

## Objective Evaluation of Working Systems

An **objective evaluation** means:
1. Working software actually exists (not documents about it)
2. It runs in an environment similar to production
3. It is demonstrated to stakeholders who can evaluate its business value
4. Feedback is based on observable behavior, not promises

SAFe's primary mechanism: the **System Demo** and the **Inspect & Adapt** workshop.

## SAFe Milestones

SAFe uses two types of milestones:

### 1. PI Boundaries (Fixed Cadence Milestones)
PI Planning and the end-of-PI Inspect & Adapt are fixed-cadence milestones. They occur on a regular schedule regardless of where teams are in delivery.

**Why fixed cadence?**
- Predictable investment decision points
- Stakeholders know when to engage
- Reduces the "we're almost done" syndrome
- Forces honest assessment of what's been built

**What's evaluated at PI milestones:**
- System Demo: what was actually built this PI?
- PI Objectives achieved vs. committed
- Team and ART-level metrics
- Systemic impediments identified and resolved

### 2. Event-Based Milestones (Learning Milestones)
Some milestones are triggered by completion of a meaningful learning event:
- MVP tested with users → decision to pivot or persevere
- Architectural proof-of-concept completed → decision on technical approach
- Feature tested in market → decision on next investment

These milestones are not arbitrary dates — they're reached when sufficient learning has occurred to make a good decision.

## The Role of Business Owners

**Business Owners** are key to objective evaluation. They:
- Participate in PI Planning to assess feasibility
- Attend System Demos to evaluate working software
- Score PI Objectives (committed vs. achieved)
- Make investment decisions based on objective evidence

## Program Increment Objectives as Milestones

**PI Objectives** serve as milestone criteria:
- Set at PI Planning: "We plan to deliver X, Y, Z this PI"
- Evaluated at PI end: "We delivered X and Y; Z was not completed"
- Business value scored: Business Owners assign value scores

This creates a **hypothesis-test-evaluate** cycle at the program level:

```
PI Planning: Set objectives (hypothesis)
       ↓
Sprints 1-4: Build toward objectives
       ↓
System Demo: Demonstrate working system
       ↓
Inspect & Adapt: Evaluate objectively → score objectives
       ↓
Next PI Planning: Incorporate learning
```

## Continuous Evaluation

Milestones aren't just end-of-PI events. Continuous evaluation happens through:

| Event | Frequency | What's Evaluated |
|-------|-----------|------------------|
| Daily stand-up | Daily | Yesterday's progress, today's plan |
| Sprint Review | Every 2 weeks | Working software for the Sprint |
| System Demo | Every PI (+ mid-PI) | Integrated system increment |
| Inspect & Adapt | Every PI | Overall PI execution and systemic issues |

## Lean vs. Traditional Milestones

| Traditional | SAFe / Lean |
|------------|-------------|
| Phase gate (document-based) | Working system demonstration |
| Arbitrary schedule dates | Fixed cadence or learning milestones |
| Optimistic forecasting | Objective business owner scoring |
| Pass/fail gate | Continuous feedback and learning |
| Delayed discovery | Frequent, incremental evaluation |

## Implications for Portfolio Investment

At the portfolio level, objective evaluation enables **Lean Budgeting**:
- Epics are funded based on demonstrated learning, not upfront business cases
- Continued investment is based on results, not plans
- "Go/No-Go" decisions are based on MVP results

---

*See also: System Demo, Inspect & Adapt, PI Objectives, Business Owners, Lean Portfolio Management*
