# 🐸 BitPadLabs Website

Official website for BitPadLabs, LLC - an independent software lab built to help real people solve real problems through clean, scalable technology.

[![Built with Jekyll](https://img.shields.io/badge/Built_with-Jekyll-red.svg)](https://jekyllrb.com/)
[![Hosted on GitHub Pages](https://img.shields.io/badge/Hosted_on-GitHub_Pages-black.svg)](https://pages.github.com/)
[![Mississippi LLC](https://img.shields.io/badge/Mississippi-LLC-green.svg)](https://bitpadlabs.com)

## 🌐 Live Website

[bitpadlabs.com](https://bitpadlabs.com)

## 🛠️ Tech Stack

- **Framework**: Jekyll (Ruby-based static site generator)
- **CSS**: SCSS, with a custom design system
- **Hosting**: GitHub Pages
- **Forms Processing**: Formspree
- **Analytics**: (To be added)

## 🏗️ Local Development

### Prerequisites

- Ruby version 2.5.0 or higher
- RubyGems
- GCC and Make

### Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/BitPadLabs/BitPadLabs-Site.git
   cd BitPadLabs-Site
   ```

2. Install Dependencies:
   ```bash
   bundle install
   ```
3. Run the development server:

   ```bash
   bundle exec jekyll serve
   ```

Visit `http://localhost:4000` in your browser to see the site.


## 📁 Project Structure

```
BitPadLabs-Site/
├── _config.yml         # Jekyll configuration
├── _data/              # Site data (YAML)
│   ├── team.yml        # Team member info
│   └── products.yml    # Product info
├── _includes/          # Reusable HTML components (header, footer, etc.)
├── _layouts/           # Page templates (default, post, etc.)
├── _posts/             # Blog posts (Markdown, YYYY-MM-DD-title.md)
├── _sass/              # SCSS partials (variables, base, layout)
├── assets/
│   ├── css/            # Compiled CSS (from SCSS)
│   ├── images/         # Images, graphics, and logos
│   │   ├── leaf-bg.svg
│   │   └── team/       # Team member photos
│   └── js/             # JavaScript files
├── .github/
│   └── workflows/      # GitHub Actions workflows
├── pages/              # Additional Jekyll pages (if any)
├── README.md           # Project documentation
├── LICENSE             # License info
├── index.html          # Home page
├── about.html          # About page
├── blog.html           # Blog listing
├── contact.html        # Contact page
├── faq.html            # FAQ page
├── portfolio.html      # Portfolio/projects
├── privacy.html        # Privacy policy
├── roadmap.html        # Roadmap
├── sitemap.xml         # Sitemap
├── team.html           # Team page
├── tech-stack.html     # Tech stack
├── terms.html          # Terms of service
```

**Notes:**
- All main site pages are at the root as HTML files.
- Images for blog posts go in `assets/images/blog/`.
- Team member photos go in `assets/images/team/`.
- Add new blog posts to `_posts/` using the format `YYYY-MM-DD-title.md`.
- Add or update team/product info in `_data/team.yml` and `_data/products.yml`.


🧩 Adding Content
Blog Posts
Create a new Markdown file in the _posts directory with the filename format: YYYY-MM-DD-title.md

Add the following front matter at the top of the file:

```YAML
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD HH:MM:SS
author: Your Name
categories: [category1, category2]
tags: [tag1, tag2]
image: /assets/images/blog/your-image.jpg
---
```

Write your post content in Markdown below the front matter
Add any images for the post to `assets/images/blog/`
Posts will automatically appear on the blog page

Team Members
To add or update team members:

Edit the _data/team.yml file
Follow this format for each team member:
```YAML
- name: Team Member Name
  role: Job Title
  github: github-username
  image: filename.jpg  # Place in assets/images/team/
  bio: >-
    A brief paragraph about this team member,
    their background, expertise, and role at BitPadLabs.
Add the team member's photo to assets/images/team/ directory
The changes will automatically appear on the team page
Products/Portfolio Items
To add or update products in the portfolio:
```

Edit the _data/products.yml file
Follow this format for each product:

```YAML
- name: Product Name
  tagline: Short catchy tagline
  description: >-
    A longer description of the product and its features.
    Can span multiple lines.
  image: product-logo.png  # Place in assets/images/
  url: https://productwebsite.com
  github: https://github.com/BitPadLabs/product-repo
  discord: https://discord.gg/product-server  # Optional
```

Add the product logo to `assets/images/` directory
The product will appear on the portfolio page

🔄 Deployment
This site is automatically built and deployed using GitHub Pages and GitHub Actions:

1. Any push to the main branch triggers a build
2. GitHub Actions runs the Jekyll build process
3. The built site is deployed to GitHub Pages
4. The site is available at bitpadlabs.com
   
You can see the build status in the Actions tab of this repository.

📄 License
© 2025 BitPadLabs, LLC. All rights reserved.

📞 Contact
For any questions or feedback about the website, please contact:

Email: info@bitpadlabs.com
GitHub: @BitPadLabs

Last updated: 2025-07-13
Maintained by: @Severswoed