import { BoardB } from "../Boards/BoardB";
import { IActor } from "./IActor";
import { injectable } from "inversify";

@injectable()
export class Lights implements IActor
{
    constructor(private driver: BoardB)
    { }

    private level: number = 0;

    public NextLevel(): void
    {
        this.level++;
        this.level %= 3;

        this.driver.IO.Output3.Value = (this.level > 0) ? 1 : 0;
        this.driver.IO.Output4.Value = (this.level > 1) ? 1 : 0;
     }

    public Toggle(): void
    {
        this.driver.IO.Output3.Toggle();
        this.driver.IO.Output4.Toggle();
    }

    public Off(): void
    {
        this.driver.IO.Output3.Value = 1;
        this.driver.IO.Output4.Value = 1;
    }

    public IsOff(): boolean
    {
        return this.driver.IO.Output3.Value === 0 ? true : false;
    }
}
