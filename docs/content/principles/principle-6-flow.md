# Principle #6 – Make Value Flow Without Interruptions

## Statement

> *"Make value flow without interruptions"*

The goal of SAFe — and Lean thinking generally — is to deliver value to customers as quickly as possible. Every interruption, handoff delay, wait state, and unnecessary step is waste that slows value delivery. Leaders and teams should continuously identify and remove these impediments to flow.

## What Is Flow?

**Flow** in product development means:
- Work moves continuously from concept to customer
- There are minimal wait states and queues
- Work is not blocked waiting for approvals, information, or resources
- Value is delivered frequently, not in large infrequent batches

Flow is measured by **cycle time** (how long it takes to go from idea to working software in production) and **throughput** (how many features are delivered per period).

## The Eight Flow Accelerators (SAFe 6.0)

SAFe 6.0 introduced eight practices that improve flow:

### 1. Visualize and Limit WIP
Work-in-progress (WIP) is the enemy of flow. When WIP is too high:
- Context switching kills productivity
- Queues form and grow
- Cycle time increases
- Quality suffers

**WIP limits** force prioritization and expose bottlenecks.

### 2. Address Bottlenecks
Every system has a constraint (bottleneck). Improving non-bottleneck steps doesn't improve overall throughput. Identify and fix the constraint first.

Using the **Theory of Constraints (ToC)**:
1. Identify the bottleneck
2. Exploit the bottleneck (maximize its output)
3. Subordinate everything else to the bottleneck
4. Elevate the bottleneck (increase its capacity)
5. Repeat

### 3. Avoid Startups and Stops
Starting and stopping work is extremely costly:
- Ramp-up time when returning to interrupted work
- Cognitive overhead of context switching
- Loss of momentum and knowledge

**Strategies:**
- Avoid partial work assignment ("50% on two teams")
- Don't start work you don't intend to finish in the current PI
- Keep teams stable and dedicated

### 4. Manage Queue Lengths
Long queues create long wait times. In product development:
- Backlog queue (too large = items wait too long before development)
- Code review queue
- Testing queue
- Approval queue

**Reduce queue lengths by:**
- Limiting WIP at each stage
- Increasing throughput at bottlenecks
- Eliminating unnecessary approval steps

### 5. Reduce Batch Sizes
Large batches:
- Take longer to process
- Are harder to integrate
- Delay feedback
- Amplify the cost of mistakes

**SAFe batch size reduction:**
- Stories instead of large features
- Frequent releases instead of big-bang deployments
- Continuous integration instead of infrequent merges

### 6. Eliminate Unnecessary Handoffs
Every handoff is a potential delay:
- Information gets distorted
- Work queues up waiting for the receiver
- Accountability is diluted

**Strategies:**
- Cross-functional Agile teams eliminate handoffs within the team
- DevOps practices eliminate Dev/Ops handoffs
- Continuous delivery eliminates release handoffs

### 7. Gain Fast Feedback
Slow feedback amplifies the cost of errors:
- The longer the feedback cycle, the more wrong work is built
- Fast feedback enables rapid course correction

**SAFe feedback mechanisms:**
- Automated testing (minutes)
- Sprint Reviews (2 weeks)
- System Demos (PI, ~10 weeks)
- Customer deployments (continuous)

### 8. Eliminate Waste
Lean identifies seven types of waste in manufacturing. In product development (Poppendieck):
1. **Partially done work** — WIP that isn't delivering value
2. **Extra processes** — Steps that don't add value
3**Extra features** — Work done that customers don't need
4. **Task switching** — Context switching overhead
5. **Waiting** — Idle time between activities
6. **Motion** — Unnecessary team movements and handoffs
7. **Defects** — Rework and escaped defects

## Value Stream Mapping

Value Stream Mapping (VSM) is a key tool for improving flow:
1. Map the current state — all steps from idea to customer
2. Identify wait times and waste at each step
3. Design the future state — reduced waste, improved flow
4. Plan the transformation

Typical findings in VSM exercises:
- 80–95% of total elapsed time is waiting, not working
- Most wait states are queue time (waiting for someone's attention)

## Flow Metrics

| Metric | Definition | Why It Matters |
|--------|-----------|----------------|
| **Cycle Time** | Time from "started" to "done" | Measures end-to-end delivery speed |
| **Throughput** | Items completed per period | Measures delivery rate |
| **WIP** | Items in progress | Indicates flow health |
| **Flow Efficiency** | Active time / Total elapsed time | Reveals proportion of time spent waiting |
| **Flow Distribution** | Mix of work types | Reveals portfolio balance |

## Flow in SAFe Practices

| SAFe Practice | Flow Benefit |
|--------------|-------------|
| **Kanban** | Visualizes and limits WIP |
| **Continuous Integration** | Eliminates integration wait states |
| **DevOps** | Eliminates deployment bottlenecks |
| **PI Planning** | Identifies and plans around dependencies |
| **ART Sync** | Removes cross-team blockers quickly |

---

*See also: Kanban, Continuous Delivery Pipeline, DevOps, ART Sync, Value Streams*
