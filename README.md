Angular Enum Flag Directive
===========================

# Description

Flags enumerations are used for masking bit fields and doing bitwise comparisons. They are the correct design to use when multiple enumeration values can be specified at the same time.
This directive can be used on multiple checkboxes to perform a bitwise comparison on a model to determine if the checkbox should be checked or not and will update the model on any change.

# Demo

You can find a demo here: https://cdn.rawgit.com/jvdvleuten/angular-enum-flag-directive/master/demo.html

## Simple example

Consider you have the following Enum:

```javascript
var ColorEnum = Object.freeze({
		RED: 1, 
		GREEN: 2, 
		BLUE: 4,
		YELLOW: 8
	});
```

And want to control the following model <i>$scope.selectedColors</i> in your controller with checkboxes:

```javascript
angular.module('MyApp').controller('MyController', ['$scope',
    function ($scope) {
		$scope.selectedColors = 7; // Default of RED, GREEN and BLUE
	}
]);
```

Use the following HTML code (hard coded values):

```html
<input name="RED" type="checkbox" ng-enum-flag="1" ng-enum-model="selectedColors"  />
<input name="GREEN" type="checkbox" ng-enum-flag="2" ng-enum-model="selectedColors" />
<input name="BLUE" type="checkbox" ng-enum-flag="4" ng-enum-model="selectedColors" />
<input name="YELLOW" type="checkbox" ng-enum-flag="8" ng-enum-model="selectedColors" />
```

## Use the ColorEnum Object to determine the <i>ng-enum-flag</i> values

You can use the ColorEnum object to determine the values by using <i>ng-enum-flag="ColorEnum.RED"</i> when ColorEnum is available within the scope.

First define your ColorEnum in a factory so you can inject it as a singleton throughout your app:

```javascript
angular.module('MyApp').factory('ColorEnum', [
    function () {
        return Object.freeze({
			RED: 1, 
			GREEN: 2, 
			BLUE: 4,
			YELLOW: 8
		});
    }
]);
```

Then inject it in your controller and bind it to your scope:

```javascript
angular.module('MyApp').controller('MyController', ['$scope','ColorEnum',
    function ($scope, ColorEnum) {
		$scope.ColorEnum = ColorEnum;
		$scope.selectedColors = 7; // Default of RED, GREEN and BLUE
	}
]);
```

Use the ColorEnum object in your HTML code:

```html
<input name="RED" type="checkbox" ng-enum-flag="ColorEnum.RED" ng-enum-model="selectedColors"  />
<input name="GREEN" type="checkbox" ng-enum-flag="ColorEnum.GREEN" ng-enum-model="selectedColors" />
<input name="BLUE" type="checkbox" ng-enum-flag="ColorEnum.BLUE" ng-enum-model="selectedColors" />
<input name="YELLOW" type="checkbox" ng-enum-flag="ColorEnum.YELLOW" ng-enum-model="selectedColors" />
```


# Installation

Include the directive in your app:

```html
<script src="angular-enum-flag-directive-min.js"></script>
```

Setup your app:

```javascript
var myApp = angular.module('MyApp', ['enumFlag']);
```

Use the <i>ng-enum-flag</i> attribute to indiciate the value of the option and the <i>ng-enum-model</i> attribute to bind to your model.

```html
<input type="checkbox" ng-enum-flag="1" ng-enum-model="selectedValues" />
<input type="checkbox" ng-enum-flag="2" ng-enum-model="selectedValues" />
<input type="checkbox" ng-enum-flag="4" ng-enum-model="selectedValues" />
```

If your enum represents a bitfield, add the <i>ng-bitwise</i> attribute.

```html
<input type="checkbox" ng-enum-flag="1" ng-enum-model="selectedValues" ng-bitwise="true" />
<input type="checkbox" ng-enum-flag="2" ng-enum-model="selectedValues" ng-bitwise="true" />
<input type="checkbox" ng-enum-flag="4" ng-enum-model="selectedValues" ng-bitwise="true" />
```
