import Axios from "axios";
import { injectable } from "inversify";

@injectable()
export class MusicPlayer
{
    public async VolPlus()
    {
        let vol = +(await this.SendQuery(['vol']));
        // console.log('+', vol);
        vol += 5;
        if (vol >= 100) vol = 100;
        await this.SendCommand(['vol', vol.toString()]);
        return vol;
    }
    public async VolMinus()
    {
        let vol = +(await this.SendQuery(['vol']));
        // console.log('-', vol);
        vol -= 5;
        if (vol <= 0) vol = 0;
        await this.SendCommand(['vol', vol.toString()]);
        return vol;
    }

    private async SendCommand(cmd: string[])
    {
        try
        {
            await Axios.get([process.env.PLAYER_ADDR, ...cmd].join('/'));
        }
        catch (error)
        {
            console.log('Can not execute MusicPlayer command', ...cmd);
        }
    }
    private async SendQuery(cmd: string[])
    {
        try
        {
            const res = await Axios.get([process.env.PLAYER_ADDR, ...cmd].join('/'));
         //   console.log(res.data);
            return res.data;
        }
        catch (error)
        {
            console.log('Can not execute MusicPlayer query', ...cmd);
        }
    }
    public async Play(playlistName: string): Promise<void>
    {
        await this.SendCommand(['start', playlistName]);
    }

    public async Stop(): Promise<void>
    {
        await this.SendCommand(['stop']);
    }

    public async Next(): Promise<void>
    {
        await this.SendCommand(['next']);
    }

    public async Prev(): Promise<void>
    {
        await this.SendCommand(['previous']);
    }

    public async IsPlaying(): Promise<boolean>
    {
        const trackOrNull: string | null = await this.SendQuery(['current'])
        //console.log('NNNNNN', trackOrNull ? trackOrNull.length > 0 : false);
        return trackOrNull ? trackOrNull.length > 0 : false;
    }
}