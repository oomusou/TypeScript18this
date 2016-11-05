var MyModule;
(function (MyModule) {
    function Foo(name) {
        this.name = name;
        this.say = function () {
            console.log("Hello, " + this.name);
        };
    }
    MyModule.Foo = Foo;
})(MyModule || (MyModule = {}));
var foo = new MyModule.Foo('Sam');
setTimeout(foo.say, 1000);
//# sourceMappingURL=this_anonymous_function.js.map