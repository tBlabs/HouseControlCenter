// These two imports must go first!
import 'reflect-metadata';
import { Types } from './Types';
import { Container } from 'inversify';

import { ILogger } from './../services/logger/ILogger';
import { IRunMode } from './../services/runMode/IRunMode';
import { RunMode } from './../services/runMode/RunMode';
import { IEnvironment } from './../services/environment/IEnvironment';
import { Environment } from './../services/environment/Environment';
import { Logger } from '../services/logger/Logger';
import { Main } from '../Main';
import { HeartBeat } from "../HeartBeat";
import { IStartupArgs } from '../services/environment/IStartupArgs';
import { StartupArgs } from '../services/environment/StartupArgs';
import * as express from 'express';
import { IFlow } from '../Flows/IFlow';
import { AirDisplay } from '../Actors/AirDisplay';
import { BoardB } from '../Boards/BoardB';
import { LightFlow } from '../Flows/LightFlow';
import { Lights } from '../Actors/Lights';
import { DoorPanel } from '../Actors/LightsSwitch';
import { Delay } from '../Helpers/DelayHelper';
import { BoardC } from '../Boards/BoardC';
import { IBoard } from '../Boards/IBoard';
import { TestFlow } from '../Flows/TestFlow';
import { AirFlow } from '../Flows/AirFlow';
import { AirSensor } from '../Actors/AirSensor';
import { BedPanel } from '../Actors/BedPanel';
import { BoardA } from '../Boards/BoardA';
import { AirPurifier } from '../Actors/AirPurifier';
import { MainPanel } from '../Actors/MainPanel';
import { DateTimeProvider } from '../services/DateTimeProvider/DateTimeProvider';
import { IDateTimeProvider } from '../services/DateTimeProvider/IDateTimeProvider';
import { Repeater, IRepeater } from '../services/repeater/Repeater';
import { Clock } from '../Helpers/Clock/Clock';
import { WindowLamp } from '../Actors/WindowLamp';
import { LightSensor } from '../Actors/LightSensor';
import { AfterLightFlow } from '../Flows/AfterLightFlow';
import { BackgroundLight } from '../Actors/BackgroundLight';
import { UsbDisplay } from '../Actors/UsbDisplay';
import { MusicPlayer } from '../Actors/MusicPlayer';
import { MusicFlow } from '../Flows/MusicFlow';
import { MorningFlow } from '../Flows/MorningFlow';

const IoC = new Container();

try
{
    IoC.bind<IEnvironment>(Types.IEnvironment).to(Environment).whenTargetIsDefault();
    IoC.bind<IDateTimeProvider>(Types.IDateTimeProvider).to(DateTimeProvider).whenTargetIsDefault();
    IoC.bind<IRepeater>(Types.IRepeater).to(Repeater).inTransientScope().whenTargetIsDefault();
    IoC.bind<DateTimeProvider>(DateTimeProvider).toSelf().whenTargetIsDefault();
    IoC.bind<HeartBeat>(HeartBeat).toSelf().whenTargetIsDefault();
    IoC.bind<Clock>(Clock).toSelf().inSingletonScope().whenTargetIsDefault();
    IoC.bind<MusicPlayer>(MusicPlayer).toSelf().inSingletonScope().whenTargetIsDefault();
    IoC.bind<IRunMode>(Types.IRunMode).to(RunMode).whenTargetIsDefault();
    IoC.bind<ILogger>(Types.ILogger).to(Logger).inSingletonScope().whenTargetIsDefault();
    IoC.bind<Main>(Main).toSelf().inSingletonScope().whenTargetIsDefault();
    IoC.bind<IStartupArgs>(Types.IStartupArgs).to(StartupArgs).inSingletonScope().whenTargetIsDefault();
    const server = express();
    IoC.bind(Types.ExpressServer).toConstantValue(server);
    IoC.bind<Lights>(Lights).toSelf().inSingletonScope().whenTargetIsDefault();

    IoC.bind<DoorPanel>(DoorPanel).toSelf().inSingletonScope().whenTargetIsDefault();
    IoC.bind<MainPanel>(MainPanel).toSelf().inSingletonScope().whenTargetIsDefault();
    IoC.bind<BedPanel>(BedPanel).toSelf().inSingletonScope().whenTargetIsDefault();

    IoC.bind<Delay>(Delay).toSelf().inSingletonScope().whenTargetIsDefault();
    IoC.bind<IFlow>(Types.IFlow).to(LightFlow).inSingletonScope().whenTargetIsDefault();
    IoC.bind<IFlow>(Types.IFlow).to(TestFlow).inSingletonScope().whenTargetIsDefault();
    IoC.bind<IFlow>(Types.IFlow).to(AirFlow).inSingletonScope().whenTargetIsDefault();
    IoC.bind<IFlow>(Types.IFlow).to(AfterLightFlow).inSingletonScope().whenTargetIsDefault();
    IoC.bind<IFlow>(Types.IFlow).to(MusicFlow).inSingletonScope().whenTargetIsDefault();
    IoC.bind<IFlow>(Types.IFlow).to(MorningFlow).inSingletonScope().whenTargetIsDefault();
    IoC.bind<AirSensor>(AirSensor).toSelf().inSingletonScope().whenTargetIsDefault();
    IoC.bind<AirPurifier>(AirPurifier).toSelf().inSingletonScope().whenTargetIsDefault();
    IoC.bind<UsbDisplay>(UsbDisplay).toSelf().inSingletonScope().whenTargetIsDefault();
    IoC.bind<AirDisplay>(AirDisplay).toSelf().inSingletonScope().whenTargetIsDefault();
    IoC.bind<WindowLamp>(WindowLamp).toSelf().inSingletonScope().whenTargetIsDefault();
    IoC.bind<LightSensor>(LightSensor).toSelf().inSingletonScope().whenTargetIsDefault();
    IoC.bind<BackgroundLight>(BackgroundLight).toSelf().inSingletonScope().whenTargetIsDefault();

    const boardA = new BoardA();
    IoC.bind<IBoard>(BoardA).toConstantValue(boardA).whenTargetIsDefault(); 
    IoC.bind<IBoard>(Types.IBoard).toConstantValue(boardA).whenTargetIsDefault();
    const boardB = new BoardB();
    IoC.bind<IBoard>(BoardB).toConstantValue(boardB).whenTargetIsDefault(); 
    IoC.bind<IBoard>(Types.IBoard).toConstantValue(boardB).whenTargetIsDefault();
    const boardC = new BoardC();
    IoC.bind<IBoard>(BoardC).toConstantValue(boardC).whenTargetIsDefault(); 
    IoC.bind<IBoard>(Types.IBoard).toConstantValue(boardC).whenTargetIsDefault();
}
catch (ex)
{
    console.log('IoC exception:', ex);
}

export { IoC };
 