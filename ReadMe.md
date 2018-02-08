![mdOutClick Logo](https://raw.githubusercontent.com/dibosh/md-out-click/master/readme-logo.jpg)
#### mdOutClick
Define what happens when you click outside an element; using this angular directive.

### Installation
- `npm install md-out-click`
- If you are using webpack, just go ahead and add following lines in your `index.js`
or the main entry file-
  ```
    angular.module('yourApp', [
       ...
       other dependencies
       'mdOutClick'
    ]);
  ```
- If you are not using webpack, don't forget to include 
`node_modules/md-out-click/dist/md.out.click.min.js` to your `index.html` in script tag.

### Usage
The element, outside of which you want to capture the click event should
have the `out-click` directive applied. The directive must be passed the function or the
expression it needs to execute when the event occurs.
   ```
     <aside class="sidenav" on-out-click="closeSideNav()"></aside>
   ```
Or, this is also do-able-
   ```
     <aside class="sidenav" on-out-click="isSideNavOpen = false"></aside>
   ```
