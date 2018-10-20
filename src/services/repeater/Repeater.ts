export class Repeater
{
    public static EverySecond(callback)
    {
        setInterval(callback, 1000);
    }
}