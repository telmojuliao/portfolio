---
layout: default
title: Work
permalink: /work/
---

<div class="works-grid-container">
    {% for work in site.works reversed %}
        {% include postbox.html %}
    {% endfor %}
</div>