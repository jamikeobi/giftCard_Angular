import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { CtaComponent } from './components/cta/cta.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { HomeComponent } from './pages/home/home.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { ButtonComponent } from './shared/button/button.component';
import { CardComponent } from './shared/card/card.component';
import { AlertComponent } from './shared/alert/alert.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HowToBuyComponent } from './components/how-to-buy/how-to-buy.component';
import { ExtraFeaturesComponent } from './components/extra-features/extra-features.component';
import { SupportComponent } from './components/support/support.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { RewardsComponent } from './components/rewards/rewards.component';
import { PersonalisationComponent } from './components/personalisation/personalisation.component';
import { DigitalOptionsComponent } from './components/digital-options/digital-options.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    CtaComponent,
    BenefitsComponent,
    FooterComponent,
    ModalComponent,
    HomeComponent,
    TermsComponent,
    PrivacyComponent,
    ContactComponent,
    FaqsComponent,
    ButtonComponent,
    CardComponent,
    AlertComponent,
    NavbarComponent,
    HowToBuyComponent,
    ExtraFeaturesComponent,
    SupportComponent,
    LandingPageComponent,
    RewardsComponent,
    PersonalisationComponent,
    DigitalOptionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule  // Add CommonModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
