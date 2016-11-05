module MyModule {
    export class Foo {
        private name: string;
        public say: ()=>void;

        constructor(name: string) {
            this.name = name;
            this.say = () => {
                console.log(`Hello, ${this.name}`);
            };
        }
    }
}

var foo = new MyModule.Foo('Sam');
setTimeout(foo.say, 1000);