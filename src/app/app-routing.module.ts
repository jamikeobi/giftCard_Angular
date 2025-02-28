import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogMainSectionComponent } from './components/blog-main-section/blog-main-section.component';
import { ResearchReportComponent } from './pages/blog/research/research-report/research-report.component';
import { StaffRewardsComponent } from './pages/blog/staff-rewards/staff-rewards/staff-rewards.component';
import { CustomerIncentivesComponent } from './pages/blog/customer-incentives/customer-incentives/customer-incentives.component';
import { HealthComponent } from './pages/blog/health/health/health.component';
import { SmeComponent } from './pages/blog/sme/sme/sme.component';
import { BikBonusesComponent } from './pages/blog/bik/bik-bonuses/bik-bonuses.component';
import { CreateAccountComponent } from './pages/account/create-account/create-account.component';
import { CustomerLoginComponent } from './pages/account/customer-login/customer-login.component';
import { OgaLoginComponent } from './pages/account/oga-login/oga-login.component';
import { PhysicalGiftCardComponent } from './pages/physical-gift-card/physical-gift-card.component';
import { EmployeeRewardsComponent } from './pages/corporateRewards/employee-rewards/employee-rewards.component';
import { CustomerRewardsComponent } from './pages/corporateRewards/customer-rewards/customer-rewards.component';
import { WhyOne4AllComponent } from './pages/why-one4-all/why-one4-all.component';
import { FAQComponent } from './pages/faq/faq.component';
import { HowCanWeHelpComponent } from './pages/how-can-we-help/how-can-we-help.component';
import { TaxFreeComponent } from './pages/physical-gift-card/tax-free/tax-free.component';
import { ChipPinComponent } from './pages/physical-gift-card/chip-pin/chip-pin.component';
import { HappyComponent } from './pages/physical-gift-card/happy/happy.component';
import { PerfectCoupleGiftCardComponent } from './pages/physical-gift-card/perfect-couple-gift-card/perfect-couple-gift-card.component';
import { SafeguardingMessageComponent } from './pages/safeguarding-message/safeguarding-message.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent }, // Default route to Landing Page
  { path: 'home', component: HomeComponent },  // Default route
  { path: 'contact', component: ContactComponent },
  { path: 'how-can-we-help', component: HowCanWeHelpComponent },
  { path: 'faq', component: FaqsComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'navbar', component: NavbarComponent },
  {
    path: 'blog', component: BlogComponent,
  },
  { path: 'blog/research-report', component: ResearchReportComponent },
  { path: 'blog/staff-rewards', component: StaffRewardsComponent },
  { path: 'blog/customer-incentives', component: CustomerIncentivesComponent },
  { path: 'blog/health-workplace', component: HealthComponent },
  { path: 'blog/sme', component: SmeComponent },
  { path: 'blog/bik-bonuses', component: BikBonusesComponent },

  { path: 'customer/account/create', component: CreateAccountComponent },
  { path: 'customer/account/login', component: CustomerLoginComponent },
  { path: 'store/login2', component: OgaLoginComponent },

  { path: 'digital-rewards-for-business', component: LandingPageComponent },
  { path: 'physical-giftcard', component: PhysicalGiftCardComponent },
  { path: 'black-card', component: PhysicalGiftCardComponent },
  { path: 'taxfree', component: TaxFreeComponent },
  { path: 'chip-pin', component: ChipPinComponent },
  {path: 'happy-birthday', component: HappyComponent},
  {path: 'perf-couple-gift-card', component: PerfectCoupleGiftCardComponent},
  {path: 'safeguarding-message', component: SafeguardingMessageComponent},

  // Corporate Reward Links
  {path: 'corporate-rewards/employee-rewards', component: EmployeeRewardsComponent},
  {path: 'corporate-rewards/customer-rewards', component: CustomerRewardsComponent},
  {path: 'why-one4All', component: WhyOne4AllComponent},
  {path: 'category/218-corporate-orders', component: FAQComponent},
  {path: 'cart', component: CartComponent},
  
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirect unknown routes to Landing Page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
