var MyModule;
(function (MyModule) {
    var Foo = (function () {
        function Foo(name) {
            var _this = this;
            this.say = function () {
                console.log("Hello, " + _this.name);
            };
            this.name = name;
        }
        return Foo;
    }());
    MyModule.Foo = Foo;
})(MyModule || (MyModule = {}));
var foo = new MyModule.Foo('Sam');
setTimeout(foo.say, 1000);
//# sourceMappingURL=this_class_arrow_function1.js.map