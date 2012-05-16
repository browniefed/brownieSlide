# brownieSlide
### A simple jQuery HTML slider, so simple it just slides

## Features
* Next and previous features
* Smooth sliding using clones

That's about it...

## Quickstart
To start using brownieSlide just include the files, and create a container `div` and an unorder list `ul` inside.

Now that the 2 files are included all you need to do is call the `brownieSlide` method, the options are optional 

```javascript
//  Vanilla install
$('#slider').brownieSlide();

//  With Options
$('#slider').brownieSlide({
    //  Options go here.
});

```

## Options
It's also got a few options. Here are the defaults, however only a few have been implemented:

```javascript
{
	activeClass: 'active',
	arrows: true,
	autoPlay: false,
	speed: 500,
	delay: 3000,
	easing: 'swing'
}
```