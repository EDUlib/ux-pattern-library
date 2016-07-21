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
    <button type="button" class="close-button">
        <span class="icon fa fa-close" aria-hidden="true"></span>
        <span>Close</span>
    </button>
    <h3 class="hd-5 color-info-title"></h3>
    <div class="color-info-content">
        <div class="color-description"></div>
        <div class="color-usage">
            <p>Optimum color combinations:</p>
            <ul class="color-combinations"></ul>
        </div>
        <div class="color-reference is-copyable"></div>
        <div class="color-meta">
            <span class="color-rgb is-copyable"></span>
            <span class="color-hex is-copyable"></span>
        </div>
    </div>
</div>

<h3 class="hd-6 example-set-hd">Base Palette</h3>
<div class="example-set">
    <div class="example-container">
        <div class="grid-container grid-manual">
            <div class="row">
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
                        On white
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary x-dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary base"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary light"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary x-light"></button>
                </div>
            </div>
            <div class="row on-gray">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On gray
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary x-dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary base"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary light"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary x-light"></button>
                </div>
            </div>
            <div class="row on-dark-primary">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On dark
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary x-dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary base"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary light"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary x-light"></button>
                </div>
            </div>
            <div class="row on-dark-grayscale">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On dark gray
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary x-dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary base"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary light"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary x-light"></button>
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
                        On white
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary x-dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary base"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary light"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary x-light"></button>
                </div>
            </div>
            <div class="row on-gray">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On gray
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary x-dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary base"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary light"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary x-light"></button>
                </div>
            </div>
            <div class="row on-dark-secondary">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On dark
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary x-dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary base"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary light"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary x-light"></button>
                </div>
            </div>
            <div class="row on-dark-grayscale">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On dark gray
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary x-dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary base"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary light"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary x-light"></button>
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
                            <span class="color-class">trans</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2 post-2"></div>
            </div>
            <div class="row on-white">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On white
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale x-dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale base"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale trans"></button>
                </div>
                <div class="col col-2 post-2"></div>
            </div>
            <div class="row on-gray">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On gray
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale x-dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale base"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale trans"></button>
                </div>
                <div class="col col-2 post-2"></div>
            </div>
            <div class="row on-dark-grayscale">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On dark
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale x-dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale base"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale trans"></button>
                </div>
                <div class="col col-2 post-2"></div>
            </div>
        </div>
    </div>
</div>

<h3 class="hd-6 example-set-hd">Success</h3>
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
                        On white
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch success x-dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch success dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch success base"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch success light"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch success x-light"></button>
                </div>
            </div>
            <div class="row on-gray">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On gray
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch success x-dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch success dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch success base"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch success light"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch success x-light"></button>
                </div>
            </div>
            <div class="row on-dark-success">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On dark
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch success x-dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch success dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch success base"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch success light"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch success x-light"></button>
                </div>
            </div>
            <div class="row on-dark-grayscale">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On dark gray
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch success x-dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch success dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch success base"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch success light"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch success x-light"></button>
                </div>
            </div>
        </div>
    </div>
</div>

<h3 class="hd-6 example-set-hd">Error</h3>
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
                        On white
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch error x-dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch error dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch error base"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch error light"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch error x-light"></button>
                </div>
            </div>
            <div class="row on-gray">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On gray
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch error x-dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch error dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch error base"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch error light"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch error x-light"></button>
                </div>
            </div>
            <div class="row on-dark-error">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On dark
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch error x-dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch error dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch error base"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch error light"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch error x-light"></button>
                </div>
            </div>
            <div class="row on-dark-grayscale">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On dark gray
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch error x-dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch error dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch error base"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch error light"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch error x-light"></button>
                </div>
            </div>
        </div>
    </div>
</div>

<h3 class="hd-6 example-set-hd">Warning</h3>
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
                        On white
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch warning x-dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch warning dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch warning base"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch warning light"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch warning x-light"></button>
                </div>
            </div>
            <div class="row on-gray">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On gray
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch warning x-dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch warning dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch warning base"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch warning light"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch warning x-light"></button>
                </div>
            </div>
            <div class="row on-dark-warning">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On dark
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch warning x-dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch warning dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch warning base"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch warning light"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch warning x-light"></button>
                </div>
            </div>
            <div class="row on-dark-grayscale">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On dark gray
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch warning x-dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch warning dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch warning base"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch warning light"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch warning x-light"></button>
                </div>
            </div>
        </div>
    </div>
</div>

<h3 class="hd-6 example-set-hd">Information</h3>
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
                        On white
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch information x-dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch information dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch information base"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch information light"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch information x-light"></button>
                </div>
            </div>
            <div class="row on-gray">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On gray
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch information x-dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch information dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch information base"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch information light"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch information x-light"></button>
                </div>
            </div>
            <div class="row on-dark-information">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On dark
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch information x-dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch information dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch information base"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch information light"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch information x-light"></button>
                </div>
            </div>
            <div class="row on-dark-grayscale">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        On dark gray
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch information x-dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch information dark"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch information base"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch information light"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch information x-light"></button>
                </div>
            </div>
        </div>
    </div>
</div>
