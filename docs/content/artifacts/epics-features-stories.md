# Epics, Features et User Stories — La Hiérarchie du Backlog SAFe

## Vue d'ensemble

SAFe organise le travail en une **hiérarchie de 5 niveaux**, du plus grand au plus petit. Chaque niveau répond à une question différente et appartient à un échelon différent de l'organisation.

```
PORTFOLIO      ┌──────────────────────────────────┐
               │              EPIC                │  → "Quelle grande initiative ?"
               └──────────────────────────────────┘
                                 ↓
LARGE SOLUTION ┌──────────────────────────────────┐
(optionnel)    │           CAPABILITY             │  → "Quel ensemble de fonctionnalités ?"
               └──────────────────────────────────┘
                                 ↓
PROGRAMME      ┌──────────────────────────────────┐
               │             FEATURE              │  → "Quelle valeur pour l'utilisateur ?"
               └──────────────────────────────────┘
                                 ↓
ÉQUIPE         ┌──────────────────────────────────┐
               │           USER STORY             │  → "Que fait l'utilisateur concrètement ?"
               └──────────────────────────────────┘
                                 ↓
               ┌──────────────────────────────────┐
               │              TÂCHE               │  → "Comment le développeur le réalise ?"
               └──────────────────────────────────┘
```

---

## Exemple fil rouge : une application e-commerce

Pour illustrer chaque niveau, nous utilisons un exemple concret : **une plateforme e-commerce qui veut améliorer son processus de paiement**.

---

## 1. L'Epic

### Définition
Un **Epic** est une grande initiative business qui dépasse la capacité d'un seul PI (Program Increment). Il représente un investissement significatif avec un impact stratégique mesurable.

- Appartient au **Portfolio Backlog**
- Géré par un **Epic Owner**
- Nécessite un **Lean Business Case** avant approbation
- Durée typique : plusieurs PIs (plusieurs mois)

### Structure d'un Epic

| Champ | Contenu |
|-------|----------|
| **Nom** | Court, orienté valeur |
| **Hypothèse de valeur** | Ce qu'on espère atteindre |
| **Indicateurs de succès** | Métriques mesurables |
| **MVP** | Périmètre minimum pour valider l'hypothèse |
| **Portée** | Ce qui est inclus / exclu |

### Exemple concret

> **Epic : Refonte complète de l'expérience de paiement**
>
> **Hypothèse :** En modernisant le tunnel de paiement (méthodes de paiement, UX mobile, paiement en 1 clic), nous réduirons le taux d'abandon de panier de 35% à 20%, générant +4M€ de CA annuel.
>
> **Indicateurs de succès :**
> - Taux d'abandon de panier < 20% (actuellement 35%)
> - Taux de conversion checkout > 75% (actuellement 58%)
> - NPS post-achat > 45 (actuellement 32)
>
> **MVP :** Paiement 1-clic pour les utilisateurs enregistrés avec CB sauvegardée
>
> **Inclus :** Tunnel de paiement web + mobile, méthodes CB/PayPal/Apple Pay
> **Exclu :** Paiement en plusieurs fois, crypto-monnaies

### Le Lean Business Case d'un Epic

Avant qu'un Epic soit approuvé dans le Portfolio Kanban, l'Epic Owner rédige un **Lean Business Case** (1-2 pages, pas un document waterfall) :

```
Pour [nos clients e-commerce]
Qui [abandonnent leur panier au moment du paiement]
Notre solution [refonte du tunnel de paiement]
Est [une expérience de paiement simplifiée]
Qui [réduit les frictions et augmente le taux de conversion]
Contrairement à [notre tunnel actuel à 7 étapes]
Notre solution [permet de payer en 2 étapes depuis mobile]
```

---

## 2. La Capability *(niveau Large Solution uniquement)*

### Définition
Une **Capability** est un niveau intermédiaire utilisé uniquement dans les configurations **Large Solution SAFe**, quand un Epic doit être réparti entre plusieurs ARTs.

- Elle correspond à une fonctionnalité de haut niveau qui nécessite plusieurs ARTs
- Elle se découpe ensuite en Features pour chaque ART
- Si votre organisation n'a qu'un seul ART, **vous pouvez ignorer ce niveau** et passer directement d'Epic à Feature

### Exemple concret

> **Capability : Paiement multi-canal unifié**
>
> *ART Plateforme Web* → Feature : Checkout 1-clic sur web
> *ART Mobile* → Feature : Checkout natif iOS/Android
> *ART Paiement* → Feature : Intégration Apple Pay / Google Pay

---

## 3. La Feature

