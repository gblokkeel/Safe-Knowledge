# Team and Technical Agility

## Overview

**Team and Technical Agility** is one of SAFe's 7 Core Competencies. It describes the ability of Agile teams to master Agile practices and technical disciplines needed to create high-quality, well-designed software and systems.

This competency operates at the team level and is the foundation upon which everything else in SAFe is built. Without technically excellent, high-performing Agile teams, no amount of portfolio governance or organizational structure can create sustainable Business Agility.

## Two Components

### 1. Agile Teams and ARTs

Agile teams are the primary mechanism for delivering value in SAFe:
- **Cross-functional** — All skills needed to deliver end-to-end value
- **Self-organizing** — Teams decide how to accomplish their goals
- **Long-lived** — Stable team composition for 6+ months
- **Right-sized** — 5–11 people including PO and SM

As teams form into ARTs, they gain the ability to deliver larger capabilities by working together in synchronized PI cadences.

**Key team practices:**
- Scrum or Kanban for iteration management
- PI Planning for quarterly alignment
- Retrospectives for continuous improvement
- Definition of Done for quality standards

### 2. Built-in Quality

Built-in Quality means that quality is not tested in at the end — it is designed and built in at every step of the development process.

**The Five Dimensions of Built-in Quality:**

| Dimension | Description |
|-----------|-------------|
| **Flow** | Working in small batches; limiting WIP; fast feedback |
| **Architecture and Design Quality** | Design patterns; modularity; sustainable architecture |
| **Code Quality** | Clean code; SOLID principles; code reviews; refactoring |
| **System Quality** | Integration testing; performance; security; reliability |
| **Release Quality** | Continuously deployable; feature flags; regression automation |

## Technical Practices that Enable Agility

### Test-Driven Development (TDD)
Write tests before writing code:
1. Write a failing test
2. Write just enough code to make the test pass
3. Refactor the code (keeping tests green)

Benefits:
- Tests exist for all functionality
- Design emerges from testing requirements
- Refactoring is safe
- Living documentation

### Behavior-Driven Development (BDD)
Extend TDD to describe system behavior in business language:
- Tests written in Given/When/Then format
- Collaboration between developers, testers, and POs
- Tests serve as living documentation
- Tools: Cucumber, SpecFlow, Behave

### Continuous Integration (CI)
Integrate code multiple times per day:
- Automated builds on every commit
- Fast test feedback (< 10 minutes)
- Broken builds fixed immediately
- Main branch always deployable

### Refactoring
Continuously improve the internal structure of code without changing its external behavior:
- Eliminate technical debt incrementally
- Improve naming, structure, and design
- Make the code easier to change
- Enable sustained delivery velocity

### Pair and Mob Programming
Collaborative code creation:
- **Pair Programming**: Two developers at one keyboard
- **Mob Programming**: Whole team at one keyboard
- Benefits: Knowledge sharing, fewer defects, better design
- Reduces bus factor (knowledge concentration)

### Definition of Done (DoD)

The DoD is the team's shared agreement on what "done" means. A story is done only when ALL DoD criteria are met.

**Example DoD for an Agile team:**
- [ ] Code written and peer-reviewed
- [ ] Unit tests written and passing
- [ ] Integration tests passing
- [ ] Acceptance criteria verified
- [ ] Code merged to main
- [ ] CI pipeline green
- [ ] No new critical vulnerabilities (security scan)
- [ ] Performance within acceptable parameters
- [ ] Deployed to staging environment
- [ ] Product Owner has accepted the story

**DoD at ART level (extends team DoD):**
- [ ] All teams' work integrated
- [ ] System Demo can be performed
- [ ] System-level performance acceptable
- [ ] Security review complete

## Agile Team Performance

### Tuckman Team Development Stages

| Stage | Characteristics |
|-------|----------------|
| **Forming** | Team is assembled; roles unclear; polite but uncertain |
| **Storming** | Conflicts emerge; roles contested; productivity low |
| **Norming** | Norms established; roles clear; productivity improving |
| **Performing** | High trust; self-organizing; high productivity |
| **Adjourning** | Team disbands (or member leaves) |

### Team Health Indicators

**Green (High Performing):**
- Consistently meets sprint goals
- Low defect escape rate
- Improving velocity over time
- Retrospective improvements being implemented
- Psychological safety is high

**Red (Struggling):**
- Frequently misses sprint goals
- High defect escape rate
- Velocity declining
- No meaningful retrospective improvements
- Low psychological safety

## Communities of Practice

Communities of Practice (CoPs) extend technical agility across the ART:
- Cross-team communities organized around disciplines (QA, DevOps, Architecture)
- Regular knowledge sharing and learning
- Establish and communicate technical standards
- Enable consistent practices across teams

---

*See also: Scrum, Kanban, Built-in Quality, DevOps, Continuous Delivery Pipeline, Agile Teams*
