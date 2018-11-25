"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// These two imports must go first!
require("reflect-metadata");
const Types_1 = require("./Types");
const inversify_1 = require("inversify");
const RunMode_1 = require("./../services/runMode/RunMode");
const Environment_1 = require("./../services/environment/Environment");
const Logger_1 = require("../services/logger/Logger");
const Main_1 = require("../Main");
const SampleService_1 = require("./../services/_samples/SampleService");
const StartupArgs_1 = require("../services/environment/StartupArgs");
const express = require("express");
// import { AirFlow } from '../Flows/AirFlow';
// import { AirSensor } from '../Actors/AirSensor';
// import { AirPurifier } from '../Actors/AirPurifier';
const AirDisplay_1 = require("../Actors/AirDisplay");
// import { BoardA, Dummy } from '../Boards/BoardA';
const BoardB_1 = require("../Boards/BoardB");
const LightFlow_1 = require("../Flows/LightFlow");
const Lights_1 = require("../Actors/Lights");
const LightsSwitch_1 = require("../Actors/LightsSwitch");
const DelayHelper_1 = require("../Helpers/DelayHelper");
const BoardC_1 = require("../Boards/BoardC");
const TestFlow_1 = require("../Flows/TestFlow");
const AirFlow_1 = require("../Flows/AirFlow");
const AirSensor_1 = require("../Actors/AirSensor");
const BedPanel_1 = require("../Actors/BedPanel");
const BoardA_1 = require("../Boards/BoardA");
const IoC = new inversify_1.Container();
exports.IoC = IoC;
try {
    IoC.bind(SampleService_1.SampleService).toSelf().whenTargetIsDefault(); // can be injected in constructor with any special helpers
    IoC.bind(Types_1.Types.IEnvironment).to(Environment_1.Environment).whenTargetIsDefault();
    IoC.bind(Types_1.Types.IRunMode).to(RunMode_1.RunMode).whenTargetIsDefault();
    IoC.bind(Types_1.Types.ILogger).to(Logger_1.Logger).inSingletonScope().whenTargetIsDefault();
    IoC.bind(Main_1.Main).toSelf().inSingletonScope().whenTargetIsDefault();
    IoC.bind(Types_1.Types.IStartupArgs).to(StartupArgs_1.StartupArgs).inSingletonScope().whenTargetIsDefault();
    const server = express();
    IoC.bind(Types_1.Types.ExpressServer).toConstantValue(server);
    IoC.bind(Lights_1.Lights).toSelf().inSingletonScope().whenTargetIsDefault();
    IoC.bind(LightsSwitch_1.DoorPanel).toSelf().inSingletonScope().whenTargetIsDefault();
    IoC.bind(BedPanel_1.BedPanel).toSelf().inSingletonScope().whenTargetIsDefault();
    IoC.bind(DelayHelper_1.Delay).toSelf().inSingletonScope().whenTargetIsDefault();
    IoC.bind(Types_1.Types.IFlow).to(LightFlow_1.LightFlow).inSingletonScope().whenTargetIsDefault();
    IoC.bind(Types_1.Types.IFlow).to(TestFlow_1.TestFlow).inSingletonScope().whenTargetIsDefault();
    IoC.bind(Types_1.Types.IFlow).to(AirFlow_1.AirFlow).inSingletonScope().whenTargetIsDefault();
    IoC.bind(AirSensor_1.AirSensor).toSelf().inSingletonScope().whenTargetIsDefault();
    // IoC.bind<AirPurifier>(AirPurifier).toSelf().inSingletonScope().whenTargetIsDefault();
    IoC.bind(AirDisplay_1.AirDisplay).toSelf().inSingletonScope().whenTargetIsDefault();
    const boardA = new BoardA_1.BoardA();
    IoC.bind(BoardA_1.BoardA).toConstantValue(boardA).whenTargetIsDefault();
    IoC.bind(Types_1.Types.IBoard).toConstantValue(boardA).whenTargetIsDefault();
    const boardB = new BoardB_1.BoardB();
    IoC.bind(BoardB_1.BoardB).toConstantValue(boardB).whenTargetIsDefault();
    IoC.bind(Types_1.Types.IBoard).toConstantValue(boardB).whenTargetIsDefault();
    const boardC = new BoardC_1.BoardC();
    IoC.bind(BoardC_1.BoardC).toConstantValue(boardC).whenTargetIsDefault();
    IoC.bind(Types_1.Types.IBoard).toConstantValue(boardC).whenTargetIsDefault();
}
catch (ex) {
    console.log('IoC exception:', ex);
}
//# sourceMappingURL=IoC.js.map