import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { AdsPage } from '../pages/ads/ads';
import { ChatsPage } from '../pages/chats/chats';
import { DiscoverPage } from '../pages/discover/discover';
import { FilterPage } from '../pages/filter/filter';
import { ProductPage } from '../pages/product/product';
import { ChatPage } from '../pages/chat/chat';
import { ChatPopover } from '../pages/chat/chat-popover';
import { ChatBgPage } from '../pages/chat-bg/chat-bg';
import { ChatBuyerPopover } from '../pages/chat-bg/chat-buyer-popover';
import { MyProductPage } from '../pages/my-product/my-product';
import { PublishAdPage } from '../pages/publish-ad/publish-ad';
import { CreateAdModalPage } from '../pages/create-ad-modal/create-ad-modal';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    ProfilePage,
    AdsPage,
    DiscoverPage,
    ChatsPage,
    TabsPage,
    FilterPage,
    ProductPage,
    ChatPage,
    ChatPopover,
    ChatBgPage,
    ChatBuyerPopover,
    MyProductPage,
    PublishAdPage,
    CreateAdModalPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    ProfilePage,
    AdsPage,
    DiscoverPage,
    ChatsPage,
    TabsPage,
    FilterPage,
    ProductPage,
    ChatPage,
    ChatPopover,
    ChatBgPage,
    ChatBuyerPopover,
    MyProductPage,
    PublishAdPage,
    CreateAdModalPage
  ]
})
export class AppModule {}
