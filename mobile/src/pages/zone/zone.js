var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AlertController, LoadingController, NavController, NavParams } from 'ionic-angular';
import { SmartHouseAppBroadcaster } from "../../config/SmartHouseAppBroadcaster";
import { HttpClient } from "@angular/common/http";
import { LoginPage } from "../login/login";
var ZonePage = (function () {
    function ZonePage(navCtrl, navParams, http, alertCtrl, broadcaster, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.broadcaster = broadcaster;
        this.loadingCtrl = loadingCtrl;
        var vm = this;
        if (!navigator.onLine) {
            vm.showAlert("Pas d'internet, activer wifi ou réseau cellulaire");
        }
        vm.serverIP = localStorage.getItem("ip");
        vm.zone = navParams.get('item');
        vm.broadcaster.on('configObject')
            .subscribe(function (msg) {
            var items = JSON.parse(msg);
            for (var i = 0; i < items.length; i++) {
                if (vm.zone.id == items[i].id) {
                    vm.zone = items[i];
                }
            }
        });
    }
    ZonePage.prototype.switchOnLamp = function (lamp) {
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        var vm = this;
        loader.present();
        vm.http.get('https://' + vm.serverIP + "/api/lamps/" + vm.zone.id + "/" + lamp.identifier + "/on")
            .subscribe(function (data) {
            lamp.status = true;
            loader.dismissAll();
        }, function (error) {
            loader.dismissAll();
            if (!navigator.onLine) {
                vm.showAlert("Pas d'internet, activer wifi ou réseau cellulaire");
            }
            else {
                vm.connectionInterrupted();
            }
        });
    };
    ZonePage.prototype.switchOffLamp = function (lamp) {
        var vm = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        loader.present();
        vm.http.get('https://' + vm.serverIP + "/api/lamps/" + vm.zone.id + "/" + lamp.identifier + "/off")
            .subscribe(function (data) {
            lamp.status = false;
            loader.dismissAll();
        }, function (error) {
            loader.dismissAll();
            if (!navigator.onLine) {
                vm.showAlert("Pas d'internet, activer wifi ou réseau cellulaire");
            }
            else {
                vm.connectionInterrupted();
            }
        });
        lamp.status = false;
    };
    ZonePage.prototype.mouve = function (mywindow) {
        var vm = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        loader.present();
        vm.http.get('https://' + vm.serverIP + "/api/windows/" + vm.zone.id + "/" + mywindow.identifier + "/open/" + mywindow.value)
            .subscribe(function (data) {
            if (data == 1) {
                vm.showAlert('quelqu\'un est en train d\'ouvrir la fenêtre: ' + vm.zone.title + ':' + mywindow.identifier);
                loader.dismissAll();
            }
            else if (data == 2) {
                vm.showAlert('qu\'elle qu\'un entrain de fermer la fenetre : ' + vm.zone.title + ':' + mywindow.identifier);
                loader.dismissAll();
            }
            else {
                loader.dismissAll();
            }
        }, function (error) {
            loader.dismissAll();
            if (!navigator.onLine) {
                vm.showAlert("Pas d'internet, activer wifi ou réseau cellulaire");
            }
            else {
                vm.connectionInterrupted();
            }
        });
    };
    ZonePage.prototype.openTheWindow = function (mywindow) {
        var vm = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        loader.present();
        vm.http.get('https://' + vm.serverIP + "/api/windows/" + vm.zone.id + "/" + mywindow.identifier + "/open")
            .subscribe(function (data) {
            if (data == 1) {
                loader.dismissAll();
                vm.showAlert('quelqu\'un est en train d\'ouvrir la fenêtre: ' + vm.zone.title + ':' + mywindow.identifier);
            }
            else if (data == 2) {
                loader.dismissAll();
                vm.showAlert('qu\'elle qu\'un entrain de fermer la fenetre : ' + vm.zone.title + ':' + mywindow.identifier);
            }
            else {
                loader.dismissAll();
            }
        }, function (error) {
            loader.dismissAll();
            if (!navigator.onLine) {
                vm.showAlert("Pas d'internet, activer wifi ou réseau cellulaire");
            }
            else {
                vm.connectionInterrupted();
            }
        });
    };
    ZonePage.prototype.closeTheWindow = function (mywindow) {
        var vm = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        loader.present();
        vm.http.get('https://' + vm.serverIP + "/api/windows/" + vm.zone.id + "/" + mywindow.identifier + "/close")
            .subscribe(function (data) {
            if (data == 1) {
                loader.dismissAll();
                vm.showAlert('quelqu\'un est en train d\'ouvrir la fenêtre: ' + vm.zone.title + ':' + mywindow.identifier);
            }
            else if (data == 2) {
                loader.dismissAll();
                vm.showAlert('qu\'elle qu\'un entrain de fermer la fenetre : ' + vm.zone.title + ':' + mywindow.identifier);
            }
            else {
                loader.dismissAll();
            }
        }, function (error) {
            loader.dismissAll();
            if (!navigator.onLine) {
                vm.showAlert("Pas d'internet, activer wifi ou réseau cellulaire");
            }
            else {
                vm.connectionInterrupted();
            }
        });
    };
    ZonePage.prototype.coolerOn = function (cooler) {
        var vm = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        loader.present();
        vm.http.get('https://' + vm.serverIP + "/api/coolers/" + vm.zone.id + "/" + cooler.identifier + "/on")
            .subscribe(function (data) {
            cooler.status = true;
            loader.dismissAll();
        }, function (error) {
            loader.dismissAll();
            if (!navigator.onLine) {
                vm.showAlert("Pas d'internet, activer wifi ou réseau cellulaire");
            }
            else {
                vm.connectionInterrupted();
            }
        });
    };
    ZonePage.prototype.coolerOff = function (cooler) {
        var vm = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        loader.present();
        vm.http.get('https://' + vm.serverIP + "/api/coolers/" + vm.zone.id + "/" + cooler.identifier + "/off")
            .subscribe(function (data) {
            cooler.status = true;
            loader.dismissAll();
        }, function (error) {
            loader.dismissAll();
            if (!navigator.onLine) {
                vm.showAlert("Pas d'internet, activer wifi ou réseau cellulaire");
            }
            else {
                vm.connectionInterrupted();
            }
        });
    };
    ZonePage.prototype.connectionInterrupted = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!!',
            subTitle: "Connection perdue",
            buttons: [{
                    text: 'Login',
                    handler: function (data) {
                        _this.navCtrl.setRoot(LoginPage);
                    }
                }]
        });
        alert.present();
    };
    ZonePage.prototype.showAlert = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'Oops!!',
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    };
    ZonePage = __decorate([
        Component({
            selector: 'page-zone',
            templateUrl: 'zone.html',
            styles: ['zone.scss']
        }),
        __metadata("design:paramtypes", [NavController, NavParams, HttpClient, AlertController, SmartHouseAppBroadcaster, LoadingController])
    ], ZonePage);
    return ZonePage;
}());
export { ZonePage };
//# sourceMappingURL=zone.js.map