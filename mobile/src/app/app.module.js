var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from "../pages/login/login";
import { IonDigitKeyboard } from "../components/ion-digit-keyboard/ion-digit-keyboard";
import { DomotiquePage } from "../pages/domotique/domotique";
import { FavorisPage } from "../pages/favoris/favoris";
import { ZonePage } from "../pages/zone/zone";
import { ConfigurationPage } from "../pages/configuration/configuration";
import { TitlePipe } from "../pipes/title-pipe";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { IonicStorageModule } from "@ionic/storage";
import { SmartHouseAppBroadcaster } from "../config/SmartHouseAppBroadcaster";
import { JwtTokenInterceptor } from "../config/JwtTokenInterceptor";
import { MenuPage } from "../pages/menu/menu";
import { ProceduresPage } from "../pages/procedures/procedures";
import { ProcedurePage } from "../pages/procedure/procedure";
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                IonDigitKeyboard,
                ProcedurePage,
                ProceduresPage,
                MenuPage,
                LoginPage,
                ConfigurationPage,
                DomotiquePage,
                TitlePipe,
                FavorisPage,
                ZonePage
            ],
            imports: [
                HttpClientModule,
                BrowserModule,
                IonicModule.forRoot(MyApp),
                IonicStorageModule.forRoot({
                    name: '__mydb',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                })
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                ProcedurePage,
                ProceduresPage,
                MenuPage,
                LoginPage,
                ConfigurationPage,
                DomotiquePage,
                FavorisPage,
                ZonePage
            ],
            providers: [
                StatusBar,
                SplashScreen,
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                SmartHouseAppBroadcaster,
                [{ provide: HTTP_INTERCEPTORS, useClass: JwtTokenInterceptor, multi: true }]
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map