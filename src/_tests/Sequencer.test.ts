import { Sequencer } from "../Utils/Sequencer"

describe(Sequencer.name, () =>
{
    it('should build sequence', () =>
    {
        const sut = new Sequencer();

        sut.Step(1, 100).Step(2, 200).Step(3, 300);

        expect(sut._Sequence).toEqual([[1, 100], [2, 200], [3, 300]]);
    });


    it('should build sequence from range', () =>
    {
        const sut = new Sequencer();

        sut.Range(1, 3, 1, 100);

        expect(sut._Sequence).toEqual([[1, 100], [2, 100], [3, 100]]);
    });

    it('should build sequence combined', () =>
    {
        const sut = new Sequencer();

        sut.Step(0, 10).Range(1, 3, 1, 100).Step(5, 1000);

        expect(sut._Sequence).toEqual([[0, 10], [1, 100], [2, 100], [3, 100], [5, 1000]]);
    });

    it('should puke sequence', (done) =>
    {
        const sut = new Sequencer();
        let temp: [number, number][] = [];

        sut.Range(1, 3, 1, 100);

        sut.OnChange = (v, d) => temp.push([v, d]);

        sut.Start();

        sut.OnEnd = () =>
        {
            expect(temp).toEqual([[1, 100], [2, 100], [3, 100]]);

            done();
        };
    });

    it('should break sequence', (done) =>
    {
        const sut = new Sequencer();
        let temp: [number, number][] = [];

        sut.Range(1, 5, 1, 100);

        sut.OnChange = (v, d) =>
        {
            temp.push([v, d]);

            if (v === 3) sut.Break(8);
        };

        sut.Start();

        sut.OnEnd = () =>
        {
            expect(temp).toEqual([[1, 100], [2, 100], [3, 100], [8, 0]]);

            done();
        };
    });
});