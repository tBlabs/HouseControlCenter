import { injectable } from "inversify";
import { IDateTimeProvider } from "./IDateTimeProvider";

@injectable()
export class DateTimeProvider implements IDateTimeProvider
{
    public get Now(): Date
    {
        return new Date();
    }
}