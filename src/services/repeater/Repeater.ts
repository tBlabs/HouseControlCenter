import { injectable } from "inversify";

export interface IRepeater
{
    EveryMinute(callback: (counter: number) => void): void;
    EverySecond(callback: (counter: number) => void): void;
    Every100ms(callback: (counter: number) => void): void;
}

@injectable()
export class Repeater implements IRepeater
{
    public EveryMinute(callback: (counter: number) => void): void
    {
        let i = 0;
        setInterval(() =>
        {
            callback(i);
            i += 1;
        }, 1000 * 60);
    }

    public EverySecond(callback: (counter: number) => void): void
    {
        let i = 0;
        setInterval(() =>
        {
            callback(i);
            i += 1;
        }, 1000);
    }

    public Every100ms(callback: (counter: number) => void): void
    {
        let i = 0;
        setInterval(() =>
        {
            callback(i);
            i += 1;
        }, 100);
    }
}