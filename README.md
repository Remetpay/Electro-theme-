# Gadget GRV Premium Shopify Theme

A premium Shopify Online Store 2.0 theme for **Gadget GRV**, a futuristic electronics and smart gadgets store.

This repository is now structured as a Shopify theme that can be connected/imported from GitHub into Shopify. It uses Liquid, JSON templates, Shopify product forms, collection data, cart data, search data, blog data, locale scaffolding, and theme sections.

## Theme structure

- `layout/theme.liquid` — global Shopify layout.
- `templates/index.json` — homepage template.
- `templates/product.json` — product page template.
- `templates/collection.json` — collection page template.
- `templates/list-collections.json` — collections directory template.
- `templates/cart.json` — cart page template.
- `templates/search.json` — search results template.
- `templates/page.json` — generic Shopify page template.
- `templates/blog.json` and `templates/article.json` — blog and article templates.
- `templates/404.json` — branded 404 template.
- `sections/gadget-grv-home.liquid` — premium homepage sections.
- `sections/main-product.liquid` — product page with gallery, variant selector, product form, dynamic checkout, accordions, badges, urgency.
- `sections/main-collection.liquid` — collection hero, filters, sort links, product grid.
- `sections/main-cart.liquid` — cart page with free-shipping progress, trust badges, order summary.
- `sections/main-search.liquid`, `sections/main-page.liquid`, `sections/main-blog.liquid`, `sections/main-article.liquid`, `sections/main-list-collections.liquid`, and `sections/main-404.liquid` — support templates.
- `sections/header.liquid` and `sections/footer.liquid` — premium storefront navigation and footer.
- `snippets/product-card.liquid` — reusable Shopify product card with quick add.
- `snippets/cart-drawer.liquid` — cart drawer using Shopify cart data.
- `assets/gadget-grv.css` and `assets/gadget-grv.js` — visual system and storefront interactions.
- `locales/en.default.json` — default locale scaffold.
- `.shopifyignore` — ignores non-theme files during Shopify workflows.
- `config/settings_schema.json` and `config/settings_data.json` — theme metadata/settings.

## Shopify import notes

Connect this GitHub repository/branch in Shopify as a theme source, then preview the theme before publishing.

Recommended branch: `gadget-grv-premium-storefront`

## Critical production steps

- Create Shopify collections matching the store categories: phone accessories, smart gadgets, wireless audio, gaming accessories, smart home, wearables, charging essentials, deals, best sellers, and new arrivals.
- Add real product photography and product data. The theme is premium, but poor product images will make it look like a dropshipping store.
- Configure the main menu with: Shop, New Arrivals, Best Sellers, Deals, Track Order, Contact.
- Assign a best-sellers collection in the homepage section settings.
- Replace generic policy copy with your actual shipping, returns, warranty, privacy, and terms policies.
- Test product add-to-cart, variant selection, dynamic checkout, cart drawer, cart page, mobile navigation, search, blogs, pages, and checkout before publishing.
