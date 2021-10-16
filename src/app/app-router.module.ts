import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, Route, RouterModule } from '@angular/router';

const routerConfig: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    preloadingStrategy: PreloadAllModules
};

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () => import('@pages/home/home.module').then((m) => m.HomeModule)
    },
    {
        path: 'favorites',
        loadChildren: () => import('@pages/favorites/favorites.module').then(m => m.FavoritesModule)
    }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(
            appRoutes,
            routerConfig
        )
    ]
})
export class AppRouterModule {}
