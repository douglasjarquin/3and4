---
layout: default
title: "Electronic Music Artist from Miami, FL"
---

<section id="home">
  <div class="bg-neutral-950 px-8">
    <div class="m-auto">
      <div id="dragon" class="h-screen flex items-center justify-center">        
        <a href="/">
          <img
            src="https://assets.3and4.cc/images/logo-3and4.svg"
            alt="3&amp;4 Logo"
            class="mx-auto w-full"
          />
        </a>
      </div>
      <div id="music" class="pb-16">
        <h1 class="text-white text-center font-bold uppercase text-6xl pb-16">Latest Release</h1>
        {% for release in site.data.releases %}
        <div class="m-auto max-w-[512px] border-b-4 border-r-4 border-sunset-orange-500">
          <a href="{{ release.permalink }}">
            <img
              src="{{ release.artwork }}"
              alt="Artwork for the 3&amp;4 {{ release.type }} {{ release.name }}"
            />
          </a>
        </div>
        {% endfor %}
      </div>
    </div>
  </div>
</section>
