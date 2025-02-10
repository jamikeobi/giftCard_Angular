import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/models/blogpost';

@Component({
  selector: 'app-blog-main-section',
  templateUrl: './blog-main-section.component.html',
  styleUrls: ['./blog-main-section.component.css']
})
export class BlogMainSectionComponent implements OnInit{
  blogPosts: BlogPost[] = [
    { title: 'How to Celebrate Employee Appreciation Day', category: 'staff-rewards', image: '../../../assets/images/blog/main/employee_app_main-section.jpg' },
    { title: 'Two Things Employees Need From Their Workplace', category: 'health-workplace', image: '../../../assets/images/blog/main/workspace_main-section.jpg' },
    { title: 'How To Create A Relaxed Work Day', category: 'sme', image: '../../../assets/images/blog/main/relax_main-section.jpg' },
    { title: '3 Great Ways To Show Gratitude To Your Employees', category: 'staff-rewards', image: '../../../assets/images/blog/main/gratitude-main-section.jpg' },
    { title: 'How To Make Your Employees Feel Valued', category: 'customer-incentives', image: '../../../assets/images/blog/main/value_main-seciton.jpg' },
    { title: 'These Two Little Words Have A Huge Impact On Workspace Culture', category: 'health-workplace', image: '../../../assets/images/blog/main/impact_main-section.jpg' },
    { title: 'Healthy Work Lunches To Fuel Up For Summer', category: 'research-report', image: '../../../assets/images/blog/main/lunch_main-section.jpg' },
    { title: 'Top Tips For Creating Email Templates', category: 'bik-bonuses', image: '../../../assets/images/blog/main/email_main-section.jpg' },
    { title: 'Rewarding Employees - Three Bonus Programs For Your Small Business', category: 'customer-incentives', image: '../../../assets/images/blog/main/reward_main-section.jpg' },

    { title: 'How to Celebrate Employee Appreciation Day', category: 'health-workplace', image: '../../../assets/images/blog/main/employee_app_main-section.jpg' },
    { title: 'Two Things Employees Need From Their Workplace', category: 'sme', image: '../../../assets/images/blog/main/workspace_main-section.jpg' },
    { title: 'How To Create A Relaxed Work Day', category: 'staff-rewards', image: '../../../assets/images/blog/main/relax_main-section.jpg' },
    { title: '3 Great Ways To Show Gratitude To Your Employees', category: 'customer-incentives', image: '../../../assets/images/blog/main/gratitude-main-section.jpg' },
    { title: 'How To Make Your Employees Feel Valued', category: 'health-workplace', image: '../../../assets/images/blog/main/value_main-seciton.jpg' },
    { title: 'These Two Little Words Have A Huge Impact On Workspace Culture', category: 'research-report', image: '../../../assets/images/blog/main/impact_main-section.jpg' },
    { title: 'Healthy Work Lunches To Fuel Up For Summer', category: 'bik-bonuses', image: '../../../assets/images/blog/main/lunch_main-section.jpg' },
    { title: 'Top Tips For Creating Email Templates', category: 'customer-incentives', image: '../../../assets/images/blog/main/email_main-section.jpg' },
    { title: 'Rewarding Employees - Three Bonus Programs For Your Small Business', category: 'health-workplace', image: '../../../assets/images/blog/main/reward_main-section.jpg' },

    { title: 'How to Celebrate Employee Appreciation Day', category: 'sme', image: '../../../assets/images/blog/main/employee_app_main-section.jpg' },
    { title: 'Two Things Employees Need From Their Workplace', category: 'staff-rewards', image: '../../../assets/images/blog/main/workspace_main-section.jpg' },
    { title: 'How To Create A Relaxed Work Day', category: 'customer-incentives', image: '../../../assets/images/blog/main/relax_main-section.jpg' },
    { title: '3 Great Ways To Show Gratitude To Your Employees', category: 'health-workplace', image: '../../../assets/images/blog/main/gratitude-main-section.jpg' },
    { title: 'How To Make Your Employees Feel Valued', category: 'research-report', image: '../../../assets/images/blog/main/value_main-seciton.jpg' },
    { title: 'These Two Little Words Have A Huge Impact On Workspace Culture', category: 'bik-bonuses', image: '../../../assets/images/blog/main/impact_main-section.jpg' },
    { title: 'Healthy Work Lunches To Fuel Up For Summer', category: 'sme', image: '../../../assets/images/blog/main/lunch_main-section.jpg' },
    { title: 'Top Tips For Creating Email Templates', category: 'customer-incentives', image: '../../../assets/images/blog/main/email_main-section.jpg' },
    { title: 'Rewarding Employees - Three Bonus Programs For Your Small Business', category: 'health-workplace', image: '../../../assets/images/blog/main/reward_main-section.jpg' },

    { title: 'How to Celebrate Employee Appreciation Day', category: 'staff-rewards', image: '../../../assets/images/blog/main/employee_app_main-section.jpg' },
    { title: 'Two Things Employees Need From Their Workplace', category: 'health-workplace', image: '../../../assets/images/blog/main/workspace_main-section.jpg' },
    { title: 'How To Create A Relaxed Work Day', category: 'sme', image: '../../../assets/images/blog/main/relax_main-section.jpg' },
    { title: '3 Great Ways To Show Gratitude To Your Employees', category: 'staff-rewards', image: '../../../assets/images/blog/main/gratitude-main-section.jpg' },
    { title: 'How To Make Your Employees Feel Valued', category: 'customer-incentives', image: '../../../assets/images/blog/main/value_main-seciton.jpg' },
    { title: 'These Two Little Words Have A Huge Impact On Workspace Culture', category: 'health-workplace', image: '../../../assets/images/blog/main/impact_main-section.jpg' },
    { title: 'Healthy Work Lunches To Fuel Up For Summer', category: 'research-report', image: '../../../assets/images/blog/main/lunch_main-section.jpg' },
    { title: 'Top Tips For Creating Email Templates', category: 'bik-bonuses', image: '../../../assets/images/blog/main/email_main-section.jpg' },
    { title: 'Rewarding Employees - Three Bonus Programs For Your Small Business', category: 'customer-incentives', image: '../../../assets/images/blog/main/reward_main-section.jpg' },

    { title: 'How to Celebrate Employee Appreciation Day', category: 'staff-rewards', image: '../../../assets/images/blog/main/employee_app_main-section.jpg' },
    { title: 'Two Things Employees Need From Their Workplace', category: 'health-workplace', image: '../../../assets/images/blog/main/workspace_main-section.jpg' },
    { title: 'How To Create A Relaxed Work Day', category: 'sme', image: '../../../assets/images/blog/main/relax_main-section.jpg' },
    { title: '3 Great Ways To Show Gratitude To Your Employees', category: 'staff-rewards', image: '../../../assets/images/blog/main/gratitude-main-section.jpg' },
    { title: 'How To Make Your Employees Feel Valued', category: 'customer-incentives', image: '../../../assets/images/blog/main/value_main-seciton.jpg' },
    { title: 'These Two Little Words Have A Huge Impact On Workspace Culture', category: 'health-workplace', image: '../../../assets/images/blog/main/impact_main-section.jpg' },
    { title: 'Healthy Work Lunches To Fuel Up For Summer', category: 'research-report', image: '../../../assets/images/blog/main/lunch_main-section.jpg' },
    { title: 'Top Tips For Creating Email Templates', category: 'bik-bonuses', image: '../../../assets/images/blog/main/email_main-section.jpg' },
    { title: 'Rewarding Employees - Three Bonus Programs For Your Small Business', category: 'customer-incentives', image: '../../../assets/images/blog/main/reward_main-section.jpg' },

    { title: 'How to Celebrate Employee Appreciation Day', category: 'staff-rewards', image: '../../../assets/images/blog/main/employee_app_main-section.jpg' },
    { title: 'Two Things Employees Need From Their Workplace', category: 'health-workplace', image: '../../../assets/images/blog/main/workspace_main-section.jpg' },
    { title: 'How To Create A Relaxed Work Day', category: 'sme', image: '../../../assets/images/blog/main/relax_main-section.jpg' },
    { title: '3 Great Ways To Show Gratitude To Your Employees', category: 'staff-rewards', image: '../../../assets/images/blog/main/gratitude-main-section.jpg' },
    { title: 'How To Make Your Employees Feel Valued', category: 'customer-incentives', image: '../../../assets/images/blog/main/value_main-seciton.jpg' },
    { title: 'These Two Little Words Have A Huge Impact On Workspace Culture', category: 'health-workplace', image: '../../../assets/images/blog/main/impact_main-section.jpg' },
    { title: 'Healthy Work Lunches To Fuel Up For Summer', category: 'research-report', image: '../../../assets/images/blog/main/lunch_main-section.jpg' },
    { title: 'Top Tips For Creating Email Templates', category: 'bik-bonuses', image: '../../../assets/images/blog/main/email_main-section.jpg' },
    { title: 'Rewarding Employees - Three Bonus Programs For Your Small Business', category: 'customer-incentives', image: '../../../assets/images/blog/main/reward_main-section.jpg' },

    { title: 'How to Celebrate Employee Appreciation Day', category: 'staff-rewards', image: '../../../assets/images/blog/main/employee_app_main-section.jpg' },
    { title: 'Two Things Employees Need From Their Workplace', category: 'health-workplace', image: '../../../assets/images/blog/main/workspace_main-section.jpg' },
    { title: 'How To Create A Relaxed Work Day', category: 'sme', image: '../../../assets/images/blog/main/relax_main-section.jpg' },
    { title: '3 Great Ways To Show Gratitude To Your Employees', category: 'staff-rewards', image: '../../../assets/images/blog/main/gratitude-main-section.jpg' },
    { title: 'How To Make Your Employees Feel Valued', category: 'customer-incentives', image: '../../../assets/images/blog/main/value_main-seciton.jpg' },
    { title: 'These Two Little Words Have A Huge Impact On Workspace Culture', category: 'health-workplace', image: '../../../assets/images/blog/main/impact_main-section.jpg' },
    { title: 'Healthy Work Lunches To Fuel Up For Summer', category: 'research-report', image: '../../../assets/images/blog/main/lunch_main-section.jpg' },
    { title: 'Top Tips For Creating Email Templates', category: 'bik-bonuses', image: '../../../assets/images/blog/main/email_main-section.jpg' },
    { title: 'Rewarding Employees - Three Bonus Programs For Your Small Business', category: 'customer-incentives', image: '../../../assets/images/blog/main/reward_main-section.jpg' },

    { title: 'How to Celebrate Employee Appreciation Day', category: 'staff-rewards', image: '../../../assets/images/blog/main/employee_app_main-section.jpg' },
    { title: 'Two Things Employees Need From Their Workplace', category: 'health-workplace', image: '../../../assets/images/blog/main/workspace_main-section.jpg' },
    { title: 'How To Create A Relaxed Work Day', category: 'sme', image: '../../../assets/images/blog/main/relax_main-section.jpg' },
    { title: '3 Great Ways To Show Gratitude To Your Employees', category: 'staff-rewards', image: '../../../assets/images/blog/main/gratitude-main-section.jpg' },
    { title: 'How To Make Your Employees Feel Valued', category: 'customer-incentives', image: '../../../assets/images/blog/main/value_main-seciton.jpg' },
    { title: 'These Two Little Words Have A Huge Impact On Workspace Culture', category: 'health-workplace', image: '../../../assets/images/blog/main/impact_main-section.jpg' },
    { title: 'Healthy Work Lunches To Fuel Up For Summer', category: 'research-report', image: '../../../assets/images/blog/main/lunch_main-section.jpg' },
    { title: 'Top Tips For Creating Email Templates', category: 'bik-bonuses', image: '../../../assets/images/blog/main/email_main-section.jpg' },
    { title: 'Rewarding Employees - Three Bonus Programs For Your Small Business', category: 'customer-incentives', image: '../../../assets/images/blog/main/reward_main-section.jpg' }
  ];

  shouldShow: boolean = true;
  filteredPosts: BlogPost[] = [];

  constructor() { }

  ngOnInit(): void {
    this.filteredPosts = [...this.blogPosts]; // Initially, show all posts
  }

  filterPosts(category: string) {
    if (category === 'all') {
      this.shouldShow = true;
      this.filteredPosts = [...this.blogPosts]; // Show all posts
    } else {
      this.shouldShow = false;
      this.filteredPosts = this.blogPosts.filter(post => post.category === category);
    }
  }
}
