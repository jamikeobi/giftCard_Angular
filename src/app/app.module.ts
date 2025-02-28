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
import { BlogComponent } from './pages/blog/blog.component';
import { BlogTitleComponent } from './components/blog-title/blog-title.component';
import { BlogSidebarComponent } from './components/blog-sidebar/blog-sidebar.component';
import { BlogMainSectionComponent } from './components/blog-main-section/blog-main-section.component';
import { BikBonusesComponent } from './pages/blog/bik/bik-bonuses/bik-bonuses.component';
import { CustomerIncentivesComponent } from './pages/blog/customer-incentives/customer-incentives/customer-incentives.component';
import { HealthComponent } from './pages/blog/health/health/health.component';
import { ResearchReportComponent } from './pages/blog/research/research-report/research-report.component';
import { SmeComponent } from './pages/blog/sme/sme/sme.component';
import { StaffRewardsComponent } from './pages/blog/staff-rewards/staff-rewards/staff-rewards.component';
import { CreateAccountComponent } from './pages/account/create-account/create-account.component';
import { CustomerLoginComponent } from './pages/account/customer-login/customer-login.component';
import { OgaLoginComponent } from './pages/account/oga-login/oga-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { PhysicalGiftCardComponent } from './pages/physical-gift-card/physical-gift-card.component';
import { FavSliderComponent } from './components/fav-slider/fav-slider.component';
import { GiftcardCollectionComponent } from './components/giftcard-collection/giftcard-collection.component';
import { HaveBiggerBudgetComponent } from './components/have-bigger-budget/have-bigger-budget.component';
import { CorporateGiftCardComponent } from './components/corporate-gift-card/corporate-gift-card.component';
import { EmployeeRewardsComponent } from './pages/corporateRewards/employee-rewards/employee-rewards.component';
import { CustomerRewardsComponent } from './pages/corporateRewards/customer-rewards/customer-rewards.component';
import { RewardComponent } from './components/coporate/reward/reward.component';
import { FormComponent } from './components/coporate/form/form.component';
import { CustomerFormsComponent } from './components/customer/customer-forms/customer-forms.component';
import { WhyOne4AllComponent } from './pages/why-one4-all/why-one4-all.component';
import { FAQComponent } from './pages/faq/faq.component';
import { SidebarComponent } from './components/faq/sidebar/sidebar.component';
import { TaxFreeComponent } from './pages/physical-gift-card/tax-free/tax-free.component';
import { HowCanWeHelpComponent } from './pages/how-can-we-help/how-can-we-help.component';
import { ChipPinComponent } from './pages/physical-gift-card/chip-pin/chip-pin.component';
import { HappyComponent } from './pages/physical-gift-card/happy/happy.component';
import { Collection2Component } from './components/giftcard-collection/collection2/collection2.component';
import { PerfectCoupleGiftCardComponent } from './pages/physical-gift-card/perfect-couple-gift-card/perfect-couple-gift-card.component';
import { SafeguardingMessageComponent } from './pages/safeguarding-message/safeguarding-message.component';
import { CartComponent } from './pages/cart/cart.component';


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
    BlogComponent,
    BlogTitleComponent,
    BlogSidebarComponent,
    BlogMainSectionComponent,
    BikBonusesComponent,
    CustomerIncentivesComponent,
    HealthComponent,
    ResearchReportComponent,
    SmeComponent,
    StaffRewardsComponent,
    CreateAccountComponent,
    CustomerLoginComponent,
    OgaLoginComponent,
    PhysicalGiftCardComponent,
    FavSliderComponent,
    GiftcardCollectionComponent,
    HaveBiggerBudgetComponent,
    CorporateGiftCardComponent,
    EmployeeRewardsComponent,
    CustomerRewardsComponent,
    RewardComponent,
    FormComponent,
    CustomerFormsComponent,
    WhyOne4AllComponent,
    FAQComponent,
    SidebarComponent,
    TaxFreeComponent,
    HowCanWeHelpComponent,
    ChipPinComponent,
    HappyComponent,
    Collection2Component,
    PerfectCoupleGiftCardComponent,
    SafeguardingMessageComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
