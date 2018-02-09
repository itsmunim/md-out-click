import outClick from './out.click.directive';
import OutClickService from './out.click.service';

angular.module('mdOutClick', []);
angular.module('mdOutClick')
  .directive('onOutClick', outClick)
  .service('OutClickService', OutClickService);

export default angular.module('mdOutClick');
