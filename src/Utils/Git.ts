import * as git from 'git-rev';

export class Git
{
    public async Version(): Promise<string>
    {
        return new Promise<string>((resolve) =>
        {
            git.short(s => resolve(s));
        });
    }
}
