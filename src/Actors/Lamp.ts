import Axios from "axios";
import { injectable } from "inversify";
import { IActor } from "./IActor";

@injectable()
export class Lamp implements IActor
{
    public async SetPower(value: number): Promise<void>
    {
        await Axios.get(process.env.ON_BOARD_IO + '/set/pwm/Led/' + value);
    }
}