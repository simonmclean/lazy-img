# Lazy Image Element

Web component wrapper for the `img` element, that provides lazy loading functionality.

Leverages the `loading="lazy"` attribute for browsers that support it, falling back to `IntersectionObserver` for those that don't.

## Usage

```html
<script type="module" src="path/to/lazy-image-element.js"></script>

<lazy-img src="path/to/image.jpg">
    <img loading="lazy" alt="foo"/>
</lazy-img>
```

- Load the script from the `dist` folder
- Apply `src` to the `lazy-img`, not the `img`
- Set `loading="lazy"` on the `img`

### Tolerance attribute

```html
<lazy-img src="path/to/image.jpg" tolerance="1000px">
    <img loading="lazy" alt="foo"/>
</lazy-img>
```

The `tolerance` attribute will be passed to the `IntersectionObserver` config as the [`rootMargin` option](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin).
A value of `"1000px"` means that, instead of loading the image when the first pixel enters the viewport, it will be loaded when it is within 1000px of the viewport.

Only applies to browsers that use the `IntersectionObserver` fallback.

## Browser Support

Anything that [supports IntersectionObserver](https://caniuse.com/#feat=intersectionobserver).

## Development

[See LitElement docs](https://lit-element.polymer-project.org/guide/start)

```
npm install -g polymer-cli
npm run dev
npm run build
```