### Définition
Une **Feature** est un service ou une fonctionnalité qui apporte de la valeur directement à un utilisateur ou au business. C'est l'unité de travail principale au niveau **Programme (ART)**.

- Appartient au **Program Backlog**
- Gérée par le **Product Manager**
- Livrable dans **un seul PI** (idéalement)
- Décrite par une **hypothèse de bénéfice** et des **critères d'acceptation**

### Structure d'une Feature

```
Nom : [Verbe d'action] + [objet] + [pour qui/dans quel contexte]

Hypothèse de bénéfice :
  Afin de [résultat business ou utilisateur]
  [Persona] peut [action permise par la feature]

Critères d'acceptation :
  1. [Condition testable et vérifiable]
  2. [Condition testable et vérifiable]
  ...
```

### Exemples concrets de Features

**Feature 1 — Paiement 1-clic**

> **Nom :** Permettre le paiement en 1 clic pour les utilisateurs avec CB enregistrée
>
> **Hypothèse de bénéfice :**
> Afin d'*augmenter le taux de conversion de 10 points*,
> un *acheteur régulier* peut *finaliser son achat en 1 clic sans ressaisir ses informations*.
>
> **Critères d'acceptation :**
> 1. Un utilisateur authentifié avec une CB valide enregistrée voit le bouton "Acheter en 1 clic"
> 2. Le paiement se déclenche sans redirection vers une page de paiement
> 3. Un email de confirmation est envoyé dans les 30 secondes
> 4. L'utilisateur peut annuler dans les 30 minutes depuis son espace compte
> 5. Fonctionne sur Chrome, Safari, Firefox (mobile et desktop)

**Feature 2 — Paiement Apple Pay / Google Pay**

> **Nom :** Intégrer Apple Pay et Google Pay au checkout
>
> **Hypothèse de bénéfice :**
> Afin de *réduire l'abandon panier sur mobile de 15%*,
> un *acheteur sur iPhone ou Android* peut *payer avec son wallet natif sans saisir de CB*.
>
> **Critères d'acceptation :**
> 1. Le bouton Apple Pay apparaît sur Safari iOS si une carte est configurée dans Wallet
> 2. Le bouton Google Pay apparaît sur Chrome Android si un compte Google Pay est actif
> 3. Le paiement s'effectue avec authentification biométrique (Face ID / empreinte)
> 4. La commande est créée et confirmée dans les 5 secondes

**Feature 3 — Sauvegarde des moyens de paiement**

> **Nom :** Permettre la sauvegarde et gestion des cartes bancaires
>
> **Hypothèse de bénéfice :**
> Afin de *faciliter les achats répétés*,
> un *utilisateur enregistré* peut *sauvegarder jusqu'à 5 cartes et choisir sa carte par défaut*.
>
> **Critères d'acceptation :**
> 1. L'utilisateur peut enregistrer une CB lors du checkout (opt-in explicite)
> 2. Les cartes sont affichées dans l'espace "Mon compte > Moyens de paiement"
> 3. L'utilisateur peut supprimer une carte à tout moment
> 4. Les données CB sont tokenisées (jamais stockées en clair) — conformité PCI-DSS
> 5. Un maximum de 5 cartes par compte est appliqué

### Les Enablers : Features techniques

Toutes les Features ne sont pas visibles par l'utilisateur. Les **Enabler Features** préparent le terrain technique :

> **Enabler Feature : Intégration Stripe Payment Intent API**
>
> *Pourquoi :* Remplacer notre gateway de paiement legacy par Stripe pour supporter les wallets et le 3DS2
>
> **Critères d'acceptation :**
> 1. Tous les paiements CB passent par Stripe Payment Intents
> 2. 3DS2 (authentification forte) est géré automatiquement
> 3. Les webhooks Stripe sont reçus et traités en < 2 secondes
> 4. Rollback possible vers l'ancien gateway en < 1 heure

---

## 4. La User Story

### Définition
Une **User Story** est la plus petite unité de valeur livrable par une équipe en **un seul Sprint**. Elle décrit une action qu'un utilisateur veut accomplir et pourquoi.

- Appartient au **Team Backlog**
- Gérée par le **Product Owner**
- Estimée en points par l'équipe
- Doit respecter les critères **INVEST**

### Format standard

```
En tant que [persona / rôle utilisateur]
Je veux [action / capability]
Afin de [bénéfice / raison]

Critères d'acceptation :
  Étant donné [contexte]
  Quand [action]
  Alors [résultat attendu]
```

### Critères INVEST — ce qui fait une bonne Story

