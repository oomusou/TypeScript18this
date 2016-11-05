module MyModule {
    export class Foo {
        private name: string;

        constructor(name: string) {
            this.name = name;
        }

        public say() {
            console.log(`Hello, ${this.name}`)
        };
    }
}

var foo = new MyModule.Foo('Sam');
setTimeout(foo.say, 1000);