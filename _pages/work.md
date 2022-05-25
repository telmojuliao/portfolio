---
layout: default
title: Work
permalink: /work/
---

<div class="works-grid-container">
    {% for post in site.works %}
        {% include postbox.html %}
    {% endfor %}
</div>