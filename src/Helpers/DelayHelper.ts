import { injectable } from "inversify";

@injectable()
export class Delay
{
    public Of(delayInSeconds: number, callback: () => void): void
    {
        setTimeout(callback, 1000 * delayInSeconds);
    }

    public FiveSeconds(callback: () => void): void
    {
        setTimeout(callback, 1000 * 5);
    }
}