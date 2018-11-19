import { injectable } from "inversify";

@injectable()
export class Delay
{
    public FiveSeconds(callback: ()=>void): void
    {
        setTimeout(callback, 5000);
    }
}