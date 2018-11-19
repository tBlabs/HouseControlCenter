import { BoardB } from "../Boards/BoardB";
import { IActor } from "./IActor";
import { injectable } from "inversify";

@injectable()
export class Lights implements IActor
{
    constructor(private driver: BoardB)
    { }
    
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
