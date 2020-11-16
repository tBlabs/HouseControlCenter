
export class Sequencer
{
    public Step(value: number, delay: number): Sequencer
    {
        this.seq.push([value, delay]);

        return this;
    }

    // IDEA: range with the function instead of step
    public Range(from: number, to: number, step: number, delay: number): Sequencer
    {
        if (from < to)
            for (let i = from; i <= to; i += step)
            {
                this.seq.push([i, delay]);
            }
        else
            for (let i = from; i >= to; i -= step)
            {
                this.seq.push([i, delay]);
            }

        return this;
    }

    public Start(n = 0)
    {
        if (n === this.seq.length) 
        {
            this.OnEnd?.();
            return;
        }
        let delay = this.seq[n][1];
        this.timer = setTimeout(() =>
        {
            let value = this.seq[n][0];
            delay = this.seq[n][1];

            this.OnChange?.(value, delay);

            n += 1;
            this.Start(n);
        }, delay);
    }

    public Break(valueAtEnd: number): void
    {
        clearTimeout(this.timer);
        this.OnChange?.(valueAtEnd, 0);
        this.OnEnd?.();
    }

    public OnEnd?: () => void;
    public OnChange?: (v: number, d: number) => void;

    private timer;
    private seq: [number, number][] = [];

    public get _Sequence(): [number, number][]
    {
        return this.seq;
    }
}
