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
import { ISample } from '../services/_samples/ISample';
import { SampleService } from './../services/_samples/SampleService';
import { IStartupArgs } from '../services/environment/IStartupArgs';
import { StartupArgs } from '../services/environment/StartupArgs';
import * as express from 'express';
import { IFlow } from '../Flows/IFlow';
// import { AirFlow } from '../Flows/AirFlow';
// import { AirSensor } from '../Actors/AirSensor';
// import { AirPurifier } from '../Actors/AirPurifier';
import { AirDisplay } from '../Actors/AirDisplay';
// import { BoardA, Dummy } from '../Boards/BoardA';
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

const IoC = new Container();

try
{
    IoC.bind<SampleService>(SampleService).toSelf().whenTargetIsDefault(); // can be injected in constructor with any special helpers
    IoC.bind<IEnvironment>(Types.IEnvironment).to(Environment).whenTargetIsDefault();
    IoC.bind<IRunMode>(Types.IRunMode).to(RunMode).whenTargetIsDefault();
    IoC.bind<ILogger>(Types.ILogger).to(Logger).inSingletonScope().whenTargetIsDefault();
    IoC.bind<Main>(Main).toSelf().inSingletonScope().whenTargetIsDefault();
    IoC.bind<IStartupArgs>(Types.IStartupArgs).to(StartupArgs).inSingletonScope().whenTargetIsDefault();
    const server = express();
    IoC.bind(Types.ExpressServer).toConstantValue(server);
    IoC.bind<Lights>(Lights).toSelf().inSingletonScope().whenTargetIsDefault();
    IoC.bind<DoorPanel>(DoorPanel).toSelf().inSingletonScope().whenTargetIsDefault();
    IoC.bind<BedPanel>(BedPanel).toSelf().inSingletonScope().whenTargetIsDefault();
    IoC.bind<Delay>(Delay).toSelf().inSingletonScope().whenTargetIsDefault();
    IoC.bind<IFlow>(Types.IFlow).to(LightFlow).inSingletonScope().whenTargetIsDefault();
    IoC.bind<IFlow>(Types.IFlow).to(TestFlow).inSingletonScope().whenTargetIsDefault();
    IoC.bind<IFlow>(Types.IFlow).to(AirFlow).inSingletonScope().whenTargetIsDefault();
    IoC.bind<AirSensor>(AirSensor).toSelf().inSingletonScope().whenTargetIsDefault();
    // IoC.bind<AirPurifier>(AirPurifier).toSelf().inSingletonScope().whenTargetIsDefault();
    IoC.bind<AirDisplay>(AirDisplay).toSelf().inSingletonScope().whenTargetIsDefault();

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
 