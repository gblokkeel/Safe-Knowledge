# System Architect / Engineer

## Overview

The **System Architect/Engineer** is a technical leader who defines the overall architecture of the system being built by the ART. They work closely with teams to ensure the architectural runway keeps pace with the features being developed, making it possible to deliver new business value continuously.

The System Architect/Engineer plays a critical role in maintaining system integrity, promoting technical agility, and enabling the teams to move fast without accumulating crippling technical debt.

## Responsibilities

### Define and Communicate Architecture
- Define the overall system architecture
- Ensure all teams have a shared understanding of the architecture
- Communicate the architecture through models, documents, and direct interaction
- Maintain the **System Model** — a living representation of the system design

### Build Architectural Runway
- Identify and prioritize **Enabler** work needed to support future features
- Ensure architectural decisions don't block future business features
- Anticipate upcoming technical needs and prepare the system
- Balance architectural concerns with delivery of business features

### Participate in PI Planning
- Present the **Architectural Vision** and emerging priorities
- Identify architectural Enablers for the upcoming PI
- Help teams understand technical constraints and dependencies
- Work with teams to identify cross-team technical risks

### Support Teams
- Be available to teams throughout the sprint (not just at planning events)
- Provide guidance on complex technical decisions
- Review architectural implications of features and stories
- Help teams apply built-in quality practices

### Promote Technical Excellence
- Champion practices: TDD, refactoring, continuous integration, automated testing
- Guide teams in applying appropriate design patterns
- Identify and address technical debt systematically
- Foster communities of practice around technical disciplines

### Collaborate with Solution Architect (Large Solution)
- In Large Solution configurations, coordinate with the Solution Architect/Engineer
- Ensure the ART's architecture fits into the larger system architecture
- Participate in Pre-PI and Post-PI Planning events

## System Architect vs. Solution Architect

| Aspect | System Architect/Engineer | Solution Architect/Engineer |
|--------|--------------------------|----------------------------|
| **Scope** | Single ART's system | Multiple ARTs and Solution Train |
| **Level** | Program Level | Large Solution Level |
| **Focus** | ART technical integrity | Cross-ART system coherence |
| **Events** | PI Planning, System Demo | Pre-PI/Post-PI Planning, Solution Demo |

## The Architectural Runway

The **Architectural Runway** is the existing codebase, frameworks, and other technical infrastructure needed to implement near-term features without excessive redesign or delay.

A healthy architectural runway:
- Is 1–2 PIs ahead of business feature development
- Includes completed Enabler features
- Provides stable interfaces and abstractions
- Enables teams to develop features with high confidence

When the runway runs thin:
- Features get blocked by technical dependencies
- Technical debt accelerates
- Development slows and quality suffers
- The ART risks "stopping to refactor" — an expensive emergency

## Enablers

**Enablers** are work items that support the architectural runway. They include:
- **Infrastructure** — Deploying new cloud environments, CI/CD pipelines
- **Exploration** — Spikes to evaluate technologies or approaches
- **Compliance** — Activities required for regulatory or security compliance
- **Architecture** — Refactoring, establishing patterns, creating frameworks

Enablers are first-class items in the Program Backlog and should be prioritized alongside Features.

## Architecture in SAFe is Emergent

SAFe does not support Big Up-Front Design (BUFD). Instead, architecture is:
- **Intentional** — There is a conscious architectural vision
- **Emergent** — The architecture evolves as understanding grows
- **Just Enough** — Only design what's needed now; preserve options for the future
- **Collaborative** — Teams contribute to architectural decisions

The System Architect sets the **architectural intent** and creates enabling structures; teams refine and implement within that intent.

## Skills and Qualities

### Technical Excellence
- Deep expertise in system design patterns
- Strong understanding of non-functional requirements (performance, security, scalability)
- Proficiency in relevant technologies and platforms

### Communication
- Ability to explain complex technical concepts to non-technical stakeholders
- Skilled at creating clear, useful architectural diagrams and models
- Can translate business requirements into technical implications

### Servant Leadership
- Guides without dictating — teams own their implementation decisions
- Available and accessible to all teams
- Focuses on enabling team success, not personal technical authority

## Community of Practice Leadership

The System Architect often leads or co-leads the **Architecture Community of Practice (CoP)**:
- Regular cross-team knowledge sharing
- Architectural decision records and patterns
- Emerging technology exploration
- Technical standards and guidelines

---

*See also: Enablers, Architectural Runway, PI Planning, Built-in Quality, Communities of Practice*
