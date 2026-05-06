# Principle #1 – Take an Economic View

## Statement

> *"Take an Economic View"*

Making good decisions requires a sound understanding of the economic impact of those decisions. Decisions that may seem locally reasonable can be globally suboptimal. Decisions that seem expensive in the short term may be the right long-term investment.

## The Problem This Addresses

In traditional organizations, decisions are often made without a clear economic framework:
- Features are prioritized by stakeholder loudness, not business value
- Delays are treated as "just schedule slips" without recognizing their cost
- Large batch sizes feel efficient locally but create massive inventory costs
- Quality is seen as a cost center rather than an economic driver

The result: teams deliver the wrong things, too slowly, with poor quality — not because people aren't working hard, but because they're optimizing the wrong things.

## Economic Prioritization

### Weighted Shortest Job First (WSJF)

SAFe uses **WSJF** as the primary economic prioritization model. WSJF scores work items based on:

```
WSJF = Cost of Delay / Job Duration (proxy)
```

**Cost of Delay (CoD)** includes:
- **User and Business Value** — How much does this deliver to users/business?
- **Time Criticality** — How does the value decay over time? (perishability)
- **Risk Reduction / Opportunity Enablement (RR|OE)** — Does this reduce risk or open future opportunities?

**Job Duration proxy** uses T-shirt sizes (XS, S, M, L, XL) or story points as a relative proxy.

### WSJF Example

| Feature | Business Value | Time Criticality | RR\|OE | CoD | Duration | WSJF |
|---------|---------------|-----------------|--------|-----|----------|------|
| Feature A | 8 | 2 | 5 | 15 | 3 | 5.0 |
| Feature B | 6 | 8 | 3 | 17 | 5 | 3.4 |
| Feature C | 3 | 3 | 8 | 14 | 2 | 7.0 |

Feature C should be sequenced first (highest WSJF = 7.0), even though it has the lowest individual value components, because it's short and has significant risk reduction value.

## The Cost of Delay

**Cost of Delay** is the most important economic concept in SAFe. It quantifies what the organization loses when a valuable item is not delivered on time.

Understanding CoD helps teams and managers:
- Justify urgent work with economic reasoning
- Resist the temptation to add scope to a release
- Accelerate decisions that unblock high-value work
- Prioritize quality (bugs have a high CoD when they delay releases)

## Understanding Economic Trade-offs

Good economic thinking means recognizing trade-offs:

### 1. Build vs. Buy vs. Partner
- Make decisions based on total cost of ownership, not just upfront cost
- Consider the economic value of speed-to-market

### 2. Quality Has Economic Value
- Defects are economically wasteful — they must be found and fixed (twice the work)
- Technical debt accumulates interest — it slows future delivery
- Built-in Quality is an economic imperative, not just good practice

### 3. Inventory Has a Cost
- Work-in-progress (WIP) is inventory
- Partially done work is inventory — it represents cost without value delivered
- Reducing batch sizes and WIP accelerates economic value realization

### 4. Decisions Have a Time Value
- Delaying a good decision can be as costly as making a wrong one
- "Decide as late as responsibly possible" preserves options, but not indefinitely

## Implications for SAFe Roles

| Role | Economic Responsibility |
|------|------------------------|
| **Product Manager** | Use WSJF to prioritize the Program Backlog |
| **Product Owner** | Use WSJF to prioritize the Team Backlog |
| **RTE** | Ensure the ART understands and applies economic thinking |
| **LPM** | Apply economic thinking to Epic prioritization and portfolio investment |
| **Business Owners** | Define and communicate Cost of Delay |

## Common Mistakes

- **Feature-counting** instead of value-measuring
- Ignoring time criticality when prioritizing
- Treating all WIP as equal (not all inventory is equally costly)
- Optimizing team velocity at the expense of system throughput

---

*See also: WSJF, Program Backlog, Portfolio Kanban, PI Planning*
