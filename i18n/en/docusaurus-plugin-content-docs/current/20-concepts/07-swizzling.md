---
slug: /concepts/swizzling
title: Swizzling
description: More complex component requirements can be enabled using Swizzling.
tags:
  - architecture
  - arc42
  - concept
---

import { KolLink } from '@public-ui/react-v19';

## Motivation

Numerous, sometimes complex requirements for components of design systems or component libraries would not have to be considered over and over again if there were small-scale, easily reusable basic components to carry these requirements.

## Definition

Swizzling is defined as the possibility of either modifying an existing component from the outside or replacing the internal construction. Both pay off in high reusability.

## Variants

### Wrapping

The easiest method to customize a KoliBri component is wrapping. Here, an own component is built around the KoliBri component (decorator pattern) and individualized on the outside.

### Overwriting

Another variant of swizzling is the overwriting of the inner component construction. In Web Components, this is often done using slots. In KoliBri, we have introduced the <KolLink _label="expert slots" _href="expert-slot" /> for this purpose.
