# VALOIR ATELIER

A local React storefront following the layout and typography of toratory.com, with a different brand name and replacement photography.

## Run locally

```sh
npm install
npm run dev
```

The development server uses port 3000, or the next available port. To generate the production files, run `npm run build`.

## Pages

- `#/home`: campaign banners, interactive lookbook and brand philosophy.
- `#/shop`: collection banner, product grid, filters, sorting and quick view.
- `#/gyre`: collection landing page and product gallery.
- `#/about`: alternating narrative columns with Fraunces and Newsreader typography.
- `#/contact`: centered customer-care introduction and contact form.
- `#/product/gulf-cuff`: product photography, size selection, information dialogs and related products. Other product IDs use the same layout.

Search, product dialogs, mobile navigation and cart controls work locally. Contact submission and checkout are demonstrations; they do not send messages, create orders or process payments.

The site uses a warm ivory canvas, the reference's system serif font stack, small product labels, restrained underline transitions and responsive layouts. About-page fonts are bundled in `public/fonts` with their SIL Open Font License files.
