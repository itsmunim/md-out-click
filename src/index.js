import outClick from './out.click.directive';

angular.module('mdOutClick', []);
angular.module('mdOutClick')
  .directive('onOutClick', outClick);

export default angular.module('mdOutClick');
