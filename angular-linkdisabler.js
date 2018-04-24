(function(){

    var moduleName = "hyperlink.disabler";
    var module = angular.module(moduleName,[]);

    module.directive('link-disable',function(){
        return {
            restrict:"A",
            scope:{
                disabled:"=disabled"
            },
            link:{
                pre: function(scope, element, attrs) {
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