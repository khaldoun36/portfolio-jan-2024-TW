---
type: "Article"
draft: true
isFeatured: true
date: 2024-01-01
# lastUpdated: 2024-02-01
title: "You win, Tailwind is actually amazing"
description: "Vanilla CSS vs. Tailwind CSS: A Developer's Experiment & Review! ️ Learn about the pros and cons of both approaches through a real-world comparison. Explore code structure, efficiency, and design system benefits. Find out which reigns supreme!"
image:
  src: "writings/Tailwind(1).png?updatedAt=1710751776346"
  alt: "A dark background with Tailwind text positioned in the middle"

head:
  meta:
    - name: "keywords"
      content: "nuxt, vue, Tailwind, content"
    - name: "robots"
      content: "index, follow"
    - name: "author"
      content: "Khaldoon Alnuaimi"
---

Every January, I go on a portfolio overhaul mission – tearing it down and rebuilding it from the ground up. This annual ritual isn't for nothing it's my chance to experiment with the latest technologies, a self-assess of my design skills, and a chance to design something uniquely mine, free of external input.

Now, this year, I decided to change things up. I've always been against using Tailwind CSS, but my vanilla CSS approach hasn't been working for a while. So, in a quest to settle the age-old debate (or at least until next year when I inevitably change my mind), I took on a challenge. I developed the same page using both Tailwind CSS and vanilla CSS, hoping to determine which approach I like best by the end and explore the trade-offs of each approach.

## Using Vanilla CSS for Styling

This has been my approach until this month: utilizing a minimal CSS reset, adapted from Andy Bell, and a CSS variables file encompassing key variables like colors, design spacing, font sizes, border-radius, and shadows. While effective, I've increasingly noticed limitations in this method.

- Going back and forth between the CSS file and markup on my MacBook Air's small screen is a pain. Although a larger monitor could alleviate this (having both files side by side), it's currently beyond my budget.
- The absence of a mechanism to enforce structure in CSS code becomes a significant issue for freelancers collaborating in a team or taking over existing projects. Below, you'll find code for applying basic styling to a card. It's valid but lacks structure. One might argue that encountering this is infrequent, but it's a recurring pattern in various codebases, from small startups to large enterprises. I can't fault developers for such messy code because I've been guilty of it myself. For those curious about the code's flaw, it lacks structure.

```css
/* Unstructured code */
.card {
  display: flex;

  max-width: 400px;

  box-shadow: -4px 10px 26px 0px rgba(0, 0, 0, 0.2);

  padding: 24px;

  flex-direction: column;
}
```

<br/>

```css
/* Structured code */
.card {
  /************************/
  /*     Layout code.     */
  /************************/
  display: flex;
  flex-direction: column;

padding: 24px;
max-width: 400px;

/**********\*\*\*\***********/
/_ Other styling code. _/
/**********\*\*\*\***********/

box-shadow: -4px 10px 26px 0px rgba(0, 0, 0, 0.2);
}

```

## Using Tailwind CSS

- One of the most significant advantages I've experienced with Tailwind is how much faster and more effortless writing CSS becomes. Not having to divert my attention from the markup to apply styling has proven to be a game-changer for me. The ability to target specific media queries with the md:, lg:, etc., selector is just the cherry on top.

- There is an official plugin that automatically structures your classes for you. No more looking up and down because the developer (me) added extra classes last minute and didn't have time to organize the code.

- It's just enjoyable to have a predictable design system that uses the same tokens across different projects. No more spending hours going back and forth between the documentation file and the CSS file to figure out how many pixels/rem is --space-6.

- Tailwind is plain old CSS encapsulated into utility classes. I have full code ownership and can modify any part that doesn't suit me with minimal effort. This is unlike Bootstrap and the plethora of CSS libraries I have used before.

- Using vanilla CSS with Tailwind is genuinely easy. It's as simple as typing a class name in your markup. I still find myself writing plenty of CSS. In general, if I have to reach for the before/after pseudo-elements or write a CSS animation, I just go down to CSS and write it there.

The image above perfectly represents me 😅 I have been a Tailwind CSS hater since its introduction and have dunked on it on Twitter. I have hated the way it bloats your markup, still do, but failed to see the benefits it adds until I forced myself to try it. Tailwind is just a tool, like the countless other web development tools that exist out there. You can use it or ignore it; the choice is yours. Personally, I will start adding Tailwind to all my projects moving forward.

```

```
