# Lazy Image Element

Web component wrapper for the `img` element, that provides lazy loading functionality.

Leverages the `loading="lazy"` attribute for browsers that support it, falling back to `IntersectionObserver` for those that don't.

## Usage

```html
<script type="module" src="path/to/lazy-image-element.js"></script>

<lazy-img src="path/to/image.extension">
    <img loading="lazy" alt="foo"/>
</lazy-img>
```

- Load the script from the `dist` folder
- Apply `src` to the `lazy-img`, not the `img`
- Set `loading="lazy"` on the `img`

## Browser Support

Anything that [supports IntersectionObserver](https://caniuse.com/#feat=intersectionobserver).

## Development

[See LitElement docs](https://lit-element.polymer-project.org/guide/start)

```
npm install -g polymer-cli
npm run dev
npm run build
```
