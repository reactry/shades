

# Reactry's Shades
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## `0.7.0` - `2022-02-11`
* Added `ColorMeter` between `Input` and `Output`.
* Added tabs to Row component.
* Showing contrast scores for colors with `Black` and `White` in `Acc` tab.
* Implemented `getRelativeLuminance()`, `getContrast()` and `getContrastRounded()` utils.


## `0.6.0` - `2022-02-10`
* Implemented `HexTab` functionality.
* Added `Info` section with `RGB` and `HSL` display to color `Row`.
* Added `Options` section with 4 buttons to color `Box`.
* Removed `h`, `s` and `l` state variables.
* Updated styles for `InputComponent` tabs.
* Allowing the user to fix individual `RGB` components.


## `0.5.0` - `2022-02-10`
* Implemented `HSL` sliders.
* Implemented utils `rgbToHsl()` and `hslToRgb()`.
* Added `Vault` with `Curated`, `History` and `Saved` tabs.
* Added 3 butttons to open vault tabs.
* Implemented `Save` button functionality.
* Added 12 basic color buttons to allow mixing.
* Styling changes to `InputComponent`.


### `0.4.0` - `2022-02-08`
* Better names for buttons.
* Added a `tone` button.
* Added empty vault that can be opened with `Shift + V`.
* Now shortcuts don't work when called with `Alt` and `Ctrl`.


### `0.3.0` - `2022-02-08`
* Displaying palette colors as rows.
* Using HTML's native slider control in `NumberSlider`.
* Added custom styles for `slider-thumb` in`NumberSlider.css`.


### `0.2.0` - `2022-02-07`
* Added `Darken`, `Lighten` and `Invert` buttons.
* Added `Download` tab with CSS output.
* Added `Copy` and `Download` buttons.
* Added output stats section.
* Allowing the user to set colorname.
* Allowing the user select which classes to export.


### `0.1.0` - `2022-02-07`
* `RGB` sliders are working.
* Displaying `n` `tints` and `shades` where `n` can be selected.
* Added keyboard shortcuts to manipulate RGB values.


