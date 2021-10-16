import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FavoriteService } from '@services/favorite.service';
import { SearchVersService } from '@services/search-vers.service';
import { Subject } from 'rxjs';
import { animations } from '@core/animations/animations';

@Component({
    selector: 'app-add-to-favorites',
    templateUrl: './add-to-favorites.component.html',
    animations: animations
})
export class AddToFavoritesComponent implements OnInit {

    @Input()
    set currentVerb(value: string) {
        this.verb = value;
    }

    @Input() staticVerb: boolean;

    @Output() verbRemoved: EventEmitter<string> = new EventEmitter<string>();
    @Output() verbAdded: EventEmitter<string> = new EventEmitter<string>();

    public verb: string;
    public savedVerbs: string[];
    public isVerbExist$ = new Subject<boolean>();

    constructor(
        private favoriteService: FavoriteService,
        private searchVerbService: SearchVersService
    ) { }

    ngOnInit(): void {
        this.savedVerbs = this.favoriteService.savedVerbs;
        this.isVerbExist$ = this.searchVerbService.isEmptyResponse$;
    }

    public onAddToTheFavorite(): void {
        this.favoriteService.saveToTheFavorites(this.verb);
        this.savedVerbs = this.favoriteService.savedVerbs;
        this.verbAdded.emit(this.verb);
    }

    public onRemoveFromFavorites(): void {
        this.favoriteService.removeFromFavorites(this.verb);
        this.savedVerbs = this.favoriteService.savedVerbs;
        this.verbRemoved.emit(this.verb);
    }
}