# Islam Nashaat — Portfolio v2

English and Arabic portfolio comparison version.

- New site: https://islamnashaat03.github.io/portfolio-v2/
- Previous site: https://islamnashaat03.github.io/my-portfolio/

Static HTML, CSS and JavaScript. Includes 23 project pages, 14 service pages,
English/Arabic counterparts, CV download, and Formspree contact integration.

## Preview

Run `python -m http.server 8000` and open http://localhost:8000/.

## Regenerate pages

Requires Python 3.12 or newer. Set `PORTFOLIO_BASE_URL` to your deployment URL
and run `python build_portfolio.py`, then `python verify_portfolio.py`.
Source content and templates live in `build_portfolio.py` and
`portfolio-data.json`. Styling is in `portfolio.css`.

GitHub Pages publishes the root of the `main` branch. `.nojekyll` enables
plain static delivery. The contact endpoint is configured in the page builder;
an accepted submission does not by itself confirm inbox delivery.
