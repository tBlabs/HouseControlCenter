import { IFlow } from "./IFlow";
import { injectable } from "inversify";
import { MainPanel } from "../Actors/MainPanel";
import { MusicPlayer } from "../Actors/MusicPlayer";

@injectable()
export class MusicFlow implements IFlow
{
    constructor(
        private _mainPanel: MainPanel,
        private _musicPlayer: MusicPlayer)
    { }

    public Init(): void
    {
        // this._mainPanel.OnButton1Press.subscribe(async () =>
        // {
        //     // console.log('PLAYYY');
        //     await this._musicPlayer.Play("morning.list");
        // });
    
        
        this._mainPanel.Button2Press.subscribe(async () =>
        {
            await this._musicPlayer.Next();
        });
        
        this._mainPanel.Button6Press.subscribe(async () =>
        {
            await this._musicPlayer.Prev();
        });
        
        this._mainPanel.Button4Press.subscribe(async () =>
        {
            const vol = await this._musicPlayer.VolPlus();
            this._mainPanel.Display = vol;
        });
        this._mainPanel.Button7Press.subscribe(async () =>
        {
            const vol = await this._musicPlayer.VolMinus();
            this._mainPanel.Display = vol;
        });
        
        this._mainPanel.Button5Press.subscribe(async () =>
        {
            if (await this._musicPlayer.IsPlaying())
            {
                await this._musicPlayer.Stop();
            }
            else
            {
                await this._musicPlayer.Play("morning.list");
            }
        });
    }
}
