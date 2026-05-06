# DevOps

## Overview

**DevOps** is a mindset, culture, and set of technical practices that enable development teams and operations teams to work together to deliver software faster, more reliably, and with higher quality.

In SAFe, DevOps is one of the key practices that enables the Continuous Delivery Pipeline and helps organizations achieve Release on Demand capability.

## The DevOps Problem It Solves

Traditionally, development and operations were separate functions with different goals:

| Development | Operations |
|------------|-----------|
| "Build new things fast" | "Keep existing things stable" |
| "Deploy constantly" | "Change as little as possible" |
| Measure: Feature velocity | Measure: System uptime |

This conflict created:
- Long, infrequent, high-risk releases
- "Throwing code over the wall" from Dev to Ops
- Finger-pointing when production issues occur
- Slow recovery from incidents

DevOps resolves this by breaking down the wall between development and operations.

## The CALMSS Framework

SAFe describes DevOps culture through the **CALMSS** framework:

### **C — Culture**
Building a collaborative culture where Dev and Ops (and Security) share responsibility:
- Shared ownership of the full lifecycle
- Blameless post-mortems
- "You build it, you run it" — teams own their services in production
- Shared metrics and incentives

### **A — Automation**
Automating repetitive, error-prone manual processes:
- CI/CD pipeline automation
- Infrastructure as Code
- Automated testing
- Automated monitoring and alerting
- Automated rollback

### **L — Lean Flow**
Applying Lean flow principles to the delivery pipeline:
- Small batch sizes (small, frequent commits)
- WIP limits
- Visualize work (deployment pipeline as a value stream)
- Eliminate waste (manual handoffs, waiting states)

### **M — Measurement**
Measuring what matters:
- DORA metrics (deployment frequency, lead time, failure rate, recovery time)
- Business outcomes (conversion, engagement, revenue)
- Operational metrics (availability, performance, error rates)
- Team health metrics

### **S — Sharing**
Building a culture of knowledge sharing:
- Runbooks and playbooks accessible to all
- Post-mortem findings shared broadly
- Tools and platforms available to all teams
- Communities of Practice for DevOps practices

### **S — Security (DevSecOps)**
Shifting security left — integrating security into every stage:
- Automated security scanning in CI pipeline
- Security requirements defined upfront
- Security engineers embedded in teams (or available as consultants)
- Regular security training for all engineers

## Key DevOps Practices

### Infrastructure as Code (IaC)
Infrastructure defined in version-controlled code:
- Reproducible environments
- Environment drift eliminated
- Infrastructure changes reviewed like code
- Tools: Terraform, Pulumi, CloudFormation, Ansible

### Containerization
Packaging applications with their dependencies:
- Consistent environments across dev/test/prod
- Fast, lightweight deployment units
- Tools: Docker, Podman

### Container Orchestration
Managing containerized applications at scale:
- Automated scaling, healing, deployment
- Tools: Kubernetes, Docker Swarm, Amazon ECS

### Observability
Understanding what's happening in production:
- **Metrics** — Numerical measurements over time (Prometheus, Grafana)
- **Logs** — Detailed event records (ELK stack, Splunk)
- **Traces** — Request path through distributed systems (Jaeger, Zipkin)
- **Alerts** — Automated notification of issues (PagerDuty, OpsGenie)

### Chaos Engineering
Intentionally injecting failures to build resilience:
- Test system's ability to handle failures
- Find weaknesses before they cause outages
- Tools: Chaos Monkey, Gremlin, LitmusChaos

## DORA Metrics

The **DevOps Research and Assessment (DORA)** team identified four key metrics for measuring DevOps capability:

| Metric | Elite | High | Medium | Low |
|--------|-------|------|--------|-----|
| **Deployment Frequency** | Multiple/day | Weekly–daily | Monthly | < Monthly |
| **Lead Time for Changes** | <1 hour | 1 day–1 week | 1 week–1 month | >1 month |
| **Change Failure Rate** | <5% | 5–10% | 10–15% | 15–45% |
| **Time to Restore** | <1 hour | < 1 day | 1 day–1 week | >1 week |

High-performing organizations in DORA research:
- Deploy 973x more frequently than low performers
- Have 6,570x faster change lead time
- Recover from incidents 6,570x faster
- Have 7x lower change failure rates

## DevOps Transformation in SAFe

SAFe's DevOps transformation typically follows this journey:

### Phase 1: Foundation
- Establish version control (Git)
- Implement basic CI (automated builds + unit tests)
- Begin containerization

### Phase 2: Expand CI/CD
- Full test automation suite
- Automated deployment to staging
- Infrastructure as Code

### Phase 3: Continuous Delivery
- Automated deployment to production
- Feature flags
- Basic monitoring and alerting

### Phase 4: Full DevOps
- On-demand releases
- Canary deployments
- Advanced observability
- Chaos engineering

## DevOps and SAFe Team Structure

SAFe supports two DevOps team models:
1. **Embedded SRE/Ops** — Ops engineers embedded within feature teams
2. **Platform Team** — Shared platform team provides DevOps infrastructure as a service

The Platform Team model is recommended for larger organizations:
- Platform team builds and maintains the deployment pipeline
- Feature teams focus on application code
- Platform team enables, not gates, feature team deployments

---

*See also: Continuous Delivery Pipeline, Built-in Quality, Release on Demand, Agile Product Delivery*
