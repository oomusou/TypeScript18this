var MyModule;
(function (MyModule) {
    var Foo = (function () {
        function Foo(name) {
            this.name = name;
        }
        Foo.prototype.say = function () {
            console.log("Hello, " + this.name);
        };
        ;
        return Foo;
    }());
    MyModule.Foo = Foo;
})(MyModule || (MyModule = {}));
var foo = new MyModule.Foo('Sam');
setTimeout(foo.say, 1000);
//# sourceMappingURL=this_class_function.js.map