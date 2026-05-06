# Agile Product Delivery

## Overview

**Agile Product Delivery** is one of SAFe's 7 Core Competencies. It describes the ability to continuously discover, develop, deliver, and operate valuable products and services. It is customer-centric and places the customer at the center of product decisions.

This competency operates primarily at the Program (ART) level and bridges the gap between business strategy and team execution.

## Three Components

### 1. Customer Centricity and Design Thinking

**Customer Centricity** means understanding customer needs deeply and making product decisions based on real customer insights — not internal assumptions.

**Design Thinking** is a human-centered approach to problem-solving that includes:
- **Empathize** — Understand the user's world
- **Define** — Clearly articulate the problem to solve
- **Ideate** — Generate creative solutions
- **Prototype** — Build quick, testable versions of ideas
- **Test** — Validate with real users

**Lean UX** practices:
- Cross-functional teams including UX designers
- Rapid prototyping and user testing
- Hypothesis-driven design
- Continuous user research (not just upfront research)

### 2. Develop on Cadence, Release on Demand

**Develop on Cadence:**
- Development follows the regular PI and sprint cadence
- Provides predictability for planning and coordination
- Creates regular feedback loops

**Release on Demand:**
- Release value to customers at any time — independent of development cadence
- Business decides when to release (market timing, customer readiness)
- Technical decisions (when to deploy) separated from business decisions (when to release)

How these two work together:
```
Development Cadence:     Sprint 1 → Sprint 2 → Sprint 3 → Sprint 4
Deployment:              Continuous → → → → → → → → → → → →
Customer Release:                                ↑              ↑
                                        (Business decides)
```

**Feature flags** are the key technical enabler:
- Code is deployed continuously
- Features are hidden until the business decides to release
- Different customers can see different features
- Bad releases can be instantly rolled back by toggling off

### 3. DevOps and the Continuous Delivery Pipeline

Agile Product Delivery requires the technical infrastructure to deliver continuously:
- Continuous Integration — Integrate multiple times per day
- Continuous Deployment — Automate deployment to production
- Monitoring and Observability — Know immediately when things go wrong
- Feature management — Control what customers see

## Product Thinking

Agile Product Delivery shifts from **project thinking** to **product thinking**:

| Project Thinking | Product Thinking |
|-----------------|-----------------|
| Has a start and end date | Long-lived; continuous investment |
| Funded per project | Funded per value stream |
| Success = delivered on time | Success = customer outcomes |
| Team disbanded after delivery | Stable, long-lived teams |
| Fixed scope | Evolving scope based on learning |
| Handoff to "support" | Team operates what it builds |

## The Product Manager's Role in Agile Product Delivery

In Agile Product Delivery, the Product Manager is the **Chief Strategist** for the ART:
- Maintains the vision and roadmap
- Prioritizes the Program Backlog (WSJF)
- Validates that delivered features achieve their benefit hypothesis
- Continuously researches customer needs

## Measuring Customer Value

Agile Product Delivery measures value through customer outcomes, not just output:

| Metric | What It Measures |
|--------|----------------|
| **NPS (Net Promoter Score)** | Customer loyalty |
| **Feature adoption** | % of users using a feature |
| **Task completion rate** | Users completing their intended task |
| **Customer retention** | Are customers staying? |
| **Revenue attribution** | Revenue tied to specific features |
| **Support ticket reduction** | Problems eliminated by improvements |

## Minimum Viable Product (MVP) and Minimum Marketable Feature (MMF)

**MVP (Minimum Viable Product)**:
- The smallest version of a product that allows learning about customers
- Used for **product discovery** — validating whether a product concept is worth building
- Example: A landing page that tests whether users would pay for a product before it's built

**MMF (Minimum Marketable Feature)**:
- The smallest feature set that delivers meaningful customer value
- Used for **product delivery** — slicing features to enable continuous delivery
- Example: Checkout with only credit card support (add PayPal in the next release)

## Hypothesis-Driven Development

Every significant feature should be framed as a hypothesis:

```
We believe [this feature]
Will achieve [this outcome]
For [this customer segment]
We will know we're right when [measurable result]
```

After delivery, the hypothesis is tested against real user data. This creates a continuous learning loop.

---

*See also: DevOps, Continuous Delivery Pipeline, Product Manager, Product Owner, Program Backlog*
