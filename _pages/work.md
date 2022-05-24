---
layout: default
title: Work
permalink: /work/
---

<div class="page-single">     
        <h1 class="post-title">{{ page.title }}</h1>        
</div>

<div class="works-grid-container">
    {% for post in site.posts %}
        {% include postbox.html %}
    {% endfor %}
</div>