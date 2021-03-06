var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable, Pipe } from '@angular/core';
var TitlePipe = (function () {
    function TitlePipe() {
    }
    TitlePipe.prototype.transform = function (value, args) {
        return value.filter(function (zone) {
            return zone.title.toLowerCase().indexOf(args.toLowerCase()) != -1;
        });
    };
    TitlePipe = __decorate([
        Pipe({
            name: 'titlePipe'
        }),
        Injectable()
    ], TitlePipe);
    return TitlePipe;
}());
export { TitlePipe };
//# sourceMappingURL=title-pipe.js.map