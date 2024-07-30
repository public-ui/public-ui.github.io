---
title: Device and browser specific issues
description: Why solving device-or browser-specific accessibility issues with HTML is inefficient and unsustainable.
tags:
  - architecture
  - arc42
  - concept
---

# Concept: Why Addressing Device- or Browser-Specific Accessibility Issues with HTML Is Not Worthwhile

## Introduction

Ensuring accessibility in web design is crucial to provide access to information and services for all users, regardless of their physical or technical limitations. This concept explains why it is inefficient to focus on device- or browser-specific solutions using HTML and why a standardized, comprehensive approach is preferable.

## Diversity of Devices and Browsers

The vast array of available devices and browsers presents a significant challenge. Constant updates and new versions mean that device- or browser-specific HTML solutions can quickly become outdated. Solutions developed for a specific device or browser may not work on others.

## Maintenance and Upkeep

Maintaining and updating such specific solutions is time-consuming and costly. Developers need to continuously test and make adjustments to ensure compatibility with the latest versions. This ongoing effort can divert resources from other important aspects of web development.

## User Experience

Device- or browser-specific solutions can negatively impact user experience, especially for those using different devices or browsers. The goal of accessibility is to provide a consistent and accessible experience for all users. Specific solutions can undermine this goal and exclude some users.

## Standardized Solutions

HTML5 and other modern web standards offer robust, future-proof solutions to improve accessibility. These standards are supported by a wide range of devices and browsers and are regularly updated to keep pace with the latest technologies. By adhering to these standards, developers can ensure their websites and applications are accessible without relying on specific solutions.

## Best Practices and Frameworks

There are established best practices and frameworks that support accessible web development, such as the Web Content Accessibility Guidelines (WCAG). These provide comprehensive guidelines that can be applied across all devices and browsers. By following these best practices, developers can ensure their websites and applications are accessible to a broad audience.

## Documentation of Known Issues

To document known issues that cannot be resolved with HTML, we have created a [`KNOWN_ISSUES.md`](https://github.com/public-ui/kolibri/blob/develop/KNOWN_ISSUES.md) file. This list outlines device- or browser-specific problems that currently cannot be addressed with HTML solutions. This documentation helps us keep track of existing problems and address them as needed.

## Collaboration with Manufacturers

We believe it is more effective to report issues to the respective manufacturers of the devices or browsers instead of developing individual workarounds. By directly communicating with manufacturers, they can work on fixing the problems, ultimately improving accessibility for all users. This approach not only supports sustainable problem-solving but also promotes continuous technological improvement.

## Conclusion

Addressing device- or browser-specific accessibility issues with HTML is inefficient and not sustainable in the long term. A standardized, future-proof approach using web standards and best practices provides a better foundation for creating accessible websites and applications that are available to all users, regardless of their device or browser. Developers should focus on general accessibility and compliance with established standards to ensure an optimal user experience for all. Documenting known issues and collaborating with manufacturers further contributes to achieving sustainable solutions to accessibility problems.
