---
slug: buttonlink-vs-linkbutton
title: "ButtonLink vs. LinkButton – What matters for assistivity?"
authors:
  - name: deleonio
tags: [Accessibility, KoliBri]
date: 2025-08-22
---

Building accessible components often confronts us with small details that have a bigger impact than expected. A recent example from the KoliBri project raises the question: how should our hybrid components **ButtonLink** and **LinkButton** be announced by screen readers?

---

## The debate

There are two possible approaches:

**1. By design – "It is announced as it looks."**

- A *ButtonLink* that looks like a link is announced as a link.
- A *LinkButton* that looks like a button is announced as a button.

*Pro*: Consistency – links sound alike, buttons sound alike.
*Con*: Behavior and expectation may diverge.

**2. By behavior – "It is announced as it acts."**

- A *ButtonLink* that performs an action in the current context is announced as a button.
- A *LinkButton* that triggers navigation is announced as a link.

*Pro*: Meets expectations – users know whether they are activating or navigating.
*Con*: The visual cue might not match the audible cue.

---

## The decision

After discussion from design and accessibility perspectives, the conclusion was clear:

> **Expectation outweighs appearance.**

Screen-reader users rely on links to navigate and buttons to perform actions. Even when the visual style differs, alignment between behavior and announcement is more important.

---

## Why does this matter?

- **Accessibility means reliability.** Users shouldn't have to guess whether a "link" changes the page or just submits a form.
- **Design can mislead; behavior cannot.** A button that looks like a link is still an action. A link that looks like a button is still navigation.
- **Consistency builds trust.** Clarity is essential, especially for screen reader announcements.

---

## Conclusion

The decision in the KoliBri project is:

- **ButtonLink** is announced as a **button**.
- **LinkButton** is announced as a **link**.

This choice emphasizes expected behavior and strengthens assistivity for all users.

---

```text
+------------------+--------------------------+------------------+
| Component        | Looks like …            | Acts like …     |
+==================+==========================+==================+
| ButtonLink       | Link                     | Button           |
+------------------+--------------------------+------------------+
| LinkButton       | Button                   | Link             |
+------------------+--------------------------+------------------+
```

---

**👉 What do you think?**
Are you Team "Design" or Team "Behavior"? Join the discussion—every small decision makes accessible software better.
