export abstract class Unit {
  readonly #value: number

  constructor(v: number) {
    this.#value = v
  }

  get value(): number {
    return this.#value
  }

  abstract toString(): string;
}
