# Lazy Image Element

Web component wrapper for the `img` element, that provides lazy loading functionality.

Leverages the `loading="lazy"` attribute for browsers that support it, falling back to `IntersectionObserver` for those that don't.

## Usage

```html
<lazy-img src="path/to/image.extension">
    <img loading="lazy" alt="foo"/>
</lazy-img>
```

- Apply `src` to the `lazy-img`, not the `img`
- Set `loading="lazy"` on the `img`

## Browser Support

Anything that [supports IntersectionObserver](https://caniuse.com/#feat=intersectionobserver).

## Development

[See LitElement docs](https://lit-element.polymer-project.org/guide/start)

```
npm install -g polymer-cli
polymer serve
```
