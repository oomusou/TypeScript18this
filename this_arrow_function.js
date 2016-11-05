var MyModule;
(function (MyModule) {
    function Foo(name) {
        var _this = this;
        this.name = name;
        this.say = function () {
            console.log("Hello, " + _this.name);
        };
    }
    MyModule.Foo = Foo;
})(MyModule || (MyModule = {}));
var foo = new MyModule.Foo('Sam');
setTimeout(foo.say, 1000);
//# sourceMappingURL=this_arrow_function.js.map