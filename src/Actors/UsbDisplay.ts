import { injectable } from "inversify";
import axios from 'axios';

@injectable()
export class UsbDisplay
{
    public Print(value: number)
    {
        axios.get(`${process.env.USB_DISPLAY_ADDR}/set/${value}/0/1`);
    }
}