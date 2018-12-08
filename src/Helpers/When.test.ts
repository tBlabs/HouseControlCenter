// import { When, TimeTo, MomentActions, IWhenConfig, Moment, Day, Time } from "./When";
// import { Mock } from 'moq.ts';
// import { IDateTimeProvider } from "../services/DateTimeProvider/IDateTimeProvider";
// import { IRepeater } from "../services/repeater/Repeater";


// test(When.name, (done) =>
// {
//     // Given
//     const _dateTimeProviderMock = new Mock<IDateTimeProvider>();
//     _dateTimeProviderMock.setup(x => x.Now)
//         .returns(() => new Date(2018, 12, 31, 23, 59, 0));

//     const _configMock = new Mock<IWhenConfig>();
//     _configMock.setup(x => x.Moments)
//         .returns(() => [new Moment(TimeTo.WakeUp, [Day.Monday], new Time(23, 59))]);

//     const when = new When(_dateTimeProviderMock.object(), _configMock.object());

//     // When 
//     when.ItIs(TimeTo.WakeUp, () => {});
//     when.ItIs(TimeTo.WakeUp, () => {});

//     when.CheckMoments();

//     // Then

// });