module MyModule {
    export function Foo(name: string) {
        this.name = name;
        this.say = () => {
            console.log(`Hello, ${this.name}`);
        }
    }
}

var foo = new MyModule.Foo('Sam');
setTimeout(foo.say, 1000);