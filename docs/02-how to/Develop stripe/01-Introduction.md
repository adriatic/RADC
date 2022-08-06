---
    title: Introduction
---

#### By standup75

<p align="center">
<img width="100" alt="image" src="https://user-images.githubusercontent.com/2712405/182480281-a6f37610-2a7e-44ba-a468-68865d18e280.png"/>
<br/>
</p>

---

# Warning - this document is a work in progress

## Summary

This article is a tutorial on creating a Redwood app that uses Stripe [Checkout](https://stripe.com/payments/checkout) and [Elements](https://stripe.com/payments/elements) product in a [fictituous context](https://dashboard.stripe.com/test/products?active=true) created to expose Stripe features without any security risks. Note: click on that link requires an existing Stripe account; the tutorial explains how to create one.

Since this tutorial is rather large, an Index is provided to simplify moving to different sections of the tutorial.

---

## Index 

... under development

---

## Introduction

**Who never wanted to build a marketplace for [fill in the blank]?**

The goal of this tutorial is do that using redwood and stripe, if you want the low down about redwood, spend 100 seconds watching [this video](https://youtu.be/o5Mwa_TJ3HM) and if you are left wondering, but why redwood rather than some other framework? Then, I suggest you look at the [why redwood rather than some other framework?](https://community.redwoodjs.com/t/but-why-redwood-rather-than-some-other-framework-remix-blitz-vue-nextjs-gatsby-sveltekit-11ty-nuxtjs/2957) page! Basically Redwoodjs is your medicine against js tech stack fatigue.

The goal of this tutorial is to create a boilerplate application that is using the stripe API to build a marketplace with subscriptions. Yes, each seller is going to need to buy a subscription to be able to sell on our platform. We're a greedy bunch. Note that this tutorial is not about making things pretty, nevertheless we will be using tailwind to add css classes for the layout, we will not comment on this, you can look up what the classes are doing [here](https://tailwindcss.com/).

Note: We'll be using Typescript for this tutorial, it doesn't mean that you have to use it. You could strip out the typescript parts and use the `yarn create redwood-app` without the `--ts` option, I won't judge you. Other people might...

My setup is a mess, how do I restart? You can follow the instructions [here](https://github.com/generalui/redwood-stripe/issues/16)

Ok, now that we know we're going to buy an Island in the Pacific very soon, we need to divide and conquer and figure out what are the different steps going to be:

[Part 1:](https://rw-community.org/how%20to/Develop%20stripe%20/Part%201)

- Setup & Authentication
- List Subscriptions
- Subscribe

[Part 2:](https://rw-community.org/how%20to/Develop%20stripe%20/Part%202)

- View my subscription
- Cancel or change my subscription
- Add products
- List products by category

[Part 3:](https://rw-community.org/how%20to/Develop%20stripe%20/Part%203)

- Buy products
- Show if I own a product

[Part 4:](https://rw-community.org/how%20to/Develop%20stripe%20/Part%204)

- Seller payouts (minus platform fee)
- Check subscription validity

[Part 5:](https://rw-community.org/how%20to/Develop%20stripe%20/Part%205)

- (admin) Payment list
- (admin) Sellers list and Sales

___


