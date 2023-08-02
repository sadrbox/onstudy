// Pick, Omit, Partial

interface ICar {
	id?: number;
	name?: string;
	price?: number;
	yearBuild?: number;
}

// interface ICarCreate extends Omit<ICar, "id"> {}
// interface ICarId extends Pick<ICar, "id"> {}
// interface IOptionalCar extends Partial<ICar> {}
// interface IReadOnlyCar extends Readonly<ICar> {}
// type TypeCarRecord = Record<'name' | 'price', string | number>
// interface IRequiredCar extends Required<ICar> {}
type TypeGetName = () => string;
type Return = ReturnType<TypeGetName>;

// type Any = Extract<'max' | 'andrey', 'misha' | 'andrey'>
// type Any = Exclude<"max" | "andrey", "misha" | "andrey">;
// type NotNull = NonNullable<string | number | null | undefined>;
