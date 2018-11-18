import { injectable } from "inversify";

@injectable()
export class Delay
{
    public OneSecond(callback: ()=>void): void
    {
        setTimeout(callback, 1000);
    }
}