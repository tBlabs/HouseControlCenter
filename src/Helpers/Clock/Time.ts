export class Time
{
    public get Hour(): number
    { 
        return this.hour;
    }

    public get Minute(): number
    {
        return this.minute;
    }

    private hour = 0;
    private minute = 0;

    constructor(
        hour: number,
        minute: number)
    { 
        this.hour = hour;
        this.minute = minute;
    }
}