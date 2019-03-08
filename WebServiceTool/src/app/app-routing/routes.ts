import {Routes} from '@angular/router';
import { LOFApiComponent } from '../lofapi/lofapi.component';
import { SSPDataComponent } from '../sspdata/sspdata.component';
import { NCOGApiComponent } from '../ncogapi/ncogapi.component';
import { ClearCacheComponent } from '../clear-cache/clear-cache.component';
import { WBNDataComponent } from '../wbndata/wbndata.component';
import { VZOTDataComponent } from '../vzotdata/vzotdata.component';
import { SSPApiComponent } from '../sspapi/sspapi.component';

export const my_routes:Routes=[
    {path:'/lofapi', component:LOFApiComponent},
    {path:'sspapi', component:SSPApiComponent},
    {path:'/ncogapi', component:NCOGApiComponent},
    {path:'wbndata', component:WBNDataComponent},
    {path:'vzotdata', component:VZOTDataComponent},
    {path:'/sspdata', component:SSPDataComponent},
    {path:'/clearcache', component:ClearCacheComponent},
    {path:'',redirectTo:'/lofapi',pathMatch:'full'}
];