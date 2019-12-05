import { IActor } from "./IActor";
import * as Rx from 'rxjs';
import { injectable } from "inversify";
import { BoardA } from "../Boards/BoardA";

@injectable()
export class LightSensor implements IActor
{
    private onChangeCallback: any;
    public  COMPLETELY_DARK = 30;
    public MAX_LIGHT = 410;

    public OnChange(callback: (pm25: number) => void): void
    {
        this.onChangeCallback = callback;
    }

    constructor(private driver: BoardA)
    {
        this.driver.IO.Adc3.OnChange((adc) =>
        {
            const cur = adc.Current.Value;

            if (this.onChangeCallback)
                this.onChangeCallback(cur);
        });
    }
}
