package com.chbinou.smarthouse.app.components.airconditionner;

import com.chbinou.smarthouse.app.SmartHouseApp;
import com.chbinou.smarthouse.app.components.model.AirConditionner;
import com.pi4j.io.gpio.PinState;

import static com.chbinou.smarthouse.app.SmartHouseApp.lightingConfigurationInstance;

/**
 * Created by yassine on 12/01/2017.
 */
public class AirConditionnerManager
{



    public static boolean  switchOnClimatiseur(final AirConditionner airConditionner) throws InterruptedException {
        if (SmartHouseApp.gpio.isState(PinState.HIGH, airConditionner.getInputPinInstance())==true)
        {
            airConditionner.getOutputPinInstance().pulse(100,PinState.HIGH);

        }
        airConditionner.setStatus(SmartHouseApp.gpio.isState(PinState.HIGH, airConditionner.getInputPinInstance()));
        return true;
    }

    public static boolean  switchOffClimatiseur(final AirConditionner airConditionner) throws InterruptedException {
        if (SmartHouseApp.gpio.isState(PinState.HIGH, airConditionner.getInputPinInstance())==false)
        {
           airConditionner.getOutputPinInstance().pulse(100,PinState.HIGH);
        }
        airConditionner.setStatus(SmartHouseApp.gpio.isState(PinState.HIGH, airConditionner.getInputPinInstance()));
        return true;
    }

    public static boolean  switchOnClimatiseurAll() throws InterruptedException {
        for (AirConditionner airConditionner : lightingConfigurationInstance.getAirConditionners()) {
            if (SmartHouseApp.gpio.isState(PinState.HIGH, airConditionner.getInputPinInstance()) == true) {
                airConditionner.getOutputPinInstance().pulse(100, PinState.HIGH);
            }
        }

        return true;
    }
    public static boolean  switchOffClimatiseurAll() throws InterruptedException {
        for (AirConditionner airConditionner : lightingConfigurationInstance.getAirConditionners()){
            if (SmartHouseApp.gpio.isState(PinState.HIGH, airConditionner.getInputPinInstance())==false)
            {
               airConditionner.getOutputPinInstance().pulse(100,PinState.HIGH);
            }
        }

        return true;

    }
}