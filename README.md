# Islam Nashaat — Official services website

Bilingual website: https://islamnashaat03.github.io/portfolio-v2/

Homepage website types: online stores, business websites and landing pages.
All 14 existing USD starting prices are shown. Service pages include scope,
previous-work templates, template customization and a custom-build option.
Selection pre-fills the quote form and survives a language change. CV download
actions are replaced by quote-form actions. The WhatsApp button uses its green
brand color with continuous glow and a static reduced-motion alternative.

Previous client projects are design starting points prepared with the new
customer's content and identity, rather than downloadable client websites.
Historical performance evidence keeps the originally measured URLs.

Python 3.12+, standard library only. Regenerate with `python build_portfolio.py`,
then run `python verify_portfolio.py` and `python verify_site_profiles.py`.
`SITE_PROFILE = 'services'` selects the presentation in `site_profiles.py`.
Set `PORTFOLIO_BASE_URL` when moving to a custom domain.

GitHub Pages publishes the repository root on `main`. The separate
`my-portfolio` repository is the employment portfolio. No custom domain is
configured yet. Forms use the existing Formspree endpoint; QA intercepts
success/failure responses and does not send real test enquiries.
