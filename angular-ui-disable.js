(function(){

    var moduleName = "ui.disable";
    var module = angular.module(moduleName,[]);

    module.directive('uiDisable',function(){
        return {
            restrict:"A",
            scope:{
                disabled:"=disabled"
            },
            link:{
                pre: function(scope, element, attrs) {
                    if(scope.disabled) {
                      element.addClass('ui-disabled');
                    }
                    element.bind('click',function(event){
                       if(scope.disabled) {
                        event.stopImmediatePropagation();
                        event.preventDefault();
                       }
                   })
                }
            }
        }
    });

})();