| Lettre | Critère | Mauvais exemple | Bon exemple |
|--------|---------|----------------|-------------|
| **I** | Indépendante | "Suite de la story précédente" | Peut être développée seule |
| **N** | Négociable | Spécification exhaustive | Intent clair, détails à discuter |
| **V** | Valeur | "Refactoring technique" | "Permet à l'utilisateur de..." |
| **E** | Estimable | Trop vague ou trop grande | L'équipe peut l'estimer |
| **S** | Small (petite) | 3 semaines de travail | Faisable en 1 sprint |
| **T** | Testable | "Améliorer l'expérience" | Critères d'acceptation clairs |

### Décomposition de la Feature en Stories

**Feature : Paiement 1-clic** → se découpe en stories :

---

**Story 1 — Afficher le bouton "Acheter en 1 clic"**
> *En tant qu'* acheteur connecté avec une CB enregistrée,
> *Je veux* voir un bouton "Acheter en 1 clic" sur la page produit,
> *Afin de* pouvoir acheter sans passer par le tunnel de paiement standard.
>
> **Critères d'acceptation :**
> - *Étant donné* que je suis connecté ET que j'ai une CB valide enregistrée
> - *Quand* j'affiche une page produit en stock
> - *Alors* le bouton "Acheter en 1 clic" est visible sous "Ajouter au panier"
>
> - *Étant donné* que je ne suis pas connecté
> - *Quand* j'affiche la page produit
> - *Alors* le bouton n'apparaît pas
>
> **Estimation :** 3 points

---

**Story 2 — Déclencher le paiement 1-clic**
> *En tant qu'* acheteur connecté avec une CB enregistrée,
> *Je veux* que mon achat soit finalisé immédiatement quand je clique sur "Acheter en 1 clic",
> *Afin de* gagner du temps sans ressaisir mes informations.
>
> **Critères d'acceptation :**
> - *Étant donné* que je clique sur "Acheter en 1 clic"
> - *Quand* ma CB est valide et j'ai une adresse de livraison par défaut
> - *Alors* la commande est créée, le paiement débité, et je vois la confirmation en < 3 secondes
>
> - *Étant donné* que le paiement est refusé par la banque
> - *Quand* je clique sur "Acheter en 1 clic"
> - *Alors* un message d'erreur clair s'affiche et aucune commande n'est créée
>
> **Estimation :** 8 points

---

**Story 3 — Confirmation et email de commande**
> *En tant qu'* acheteur ayant utilisé le paiement 1-clic,
> *Je veux* recevoir un email de confirmation avec le récapitulatif,
> *Afin de* garder une trace de mon achat.
>
> **Critères d'acceptation :**
> - Email reçu dans les 30 secondes après la commande
> - Email contient : numéro de commande, liste des articles, adresse de livraison, montant total
> - Lien "Annuler" présent et fonctionnel pendant 30 minutes
>
> **Estimation :** 3 points

---

**Story 4 — Annulation sous 30 minutes** *(Story technique / UX)*
> *En tant qu'* acheteur ayant utilisé le paiement 1-clic,
> *Je veux* pouvoir annuler ma commande dans les 30 minutes,
> *Afin de* corriger une erreur sans contacter le service client.
>
> **Critères d'acceptation :**
> - Un lien "Annuler cette commande" est visible dans l'email ET dans "Mes commandes"
> - Passé 30 minutes, le lien disparaît et un message explique la démarche de retour
> - L'annulation déclenche le remboursement immédiat sur la CB
>
> **Estimation :** 5 points

---

**Story 5 — Spike : évaluation de la librairie 1-clic** *(Spike = exploration technique)*
> *En tant qu'* équipe de développement,
> *Je veux* évaluer les options d'implémentation du paiement 1-clic avec Stripe,
> *Afin de* choisir la meilleure approche technique avant de commencer le développement.
>
> **Critères d'acceptation :**
> - Document de synthèse avec 2-3 options et leurs trade-offs
> - Proof of concept du flow le plus prometteur
> - Estimation révisée des stories suivantes
>
> **Estimation :** 2 points (time-boxé à 1 journée)

---

## 5. La Tâche (Task)

### Définition
Une **Tâche** est l'unité de travail technique d'un développeur au sein d'une Story. Elle n'a pas de valeur directe pour l'utilisateur — c'est un pas vers la réalisation de la Story.

- Créée par l'équipe pendant le Sprint Planning
- Estimée en heures (pas en points)
- Durée typique : 2-8 heures

### Exemple : Décomposition de la Story 2 en tâches

**Story 2 : Déclencher le paiement 1-clic**

