![mdOutClick Logo](https://raw.githubusercontent.com/dibosh/md-out-click/master/readme-logo.jpg)

`mdOutClick` is an AngularJS module, having a directive `on-out-click`; which enables you to
capture click events outside of an element and fire handlers based on that.

Example- `<button ng-click="doSomething()" on-out-click="doSomethingElse()"></button`

### Installation
- `npm install md-out-click`
- Webpack:
  1. Import the module in your `index.js` or `entry.js` file, import the module
  right after where you imported `angular`
    - `import mdOutClick from 'mdOutClick'` (ES6)
    - `require('mdOutClick')` (ES5)
    
  2. Where you define your angular app, include `mdOutClick` as dependency.
 
  ```
  angular.module('yourApp', [
     ...
     // other dependencies
     ...
     'mdOutClick'
  ]);
  ```   
    
- Legacy way:

  1. Include the `md.out.click.min.js` file as script tag in between angular source
  and your app specific script files.
  
  ```
    ...
    <script src="node_modules/angular/angular.min.js"></script>
    <script src="node_modules/md-out-click/dist/md.out.click.min.js"></script>
    <script src="app/app.index.js"></script>
    <script src="app/controllers/index.js"></script>
    ...
  </body>
  ```
  
  2. In your `index.js` or `script.js` file where you define your angular app,
  include `mdOutClick` as dependency.
  
  ```
  angular.module('yourApp', [
     ...
     // other dependencies
     ...
     'mdOutClick'
  ]);
  ```

### Usage
Define a handler or action on `on-out-click` attribute of an element. The handler
can be any valid Javascript expression.
   ```
   <aside class="sidenav" ng-class="{'open': isSideNavOpen}" on-out-click="closeSideNav()"></aside>
   ```
Or, this is also do-able-
   ```
   <aside class="sidenav" ng-class="{'open': isSideNavOpen}" on-out-click="isSideNavOpen = false"></aside>
   ```
