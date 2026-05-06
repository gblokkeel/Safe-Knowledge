# Principle #10 – Organize Around Value

## Statement

> *"Organize around value"*

Traditional organizations are structured around functions — development, testing, operations, security, business analysis. These functional silos create handoffs, delays, and misalignment. SAFe advocates organizing around **value** — the products, services, and solutions that deliver value to customers.

## The Problem with Functional Silos

In a traditional functional organization:

```
Business Analysis → Design → Development → Testing → Operations → Release
   (Team A)        (Team B)   (Team C)    (Team D)   (Team E)   (Team F)
```

This structure creates:
- Long handoff queues between functions
- Lack of end-to-end ownership
- Misaligned incentives (each function optimizes locally)
- Slow feedback cycles (problems discovered downstream)
- Difficulty deploying frequently (every handoff is a gate)

## Value Streams: The Organizing Principle

A **Value Stream** is the sequence of activities needed to deliver a continuous flow of value to a customer. Organizing around value streams means:

- Teams are organized around the flow of value, not functions
- Long-lived, stable teams work together continuously
- End-to-end ownership of the product or service
- Cross-functional teams contain all needed skills

### Types of Value Streams

**Operational Value Streams (OVS):**
- The sequence of activities that create and deliver products/services to customers
- Examples: "Handle insurance claim," "Process loan application," "Deliver software update"
- These are what the business does to create value today

**Development Value Streams (DVS):**
- The sequence of activities used to develop new technology solutions
- Aligned to one or more operational value streams
- Examples: The ART building the claims processing system, the ART building the loan platform

### Identifying Value Streams

Value stream identification is a critical step in SAFe adoption:
1. **Map operational value streams** — What do you do to create value for customers?
2. **Identify development value streams** — What development work supports each?
3. **Identify ARTs** — How many Agile Release Trains are needed per DVS?

## Agile Release Trains: Teams Organized Around Value

The **Agile Release Train (ART)** is SAFe's primary organizational mechanism for delivering value:
- 50–125 people (5–12 Agile teams)
- Long-lived, stable
- Cross-functional — all skills needed to deliver end-to-end value
- Aligned to a single Development Value Stream
- Synchronized on a common PI cadence

The ART contains:
- Product Managers (what to build)
- System Architects (how to build it)
- Agile Teams (who builds it)
- Business Owners (why it matters)
- Release Train Engineer (how to run the train)

## Moving from Functional to Value-Based Organization

This is one of the most challenging aspects of SAFe adoption because it requires organizational restructuring.

### Steps for Reorganizing Around Value

1. **Identify operational value streams** — Walk the flow of value from customer request to delivery
2. **Map existing teams and skills** to the value streams
3. **Design Development Value Streams** around the operational value streams
4. **Configure ARTs** — How many teams fit within each DVS?
5. **Address capability gaps** — What skills are missing from each ART?
6. **Establish ART governance** — RTE, Product Manager, System Architect

### Handling Shared Services

Not every function can be embedded in every ART. Some functions — security, data management, legal — are genuinely shared.

For shared services, SAFe recommends:
- Treat them as **Shared Service providers**
- Establish clear SLAs for response time
- Work to embed capabilities as ARTs mature
- Represent shared services in PI Planning

## Team Topology Patterns

SAFe is compatible with Team Topologies (Skelton & Pais):

| Team Type | SAFe Equivalent | Purpose |
|-----------|----------------|---------|
| Stream-aligned team | Core Agile Team | Delivers value for a specific value stream |
| Platform team | Shared Service / Enabling ART | Provides infrastructure and platforms |
| Enabling team | Architectural team, Center of Excellence | Helps other teams adopt new practices |
| Complicated-subsystem team | Specialized team within ART | Handles highly specialized components |

## Value Stream Network

In large enterprises, multiple ARTs and Solution Trains form a **value stream network** — a portfolio of interrelated value streams all serving the enterprise's customers.

The portfolio level coordinates investment across this network:
- Allocating budget to value streams
- Identifying strategic dependencies
- Ensuring alignment to Strategic Themes

## Benefits of Organizing Around Value

| Benefit | Description |
|---------|-------------|
| **Faster delivery** | No handoff delays between functions |
| **Better quality** | End-to-end ownership motivates quality |
| **Greater alignment** | Teams see the whole value chain |
| **Improved engagement** | Teams see customer impact of their work |
| **Organizational agility** | Value stream structure adapts to strategy changes |

---

*See also: Value Streams, Agile Release Train, Lean Portfolio Management, PI Planning*
