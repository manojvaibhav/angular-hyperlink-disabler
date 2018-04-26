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
                    console.log(scope.disabled);
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