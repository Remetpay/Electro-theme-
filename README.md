# Gadget GRV Premium Shopify Theme

A premium Shopify Online Store 2.0 theme for **Gadget GRV**, a futuristic electronics and smart gadgets store.

This repository is now structured as a Shopify theme that can be connected/imported from GitHub into Shopify. It uses Liquid, JSON templates, Shopify product forms, collection data, cart data, search data, and theme sections.

## Theme structure

- `layout/theme.liquid` — global Shopify layout.
- `templates/index.json` — homepage template.
- `templates/product.json` — product page template.
- `templates/collection.json` — collection page template.
- `templates/cart.json` — cart page template.
- `templates/search.json` — search results template.
- `templates/404.json` — branded 404 template.
- `sections/gadget-grv-home.liquid` — premium homepage sections.
- `sections/main-product.liquid` — product page with gallery, product form, dynamic checkout, accordions, badges, urgency.
- `sections/main-collection.liquid` — collection hero, filters, sort links, product grid.
- `sections/main-cart.liquid` — cart page with free-shipping progress, trust badges, order summary.
- `sections/main-search.liquid` and `sections/main-404.liquid` — utility templates.
- `sections/header.liquid` and `sections/footer.liquid` — premium storefront navigation and footer.
- `snippets/product-card.liquid` — reusable Shopify product card with quick add.
- `snippets/cart-drawer.liquid` — cart drawer using Shopify cart data.
- `assets/gadget-grv.css` and `assets/gadget-grv.js` — visual system and storefront interactions.
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
- Test product add-to-cart, dynamic checkout, cart drawer, cart page, mobile navigation, search, and checkout before publishing.
