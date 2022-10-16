# sorceress 1.7

[![PyPI version](https://badge.fury.io/py/sorceress.svg)](https://badge.fury.io/py/sorceress) [![Jekyll site CI](https://github.com/altunenes/sorceress/actions/workflows/jekyll.yml/badge.svg)](https://github.com/altunenes/sorceress/actions/workflows/jekyll.yml)
[![Downloads](https://pepy.tech/badge/sorceress)](https://pepy.tech/project/sorceress)

### Purpose of package

This package's purpose is to create optical illusions in a simple way. The package is written in Python. however, the repo also includes JavaScript.

If you find visual illusions fascinating this package is for you. You can reproduce the illusions in the literature with a few lines of code.

More importantly, we shouldn't take optical illusions as just fun. Optical illusions help us to research how the visual system of the brain ,which is the most complex mechanism, processes such cues. Most of the optical illusions in this package are seriously researched in the neuroscience literature. And I must say that the "causation" of the most of effects is still debated in the literature according to my humble knowledge. Optical illusions are researching not only in human vision but in other animals. So we can get a lot of insights from an evolutionary perspective.

In summary, I think this topic is very important, especially in vision studies.

For all optical illusions check this documentation: [altunenes.github.io/sorceress/](https://altunenes.github.io/sorceress/)

### Getting started🚀️

The package can be found on PyPI hence you can install it via pip.

```
pip install sorceress
```

```
#importing
import sorceress
#another way to import 
from sorceress import sorceress
```

### Features

[For the API, click here](https://altunenes.github.io/sorceress/api_reference/)

+ Illusions in Python
  - chromatic
  - dotill
  - realtimegrid
  - addlines
  - eyecolour
  - dakinPex
  - bruno
  - dolboeuf
  - kanizsa
  - tAki2001
  - cafewall
  - ccob
  - ebbinghaus
  - whiteill
  - enigma
  - blackhole
  - colorgrids
+ **Illusions in JavaScript**

- footsteps
- thelilac
- EyeMovements
- spatialmotion

## Examples

[In this page](https://altunenes.github.io/sorceress/explanations%20of%20illusions/), you can find all illusions, explanations, code, and how to use it. I show just a few examples on this page.

```
from sorcerer import sorcerer
sorcerer.chromatic("myimage.jpg","outputname" ,circle=False, method="CMCCAT2000", gif=True, Gifduration=7)
sorcerer.addlines("myimage.png","desiredoutputname",linecolour1=(0,255,0),linecolour2=(0,255,255),linecolour3=(255,0,0))
```

## Contribution

Any contribution, bug report, or suggestion is always welcome.

##Author

+ Main Maintainer: Enes Altun
