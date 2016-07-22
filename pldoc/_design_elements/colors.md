---
layout:       pattern
title:        Colors
date:         2015-04-03 00:00:00

categories:   design_element
tags:
- atomic
- demo
- colors

slug:         colors

description:  Predefined system and configurable colors with calculated ranges

info: These are the predefined colors used throughout our patterns. Values here (noted by our Sass variable name, the RGB value and the HEX value) are used for backgrounds, text color, and decorative elements. Note - when using any values here, make sure that any text on a background passes WCAG AA guidelines for color contrast.
---

<div class="info-pane is-hidden" tabindex="-1">
    <header class="info-pane-header">
        <button type="button" class="close-button">
            <span class="icon fa fa-close" aria-hidden="true"></span>
            <span>Close</span>
        </button>
        <h2 class="hd-4 color-info-title"></h2>
        <div class="color-description"></div>
    </header>
    <div class="color-info-content">
        <div class="color-usage">
            <p>Optimum color combinations:</p>
            <div class="list-background">
                <h3 class="hd-6 emphasized" id="color-combination-background">Best on backgrounds that are</h3>
                <ul class="color-combinations background" aria-describedby="color-combination-background"></ul>
            </div>
        </div>
        <div class="color-technics">
            <h3 class="hd-6 emphasized">Developers</h3>
            <dl>
                <dt>Sass:</dt>
                <dd class="color-reference is-copyable"></dd>
                <dt>RGB:</dt>
                <dd class="color-rgb is-copyable"></dd>
                <dt>HEX:</dt>
                <dd class="color-hex is-copyable"></dd>
            </dl>
        </div>
    </div>
</div>

<h3 class="hd-6 example-set-hd">Base Palette</h3>
<div class="example-set">
    <div class="example-container">
        <div class="grid-container grid-manual">
            <div class="row on-white">
                <div class="col col-4">
                    <button type="button" class="swatch primary base" title="Swatch: Primary Base">
                        <div class="color-info">
                            <span class="color-class">primary</span>
                            <span class="color-reference">
                                <span class="is-copyable">palette(primary, base)</span>
                            </span>
                        </div>
                    </button>
                </div>
                <div class="col col-4">
                    <button type="button" class="swatch secondary base" title="Swatch: Secondary Base">
                        <div class="color-info">
                            <span class="color-class">secondary</span>
                            <span class="color-reference">
                                <span class="is-copyable">palette(secondary, base)</span>
                            </span>
                        </div>
                    </button>
                </div>
                <div class="col col-4">
                    <button type="button" class="swatch grayscale base" title="Swatch: Gray Base">
                        <div class="color-info">
                            <span class="color-class">grayscale</span>
                            <span class="color-reference">
                                <span class="is-copyable">palette(grayscale, base)</span>
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<h3 class="hd-6 example-set-hd">Brand Primary</h3>
<div class="example-set">
    <div class="example-container">
        <div class="grid-container grid-manual">
            <div class="row">
                <div class="col col-2"></div>
                <div class="col col-2 pre-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">x-dark</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">dark</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">base</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">light</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">x-light</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row on-white">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On white, with white
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary x-dark" title="Primary X-dark on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary dark" title="Primary Dark on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary base" title="Primary Base on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary light" title="Primary Light on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary x-light" title="Primary X-Light on white"></button>
                </div>
            </div>
            <div class="row on-gray">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On gray, with gray
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary x-dark" title="Primary X-Dark on gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary dark" title="Primary Dark on gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary base" title="Primary Base on gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary light" title="Primary Light on gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary x-light" title="Primary X-Light gray"></button>
                </div>
            </div>
            <div class="row on-dark-primary">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On dark, with dark
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary x-dark" title="Primary X-Dark on itself"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary dark" title="Primary Dark on its darkest shade"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary base" title="Primary Base on its darkest shade"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary light" title="Primary Light on its darkest shade"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary x-light" title="Primary X-Light on its darkest shade"></button>
                </div>
            </div>
            <div class="row on-dark-grayscale">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On dark gray, with dark gray
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary x-dark" title="Primary X-Dark on dark gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary dark" title="Primary Dark on dark gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary base" title="Primary Base on dark gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary light" title="Primary Light on dark gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary x-light" title="Primary X-Light on dark gray"></button>
                </div>
            </div>
        </div>
    </div>
</div>

<h3 class="hd-6 example-set-hd">Brand Secondary</h3>
<div class="example-set">
    <div class="example-container">
        <div class="grid-container grid-manual">
            <div class="row">
                <div class="col col-2"></div>
                <div class="col col-2 pre-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">x-dark</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">dark</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">base</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">light</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">x-light</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row on-white">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On white, with white
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary x-dark" title="Secondary X-Dark on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary dark" title="Secondary Dark on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary base" title="Secondary Base on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary light" title="Secondary Light on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary x-light" title="Secondary X-Light on white"></button>
                </div>
            </div>
            <div class="row on-gray">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On gray, with gray
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary x-dark" title="Secondary X-Dark on gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary dark" title="Secondary Dark on gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary base" title="Secondary Base on gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary light" title="Secondary Light on gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary x-light" title="Secondary X-Light on gray"></button>
                </div>
            </div>
            <div class="row on-dark-secondary">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On dark, with dark
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary x-dark" title="Secondary X-Dark on itself"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary dark" title="Secondary Dark on its darkest shade"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary base" title="Secondary Base on its darkest shade"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary light" title="Secondary Light on its darkest shade"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary x-light" title="Secondary X-Light on its darkest shade"></button>
                </div>
            </div>
            <div class="row on-dark-grayscale">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On dark gray, with dark gray
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary x-dark" title="Secondary X-Dark on dark gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary dark" title="Secondary Dark on dark gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary base" title="Secondary Base on dark gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary light" title="Secondary Light on dark gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary x-light" title="Secondary X-Light on dark gray"></button>
                </div>
            </div>
        </div>
    </div>