| # | Tâche | Développeur | Estimation |
|---|-------|------------|------------|
| T1 | Créer l'endpoint API `POST /orders/one-click` | Backend | 4h |
| T2 | Intégrer Stripe Payment Intent depuis l'endpoint | Backend | 6h |
| T3 | Gérer les cas d'erreur (carte refusée, fonds insuffisants) | Backend | 3h |
| T4 | Ajouter les tests unitaires et d'intégration | QA/Dev | 4h |
| T5 | Connecter le bouton front-end à l'API | Frontend | 3h |
| T6 | Afficher l'état de chargement et les messages d'erreur | Frontend | 2h |
| T7 | Tests end-to-end avec Cypress | QA | 4h |

---

## 6. Tableau récapitulatif complet

| Niveau | Item | Qui le définit | Qui le priorise | Durée typique | Outil |
|--------|------|--------------|----------------|--------------|-------|
| **Portfolio** | Epic | Epic Owner + LPM | LPM (WSJF) | 2-6 PIs | Portfolio Kanban |
| **Large Solution** | Capability | Solution Manager | Solution Manager | 1-2 PIs | Solution Backlog |
| **Programme** | Feature | Product Manager | Product Manager (WSJF) | 1 PI | Program Backlog |
| **Équipe** | User Story | Product Owner | Product Owner | 1 Sprint | Team Backlog |
| **Équipe** | Task | Développeur | Développeur | 2-8h | Sprint Board |

---

## 7. Les erreurs les plus fréquentes

### ❌ Stories trop grandes ("Story épique")
```
MAUVAIS : En tant qu'utilisateur, je veux un système de paiement complet.
BON     : En tant qu'utilisateur connecté, je veux voir le bouton "Acheter en 1 clic" sur la page produit.
```

### ❌ Stories techniques sans valeur utilisateur
```
MAUVAIS : Créer la table SQL "payment_methods" en base de données.
BON     : En tant qu'utilisateur, je veux sauvegarder ma carte bancaire pour mes prochains achats.
→ La tâche SQL devient une Task à l'intérieur de cette Story.
```

### ❌ Features sans hypothèse de bénéfice
```
MAUVAIS : Ajouter Apple Pay.
BON     : Intégrer Apple Pay pour réduire l'abandon panier mobile de 15%.
→ Sans hypothèse, impossible de savoir si la Feature a réussi.
```

### ❌ Critères d'acceptation vagues
```
MAUVAIS : Le paiement doit être rapide.
BON     : La commande est créée et confirmée en moins de 3 secondes (p95).
```

### ❌ Découpage horizontal (par couche technique)
```
MAUVAIS :
  Story 1 : Créer l'API de paiement (backend)
  Story 2 : Créer l'interface de paiement (frontend)
  Story 3 : Créer les tests de paiement (QA)

BON (découpage vertical — chaque Story traverse toutes les couches) :
  Story 1 : Payer avec une CB enregistrée (API + UI + tests)
  Story 2 : Afficher les erreurs de paiement (API + UI + tests)
  Story 3 : Annuler dans les 30 minutes (API + UI + tests)
```

---

## 8. Le découpage vertical — la compétence clé

Le découpage vertical consiste à couper les Features en Stories qui traversent **toutes les couches** (API, UI, base de données, tests) plutôt que de les séparer par couche technique.

### Techniques de découpage vertical

| Technique | Exemple |
|----------|---------|
| **Par workflow** | Payer → Confirmer → Annuler → Rembourser |
| **Par scénario** | Paiement réussi → Paiement refusé → Paiement expiré |
| **Par persona** | Acheteur invité → Acheteur enregistré → Acheteur premium |
| **Par règle métier** | Sans 3DS → Avec 3DS → Avec authentification forte |
| **Par performance** | Version fonctionnelle → Version optimisée |
| **Par données** | 1 carte → 3 cartes → 5 cartes max |
| **Happy path d'abord** | Cas nominal → Cas d'erreur → Cas limites |

---

## 9. La Definition of Ready et la Definition of Done

### Definition of Ready (avant de démarrer une Story)
Une Story peut entrer dans le Sprint si :
- [ ] Rédigée au format "En tant que / Je veux / Afin de"
- [ ] Critères d'acceptation écrits et validés par le PO
- [ ] Estimée par l'équipe
- [ ] Indépendante (aucun bloquant non résolu)
- [ ] Suffisamment petite pour le sprint

### Definition of Done (pour accepter une Story)
Une Story est terminée quand :
- [ ] Code écrit et revu par un pair
- [ ] Tests unitaires écrits et passants
- [ ] Tests d'acceptation validés par le PO
- [ ] Pipeline CI/CD vert
- [ ] Déployé en environnement de staging
- [ ] PO a accepté formellement la Story

---

*Voir aussi : Program Backlog, PI Planning, Product Owner, Product Manager, Sprint Planning*
