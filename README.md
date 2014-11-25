Angular Enum Flag Directive
===========================

# Description

Directive to change a model based on enum flags with checkboxes.

Multiple select boxes which needs to be selected and deselected based on an Enum with flags. You don't need the Enum Object itself to use this directive. 

Consider you have the following Enum:

```javascript
var ColorEnum = Object.freeze({
		RED: 1, 
		GREEN: 2, 
		BLUE: 4,
		YELLOW: 8
	});
```

And want to control the following model in your controller with checkboxes:

```javascript
angular.module('MyApp').controller('MyController', ['$scope',
    function ($scope) {
		$scope.selectedColors = 7; // Default of RED, GREEN and BLUE
	}
]);
```

```html
<input name="RED" type="checkbox" ng-enum-flag="1" ng-enum-model="selectedColors"  />
<input name="GREEN" type="checkbox" ng-enum-flag="2" ng-enum-model="selectedColors" />
<input name="BLUE" type="checkbox" ng-enum-flag="4" ng-enum-model="selectedColors" />
<input name="YELLOW" type="checkbox" ng-enum-flag="8" ng-enum-model="selectedColors" />
```

> You can use the ColorEnum object to determine the values by using ng-enum-flag="ColorEnum[0]" when ColorEnum is available within the scope

# Usage

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
<input name="RED" type="checkbox" ng-enum-flag="1" ng-enum-model="selectedColors" />
```