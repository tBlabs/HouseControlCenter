export class Repeater
{
    public static EverySecond(callback: (counter: number) => void): void
    {
        let i = 0;
        setInterval(() =>
        {
            callback(i);
            i += 1;
        }, 1000);
    }

    public static Every100ms(callback: (counter: number) => void): void
    {
        let i = 0;
        setInterval(() =>
        {
            callback(i);
            i += 1;
        }, 100);
    }
}