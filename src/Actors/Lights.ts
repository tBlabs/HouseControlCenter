import { DriverB } from "../Boards/BoardB";
import { IActor } from "./IActor";
import { injectable } from "inversify";

@injectable()
export class Lights implements IActor
{
    constructor(private driver: DriverB)
    { }
    
    public Toggle(): void
    {
        this.driver.IO.Output5.Toggle();
    }
    
    public Off(): void
    {
        this.driver.IO.Output5.Value = 1;
    }
    
    public IsOff(): boolean
    {
        return this.driver.IO.Output5.Value === 0 ? true : false;
    }
}