</div>

<h3 class="hd-6 example-set-hd">Grayscale</h3>
<div class="example-set">
    <div class="example-container">
        <div class="grid-container grid-manual">
            <div class="row">
                <div class="col col-2"></div>
                <div class="col col-2 pre-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">x-dark</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">dark</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">base</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">background</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">trans</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2 post-2"></div>
            </div>
            <div class="row on-white">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On white, with white
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale x-dark" title="Grayscale X-Dark on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale dark" title="Grayscale Dark on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale base" title="Grayscale Base on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale back" title="Gray Background on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale trans" title="Transparent gray on white"></button>
                </div>
            </div>
            <div class="row on-gray">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On gray, with gray
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale x-dark" title="Grayscale X-Dark on gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale dark" title="Grayscale Dark on gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale base" title="Grayscale Base on gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale back" title="Gray Background on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale trans" title="Transparent gray on gray"></button>
                </div>
            </div>
            <div class="row on-dark-grayscale">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On dark, with dark
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale x-dark" title="Grayscale X-Dark on itself"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale dark" title="Grayscale Dark on its darkest shade"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale base" title="Grayscale Base on its darkest shade"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale back" title="Gray Background on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale trans" title="Transparent gray on its darkest shade"></button>
                </div>
            </div>
        </div>
    </div>
</div>

<h3 class="hd-6 example-set-hd">Success</h3>
<div class="example-set">
    <div class="example-container">
        <div class="grid-container grid-manual">
            <div class="row">
                <div class="col col-2 pre-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">text</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">accent</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">background</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2 post-2"></div>
            </div>
            <div class="row on-white">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On white, with white
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch success text" title="Success Text on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch success accent" title="Success Accent on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch success back" title="Success Background on white"></button>
                </div>
                <div class="col col-2 post-2"></div>
            </div>
            <div class="row on-gray">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On gray, with gray
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch success text" title="Success Text on gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch success accent" title="Success Accent on gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch success back" title="Success Background on gray"></button>
                </div>
                <div class="col col-2 post-2"></div>
            </div>
            <div class="row on-dark-success">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On dark, with dark
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch success text" title="Success Text on dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch success accent" title="Success Accent on dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch success back" title="Success Background on dark"></button>
                </div>
                <div class="col col-2 post-2"></div>
            </div>
            <div class="row on-dark-grayscale">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On dark gray, with dark gray
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch success text" title="Success Text on dark gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch success accent" title="Success Accent on dark gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch success back" title="Success Background on dark gray"></button>
                </div>
                <div class="col col-2 post-2"></div>
            </div>
        </div>
    </div>
</div>

<h3 class="hd-6 example-set-hd">Error</h3>
<div class="example-set">
    <div class="example-container">
        <div class="grid-container grid-manual">
            <div class="row">
                <div class="col col-2 pre-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">text</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">accent</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">background</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2 post-2"></div>
            </div>
            <div class="row on-white">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On white, with white
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch error text" title="Error Text on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch error accent" title="Error Accent on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch error back" title="Error Background on white"></button>
                </div>
                <div class="col col-2 post-2"></div>
            </div>
            <div class="row on-gray">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On gray, with gray
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch error text" title="Error Text on gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch error accent" title="Error Accent on gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch error back" title="Error Background on gray"></button>
                </div>
                <div class="col col-2 post-2"></div>
            </div>
            <div class="row on-dark-error">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On dark, with dark
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch error text" title="Error Text on dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch error accent" title="Error Accent on dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch error back" title="Error Background on dark"></button>
                </div>
                <div class="col col-2 post-2"></div>
            </div>
            <div class="row on-dark-grayscale">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On dark gray, with dark gray
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch error text" title="Error Text on dark gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch error accent" title="Error Accent on dark gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch error back" title="Error Background on dark gray"></button>
                </div>
                <div class="col col-2 post-2"></div>
            </div>
        </div>
    </div>
</div>

<h3 class="hd-6 example-set-hd">Warning</h3>
<div class="example-set">
    <div class="example-container">
        <div class="grid-container grid-manual">
            <div class="row">
                <div class="col col-2 pre-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">accent</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">background</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col col-2 post-4"></div>
            <div class="row on-white">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On white, with white
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch warning accent" title="Warning Accent on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch warning back" title="Warning Background on white"></button>
                </div>
                <div class="col col-2 post-4"></div>
            </div>
            <div class="row on-gray">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On gray, with gray
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch warning accent" title="Warning Accent on gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch warning back" title="Warning Background on gray"></button>
                </div>
                <div class="col col-2 post-4"></div>
            </div>
            <div class="row on-dark-grayscale">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On dark gray, with dark gray
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch warning accent" title="Warning Accent on dark gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch warning back" title="Warning Background on dark gray"></button>
                </div>
                <div class="col col-2 post-4"></div>
            </div>
        </div>
    </div>
</div>
