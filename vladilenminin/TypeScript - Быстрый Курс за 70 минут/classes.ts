// TypeScript - Classes
class TypeScript {
	version: string;

	constructor(version: string) {
		this.version = version;
	}
	info(name: string) {
		return `[${name}] : TypeScript version is ${this.version}`;
	}
}

// class Car {
// 	readonly model: string;
// 	readonly numberOfWheels: number = 4;

// 	constructor(theModel: string) {
// 		this.model = theModel;
// 	}
// }

class Car {
	readonly numberOfWheels: number = 4;
	constructor(readonly model: string) {}
}

// ================

class Animal {
	protected voice: string = "";
	public color: string = "black";

	constructor() {
		this.go();
	}

	private go() {
		console.log("Go");
	}
}

class Cat extends Animal {
	public setVoice(voice: string): void {
		this.voice = voice;
	}
}

const cat = new Cat();

// console.log(cat);

cat.setVoice("Miau");
cat.color = "red";
// console.log(cat);

abstract class Component {
	abstract render(): void;
	abstract info(): string;
}

class AppComponent extends Component {
	render(): void {
		console.log("Component on render");
	}
	info(): string {
		return "This is info";
	}
}
