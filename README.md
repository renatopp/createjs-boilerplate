# CREATEJS-BOILERPLATE

This is the the boilerplates for **CreateJS** and **Creatine**.


- **MINIMAL**: the minimal structure using only **CreateJS** (using CDN). 
  Useful for examples, and fast experiments.
- **BASIC**: a basic structure using **CreateJS** and **Creatine**. This 
  boilerplate is ready-to-work with **Cocoonjs**, so you can compile it to 
  mobile platforms.
- **COMPLETE**: a complete structure using **CreateJS**, **Creatine**, and 
  **Cocoonjs**. This boilerplate provides the full folder structure and the 
  basic scenes for you to start your games.


## DEPENDENCIES

To run the web server you will need:

- [Python 2.6+](http://python.org)

To compile to mobile, see:

- [Cocoonjs](https://www.ludei.com/cocoonjs/)

Notice that, you can use **Cocoonjs-Launcher** to test directly into your 
Android or iOS.

## DETAILS

Except by the minimal, all boilerplates presents:

- A **game.html** and an **index.html**: the index is the main file, which will
  be used for Cocoonjs to run you game on mobiles. The game file is the page 
  to run in desktop (it will only include the index into an iframe and define 
  the size bounds to game).
- A **fonts** folder in the root: the fonts folder isn't inside the assets 
  because Cocoonjs uses it to load the fonts and can't find it anywhere else.
- The boilerplate uses a global registry, named game, which comprises the 
  CreateJS and Creatine objects.

