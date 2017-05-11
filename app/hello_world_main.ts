import {bootstrap} from "angular2/platform/browser";
import {MyHelloWorldClass} from "./hello_world_app.component";
import {MyHelloWorld1Class} from "./hello_world_app1.component";
import {MyTemplate} from "./metadata_app.component";
import {AppComponent} from "./data_binding_app.component";    //importing component function
import {MyTemplate1} from "./datadisplay_app.component";
import {AppComponent2} from "./app.component2";
import {LoopBackEventComponent} from "./loop_back.component";
import {EventFilteringComponent} from "./event_filtering.component";
import {OnblurEventComponent} from "./user_onblur_event.component";
import {AppComponent3} from "./forms_app.component";
import {AppComponent4} from "./app_service.component";    //importing component function
import {AppComponent5} from "./attribute_app.component";    //importing component function

bootstrap(AppComponent5);
bootstrap(AppComponent4);
bootstrap(AppComponent3);
bootstrap(OnblurEventComponent);
bootstrap(EventFilteringComponent);
bootstrap(LoopBackEventComponent);
bootstrap(AppComponent2);
bootstrap(MyTemplate1);
bootstrap(AppComponent);
bootstrap(MyHelloWorldClass);
bootstrap(MyHelloWorld1Class);
bootstrap(MyTemplate);